/* literature.js
 * 从 KNOWN_DATASETS 自动汇总真实文献，按数据集分类打标签。
 * 所有文献条目均来源于 datasets.js 中已核实的 lit 字段，不新增任何虚构来源。
 */
(function () {
  function catName(c) {
    switch (c) {
      case 'm1': return '中国国内';
      case 'm2': return '国际数据';
      case 'm3': return '脑科学';
      case 'policy': return '政策/监测';
      case 'survey': return '调查/队列';
      default: return '其他';
    }
  }
  function topicOf(d) {
    var t = ((d.tag || '') + ' ' + (d.summary || '') + ' ' + (d.en || '')).toLowerCase();
    if (/抑郁|depress|phq|mdd/.test(t)) return 'depression';
    if (/焦虑|anxiet|gad/.test(t)) return 'anxiety';
    if (/自杀|suicid/.test(t)) return 'suicide';
    if (/青少年|child|adolescent|student/.test(t)) return 'child';
    if (/老年|aging|elder|dementia|cognit/.test(t)) return 'aging';
    if (/脑|brain|imag|fmri|eeg|neuro/.test(t)) return 'brain';
    if (/物质|substance|alcohol|drug/.test(t)) return 'substance';
    if (/政策|policy|atlas|action/.test(t)) return 'policy';
    if (/队列|cohort|survey|longitudinal/.test(t)) return 'cohort';
    return 'general';
  }
  function build() {
    var ds = window.KNOWN_DATASETS || [];
    var out = [];
    var seen = {};
    ds.forEach(function (d) {
      (d.lit || []).forEach(function (l) {
        var key = (l.ref || '').trim() + '|' + (l.doi || '').trim();
        if (seen[key]) return;
        seen[key] = 1;
        out.push({
          ref: l.ref || '',
          doi: l.doi || '',
          src: l.src || '',
          dsetId: d.id,
          dsetTitle: d.title,
          dsetEn: d.en || '',
          cat: d.cat,
          catName: catName(d.cat),
          topic: topicOf(d)
        });
      });
    });
    window.KNOWN_LITERATURE = out;
  }
  build();
})();
