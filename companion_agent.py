# -*- coding: utf-8 -*-
"""
================================================================================
 Research Data Hub v2 - Local Companion Agent
================================================================================
 A local Python HTTP server that bridges the web frontend (GitHub Pages) with
 the local R / Python execution environment on the user's machine.

 It auto-detects an R installation on Windows, starts a CORS-enabled HTTP
 server on port 7878, and exposes endpoints to run R / Python code, list
 installed R packages, and install new R packages.

--------------------------------------------------------------------------------
 HOW TO RUN
--------------------------------------------------------------------------------
    python companion_agent.py

    Then keep this console window open while using the web app. The web page
    at https://haiyan-codes.github.io/research-data-hub-v2/ will automatically
    connect to http://localhost:7878 to execute code locally.

    Requirements: Python 3.8+ (only the Python standard library is used).
    Optional but recommended: R installed (https://cran.r-project.org/).

--------------------------------------------------------------------------------
 HOW TO PACKAGE AS A STANDALONE .exe
--------------------------------------------------------------------------------
    pip install pyinstaller
    pyinstaller --onefile companion_agent.py

    The resulting executable (dist/companion_agent.exe) can be distributed so
    end users do not need a Python interpreter installed. They still need R
    installed separately for R-based features to work.

--------------------------------------------------------------------------------
 ENDPOINTS
--------------------------------------------------------------------------------
    GET  /health    -> {status, r_detected, r_path, python_version}
    POST /execute   -> {script, language} -> {success, output, plots}
    GET  /packages  -> {r_packages: [...]}
    POST /install   -> {packages, language} -> {success, output}

================================================================================
"""

import os
import sys
import json
import base64
import glob
import platform
import shutil
import subprocess
import tempfile
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

# Windows-only module for registry access; guard for non-Windows.
try:
    import winreg
except ImportError:
    winreg = None

# ==============================================================================
# Configuration
# ==============================================================================
HOST = "127.0.0.1"
PORT = 7878
MAX_OUTPUT_CHARS = 200000  # truncate very large outputs to keep responses sane

# ==============================================================================
# Console logging helpers
# ==============================================================================
def log(msg):
    """Print a timestamped log line to the console."""
    from datetime import datetime
    ts = datetime.now().strftime("%H:%M:%S")
    print(f"[{ts}] {msg}")

def print_banner():
    """Print an ASCII art banner at agent startup."""
    banner = r"""
    ____                            _                            _
   / ___|  ___ _   _ _ __ _ __ ___ _| |_ ___ _   _   _   _ _ __  (_)___
  | |    / __| | | | '__| '_ ` _ \ | __/ _ \ | | | | | | | '_ \ | / __|
  | |___ \__ \ |_| | |  | | | | | | ||  __/ |_| |_| |_| | | | || \__ \
   \____||___/\__,_|_|  |_| |_| |_|\__\___|\__, |\__,_|_| |_|_| |___/
                                           |___/
    """
    print(banner)
    print("    Local Companion Agent for Research Data Hub v2")
    print("    Web UI: https://haiyan-codes.github.io/research-data-hub-v2/")
    print("    " + "=" * 60)
    print(f"    Python: {platform.python_version()}  ({platform.platform()})")
    print("    " + "=" * 60)
    print("")

# ==============================================================================
# R detection
# ==============================================================================
def detect_r():
    """
    Auto-detect an R installation on Windows.

    Detection order:
      1. Common install paths under C:\\Program Files\\R\\*
      2. PATH environment variable (via shutil.which)
      3. Windows registry (HKEY_LOCAL_MACHINE\\SOFTWARE\\R-core\\R)

    Returns the absolute path to Rscript.exe if found, else None.
    """
    # 1) Common install paths.
    candidate_globs = [
        r"C:\Program Files\R\*\bin\Rscript.exe",
        r"C:\Program Files\R\*\bin\x64\Rscript.exe",
        r"C:\Program Files (x86)\R\*\bin\Rscript.exe",
        r"C:\Program Files (x86)\R\*\bin\x64\Rscript.exe",
        r"D:\R\*\bin\Rscript.exe",
        r"D:\Program Files\R\*\bin\Rscript.exe",
    ]
    for pattern in candidate_globs:
        matches = glob.glob(pattern)
        if matches:
            # Prefer the x64 build when multiple are present.
            x64 = [m for m in matches if "x64" in m.lower()]
            chosen = (x64 + matches)[0]
            if os.path.isfile(chosen):
                return os.path.normpath(chosen)

    # 2) PATH environment variable.
    which = shutil.which("Rscript")
    if which and os.path.isfile(which):
        return os.path.normpath(which)

    # 3) Windows registry.
    if winreg is not None:
        for hive in (winreg.HKEY_LOCAL_MACHINE, winreg.HKEY_CURRENT_USER):
            try:
                with winreg.OpenKey(
                    hive, r"SOFTWARE\R-core\R", 0, winreg.KEY_READ
                ) as key:
                    install_path, _ = winreg.QueryValueEx(key, "InstallPath")
                    if install_path:
                        candidate = os.path.join(install_path, "bin", "Rscript.exe")
                        if os.path.isfile(candidate):
                            return os.path.normpath(candidate)
                        candidate = os.path.join(
                            install_path, "bin", "x64", "Rscript.exe"
                        )
                        if os.path.isfile(candidate):
                            return os.path.normpath(candidate)
            except (FileNotFoundError, OSError):
                continue

    return None

# ==============================================================================
# R execution helpers
# ==============================================================================
def run_r_script(rscript_path, script_text, capture_plots=True, timeout=300):
    """
    Execute an R script via Rscript.exe.

    When capture_plots is True, the user's script is wrapped so that any base
    graphics are written to a temporary PNG file, which is then read back and
    base64-encoded for transport to the browser.

    Returns (success: bool, output: str, plots: [str]) where each plot string
    is a base64-encoded PNG data URL.
    """
    plots = []
    workdir = tempfile.mkdtemp(prefix="companion_r_")
    output_path = os.path.join(workdir, "plot.png")

    if capture_plots:
        # Wrap the user script: open a PNG device, run the user code, close device.
        # We also redirect jpeg/bmp/pdf just in case the user calls them, but
        # the primary capture target is png().
        wrapped = f"""
.options(warn=1)
.png_file <- "{output_path.replace(os.sep, "/")}"
tryCatch({{
  png(.png_file, width=900, height=650, res=120, type="cairo")
}}, error=function(e){{}})
tryCatch({{
{script_text}
}}, error=function(e){{
  cat("\\n[ERROR] ", conditionMessage(e), "\\n", sep="")
}}, finally={{
  tryCatch(dev.off(), error=function(e){{}})
}})
"""
        script_to_run = wrapped
    else:
        script_to_run = script_text

    script_file = os.path.join(workdir, "script.R")
    with open(script_file, "w", encoding="utf-8") as f:
        f.write(script_to_run)

    try:
        proc = subprocess.run(
            [rscript_path, script_file],
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            cwd=workdir,
            timeout=timeout,
        )
        output = proc.stdout.decode("utf-8", errors="replace")
        success = proc.returncode == 0
    except subprocess.TimeoutExpired:
        return (False, "[TIMEOUT] R execution exceeded the time limit.", [])
    except Exception as e:
        return (False, f"[ERROR] Failed to launch Rscript: {e}", [])

    # Collect captured plot, if any.
    if capture_plots and os.path.isfile(output_path):
        try:
            with open(output_path, "rb") as pf:
                encoded = base64.b64encode(pf.read()).decode("ascii")
            plots.append("data:image/png;base64," + encoded)
        except Exception as e:
            output += f"\n[WARN] Could not read plot PNG: {e}"

    # Truncate overly large output.
    if len(output) > MAX_OUTPUT_CHARS:
        output = output[:MAX_OUTPUT_CHARS] + "\n...[truncated]"

    # Best-effort cleanup of temp dir.
    try:
        shutil.rmtree(workdir, ignore_errors=True)
    except Exception:
        pass

    return (success, output, plots)


def list_r_packages(rscript_path):
    """Return a list of installed R package names."""
    script = (
        "pkgs <- rownames(installed.packages()); "
        "cat(pkgs, sep='\\n')"
    )
    success, output, _ = run_r_script(rscript_path, script, capture_plots=False)
    if not success:
        return []
    packages = [line.strip() for line in output.splitlines() if line.strip()]
    return sorted(packages)


def install_r_packages(rscript_path, packages, timeout=600):
    """Install one or more R packages from CRAN."""
    pkg_str = ", ".join('"' + p.replace('"', "") + '"' for p in packages)
    script = (
        f"options(repos=c(CRAN='https://cloud.r-project.org/')); "
        f"install.packages(c({pkg_str})); "
        f"cat('\\n[DONE] Installation attempt complete.\\n')"
    )
    success, output, _ = run_r_script(
        rscript_path, script, capture_plots=False, timeout=timeout
    )
    return success, output

# ==============================================================================
# Python execution helper
# ==============================================================================
def run_python_script(script_text, timeout=300):
    """
    Execute a Python snippet in a subprocess using the current interpreter.

    The script is written to a temp file and run with sys.executable so that
    user code cannot pollute the agent's own process.
    """
    workdir = tempfile.mkdtemp(prefix="companion_py_")
    script_file = os.path.join(workdir, "user_script.py")
    with open(script_file, "w", encoding="utf-8") as f:
        f.write(script_text)

    try:
        proc = subprocess.run(
            [sys.executable, script_file],
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            cwd=workdir,
            timeout=timeout,
        )
        output = proc.stdout.decode("utf-8", errors="replace")
        success = proc.returncode == 0
    except subprocess.TimeoutExpired:
        return (False, "[TIMEOUT] Python execution exceeded the time limit.")
    except Exception as e:
        return (False, f"[ERROR] Failed to launch Python: {e}")

    if len(output) > MAX_OUTPUT_CHARS:
        output = output[:MAX_OUTPUT_CHARS] + "\n...[truncated]"

    try:
        shutil.rmtree(workdir, ignore_errors=True)
    except Exception:
        pass

    return (success, output)

# ==============================================================================
# HTTP request handler
# ==============================================================================
class CompanionHandler(BaseHTTPRequestHandler):
    """
    HTTP handler exposing the companion agent endpoints with CORS headers
    that allow access from any origin (including GitHub Pages).
    """

    # Quiet down the default logging; we print our own structured log lines.
    def log_message(self, format, *args):
        pass

    # ----- CORS helpers ------------------------------------------------------
    def _set_cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    def _send_json(self, payload, code=200):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self._set_cors()
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        """Reply to CORS preflight requests."""
        self.send_response(204)
        self._set_cors()
        self.end_headers()

    # ----- Routing -----------------------------------------------------------
    def do_GET(self):
        path = self.path.split("?")[0]
        log(f"GET {path}")
        if path == "/health":
            self.handle_health()
        elif path == "/packages":
            self.handle_packages()
        else:
            self._send_json({"error": "Unknown endpoint", "path": path}, 404)

    def do_POST(self):
        path = self.path.split("?")[0]
        log(f"POST {path}")
        length = int(self.headers.get("Content-Length", 0) or 0)
        raw = self.rfile.read(length) if length > 0 else b""
        try:
            payload = json.loads(raw.decode("utf-8")) if raw else {}
        except Exception as e:
            self._send_json({"success": False, "error": f"Invalid JSON: {e}"}, 400)
            return

        if path == "/execute":
            self.handle_execute(payload)
        elif path == "/install":
            self.handle_install(payload)
        else:
            self._send_json({"error": "Unknown endpoint", "path": path}, 404)

    # ----- Endpoint: /health -------------------------------------------------
    def handle_health(self):
        r_path = self.server.rscript_path
        self._send_json({
            "status": "ok",
            "r_detected": r_path is not None,
            "r_path": r_path or "",
            "python_version": platform.python_version(),
        })
        log(f"  -> health: r_detected={r_path is not None}")

    # ----- Endpoint: /packages ----------------------------------------------
    def handle_packages(self):
        r_path = self.server.rscript_path
        if not r_path:
            self._send_json({
                "success": False,
                "error": "R is not detected on this machine.",
                "r_packages": [],
            })
            return
        packages = list_r_packages(r_path)
        self._send_json({
            "success": True,
            "r_packages": packages,
            "count": len(packages),
        })
        log(f"  -> packages: {len(packages)} found")

    # ----- Endpoint: /execute ------------------------------------------------
    def handle_execute(self, payload):
        script = (payload.get("script") or "").strip()
        language = (payload.get("language") or "R").strip().title()
        if not script:
            self._send_json({"success": False, "error": "No script provided."}, 400)
            return

        log(f"  -> execute [{language}] {len(script)} chars")

        if language == "R":
            r_path = self.server.rscript_path
            if not r_path:
                self._send_json({
                    "success": False,
                    "error": "R is not detected on this machine. Please install R from https://cran.r-project.org/",
                    "output": "",
                    "plots": [],
                })
                return
            success, output, plots = run_r_script(r_path, script, capture_plots=True)
            self._send_json({
                "success": success,
                "output": output,
                "plots": plots,
            })
            log(f"  -> R done success={success} plots={len(plots)} out={len(output)} chars")

        elif language == "Python":
            success, output = run_python_script(script)
            self._send_json({
                "success": success,
                "output": output,
                "plots": [],
            })
            log(f"  -> Python done success={success} out={len(output)} chars")

        else:
            self._send_json({
                "success": False,
                "error": f"Unsupported language: {language}. Use 'R' or 'Python'.",
            }, 400)

    # ----- Endpoint: /install ------------------------------------------------
    def handle_install(self, payload):
        packages = payload.get("packages") or []
        language = (payload.get("language") or "R").strip().title()

        if not isinstance(packages, list) or not packages:
            self._send_json({
                "success": False,
                "error": "Field 'packages' must be a non-empty list.",
            }, 400)
            return

        log(f"  -> install [{language}] packages={packages}")

        if language == "R":
            r_path = self.server.rscript_path
            if not r_path:
                self._send_json({
                    "success": False,
                    "error": "R is not detected on this machine.",
                })
                return
            success, output = install_r_packages(r_path, packages)
            self._send_json({"success": success, "output": output})
            log(f"  -> R install done success={success}")

        elif language == "Python":
            args = [sys.executable, "-m", "pip", "install"] + packages
            try:
                proc = subprocess.run(
                    args, stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
                    timeout=600,
                )
                output = proc.stdout.decode("utf-8", errors="replace")
                success = proc.returncode == 0
            except Exception as e:
                output = f"[ERROR] {e}"
                success = False
            self._send_json({"success": success, "output": output})
            log(f"  -> Python install done success={success}")

        else:
            self._send_json({
                "success": False,
                "error": f"Unsupported language: {language}.",
            }, 400)

# ==============================================================================
# Main entry point
# ==============================================================================
def main():
    print_banner()

    log("Detecting R installation...")
    rscript_path = detect_r()
    if rscript_path:
        log(f"  R DETECTED: {rscript_path}")
    else:
        log("  R NOT detected. R features will be unavailable.")
        log("  Install R from https://cran.r-project.org/ to enable R support.")

    log(f"Starting server on http://{HOST}:{PORT}/ ...")
    server = ThreadingHTTPServer((HOST, PORT), CompanionHandler)
    server.rscript_path = rscript_path  # share detection result with handler

    log("=" * 60)
    log(f"Companion Agent ready. Listening on http://{HOST}:{PORT}/")
    log("Endpoints:")
    log("  GET  /health    - status & R detection info")
    log("  POST /execute   - run R or Python code")
    log("  GET  /packages  - list installed R packages")
    log("  POST /install   - install R/Python packages")
    log("=" * 60)
    log("Press Ctrl+C to stop the agent.")
    print("")

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("")
        log("Shutting down Companion Agent...")
        server.shutdown()
        log("Stopped. Goodbye.")

if __name__ == "__main__":
    main()
