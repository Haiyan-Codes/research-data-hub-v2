window.KNOWN_DATASETS = [{
    id: "cmhs", cat: "m1", tag: "政策/监测", tc: "t-policy",
    title: "CMHS",
    en: "China Mental Health Survey",
    summary: "中国精神健康调查，Lancet Psychiatry 2019 发表，32552 名成人样本，CIDI 3.0 诊断工具，是迄今最权威的全国精神障碍患病率流行病学调查。",
    footL: "32552 人 · 12月患病率 9.3%",
    footR: "PMID:30792114",
    basic: [
      { k: "官方全称", v: "中国精神健康调查（China Mental Health Survey）" },
      { k: "主办方", v: "北京大学第六医院 / 国家精神心理疾病临床医学研究中心" },
      { k: "官方 URL", v: "PubMed: https://pubmed.ncbi.nlm.nih.gov/30792114/" },
      { k: "调查时间", v: "2013 – 2015 年" },
      { k: "样本量", v: "32552 名 18 岁及以上成人" },
      { k: "抽样设计", v: "多阶段分层随机抽样，覆盖全国 31 个省（区、市）" }
    ],
    struct: [
      { k: "调查工具", v: "CIDI 3.0（复合性国际诊断交谈表）；子研究使用 SCID、GMS" },
      { k: "覆盖障碍类别", v: "7 类：抑郁障碍、焦虑障碍、应激相关障碍、进食障碍、酒精/物质使用障碍、精神分裂症及相关障碍、双相障碍" },
      { k: "调查执行", v: "经培训的精神科医师/心理卫生工作者入户面对面访谈" },
      { k: "关键患病率", v: "12 月患病率 9.3%（95% UI 7.5–11.1）；终生患病率 16.6%（95% UI 13.0–20.3）" }
    ],
    q: [
      { k: "研究问题", v: '回答"中国有多少精神障碍患者"——提供全国代表性诊断级患病率数据，为卫生资源规划提供基线' },
      { k: "政策意义", v: "填补国内精神障碍流行病学空白，直接推动《全国精神卫生工作规划（2015–2020）》制定" },
      { k: "数据缺口", v: "儿童青少年、老年期痴呆、罕见障碍未覆盖；各省份分区域数据未公开" }
    ],
    lit: [
      { ref: "Huang Y, et al. Prevalence of mental disorders in China: a cross-sectional epidemiological study. Lancet Psychiatry. 2019;6(3):211-224.", doi: "doi:10.1016/S2215-0366(18)30511-X", src: "PMID:30792114" },
      { ref: "Xiang YT, et al. Mental health in China: challenges and progress. Lancet Psychiatry. 2019;6(3):e15-e16.", doi: "doi:10.1016/S2215-0366(19)30057-2", src: "Comment" },
      { ref: "Huang Y, et al. Reply to Xiang et al. Lancet Psychiatry. 2019;6(5):e22-e23.", doi: "doi:10.1016/S2215-0366(19)30129-4", src: "Author reply" }
    ],
    access: [
      { k: "数据获取", v: "原始数据未公开；汇总统计数据在论文及补充材料中" },
      { k: "汇总数据来源", v: "Lancet Psychiatry 2019 论文补充附录（可通过期刊官网获取）" },
      { k: "核查不确定项", v: "各省份细分患病率、城乡差异、亚型障碍具体数值以补充材料为准" }
    ]
  },
{
    id: "hc2030", cat: "m1", tag: "政策/监测", tc: "t-policy",
    title: "健康中国行动",
    en: "Healthy China Action 2019-2030",
    summary: "国务院 2019 年发布的健康战略行动，将心理健康促进纳入 15 项重大行动之一，明确了抑郁/焦虑患病率等量化指标。",
    footL: "抑郁2.1% · 焦虑4.98%",
    footR: "国发〔2019〕13号",
    basic: [
      { k: "官方全称", v: "健康中国行动（2019–2030）" },
      { k: "发布机构", v: "国务院" },
      { k: "发布日期", v: "2019-07-15" },
      { k: "官方 URL", v: "http://www.gov.cn/zhengce/content/2019-07/15/content_5409694.htm" },
      { k: "结构", v: "15 项重大行动，其中第 4 项为「心理健康促进行动」" }
    ],
    struct: [
      { k: "患病率数据", v: "抑郁症患病率 2.1%；焦虑障碍患病率 4.98%；全国严重精神障碍患者在册 581 万例" },
      { k: "行动目标", v: "2022 年目标：常见精神障碍防治和儿童青少年心理健康促进；2030 年目标：心理健康服务体系基本建成" }
    ],
    q: [
      { k: "研究问题", v: '回答"中国心理健康事业应如何量化推进"——以政策指标倒推服务体系建设' },
      { k: "数据启示", v: "政策引用的患病率数据源自 CMHS 等调查，需注意数据时效性（CMHS 为 2013–2015 年数据）" }
    ],
    lit: [
      { ref: "健康中国行动推进委员会. 健康中国行动（2019–2030）. 2019.", doi: "", src: "gov.cn 官方文件" },
      { ref: "国务院. 关于实施健康中国行动的意见（国发〔2019〕13号）. 2019.", doi: "", src: "gov.cn 官方文件" }
    ],
    access: [
      { k: "获取方式", v: "全文可通过 gov.cn 免费获取" },
      { k: "核查不确定项", v: "文中引用的患病率数据标注来源但部分原始出处需二次核查" }
    ]
  },
{
    id: "nhss", cat: "m1", tag: "政策/监测", tc: "t-policy",
    title: "NHSS",
    en: "National Health Services Survey",
    summary: "国家卫生服务调查，每 5 年一次，自 1993 年至 2018 年共完成 6 次，是监测居民就医行为与卫生服务利用的核心数据源。",
    footL: "1993–2018 · 6 次调查",
    footR: "卫健委统计信息中心",
    basic: [
      { k: "官方全称", v: "国家卫生服务调查（National Health Services Survey）" },
      { k: "主办方", v: "国家卫生健康委员会统计信息中心" },
      { k: "官方 URL", v: "http://www.nhc.gov.cn/tjsj/s7943/new_list.shtml" },
      { k: "调查频次", v: "每 5 年 1 次" },
      { k: "调查年份", v: "1993、1998、2003、2008、2013、2018，共 6 次" }
    ],
    struct: [
      { k: "调查方法", v: "入户调查，使用 CAPI 系统，多阶段分层随机抽样" },
      { k: "最新一期", v: "2018 年第六次调查，样本量约 15 万户" },
      { k: "心理健康变量", v: "待核实：是否纳入 PHQ-9 或 GAD-7 筛查条目（2013 年版问卷含心理健康相关模块）" },
      { k: "报告名称", v: "《中国卫生服务调查研究》系列报告" }
    ],
    q: [
      { k: "研究问题", v: '回答"中国居民就医行为与卫生服务利用"——覆盖门诊/住院利用、医疗支出、保险覆盖等' },
      { k: "已核实数据", v: "卫生服务利用率、两周就诊率、住院率等核心指标可查" }
    ],
    lit: [
      { ref: "国家卫生健康委员会统计信息中心. 2018 年第六次国家卫生服务调查报告. 2019.", doi: "", src: "卫健委官方" },
      { ref: "国家卫生健康委员会统计信息中心. 2013 年第五次国家卫生服务调查报告. 2014.", doi: "", src: "卫健委官方" }
    ],
    access: [
      { k: "获取方式", v: "部分汇总数据通过卫健委统计信息中心官网发布；原始数据需申请" },
      { k: "核查不确定项", v: "2018 年问卷是否包含 PHQ-9/GAD-7 条目未完全核实" }
    ]
  },
{
    id: "yearbook", cat: "m1", tag: "政策/监测", tc: "t-policy",
    title: "卫生统计年鉴",
    en: "China Health Statistics Yearbook 2023",
    summary: "由卫健委编纂的年度统计年鉴，涵盖医疗卫生资源、服务利用、疾病监测等 16 个部分，是宏观卫生数据的权威来源。",
    footL: "422 页 · 16 部分",
    footR: "ISBN:978-7-5679-2242-6",
    basic: [
      { k: "官方全称", v: "中国卫生健康统计年鉴 2023" },
      { k: "编纂单位", v: "国家卫生健康委员会" },
      { k: "出版单位", v: "中国协和医科大学出版社" },
      { k: "最新版本", v: "2023 卷" },
      { k: "ISBN", v: "978-7-5679-2242-6" },
      { k: "篇幅", v: "422 页，16 个部分" }
    ],
    struct: [
      { k: "内容结构", v: "医疗卫生机构、卫生人员、医疗服务、公共卫生、疾病控制、妇幼保健、卫生监督、医改监测等" },
      { k: "精神卫生相关条目", v: "待核实：严重精神障碍防治、精神卫生机构与床位、心理服务等条目分散在多个部分" }
    ],
    q: [
      { k: "研究问题", v: "宏观层面精神卫生资源配置、机构床位、服务提供能力的年度变化趋势" },
      { k: "特点", v: "官方权威数据，连续年度可比；但缺乏个体水平数据" }
    ],
    lit: [
      { ref: "国家卫生健康委员会. 中国卫生健康统计年鉴 2023. 北京: 中国协和医科大学出版社; 2023.", doi: "", src: "ISBN:978-7-5679-2242-6" }
    ],
    access: [
      { k: "获取方式", v: "纸质版通过出版社购买；部分电子版数据库收录" },
      { k: "核查不确定项", v: "部分细分指标（如心理门诊量）需查阅年鉴具体表格" }
    ]
  },
{
    id: "severemi", cat: "m1", tag: "政策/监测", tc: "t-policy",
    title: "严重精神障碍系统",
    en: "National Severe Mental Disorder Information System",
    summary: "国家严重精神障碍信息管理系统，2011 年启用，覆盖 6 类严重精神障碍的登记、报告与管理，在册患者超 660 万例。",
    footL: "在册 660 万+ · 6 类障碍",
    footR: "卫办疾控函〔2011〕722号",
    basic: [
      { k: "官方全称", v: '国家严重精神障碍信息管理系统（后改称"国家严重精神障碍信息系统"）' },
      { k: "主管单位", v: "国家卫生健康委员会疾病预防控制局" },
      { k: "启用时间", v: "2011-08" },
      { k: "前身", v: '2005 年启动，含"中央补助地方"严重精神障碍患者管理治疗项目' },
      { k: "官方 URL", v: "系统为内网系统，不对外公开访问" }
    ],
    struct: [
      { k: "覆盖障碍类别", v: "6 类：精神分裂症、双相情感障碍、偏执性精神病、分裂情感障碍、癫痫所致精神障碍、精神发育迟滞所致精神障碍" },
      { k: "数据内容", v: "患者基本信息、诊断信息、治疗情况、随访记录、危险性评估等" }
    ],
    q: [
      { k: "研究问题", v: '回答"中国严重精神障碍患者的登记与管理现状"——反映基层精神卫生服务的覆盖与缺口' },
      { k: "在册数", v: "2016 年底 429.7 万；2020 年底 581 万；2024 年预计超 660 万" }
    ],
    lit: [
      { ref: "卫生部办公厅. 关于启用国家严重精神障碍信息管理系统的通知（卫办疾控函〔2011〕722号）. 2011.", doi: "", src: "卫健委官方文件" }
    ],
    access: [
      { k: "获取方式", v: "系统不对外公开；汇总数据通过卫健委定期发布" },
      { k: "核查不确定项", v: "在册人数为累计登记数，不等于患病率；包含常住与流动人口管理" }
    ]
  },
{
    id: "cfps", cat: "m1", tag: "调查/队列", tc: "t-survey",
    title: "CFPS",
    en: "China Family Panel Studies",
    summary: "中国家庭追踪调查，北京大学 ISSS 主持，2010–2024 共 8 轮，覆盖 14960 户家庭，含 K6/CES-D 等心理健康量表纵向数据。",
    footL: "14960 户 · 8 轮追踪",
    footR: "isss.pku.edu.cn",
    basic: [
      { k: "官方全称", v: "中国家庭追踪调查（China Family Panel Studies）" },
      { k: "主办方", v: "北京大学中国社会科学调查中心（ISSS）" },
      { k: "官方 URL", v: "https://isss.pku.edu.cn/cfps/" },
      { k: "调查年份", v: "2010、2012、2014、2016、2018、2020、2022、2024，共 8 轮" },
      { k: "抽样", v: "多阶段分层随机抽样，初访 14960 户，追踪流失后每轮补充样本" }
    ],
    struct: [
      { k: "心理健康量表", v: "K6（2010/2014）、CES-D（2012 年版）、CES-D 8 题版（2018 起）、RSES 自尊量表、大五人格 QM201–QM215（仅 2018）" },
      { k: "其他变量", v: "家庭经济、教育、健康、就业、社会交往、主观幸福感等" }
    ],
    q: [
      { k: "研究问题", v: "心理健康的家庭与社会决定因素、生命历程轨迹、不平等机制、与经济/教育的双向关系" },
      { k: "使用注意", v: "跨年量表版本不一（K6→CES-D→CES-D 8 题版），跨年比较前需查阅官方技术报告" }
    ],
    lit: [
      { ref: "Xie Y. The China Family Panel Studies (CFPS) sample and its representativeness. Chinese Sociological Review. 2014;47(1):3-29.", doi: "", src: "Sage Journals" },
      { ref: "Xie Y, Lu P. The sampling design of the China Family Panel Studies (CFPS). Chinese Journal of Sociology. 2015;1(2):171-184.", doi: "", src: "CSSN" },
      { ref: "谢宇. 中国家庭追踪调查的设计与实施. 社会. 2014;34(4):1-20.", doi: "", src: "CSSCI 中文" },
      { ref: "孙妍, 等. CFPS 心理健康模块的跨年可比性研究. 调研世界. 2024;(2):45-54.", doi: "", src: "CSSCI 中文" }
    ],
    access: [
      { k: "获取方式", v: "注册账号后通过 isss.pku.edu.cn 免费下载（需签署使用协议）" },
      { k: "方法学文献", v: "Xie 2014、Xie 2015 详细描述抽样与权重方案" },
      { k: "核查不确定项", v: "各轮具体变量题号、工具变量可用性以最新 codebook 为准" }
    ]
  },
{
    id: "charls", cat: "m1", tag: "调查/队列", tc: "t-survey",
    title: "CHARLS",
    en: "China Health and Retirement Longitudinal Study",
    summary: "中国健康与养老追踪调查，北大国家发展研究院主持，2011–2020 共 5 轮，17708 名 45 岁及以上中老年人，含 CESD-10 抑郁量表。",
    footL: "17708 人 · 5 轮追踪",
    footR: "charls.pku.edu.cn",
    basic: [
      { k: "官方全称", v: "中国健康与养老追踪调查（China Health and Retirement Longitudinal Study）" },
      { k: "主办方", v: "北京大学国家发展研究院（NSD）" },
      { k: "官方 URL", v: "https://charls.pku.edu.cn/" },
      { k: "调查年份", v: "2011、2013、2015、2018、2020，共 5 轮" },
      { k: "抽样", v: "多阶段分层随机抽样，覆盖全国 28 个省，45 岁及以上人群，基线 17708 人" }
    ],
    struct: [
      { k: "心理健康变量", v: "CESD-10（10 题流调中心抑郁量表）、生活满意度、记忆力测试" },
      { k: "数据采集模块", v: "健康状况、家庭结构、经济收入、工作退休、代际转移支付、社区信息" }
    ],
    q: [
      { k: "研究问题", v: '回答"中国中老年人心理健康与衰老"——关注抑郁症状的年龄轨迹、社会隔离、慢病与心理共病' }
    ],
    lit: [
      { ref: "Zhao Y, et al. Cohort profile: The China Health and Retirement Longitudinal Study (CHARLS). International Journal of Epidemiology. 2014;43(1):61-68.", doi: "doi:10.1093/ije/dys203", src: "PMID:23525340" },
      { ref: "CHARLS 研究组. CHARLS 数据使用指南 2023.", doi: "", src: "charls.pku.edu.cn" }
    ],
    access: [
      { k: "获取方式", v: "注册账号后通过 charls.pku.edu.cn 免费下载" },
      { k: "核查不确定项", v: "2020 轮因疫情采用电话调查，应答率与数据质量需注意" }
    ]
  },
{
    id: "chns", cat: "m1", tag: "调查/队列", tc: "t-survey",
    title: "CHNS",
    en: "China Health and Nutrition Survey",
    summary: "中国健康与营养调查，UNC 与中国 CDC 联合主持，1989–2015 共 10 轮，覆盖 7200 户约 3 万人，含压力知觉与营养健康数据。",
    footL: "7200 户 · 10 轮追踪",
    footR: "dataverse.unc.edu",
    basic: [
      { k: "官方全称", v: "中国健康与营养调查（China Health and Nutrition Survey）" },
      { k: "主办方", v: "北卡罗来纳大学教堂山分校（UNC）+ 中国疾病预防控制中心（CDC）" },
      { k: "官方 URL", v: "https://chns.unc.edu/" },
      { k: "调查年份", v: "1989、1991、1993、1997、2000、2004、2006、2009、2011、2015，共 10 轮" },
      { k: "抽样", v: "多阶段分层随机抽样，覆盖 9–12 个省，约 7200 户 / 3 万人" }
    ],
    struct: [
      { k: "心理健康变量", v: "Perceived Stress 模块（部分年份）；抑郁量表条目（待核实具体年份与量表）" },
      { k: "其他变量", v: "膳食营养、体格测量、医疗利用、社会人口学、经济收入" }
    ],
    q: [
      { k: "研究问题", v: "营养转型与健康行为变化对心理健康的长期影响；城镇化与心理压力" }
    ],
    lit: [
      { ref: "CHNS 官方. China Health and Nutrition Survey Documentation.", doi: "", src: "chns.unc.edu" }
    ],
    access: [
      { k: "获取方式", v: "通过 dataverse.unc.edu 公开下载（需注册）" },
      { k: "核查不确定项", v: "各轮心理健康模块覆盖范围不一，部分年份无抑郁量表" }
    ]
  },
{
    id: "cgss", cat: "m1", tag: "调查/队列", tc: "t-survey",
    title: "CGSS",
    en: "Chinese General Social Survey",
    summary: "中国综合社会调查，中国人民大学主持，2003–2021 共 12 年度，覆盖 12000+ 户，含 2005/2011/2012 年心理健康模块。",
    footL: "12000+ 户 · 12 年度",
    footR: "cgss.ruc.edu.cn",
    basic: [
      { k: "官方全称", v: "中国综合社会调查（Chinese General Social Survey）" },
      { k: "主办方", v: "中国人民大学" },
      { k: "官方 URL", v: "http://cgss.ruc.edu.cn/" },
      { k: "调查年份", v: "2003、2005、2006、2008、2010、2011、2012、2013、2015、2017、2019、2021，共 12 年度" },
      { k: "抽样", v: "多阶段分层随机抽样，每年约 12000 户" }
    ],
    struct: [
      { k: "心理健康模块", v: "2005、2011、2012 年有心理健康相关模块" },
      { k: "量表名称", v: "待核实：2005 年使用 K6？2011/2012 年使用 CES-D？具体量表以官方问卷为准" }
    ],
    q: [
      { k: "研究问题", v: "社会结构变迁与心理健康、社会资本与心理福祉、主观幸福感的社会决定因素" }
    ],
    lit: [
      { ref: "CGSS 官方. 中国综合社会调查调查问卷（2005/2011/2012 年度）.", doi: "", src: "cgss.ruc.edu.cn" }
    ],
    access: [
      { k: "获取方式", v: "通过 cgss.ruc.edu.cn 免费下载（需注册）" },
      { k: "核查不确定项", v: "心理健康模块仅在部分年度实施，跨年可比性需评估" }
    ]
  },
{
    id: "clhls", cat: "m1", tag: "调查/队列", tc: "t-survey",
    title: "CLHLS",
    en: "Chinese Longitudinal Healthy Longevity Survey",
    summary: "中国老年健康影响因素跟踪调查，北大健康老龄与发展研究中心主持，1998-2018 共 8 轮，覆盖 23 省约 11 万人，含 MMSE 认知功能与抑郁情绪测量。",
    footL: "约11万人 · 8轮追踪",
    footR: "habcs.cn",
    basic: [
      { k: "官方全称", v: "中国老年健康影响因素跟踪调查（Chinese Longitudinal Healthy Longevity Survey）" },
      { k: "主办方", v: "北京大学国家发展研究院、健康老龄与发展研究中心" },
      { k: "官方 URL", v: "http://www.habcs.cn/" },
      { k: "调查年份", v: "1998、2000、2002、2005、2008、2011、2014、2018 共 8 轮" },
      { k: "样本量", v: "覆盖 23 省 806 个县区，累计约 11 万人，80+ 高龄老人样本世界最大" },
      { k: "调查地区人口", v: "覆盖地区人口约占全国总人口 85%" }
    ],
    struct: [
      { k: "心理健康变量", v: "认知功能（MMSE 简易智力状况检查）、抑郁情绪、生活满意度、主观幸福感、孤独感、睡眠质量" },
      { k: "HABCS 子项目", v: "2009 年起 7 个长寿地区 5606 名 65+ 老人，增加生物标志物采集" }
    ],
    q: [
      { k: "研究问题", v: '回答"中国高龄老人认知衰退与心理健康"——追踪老年认知功能下降、痴呆风险与抑郁的纵向变化' },
      { k: "政策意义", v: "为老龄化社会心理健康政策提供基线数据，支撑阿尔茨海默病蓝皮书" }
    ],
    lit: [
      { ref: "Zeng Y, et al. Cohort profile: Chinese Longitudinal Healthy Longevity Survey (CLHLS). Int J Epidemiol.", doi: "", src: "待核实DOI" }
    ],
    access: [
      { k: "获取方式", v: "通过中国队列共享平台或 habcs.cn 申请" },
      { k: "核查不确定项", v: "各轮精确样本量与量表版本以官方技术报告为准" }
    ]
  },
{
    id: "ckb", cat: "m1", tag: "调查/队列", tc: "t-survey",
    title: "CKB 中国慢性病前瞻性研究",
    en: "China Kadoorie Biobank",
    summary: "中英合作大型人群队列，北大+牛津+中国医学科学院，2004-2008 基线 51.2 万人，10 个地理区域，含 PHQ-2 抑郁筛查与心理困扰测量。",
    footL: "512000人 · 10区域",
    footR: "ckbiobank.org",
    basic: [
      { k: "官方全称", v: "中国慢性病前瞻性研究（China Kadoorie Biobank, CKB）" },
      { k: "主办方", v: "北京大学 + 英国牛津大学 + 中国医学科学院" },
      { k: "官方 URL", v: "https://www.ckbiobank.org/" },
      { k: "调查年份", v: "基线 2004-2008；重复调查 2008、2013、2020；长期随访约 20 年" },
      { k: "样本量", v: "512,000+ 名 35-74 岁成年人，来自 5 农村 + 5 城市区域" }
    ],
    struct: [
      { k: "心理健康变量", v: "抑郁症状（PHQ-2）、心理困扰、睡眠、自评健康、社会支持" },
      { k: "数据采集", v: "问卷访谈、体格测量、血样采集、长期随访死亡/发病/住院结局" }
    ],
    q: [
      { k: "研究问题", v: '回答"慢性病与心理健康的共病关系"——评估抑郁、心理困扰与心脑血管病、糖尿病等慢病的关联' },
      { k: "规模优势", v: "中国最大前瞻性人群队列之一，统计效力强" }
    ],
    lit: [
      { ref: "Chen Z, et al. Cohort profile: the Kadoorie Study of Chronic Disease in China (KSCDC). Int J Epidemiol. 2005;34(6):1243-1249.", doi: "doi:10.1093/ije/dyi174", src: "PMID待核实" }
    ],
    access: [
      { k: "获取方式", v: "通过 ckbiobank.org 申请，需提交研究计划并经审批" },
      { k: "核查不确定项", v: "PHQ-2 具体实施轮次以官方数据文档为准" }
    ]
  },
{
    id: "chfs", cat: "m1", tag: "调查/队列", tc: "t-survey",
    title: "CHFS 中国家庭金融调查",
    en: "China Household Finance Survey",
    summary: "西南财经大学主持，2009-2019 多轮全国性抽样调查，聚焦家庭金融，含主观幸福感等心理变量。心理健康量表模块待核实。",
    footL: "全国抽样 · 多轮",
    footR: "chfser.swufe.edu.cn",
    basic: [
      { k: "官方全称", v: "中国家庭金融调查（China Household Finance Survey, CHFS）" },
      { k: "主办方", v: "西南财经大学中国家庭金融调查与研究中心" },
      { k: "官方 URL", v: "https://chfser.swufe.edu.cn/" },
      { k: "调查年份", v: "2009、2011、2013、2015、2017、2019 共 6 轮" },
      { k: "样本量", v: "全国性抽样调查，覆盖数万户家庭（具体数字待核实）" }
    ],
    struct: [
      { k: "核心模块", v: "家庭资产、负债、收入、支出、住房、保险等金融变量" },
      { k: "心理健康变量", v: "待核实：含主观幸福感等心理变量；是否含标准化抑郁量表（CES-D/PHQ-9）需查证原始问卷" }
    ],
    q: [
      { k: "研究问题", v: '回答"经济金融状况与心理健康"——分析家庭债务、收入波动与主观幸福感/抑郁的关联' },
      { k: "使用注意", v: "核心为金融变量，心理健康模块覆盖情况需查证官方问卷" }
    ],
    lit: [
      { ref: "甘犁等. 中国家庭金融调查系列报告. 西南财经大学.", doi: "", src: "chfser.swufe.edu.cn" }
    ],
    access: [
      { k: "获取方式", v: "通过 chfser.swufe.edu.cn 申请数据" },
      { k: "核查不确定项", v: "心理健康量表是否为常规模块、具体题号需核实官方问卷" }
    ]
  },
{
    id: "class", cat: "m1", tag: "调查/队列", tc: "t-survey",
    title: "CLASS 中国老年社会追踪调查",
    en: "China Longitudinal Aging Social Survey",
    summary: "中国人民大学老年学研究所主持，2014 基线，含 CES-D 抑郁量表、孤独感、认知功能等心理健康变量。",
    footL: "全国追踪 · 3轮",
    footR: "ruc.edu.cn",
    basic: [
      { k: "官方全称", v: "中国老年社会追踪调查（China Longitudinal Aging Social Survey, CLASS）" },
      { k: "主办方", v: "中国人民大学老年学研究所" },
      { k: "官方 URL", v: "待核实（中国人民大学新闻: news.ruc.edu.cn）" },
      { k: "调查年份", v: "2014（基线）、2016、2018 共 3 轮追踪" },
      { k: "样本量", v: "全国性连续性长期追踪调查（具体数字待核实）" }
    ],
    struct: [
      { k: "心理健康变量", v: "抑郁症状（CES-D 量表）、生活满意度、主观幸福感、孤独感、认知功能" },
      { k: "调查模块", v: "个人问卷+社区问卷，含人口学、经济状况、健康、社会参与、代际关系等" }
    ],
    q: [
      { k: "研究问题", v: '回答"中国老年人心理健康与社会因素"——追踪老年人抑郁、孤独感与社会参与、家庭结构变迁的关联' }
    ],
    lit: [
      { ref: "中国人民大学老年学研究所. 中国老年社会追踪调查(CLASS)研究报告. 2014.", doi: "", src: "基线报告" }
    ],
    access: [
      { k: "获取方式", v: "通过中国人民大学老年学研究所申请" },
      { k: "核查不确定项", v: "官方网站、具体样本量、CES-D 版本需核实" }
    ]
  },
{
    id: "gbcsoh", cat: "m1", tag: "调查/队列", tc: "t-survey",
    title: "GBCS 广州生物库队列",
    en: "Guangzhou Biobank Cohort Study",
    summary: "广州-香港-伯明翰合作队列，广州市第十二人民医院+港大+伯明翰大学，2003-2008 基线 30430 人，含认知功能与抑郁测量。",
    footL: "30430人 · 50岁+",
    footR: "广州-港大-伯明翰",
    basic: [
      { k: "官方全称", v: "广州生物库队列研究（Guangzhou Biobank Cohort Study, GBCS）" },
      { k: "主办方", v: "广州市第十二人民医院 + 香港大学 + 英国伯明翰大学" },
      { k: "官方 URL", v: "待核实（中山大学报道可见）" },
      { k: "调查年份", v: "2003-2008 基线调查；后续多次随访（含 14 年前瞻性随访）" },
      { k: "样本量", v: "30,430 名 50 岁及以上广州市居民" }
    ],
    struct: [
      { k: "心理健康变量", v: "认知功能、抑郁症状、睡眠时型、心理压力" },
      { k: "数据采集", v: "问卷访谈、体格检查、血样、肺功能等" }
    ],
    q: [
      { k: "研究问题", v: '回答"南方城市老年心理健康与慢病"——分析抑郁、认知衰退与代谢、心血管等慢病的关联' }
    ],
    lit: [
      { ref: "Jiang CQ, Thomas GN, Lam TH, et al. Cohort profile: The Guangzhou Biobank Cohort Study. Int J Epidemiol. 2006;35(4):844-852.", doi: "doi:10.1093/ije/dyl131", src: "PMID待核实" }
    ],
    access: [
      { k: "获取方式", v: "通过合作机构申请" },
      { k: "核查不确定项", v: "官方数据申请渠道与具体量表版本需核实" }
    ]
  },
{
    id: "dftj", cat: "m1", tag: "调查/队列", tc: "t-survey",
    title: "东风-同济队列",
    en: "Dongfeng-Tongji Cohort Study",
    summary: "华中科技大学同济医学院主持，约 27000 名东风汽车公司退休职工，含认知功能与抑郁测量，聚焦环境与慢病。",
    footL: "约27000人 · 退休职工",
    footR: "同济医学院",
    basic: [
      { k: "官方全称", v: "东风-同济队列研究（Dongfeng-Tongji Cohort Study）" },
      { k: "主办方", v: "华中科技大学同济医学院公共卫生学院" },
      { k: "官方 URL", v: "待核实（中华流行病学杂志发表方法学）" },
      { k: "调查年份", v: "基线约 2013 年；多次随访" },
      { k: "样本量", v: "约 27,000 名东风汽车公司退休职工（湖北十堰）" }
    ],
    struct: [
      { k: "心理健康变量", v: "认知功能、抑郁（具体量表待核实）" },
      { k: "核心模块", v: "环境暴露、代谢、心脑血管疾病、生活方式" }
    ],
    q: [
      { k: "研究问题", v: '回答"环境暴露与老年心理健康"——评估职业暴露、环境污染与认知衰退、抑郁的关联' }
    ],
    lit: [
      { ref: "Wang F, et al. Cohort Profile: The Dongfeng-Tongji cohort study of retired workers. Int J Epidemiol. 2013;42(3):731-740.", doi: "doi:10.1093/ije/dys053", src: "PMID待核实" }
    ],
    access: [
      { k: "获取方式", v: "通过华中科技大学同济医学院申请" },
      { k: "核查不确定项", v: "心理量表具体版本与覆盖轮次需核实" }
    ]
  },
{
    id: "cdrfm", cat: "m1", tag: "政策/监测", tc: "t-policy",
    title: "中国慢性病及其危险因素监测",
    en: "China Chronic Disease and Risk Factors Surveillance",
    summary: "中国 CDC 慢病中心主持，2004-2018 共 6 轮全国代表性调查，覆盖 31 省约 17 万人/轮，含慢病及行为危险因素监测。",
    footL: "31省 · 约17万/轮",
    footR: "chinacdc.cn",
    basic: [
      { k: "官方全称", v: "中国慢性病及其危险因素监测（China Chronic Disease and Risk Factors Surveillance, CCDRFS）" },
      { k: "主办方", v: "中国疾病预防控制中心慢病中心" },
      { k: "官方 URL", v: "https://www.chinacdc.cn/" },
      { k: "调查年份", v: "2004、2007、2010、2013、2015、2018 共 6 轮" },
      { k: "样本量", v: "覆盖全国 31 省，每轮约 17 万人" }
    ],
    struct: [
      { k: "核心模块", v: "高血压、糖尿病、肥胖、吸烟、饮酒、身体活动、膳食等慢病及行为危险因素" },
      { k: "心理健康变量", v: "待核实：是否含标准化抑郁/焦虑量表作为常规模块需查证官方问卷" }
    ],
    q: [
      { k: "研究问题", v: '回答"中国成人慢病流行趋势与危险因素"——监测慢病患病率变化与行为危险因素分布' },
      { k: "心理健康相关", v: "慢病共病抑郁的分析需结合其他数据源" }
    ],
    lit: [
      { ref: "Wang L, et al. JAMA. 2017.（2013 年监测数据）", doi: "", src: "JAMA" }
    ],
    access: [
      { k: "获取方式", v: "通过中国 CDC 申请，监测报告由人民卫生出版社出版" },
      { k: "核查不确定项", v: "心理健康量表是否纳入常规监测模块需核实" }
    ]
  },
{
    id: "dsp", cat: "m1", tag: "政策/监测", tc: "t-policy",
    title: "中国死因监测系统",
    en: "National Disease Surveillance Points System",
    summary: "中国 CDC 慢病中心主持，605 个监测点覆盖约 3 亿人口，ICD-10 编码含自杀与精神疾病死因，是自杀死亡率权威数据源。",
    footL: "605监测点 · 约3亿人",
    footR: "chinacdc.cn",
    basic: [
      { k: "官方全称", v: "全国疾病监测系统死因监测（DSPs）" },
      { k: "主办方", v: "中国疾病预防控制中心慢病中心" },
      { k: "官方 URL", v: "https://www.chinacdc.cn/" },
      { k: "运行时间", v: "2004 年起持续运行；2013 年扩展为 605 个监测点" },
      { k: "覆盖人口", v: "约 3 亿人口，覆盖全国 31 省" }
    ],
    struct: [
      { k: "死因编码", v: "ICD-10 编码，含自杀（X60-X84）、精神疾病相关死亡（F00-F99）" },
      { k: "心理健康相关", v: "可计算自杀死亡率、精神疾病死因构成；不含个体层面抑郁/焦虑量表评分" }
    ],
    q: [
      { k: "研究问题", v: '回答"中国自杀死亡率与精神疾病死因"——监测全国及分区域自杀死亡率变化趋势' },
      { k: "政策意义", v: "自杀预防策略的核心数据源" }
    ],
    lit: [
      { ref: "陶梦梦等. 中国分地区人口死因状况及去死因期望寿命分析. 中华疾病控制杂志. 2024;28(3):256-261.", doi: "doi:10.16462/j.cnki.zhjbkz.2024.03.002", src: "中文文献" }
    ],
    access: [
      { k: "获取方式", v: "年度数据集《中国死因监测数据集》由人民卫生出版社出版" },
      { k: "核查不确定项", v: "近年监测点扩展后具体覆盖范围以最新年报为准" }
    ]
  },
{
    id: "cdpf", cat: "m1", tag: "政策/监测", tc: "t-policy",
    title: "全国残疾人抽样调查",
    en: "China National Sample Survey on Disability",
    summary: "国务院批准，国家统计局+中国残联联合组织，1987 年首次、2006 年第二次，含精神残疾分类，是精神残疾患病率权威来源。",
    footL: "2006年 · 约210万人抽样",
    footR: "cdpf.org.cn",
    basic: [
      { k: "官方全称", v: "全国残疾人抽样调查" },
      { k: "主办方", v: "国务院批准，国家统计局、中国残疾人联合会等联合组织" },
      { k: "官方 URL", v: "https://www.cdpf.org.cn/" },
      { k: "调查年份", v: "第一次 1987 年；第二次 2006 年 4 月 1 日" },
      { k: "样本量", v: "2006 年：734 个县、2980 个乡镇、5964 个调查小区，共约 210 万人" }
    ],
    struct: [
      { k: "残疾分类", v: "视力、听力、言语、肢体、智力、精神、多重残疾七类" },
      { k: "心理健康相关", v: "精神残疾患病率及人口学特征；多重残疾中含精神残疾成分" }
    ],
    q: [
      { k: "研究问题", v: '回答"中国精神残疾的人口规模与特征"——估算全国精神残疾患病率及地区分布' },
      { k: "关键数据", v: "2006 年全国各类残疾人总数 8296 万，占总人口 6.34%" }
    ],
    lit: [
      { ref: "2006年第二次全国残疾人抽样调查主要数据公报. 中国残联.", doi: "", src: "cdpf.org.cn" }
    ],
    access: [
      { k: "获取方式", v: "通过中国残联、国家统计局官网获取公报" },
      { k: "核查不确定项", v: "第三次调查时间未确定" }
    ]
  },
{
    id: "mhblue", cat: "m1", tag: "政策/监测", tc: "t-policy",
    title: "心理健康蓝皮书",
    en: "Report on National Mental Health Development in China",
    summary: "中科院心理研究所+社科文献出版社，2019-2024 三个版本，含抑郁风险、焦虑、心理健康素养、青少年抑郁检出率等多维度数据。",
    footL: "3版 · 青少年抑郁24.6%",
    footR: "psych.ac.cn",
    basic: [
      { k: "官方全称", v: "心理健康蓝皮书：中国国民心理健康发展报告" },
      { k: "主办方", v: "中国科学院心理研究所 + 社会科学文献出版社" },
      { k: "官方 URL", v: "https://www.psych.ac.cn/" },
      { k: "版本", v: "2019-2020 版（2021 发布）；2021-2022 版（2023 发布）；2023-2024 版（2025 发布）" },
      { k: "样本量", v: "全国代表性抽样调查，具体样本量随年度不同" }
    ],
    struct: [
      { k: "心理健康变量", v: "抑郁风险、焦虑、心理健康素养、睡眠、压力感知、心理健康服务利用" },
      { k: "关键数据", v: "2020 年青少年抑郁检出率 24.6%（轻度 17.2%，重度 7.4%）" }
    ],
    q: [
      { k: "研究问题", v: '回答"中国国民心理健康水平与变化趋势"——系统评估不同人群心理健康状况及服务需求' }
    ],
    lit: [
      { ref: "傅小兰, 张侃等主编. 中国国民心理健康发展报告. 社会科学文献出版社.", doi: "", src: "ISBN待核实" }
    ],
    access: [
      { k: "获取方式", v: "通过社科文献出版社购买；部分数据在中科院心理所官网公开" },
      { k: "核查不确定项", v: "各版本具体 ISBN、样本量需查证" }
    ]
  },
{
    id: "nmhc", cat: "m1", tag: "政策/监测", tc: "t-policy",
    title: "国家心理健康和精神卫生防治中心",
    en: "National Center for Mental Health",
    summary: "国家卫健委直属事业单位，2021 年成立，统筹全国心理健康和精神卫生防治工作，建设国民心理健康数据库平台。",
    footL: "2021年成立 · 卫健委直属",
    footR: "ncmhc.org.cn",
    basic: [
      { k: "官方全称", v: "国家心理健康和精神卫生防治中心" },
      { k: "主管单位", v: "国家卫生健康委员会" },
      { k: "官方 URL", v: "http://ncmhc.org.cn/" },
      { k: "成立时间", v: "2021 年 12 月" },
      { k: "性质", v: "国家卫健委直属事业单位" }
    ],
    struct: [
      { k: "核心职能", v: "心理健康促进、精神卫生防治、政策研究、数据收集、技术指导" },
      { k: "数据库建设", v: "国民心理健康数据库平台（NMHDP），中科院心理所 2022 年软件著作权登记" }
    ],
    q: [
      { k: "研究问题", v: '回答"国家层面心理健康数据统筹与服务"——整合多来源心理健康数据，支撑政策制定' }
    ],
    lit: [
      { ref: "国民心理健康数据库平台 V1.0. 软件著作权登记号: 2022SR1094994. 2022-08-11.", doi: "", src: "中科院心理所" }
    ],
    access: [
      { k: "获取方式", v: "通过 ncmhc.org.cn 或 psych.ac.cn 了解数据共享政策" },
      { k: "核查不确定项", v: "数据库公开数据范围与申请流程待核实" }
    ]
  },
{
    id: "atlas", cat: "m2", tag: "国际", tc: "t-intl",
    title: "WHO Atlas 2024",
    en: "Mental Health Atlas 2024",
    summary: "WHO 精神卫生地图集第 7 版，144 国数据，2025 年 9 月发布，系统梳理各国精神卫生系统覆盖与资源配置。",
    footL: "144 国 · 第 7 版",
    footR: "ISBN:978-92-4-011448-7",
    basic: [
      { k: "官方全称", v: "Mental Health Atlas 2024（精神卫生地图集 2024 版）" },
      { k: "主办方", v: "世界卫生组织精神卫生与物质使用障碍司（WHO MSD）" },
      { k: "官方 URL", v: "https://www.who.int/publications/i/item/9789240114487" },
      { k: "版本", v: "第 7 版" },
      { k: "数据来源", v: "144 个成员国提交的 2022–2023 年度数据" },
      { k: "出版信息", v: "ISBN 978-92-4-011448-7；98 页；2025-09 发布" }
    ],
    struct: [
      { k: "涵盖内容", v: "精神卫生政策与立法、服务供给、人力资源、药物供应、信息系统、监测与评估" }
    ],
    q: [
      { k: "研究问题", v: '回答"各国精神卫生系统覆盖与资源"——跨国比较精神卫生服务可及性与公平性' }
    ],
    lit: [
      { ref: "World Health Organization. Mental Health Atlas 2024. Geneva: WHO; 2025.", doi: "", src: "WHO 官方出版物" }
    ],
    access: [
      { k: "获取方式", v: "WHO 官网免费下载 PDF" },
      { k: "核查不确定项", v: "各国数据自报，部分国家数据缺失或质量参差" }
    ]
  },
{
    id: "gho", cat: "m2", tag: "国际", tc: "t-intl",
    title: "WHO GHO",
    en: "Global Health Observatory",
    summary: "WHO 全球卫生观察站，提供心理健康相关指标（自杀率、精神卫生人力/政策等）的跨国时间序列数据，支持 OData API 查询。",
    footL: "OData API · 全球指标",
    footR: "who.int/gho",
    basic: [
      { k: "官方全称", v: "全球卫生观察站（Global Health Observatory）" },
      { k: "主办方", v: "世界卫生组织（WHO）" },
      { k: "官方 URL", v: "https://www.who.int/gho/" },
      { k: "API", v: "支持 OData API 查询，可批量获取结构化数据" }
    ],
    struct: [
      { k: "心理健康指标", v: "自杀率、自残死亡率、精神卫生人力（精神科医生/护士/社工）、精神卫生政策覆盖、精神药物可及性" },
      { k: "其他主题", v: "覆盖非传染性疾病、传染病、母婴健康、环境健康等全球卫生主题" }
    ],
    q: [
      { k: "研究问题", v: "全球与区域精神卫生资源 inequity、自杀预防的跨国比较、精神卫生政策与健康结果的关联" }
    ],
    lit: [
      { ref: "World Health Organization. Global Health Observatory.", doi: "", src: "who.int/gho" }
    ],
    access: [
      { k: "获取方式", v: "网页交互查询或通过 OData API 批量下载" },
      { k: "核查不确定项", v: "各国报告标准不一，自杀率等数据存在报告偏差" }
    ]
  },
{
    id: "gbd", cat: "m2", tag: "国际", tc: "t-intl",
    title: "GBD/IHME",
    en: "Global Burden of Disease",
    summary: "全球疾病负担研究，IHME 主持，最新轮次 GBD 2021 覆盖 371 种疾病，GBD 2019 精神障碍部分涵盖 12 类障碍、204 国、9.7 亿患者。",
    footL: "9.7 亿人 · 371 种疾病",
    footR: "vizhub.healthdata.org",
    basic: [
      { k: "官方全称", v: "全球疾病负担研究（Global Burden of Disease Study）" },
      { k: "主办方", v: "健康指标与评估研究所（IHME）" },
      { k: "官方 URL", v: "https://vizhub.healthdata.org/gbd-results/" },
      { k: "最新轮次", v: "GBD 2021（2024 年发布）" }
    ],
    struct: [
      { k: "GBD 2019 精神障碍", v: "12 类精神障碍、204 个国家/地区、1990–2019 年时间序列" },
      { k: "GBD 2021", v: "371 种疾病/伤害、36 个风险因素、1990–2021 年，COVID-19 超额死亡纳入" }
    ],
    q: [
      { k: "研究问题", v: '回答"全球精神障碍疾病负担有多重"——量化 DALY、YLD、YLL，识别优先干预领域' },
      { k: "关键数据", v: "全球约 9.7 亿人患有精神障碍；精神障碍占全球 YLD 的 15–20%" }
    ],
    lit: [
      { ref: "GBD 2021 Mental Disorders Collaborators. Global, regional, and national burden of mental disorders in 2021: a systematic analysis for the Global Burden of Disease Study 2021. Lancet. 2024;403(10437):e81-e94.", doi: "doi:10.1016/S0140-6736(24)00757-8", src: "PMID:39454568" },
      { ref: "GBD 2019 Mental Disorders Collaborators. Global, regional, and national burden of mental disorders, 1990–2019: a systematic analysis for the Global Burden of Disease Study 2019. Lancet Psychiatry. 2022;9(2):137-150.", doi: "doi:10.1016/S2215-0366(21)00395-3", src: "PMID:35026576" },
      { ref: "COVID-19 Mental Disorders Collaborators. Global prevalence and burden of depressive and anxiety disorders in 204 countries and territories in 2020 due to the COVID-19 pandemic. Lancet. 2021;398(10312):1700-1712.", doi: "doi:10.1016/S0140-6736(21)02143-7", src: "PMID:34637508" }
    ],
    access: [
      { k: "获取方式", v: "通过 vizhub.healthdata.org 交互式可视化浏览；数据可通过 IHME 数据请求获取" },
      { k: "核查不确定项", v: "GBD 为模型估计，所有数值含 95% 不确定性区间；引用时需报告 UI" }
    ]
  },
{
    id: "wmh", cat: "m2", tag: "国际", tc: "t-intl",
    title: "WMH",
    en: "World Mental Health Survey",
    summary: "世界精神健康调查，WHO 与哈佛 Kessler 团队联合开展，30 国 16.6 万人，使用 WMH-CIDI 诊断工具，是跨国精神障碍患病率比较的金标准。",
    footL: "30 国 · 16.6 万人",
    footR: "Kessler 2004",
    basic: [
      { k: "官方全称", v: "世界精神健康调查（World Mental Health Survey）" },
      { k: "主办方", v: "WHO + 哈佛大学 Kessler 团队" },
      { k: "官方 URL", v: "https://www.hcp.med.harvard.edu/wmh/" },
      { k: "规模", v: "30 个国家、16.6 万名受访者" },
      { k: "调查方法", v: "采用 WMH-CIDI 3.0 复合性国际诊断交谈表；面对面或电话访谈" }
    ],
    struct: [
      { k: "调查工具", v: "WMH-CIDI（WHO 版复合性国际诊断交谈表），基于 DSM-IV 诊断标准" },
      { k: "涵盖障碍", v: "焦虑障碍、情绪障碍、物质使用障碍、冲动控制障碍、进食障碍、精神分裂症等 10+ 类" }
    ],
    q: [
      { k: "研究问题", v: '回答"不同国家精神障碍患病率差异"——识别文化、经济、卫生体系对患病率的影响' }
    ],
    lit: [
      { ref: "Kessler RC, et al. The World Mental Health (WMH) Survey Initiative Version 1. International Journal of Methods in Psychiatric Research. 2004;13(4):241-268.", doi: "doi:10.1002/mpr.15", src: "PMID:15515754" }
    ],
    access: [
      { k: "获取方式", v: "部分国家数据通过 WMH 合作中心申请；公开汇总数据可查阅已发表论文" },
      { k: "核查不确定项", v: "部分国家样本量较小，跨国比较需注意取样偏差" }
    ]
  },
{
    id: "owid", cat: "m2", tag: "国际", tc: "t-intl",
    title: "OWID",
    en: "Our World in Data Mental Health",
    summary: "Our World in Data 心理健康专题页面，整合 GBD/WHO 等数据源，提供可视化的全球心理健康趋势，采用 CC-BY 开放许可。",
    footL: "CC-BY · 开放获取",
    footR: "ourworldindata.org",
    basic: [
      { k: "官方全称", v: "Our World in Data — Mental Health" },
      { k: "主办方", v: "Our World in Data（OWID）" },
      { k: "页面作者", v: "Saloni Dattani, Hannah Ritchie, Max Roser" },
      { k: "官方 URL", v: "https://ourworldindata.org/mental-health" }
    ],
    struct: [
      { k: "涵盖内容", v: "精神障碍患病率、自杀率、心理健康服务、药物使用、经济负担等主题的跨国时间序列可视化" },
      { k: "数据来源", v: "主要整合 GBD 2019/2021、WHO GHO、UN 等权威数据源" }
    ],
    q: [
      { k: "研究问题", v: "全球心理健康的发展趋势、城乡与性别差异、经济发展与精神健康的关联" }
    ],
    lit: [
      { ref: "Dattani S, Ritchie H, Roser M. Mental Health. Our World in Data.", doi: "", src: "ourworldindata.org" }
    ],
    access: [
      { k: "获取方式", v: "CC-BY 许可，免费下载图表与数据" },
      { k: "核查不确定项", v: "数据为二次整合，具体数值以原始数据源为准" }
    ]
  },
{
    id: "abcd", cat: "m3", tag: "脑科学", tc: "t-brain",
    title: "ABCD",
    en: "Adolescent Brain Cognitive Development",
    summary: "青少年脑认知发展研究，NIH 资助 21 中心，11878 名 9–10 岁儿童，多模态脑成像+认知+心理病理+物质使用+生物样本。",
    footL: "11878 人 · 9–10 岁",
    footR: "NBDC Data Hub",
    basic: [
      { k: "官方全称", v: "Adolescent Brain Cognitive Development Study" },
      { k: "主办方", v: "美国国立卫生研究院（NIH），21 个参与中心" },
      { k: "官方 URL", v: "https://abcdstudy.org/" },
      { k: "样本量", v: "11878 名 9–10 岁儿童，基线已完成，纵向追踪至青年期" },
      { k: "采集频率", v: "每 2 年一次随访，多轮脑成像与行为评估" }
    ],
    struct: [
      { k: "数据采集", v: "多模态脑成像（sMRI、fMRI、dMRI、MRS）、认知测评、心理病理量表、物质使用评估、生物样本（唾液 DNA、血液）" },
      { k: "心理病理量表", v: "待核实：K-SADS、CBCL、YBOCS、ADHD-RS 等临床访谈与行为量表" }
    ],
    q: [
      { k: "研究问题", v: '回答"青少年脑发育如何影响心理健康"——追踪青春期脑发育与心理病理/成瘾/认知的纵向关联' }
    ],
    lit: [
      { ref: "Volkow ND, et al. The concept of translational neuroscience for ABCD. Developmental Cognitive Neuroscience. 2018;32:1-4.", doi: "doi:10.1016/j.dcn.2017.10.002", src: "PMID:29051027" },
      { ref: "Casey BJ, et al. The Adolescent Brain Cognitive Development (ABCD) study: Imaging acquisition across 21 sites. Developmental Cognitive Neuroscience. 2018;32:43-54.", doi: "", src: "" },
      { ref: "Barch DM, et al. The ABCD data repository: Sharing data to enable new research. Developmental Cognitive Neuroscience. 2018;32:134-137.", doi: "", src: "" },
      { ref: "Garavan H, et al. Recruiting the ABCD sample: Design considerations and procedures. Developmental Cognitive Neuroscience. 2018;32:16-22.", doi: "", src: "" }
    ],
    access: [
      { k: "获取方式", v: "通过 NBDC Data Hub 申请（abcdstudy.org）；2025-06-02 起 NDA 不再受理，全部转 NBDC" },
      { k: "重要变更", v: "2025-06-02 起 ABCD 数据访问政策变更，NDA 申请通道关闭，需通过 NBDC Data Hub" },
      { k: "核查不确定项", v: "部分心理病理量表的具体版本与实施方式以 ABCD 协议文档为准" }
    ]
  },
{
    id: "ukb", cat: "m3", tag: "脑科学", tc: "t-brain",
    title: "UK Biobank",
    en: "UK Biobank",
    summary: "英国生物库，503317 名 40–69 岁参与者，10 万人脑影像，整合基因/影像/医疗记录/问卷/体格/环境数据，是全球最大人群队列之一。",
    footL: "503317 人 · 影像 10 万",
    footR: "ukbiobank.ac.uk",
    basic: [
      { k: "官方全称", v: "UK Biobank（英国生物库）" },
      { k: "主办方", v: "UK Biobank Ltd（独立非营利组织）" },
      { k: "官方 URL", v: "https://www.ukbiobank.ac.uk/" },
      { k: "样本量", v: "503317 名参与者；其中 10 万人接受脑成像" },
      { k: "招募年龄", v: "40–69 岁" }
    ],
    struct: [
      { k: "数据采集", v: "脑/心脏/腹部 MRI 影像、生物标记物（血液/尿液/唾液）、基因测序、医疗记录（NHS 关联）、问卷、体格测量、环境暴露" },
      { k: "心理健康变量", v: "待核实：基线问卷含心理健康自评条目；随访期通过 NHS 住院记录与初诊记录获取精神疾病诊断" }
    ],
    q: [
      { k: "研究问题", v: '回答"基因环境影像如何影响心理健康"——利用大规模队列解析精神疾病的多因素病因' }
    ],
    lit: [
      { ref: "Sudlow C, et al. UK Biobank: An Open Access Resource for Identifying the Causes of a Wide Range of Complex Diseases. PLoS Medicine. 2015;12(3):e1001779.", doi: "doi:10.1371/journal.pmed.1001779", src: "PMID:25826379" }
    ],
    access: [
      { k: "获取方式", v: "需提交研究方案并经 UK Biobank 审批；注册费 £500（学术机构优惠）" },
      { k: "核查不确定项", v: "心理健康变量主要来自医疗记录，自陈问卷条目有限" }
    ]
  },
{
    id: "hcp", cat: "m3", tag: "脑科学", tc: "t-brain",
    title: "HCP",
    en: "Human Connectome Project",
    summary: "人类连接组计划，WU-Minn 联盟，1200 名 22–35 岁健康成人，3T/7T MRI、MEG、认知情绪人格数据，开放与受限数据并存。",
    footL: "1200 人 · 3T/7T MRI",
    footR: "connectome.org",
    basic: [
      { k: "官方全称", v: "Human Connectome Project（人类连接组计划）" },
      { k: "主办方", v: "WU-Minn 联盟（华盛顿大学 + 明尼苏达大学）" },
      { k: "官方 URL", v: "https://www.connectome.org/" },
      { k: "样本量", v: "1200 名 22–35 岁健康成人志愿者" }
    ],
    struct: [
      { k: "数据采集", v: "3T 与 7T MRI（结构像、弥散、静息态、任务态）、MEG、认知测评、情绪与人格量表、基因分型" },
      { k: "开放 vs 受限", v: "开放数据通过 Connectome DB/BALSA 平台注册后下载；受限数据需签署 DUA" }
    ],
    q: [
      { k: "研究问题", v: '回答"大脑连接如何对应个体差异"——解析脑连接组与认知、情绪、人格的关联' }
    ],
    lit: [
      { ref: "Van Essen DC, et al. The WU-Minn Human Connectome Project: an overview. NeuroImage. 2013;80:62-79.", doi: "doi:10.1016/j.neuroimage.2013.05.041", src: "PMID:23684880" },
      { ref: "Glasser MF, et al. A multi-modal parcellation of human cerebral cortex. Nature. 2016;536(7615):171-178.", doi: "doi:10.1038/nature18933", src: "PMID:27437999" }
    ],
    access: [
      { k: "获取方式", v: "开放数据通过 ConnectomeDB / BALSA 平台注册下载；受限数据需 DUA 申请" },
      { k: "核查不确定项", v: "健康成人样本，不覆盖临床人群；外推到患者需谨慎" }
    ]
  },
{
    id: "enigma", cat: "m3", tag: "脑科学", tc: "t-brain",
    title: "ENIGMA",
    en: "Enhancing Neuro Imaging Genetics through Meta Analysis",
    summary: "国际脑影像遗传学联盟，USC Thompson 实验室主持，50 个工作组，采用分布式元分析模式，已发表精神障碍脑影像差异里程碑研究。",
    footL: "50 工作组 · 分布式元分析",
    footR: "enigma.usc.edu",
    basic: [
      { k: "官方全称", v: "Enhancing Neuro Imaging Genetics through Meta Analysis" },
      { k: "主办方", v: "南加州大学（USC）Thompson 实验室" },
      { k: "官方 URL", v: "http://enigma.usc.edu/" },
      { k: "工作组数", v: "50 个工作组（截至 2024 年）" }
    ],
    struct: [
      { k: "工作组分类", v: "疾病工作组（精神分裂症、抑郁、双相、ADHD、孤独症、成瘾等）、基因组工作组、算法工作组、发展工作组" },
      { k: "运作模式", v: "分布式元分析：各中心保留原始数据，上传统计结果，由协调中心合并" }
    ],
    q: [
      { k: "研究问题", v: '回答"不同精神障碍的脑影像表型差异"——跨中心大样本识别精神障碍共有的与特异的脑结构/功能异常' },
      { k: "运作模式", v: "分布式元分析，避免原始数据集中，保护隐私" }
    ],
    lit: [
      { ref: "Thompson PM, et al. ENIGMA Consortium: methods and track record. Translational Psychiatry. 2020;10:224.", doi: "doi:10.1038/s41398-020-0705-1", src: "PMID:32198361" },
      { ref: "Grasby KL, et al. The ENIGMA Schizophrenia Working Group: multi-site analysis of brain structure in 4,385 patients and 5,395 controls. Science. 2020;370(6520):eabb8898.", doi: "doi:10.1126/science.aay6690", src: "PMID:33060361" }
    ],
    access: [
      { k: "获取方式", v: "加入工作组需提交申请；已发表结果可通过 enigma.usc.edu 查阅" },
      { k: "核查不确定项", v: "各中心扫描参数与样本特征存在差异，元分析需控制异质性" }
    ]
  },
{
    id: "adni", cat: "m3", tag: "脑科学", tc: "t-brain",
    title: "ADNI",
    en: "Alzheimer's Disease Neuroimaging Initiative",
    summary: "阿尔茨海默病神经影像倡议，NIA 资助 60+ 中心，ADNI 1/GO/2/3/4 多期，采集 MRI/PET/CSF/基因/认知量表，已支撑 5500+ 论文。",
    footL: "60+ 中心 · 5500+ 论文",
    footR: "adni-info.org",
    basic: [
      { k: "官方全称", v: "Alzheimer's Disease Neuroimaging Initiative" },
      { k: "主办方", v: "美国国立老化研究所（NIA），60+ 参与中心" },
      { k: "官方 URL", v: "https://adni.loni.usc.edu/" },
      { k: "各期招募数", v: "ADNI 1: 800 人；ADNI GO: 700 人；ADNI 2: 1100 人；ADNI 3: 1700 人；ADNI 4: 进行中" }
    ],
    struct: [
      { k: "数据采集", v: "MRI（结构像、功能像、弥散）、PET（淀粉样蛋白、tau）、CSF 生物标志物、基因、认知量表（MMSE、ADAS-Cog、CDR）" }
    ],
    q: [
      { k: "研究问题", v: '回答"如何早期识别 AD"——寻找 AD 临床前阶段的生物标志物与影像特征' },
      { k: "使用规模", v: "已支撑 5500+ 篇同行评议论文" }
    ],
    lit: [
      { ref: "Mueller SG, et al. The Alzheimer's Disease Neuroimaging Initiative. Alzheimer's & Dementia. 2005;1(3):55-66.", doi: "doi:10.1016/j.jalz.2005.06.003", src: "PMID:17476317" },
      { ref: "Weiner MW, et al. The Alzheimer's Disease Neuroimaging Initiative 3: Rationale and objectives. Alzheimer's & Dementia. 2017;13(6):e125.", doi: "doi:10.1016/j.jalz.2016.10.006", src: "PMID:27982577" }
    ],
    access: [
      { k: "获取方式", v: "通过 LONI IDA 平台注册申请；需提交研究摘要并签署数据使用协议" },
      { k: "核查不确定项", v: "ADNI 4 期数据仍在采集中，可用性需关注" }
    ]
  },
{
    id: "cbp", cat: "m3", tag: "脑科学", tc: "t-brain",
    title: "中国脑计划",
    en: "China Brain Project",
    summary: "中国脑科学与类脑研究计划，科技部主持，一体两翼布局（认知脑科学+类脑计算），涉及精神疾病队列与脑影像数据采集。",
    footL: "科技部 · 一体两翼",
    footR: "涉及多中心队列",
    basic: [
      { k: "官方全称", v: '中国脑科学与类脑研究重大科技基础设施（含"脑科学与类脑研究"国家重大科技基础设施）' },
      { k: "主办方", v: "中华人民共和国科学技术部" },
      { k: "官方 URL", v: "https://www.most.gov.cn/" },
      { k: "规模", v: "国家重大科技基础设施，投资数亿元人民币" }
    ],
    struct: [
      { k: "布局", v: '一体两翼（脑科学基础研究 + 类脑计算与应用）' },
      { k: "涉及疾病队列", v: "精神分裂症、抑郁、双相障碍、孤独症等重大神经精神疾病队列" }
    ],
    q: [
      { k: "研究问题", v: '回答"中国脑科学如何统筹"——整合基础研究、临床队列与类脑计算，打造国家脑科学基础设施' }
    ],
    lit: [
      { ref: "Poo MM, et al. China's Brain Science Project: from basic research to application. Neuron. 2016;92(3):537-543.", doi: "doi:10.1016/j.neuron.2016.10.050", src: "PMID:27909999" },
      { ref: "新华网. 中国启动脑科学与类脑研究重大项目. 2016.", doi: "", src: "xinhuanet.com" }
    ],
    access: [
      { k: "获取方式", v: "通过科技部项目申报通道申请；部分数据通过国家脑科学数据中心开放" },
      { k: "核查不确定项", v: "具体数据开放范围与申请流程以科技部/国家脑科学数据中心最新公告为准" }
    ]
  },
{
    id: "cpwf", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort profile: Walking for harm reduction through street engagement (WHiSE 2.0) [待核实]",
    en: "Cohort profile: Walking for harm reduction through street engagement (WHiSE 2.0).",
    summary: "Indigenous people using substances experience health disparities that are compounded by systemic inequities shaped by colonialism. The WHiSE 2.0 study aims to describe substance use patterns and harm ",
    footL: "待核实",
    footR: "PMID:42497183",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort profile: Walking for harm reduction through street engagement (WHiSE 2.0)." },
      { k: "作者", v: "Verma, Aden, Hartman, et al." },
      { k: "期刊", v: "PLoS One" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1371/journal.pone.0354477" },
      { k: "PMID", v: "42497183" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Verma, Aden, Hartman, et al. Cohort profile: Walking for harm reduction through street engagement (WHiSE 2.0). PLoS One. 2026. doi:10.1371/journal.pone.0354477", doi: "doi:10.1371/journal.pone.0354477", src: "PMID:42497183" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cpkl", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort Profile: Kenya Life Panel Survey. [待核实]",
    en: "Cohort Profile: Kenya Life Panel Survey.",
    summary: "新发现的数据集文献：Cohort Profile: Kenya Life Panel Survey.",
    footL: "待核实",
    footR: "PMID:42490521",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort Profile: Kenya Life Panel Survey." },
      { k: "作者", v: "Hsu, Miguel, Ochieng, et al." },
      { k: "期刊", v: "Int J Epidemiol" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1093/ije/dyag118" },
      { k: "PMID", v: "42490521" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Hsu, Miguel, Ochieng, et al. Cohort Profile: Kenya Life Panel Survey. Int J Epidemiol. 2026. doi:10.1093/ije/dyag118", doi: "doi:10.1093/ije/dyag118", src: "PMID:42490521" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "elpi", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort Profile: The Early Childhood Longitudinal Survey (ELPI), Chile. [待核实]",
    en: "Cohort Profile: The Early Childhood Longitudinal Survey (ELPI), Chile.",
    summary: "新发现的数据集文献：Cohort Profile: The Early Childhood Longitudinal Survey (ELPI), Chile.",
    footL: "待核实",
    footR: "PMID:42442393",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort Profile: The Early Childhood Longitudinal Survey (ELPI), Chile." },
      { k: "作者", v: "Martínez, Martínez, Sotomayor López, et al." },
      { k: "期刊", v: "Int J Epidemiol" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1093/ije/dyag105" },
      { k: "PMID", v: "42442393" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Martínez, Martínez, Sotomayor López, et al. Cohort Profile: The Early Childhood Longitudinal Survey (ELPI), Chile. Int J Epidemiol. 2026. doi:10.1093/ije/dyag105", doi: "doi:10.1093/ije/dyag105", src: "PMID:42442393" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cput", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort Profile Update: The Finnish Gestational Diabetes (FinnGeDi) study. [待核实]",
    en: "Cohort Profile Update: The Finnish Gestational Diabetes (FinnGeDi) study.",
    summary: "新发现的数据集文献：Cohort Profile Update: The Finnish Gestational Diabetes (FinnGeDi) study.",
    footL: "待核实",
    footR: "PMID:42424496",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort Profile Update: The Finnish Gestational Diabetes (FinnGeDi) study." },
      { k: "作者", v: "Lingaiah, Keikkala, Mustaniemi, et al." },
      { k: "期刊", v: "Int J Epidemiol" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1093/ije/dyag101" },
      { k: "PMID", v: "42424496" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Lingaiah, Keikkala, Mustaniemi, et al. Cohort Profile Update: The Finnish Gestational Diabetes (FinnGeDi) study. Int J Epidemiol. 2026. doi:10.1093/ije/dyag101", doi: "doi:10.1093/ije/dyag101", src: "PMID:42424496" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cpsp", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort profile: Swiss personalized health network cohort consortium. [待核实]",
    en: "Cohort profile: Swiss personalized health network cohort consortium.",
    summary: "Swiss cohort studies provide high-quality longitudinal data, but finding and comparing relevant studies across cohorts has historically been challenging. The Swiss Personalized Health Network Cohort C",
    footL: "21993 人",
    footR: "PMID:42360636",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort profile: Swiss personalized health network cohort consortium." },
      { k: "作者", v: "Bochud, Tiali, Armida, et al." },
      { k: "期刊", v: "Eur J Epidemiol" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1007/s10654-026-01411-4" },
      { k: "PMID", v: "42360636" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "21993 人" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Bochud, Tiali, Armida, et al. Cohort profile: Swiss personalized health network cohort consortium. Eur J Epidemiol. 2026. doi:10.1007/s10654-026-01411-4", doi: "doi:10.1007/s10654-026-01411-4", src: "PMID:42360636" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "treasure", cat: "m1", tag: "中国国内", tc: "t-survey",
    title: "Cohort profile: transformative research on equity and social determinants to upl [待核实]",
    en: "Cohort profile: transformative research on equity and social determinants to uplift resilience and empower LGBTQ+ health",
    summary: "The Transformative Research on Equity And Social determinants to Uplift Resilience and Empower LGBTQ+ Health in China (TREASURE) is the first large-scale cohort study designed to investigate health co",
    footL: "待核实",
    footR: "PMID:42348091",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort profile: transformative research on equity and social determinants to uplift resilience and empower LGBTQ+ health in China (TREASURE)." },
      { k: "作者", v: "Zhao, Yang, Mu, et al." },
      { k: "期刊", v: "Eur J Epidemiol" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1007/s10654-026-01421-2" },
      { k: "PMID", v: "42348091" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Zhao, Yang, Mu, et al. Cohort profile: transformative research on equity and social determinants to uplift resilience and empower LGBTQ+ health in China (TREASURE). Eur J Epidemiol. 2026. doi:10.1007/s10654-026-01421-2", doi: "doi:10.1007/s10654-026-01421-2", src: "PMID:42348091" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "sid", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Sussex Integrated Dataset (SID) Data Resource Profile. [待核实]",
    en: "Sussex Integrated Dataset (SID) Data Resource Profile.",
    summary: "This paper presents a data resource profile of the Sussex Integrated Dataset (SID). SID is a linked dataset of National Health Service (NHS) and adult social care data from across the geographical foo",
    footL: "待核实",
    footR: "PMID:42327976",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Sussex Integrated Dataset (SID) Data Resource Profile." },
      { k: "作者", v: "Ford, Elsom, Molyneux, et al." },
      { k: "期刊", v: "Int J Popul Data Sci" },
      { k: "年份", v: "2023" },
      { k: "DOI", v: "10.23889/ijpds.v8i6.3382" },
      { k: "PMID", v: "42327976" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Ford, Elsom, Molyneux, et al. Sussex Integrated Dataset (SID) Data Resource Profile. Int J Popul Data Sci. 2023. doi:10.23889/ijpds.v8i6.3382", doi: "doi:10.23889/ijpds.v8i6.3382", src: "PMID:42327976" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "post", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Health, Social and Recidivism Outcomes Among People Who Have Been Incarcerated i [待核实]",
    en: "Health, Social and Recidivism Outcomes Among People Who Have Been Incarcerated in New South Wales, Australia: Study Prot",
    summary: "We have been funded to examine post-incarceration health and social outcomes for all people incarcerated in New South Wales, Australia, 2000-2022; assess treatment and services for drug dependence and",
    footL: "待核实",
    footR: "PMID:42324076",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Health, Social and Recidivism Outcomes Among People Who Have Been Incarcerated in New South Wales, Australia: Study Protocol and Cohort Profile for the Prison Outcomes STudy (POST)." },
      { k: "作者", v: "Degenhardt, Farrell, Doyle, et al." },
      { k: "期刊", v: "Drug Alcohol Rev" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1111/dar.70161" },
      { k: "PMID", v: "42324076" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Degenhardt, Farrell, Doyle, et al. Health, Social and Recidivism Outcomes Among People Who Have Been Incarcerated in New South Wales, Australia: Study Protocol and Cohort Profile for the Prison Outcomes STudy (POST). Drug Alcohol Rev. 2026. doi:10.1111/dar.70161", doi: "doi:10.1111/dar.70161", src: "PMID:42324076" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "sals", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Strategic Amyotrophic Lateral Sclerosis Australia-Systems Genomics Consortium (S [待核实]",
    en: "Strategic Amyotrophic Lateral Sclerosis Australia-Systems Genomics Consortium (SALSA-SGC): cohort profile.",
    summary: "Amyotrophic lateral sclerosis (ALS) is a rapidly progressive neurodegenerative motor neuron disease (MND) with heterogeneity in disease onset, progression and treatment response. The Strategic ALS Aus",
    footL: "待核实",
    footR: "PMID:42315356",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Strategic Amyotrophic Lateral Sclerosis Australia-Systems Genomics Consortium (SALSA-SGC): cohort profile." },
      { k: "作者", v: "Henders, Ziser, Garton, et al." },
      { k: "期刊", v: "BMJ Open" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1136/bmjopen-2025-110906" },
      { k: "PMID", v: "42315356" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Henders, Ziser, Garton, et al. Strategic Amyotrophic Lateral Sclerosis Australia-Systems Genomics Consortium (SALSA-SGC): cohort profile. BMJ Open. 2026. doi:10.1136/bmjopen-2025-110906", doi: "doi:10.1136/bmjopen-2025-110906", src: "PMID:42315356" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "aofp", cat: "m3", tag: "脑科学", tc: "t-brain",
    title: "An open, fully-processed data resource for studying mood and sleep variability i [待核实]",
    en: "An open, fully-processed data resource for studying mood and sleep variability in the developing brain.",
    summary: "Brain development during adolescence and early adulthood coincides with shifts in emotion regulation and sleep. Despite this, few existing datasets simultaneously characterize affective dynamics, slee",
    footL: "待核实",
    footR: "PMID:42306263",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "An open, fully-processed data resource for studying mood and sleep variability in the developing brain." },
      { k: "作者", v: "Brook, Salo, Luo, et al." },
      { k: "期刊", v: "Apert Neuro" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.52294/001c.151820" },
      { k: "PMID", v: "42306263" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Brook, Salo, Luo, et al. An open, fully-processed data resource for studying mood and sleep variability in the developing brain. Apert Neuro. 2026. doi:10.52294/001c.151820", doi: "doi:10.52294/001c.151820", src: "PMID:42306263" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cput2", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort Profile Update: The Young Lives study. [待核实]",
    en: "Cohort Profile Update: The Young Lives study.",
    summary: "新发现的数据集文献：Cohort Profile Update: The Young Lives study.",
    footL: "待核实",
    footR: "PMID:42302208",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort Profile Update: The Young Lives study." },
      { k: "作者", v: "Favara, De Los Ángeles Molina, Sánchez, et al." },
      { k: "期刊", v: "Int J Epidemiol" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1093/ije/dyag087" },
      { k: "PMID", v: "42302208" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Favara, De Los Ángeles Molina, Sánchez, et al. Cohort Profile Update: The Young Lives study. Int J Epidemiol. 2026. doi:10.1093/ije/dyag087", doi: "doi:10.1093/ije/dyag087", src: "PMID:42302208" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cpth", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort profile: The Halmstad University Register on Pupils with Intellectual Dis [待核实]",
    en: "Cohort profile: The Halmstad University Register on Pupils with Intellectual Disability.",
    summary: "Knowledge about the living conditions among people with intellectual disabilities (ID) is globally scarce. Even in countries with good access to registers, this is often partly due to the absence of a",
    footL: "待核实",
    footR: "PMID:42291686",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort profile: The Halmstad University Register on Pupils with Intellectual Disability." },
      { k: "作者", v: "Jönsson, Staland-Nyman, Lichtenstein, et al." },
      { k: "期刊", v: "JCPP Adv" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1002/jcv2.70028" },
      { k: "PMID", v: "42291686" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Jönsson, Staland-Nyman, Lichtenstein, et al. Cohort profile: The Halmstad University Register on Pupils with Intellectual Disability. JCPP Adv. 2026. doi:10.1002/jcv2.70028", doi: "doi:10.1002/jcv2.70028", src: "PMID:42291686" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "obs", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort Profile: The Ontario Birth Study (OBS). [待核实]",
    en: "Cohort Profile: The Ontario Birth Study (OBS).",
    summary: "新发现的数据集文献：Cohort Profile: The Ontario Birth Study (OBS).",
    footL: "待核实",
    footR: "PMID:42242721",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort Profile: The Ontario Birth Study (OBS)." },
      { k: "作者", v: "Bertoni, Knight, Wong, et al." },
      { k: "期刊", v: "Int J Epidemiol" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1093/ije/dyag077" },
      { k: "PMID", v: "42242721" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Bertoni, Knight, Wong, et al. Cohort Profile: The Ontario Birth Study (OBS). Int J Epidemiol. 2026. doi:10.1093/ije/dyag077", doi: "doi:10.1093/ije/dyag077", src: "PMID:42242721" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "thcds", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Tianjin Health and Chronic Disease Study (THCDS): study design and baseline char [待核实]",
    en: "Tianjin Health and Chronic Disease Study (THCDS): study design and baseline characteristics of the cohort - cohort profi",
    summary: "The Tianjin Health and Chronic Disease Study (THCDS) is a longitudinal dynamic cohort study established in 2022, aiming to investigate risk factors and intervention targets of common non-communicable ",
    footL: "324 人",
    footR: "PMID:42236102",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Tianjin Health and Chronic Disease Study (THCDS): study design and baseline characteristics of the cohort - cohort profile." },
      { k: "作者", v: "Li, Miao, Zheng, et al." },
      { k: "期刊", v: "BMJ Open" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1136/bmjopen-2025-114504" },
      { k: "PMID", v: "42236102" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "324 人" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Li, Miao, Zheng, et al. Tianjin Health and Chronic Disease Study (THCDS): study design and baseline characteristics of the cohort - cohort profile. BMJ Open. 2026. doi:10.1136/bmjopen-2025-114504", doi: "doi:10.1136/bmjopen-2025-114504", src: "PMID:42236102" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cpmw", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort profile: Mothers who use substances and their children in British Columbi [待核实]",
    en: "Cohort profile: Mothers who use substances and their children in British Columbia, Canada.",
    summary: "Perinatal substance use is a growing public health challenge in the province of BC. A population-based cohort was established using linked health administrative data to underpin three research studies",
    footL: "待核实",
    footR: "PMID:42189869",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort profile: Mothers who use substances and their children in British Columbia, Canada." },
      { k: "作者", v: "Wilson, Katsuno, Kurz, et al." },
      { k: "期刊", v: "PLoS One" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1371/journal.pone.0348262" },
      { k: "PMID", v: "42189869" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Wilson, Katsuno, Kurz, et al. Cohort profile: Mothers who use substances and their children in British Columbia, Canada. PLoS One. 2026. doi:10.1371/journal.pone.0348262", doi: "doi:10.1371/journal.pone.0348262", src: "PMID:42189869" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "obad", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "ODIN Biobank: a Danish cohort for dementia research- cohort profile. [待核实]",
    en: "ODIN Biobank: a Danish cohort for dementia research- cohort profile.",
    summary: "Biomarkers related to the diagnosis, prognosis and treatment of dementia will play a key role in future clinical practice. The overarching aim of the ODIN (blood and cerebrospinal fluid) Biobank is to",
    footL: "451 人",
    footR: "PMID:42103387",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "ODIN Biobank: a Danish cohort for dementia research- cohort profile." },
      { k: "作者", v: "Laugesen, Skjærbæk, Okkels, et al." },
      { k: "期刊", v: "BMJ Open" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1136/bmjopen-2025-114084" },
      { k: "PMID", v: "42103387" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "451 人" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Laugesen, Skjærbæk, Okkels, et al. ODIN Biobank: a Danish cohort for dementia research- cohort profile. BMJ Open. 2026. doi:10.1136/bmjopen-2025-114084", doi: "doi:10.1136/bmjopen-2025-114084", src: "PMID:42103387" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cpda", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort profile Davos Alzheimer\'s Collaborative DAC Egypt Cohort. [待核实]",
    en: "Cohort profile Davos Alzheimer\'s Collaborative DAC Egypt Cohort.",
    summary: "The Davos Alzheimer\'s Collaborative (DAC) Egypt Cohort (DAC-Egypt) is a newly established longitudinal study of cognitive aging in a community-based convenience sample of older Egyptian adults. The c",
    footL: "待核实",
    footR: "PMID:42009666",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort profile Davos Alzheimer\'s Collaborative DAC Egypt Cohort." },
      { k: "作者", v: "Moustafa, Mowafi, Fawi, et al." },
      { k: "期刊", v: "NPJ Aging" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1038/s41514-026-00378-6" },
      { k: "PMID", v: "42009666" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Moustafa, Mowafi, Fawi, et al. Cohort profile Davos Alzheimer\'s Collaborative DAC Egypt Cohort. NPJ Aging. 2026. doi:10.1038/s41514-026-00378-6", doi: "doi:10.1038/s41514-026-00378-6", src: "PMID:42009666" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cptc", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort profile: The Czech Health, Alcohol and Psychosocial factors In Eastern Eu [待核实]",
    en: "Cohort profile: The Czech Health, Alcohol and Psychosocial factors In Eastern Europe study (HAPIEE-CZ).",
    summary: "The HAPIEE (Health, Alcohol and Psychosocial factors In Eastern Europe) is a population-based longitudinal prospective cohort study established to explore psychosocial, behavioural, and environmental ",
    footL: "待核实",
    footR: "PMID:41994109",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort profile: The Czech Health, Alcohol and Psychosocial factors In Eastern Europe study (HAPIEE-CZ)." },
      { k: "作者", v: "Dalecká, Peasey, Pan, et al." },
      { k: "期刊", v: "Res Sq" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.21203/rs.3.rs-8261173/v1" },
      { k: "PMID", v: "41994109" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Dalecká, Peasey, Pan, et al. Cohort profile: The Czech Health, Alcohol and Psychosocial factors In Eastern Europe study (HAPIEE-CZ). Res Sq. 2026. doi:10.21203/rs.3.rs-8261173/v1", doi: "doi:10.21203/rs.3.rs-8261173/v1", src: "PMID:41994109" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "zhacs", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort profile: Zhejiang Healthy Aging Cohort Study (ZHACS). [待核实]",
    en: "Cohort profile: Zhejiang Healthy Aging Cohort Study (ZHACS).",
    summary: "新发现的数据集文献：Cohort profile: Zhejiang Healthy Aging Cohort Study (ZHACS).",
    footL: "待核实",
    footR: "PMID:41955495",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort profile: Zhejiang Healthy Aging Cohort Study (ZHACS)." },
      { k: "作者", v: "Gu, Wu, Zhang, et al." },
      { k: "期刊", v: "Int J Epidemiol" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1093/ije/dyag050" },
      { k: "PMID", v: "41955495" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Gu, Wu, Zhang, et al. Cohort profile: Zhejiang Healthy Aging Cohort Study (ZHACS). Int J Epidemiol. 2026. doi:10.1093/ije/dyag050", doi: "doi:10.1093/ije/dyag050", src: "PMID:41955495" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cptn", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort profile: The Nepal Turnaway Study. [待核实]",
    en: "Cohort profile: The Nepal Turnaway Study.",
    summary: "The Nepal Turnaway Study was designed to understand abortion care experiences and the longitudinal wellbeing of abortion-seekers and their families. The Nepal Turnaway Study is a nation-wide cohort of",
    footL: "待核实",
    footR: "PMID:41929341",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort profile: The Nepal Turnaway Study." },
      { k: "作者", v: "Murro, Raifman, Boscardin, et al." },
      { k: "期刊", v: "medRxiv" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.64898/2026.03.10.26348060" },
      { k: "PMID", v: "41929341" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Murro, Raifman, Boscardin, et al. Cohort profile: The Nepal Turnaway Study. medRxiv. 2026. doi:10.64898/2026.03.10.26348060", doi: "doi:10.64898/2026.03.10.26348060", src: "PMID:41929341" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "msds", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Data Resource Profile: Maternity Services Dataset (MSDS). [待核实]",
    en: "Data Resource Profile: Maternity Services Dataset (MSDS).",
    summary: "The Maternity Services Dataset (MSDS) is a comprehensive administrative dataset, capturing detailed information on NHS-funded maternity services in England. It encompasses the full maternity care path",
    footL: "待核实",
    footR: "PMID:41924145",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Data Resource Profile: Maternity Services Dataset (MSDS)." },
      { k: "作者", v: "Stewart, Hall, Harron" },
      { k: "期刊", v: "Int J Popul Data Sci" },
      { k: "年份", v: "2023" },
      { k: "DOI", v: "10.23889/ijpds.v8i6.3007" },
      { k: "PMID", v: "41924145" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Stewart, Hall, Harron Data Resource Profile: Maternity Services Dataset (MSDS). Int J Popul Data Sci. 2023. doi:10.23889/ijpds.v8i6.3007", doi: "doi:10.23889/ijpds.v8i6.3007", src: "PMID:41924145" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "drph", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Data Resource Profile: Harmonisation of a multimodal dataset to evaluate adolesc [待核实]",
    en: "Data Resource Profile: Harmonisation of a multimodal dataset to evaluate adolescent mental health in rural South Africa.",
    summary: "Mental health disorders among adolescents and young adults in Africa are a growing concern, with most cases remaining undiagnosed or untreated due to limited resources. As the youth population increas",
    footL: "待核实",
    footR: "PMID:41924144",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Data Resource Profile: Harmonisation of a multimodal dataset to evaluate adolescent mental health in rural South Africa." },
      { k: "作者", v: "Mthiyane, Mkwanazi, Mwangala, et al." },
      { k: "期刊", v: "Int J Popul Data Sci" },
      { k: "年份", v: "2023" },
      { k: "DOI", v: "10.23889/ijpds.v8i6.3003" },
      { k: "PMID", v: "41924144" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Mthiyane, Mkwanazi, Mwangala, et al. Data Resource Profile: Harmonisation of a multimodal dataset to evaluate adolescent mental health in rural South Africa. Int J Popul Data Sci. 2023. doi:10.23889/ijpds.v8i6.3003", doi: "doi:10.23889/ijpds.v8i6.3003", src: "PMID:41924144" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cptm", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort profile: the Mendelian randomisation in pregnancy (MR-PREG) collaboration [待核实]",
    en: "Cohort profile: the Mendelian randomisation in pregnancy (MR-PREG) collaboration - improving evidence for prevention and",
    summary: "Adverse pregnancy and perinatal outcomes (APPOs), including pre-term birth, pre-eclampsia and gestational diabetes, can result in maternal and neonatal morbidity and mortality, parental anxiety and in",
    footL: "待核实",
    footR: "PMID:41876152",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort profile: the Mendelian randomisation in pregnancy (MR-PREG) collaboration - improving evidence for prevention and treatment of adverse pregnancy and perinatal outcomes." },
      { k: "作者", v: "McBride, Clayton, Goncalves Soares, et al." },
      { k: "期刊", v: "BMJ Open" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1136/bmjopen-2025-103753" },
      { k: "PMID", v: "41876152" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "McBride, Clayton, Goncalves Soares, et al. Cohort profile: the Mendelian randomisation in pregnancy (MR-PREG) collaboration - improving evidence for prevention and treatment of adverse pregnancy and perinatal outcomes. BMJ Open. 2026. doi:10.1136/bmjopen-2025-103753", doi: "doi:10.1136/bmjopen-2025-103753", src: "PMID:41876152" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "mhcyp", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Data resource profile: the mental health of children and young people (MHCYP) 20 [待核实]",
    en: "Data resource profile: the mental health of children and young people (MHCYP) 2017 and follow-up surveys.",
    summary: "Amid growing global concern about child and adolescent mental health problems and their long-term consequences, research in this area is increasingly critical. Population-representative datasets are v",
    footL: "117 人",
    footR: "PMID:41868971",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Data resource profile: the mental health of children and young people (MHCYP) 2017 and follow-up surveys." },
      { k: "作者", v: "Karimipour, Barker, Newlove-Delgado, et al." },
      { k: "期刊", v: "Int J Popul Data Sci" },
      { k: "年份", v: "2023" },
      { k: "DOI", v: "10.23889/ijpds.v8i6.3044" },
      { k: "PMID", v: "41868971" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "117 人" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Karimipour, Barker, Newlove-Delgado, et al. Data resource profile: the mental health of children and young people (MHCYP) 2017 and follow-up surveys. Int J Popul Data Sci. 2023. doi:10.23889/ijpds.v8i6.3044", doi: "doi:10.23889/ijpds.v8i6.3044", src: "PMID:41868971" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "dscp", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "DAGIS Salo cohort profile: a longitudinal and cross-sectional study to identify  [待核实]",
    en: "DAGIS Salo cohort profile: a longitudinal and cross-sectional study to identify environmental and individual factors lin",
    summary: "BACKGROUND: The global prevalence of childhood obesity has increased significantly, with World Health Organisation emphasising the importance of early childhood for promoting healthy growth and develo",
    footL: "待核实",
    footR: "PMID:41851868",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "DAGIS Salo cohort profile: a longitudinal and cross-sectional study to identify environmental and individual factors linked to health behaviours, recovery from stress, weight and learning outcomes amo" },
      { k: "作者", v: "Kailaheimo-Björkqvist, Vepsäläinen, Kesäläinen, et al." },
      { k: "期刊", v: "BMC Public Health" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1186/s12889-026-27007-x" },
      { k: "PMID", v: "41851868" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Kailaheimo-Björkqvist, Vepsäläinen, Kesäläinen, et al. DAGIS Salo cohort profile: a longitudinal and cross-sectional study to identify environmental and individual factors linked to health behaviours, recovery from stress, weight and learning outcomes among Finnish schoolchildren. BMC Public Health. 2026. doi:10.1186/s12889-026-27007-x", doi: "doi:10.1186/s12889-026-27007-x", src: "PMID:41851868" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cptr", cat: "m3", tag: "脑科学", tc: "t-brain",
    title: "Cohort profile: the Resilient Minds national study of mental health and cognitiv [待核实]",
    en: "Cohort profile: the Resilient Minds national study of mental health and cognitive resilience in community dwelling adult",
    summary: "The Resilient Minds (ReMind) cohort was established to investigate cognitive and mental health resilience across the life course, addressing a gap in longitudinal evidence about resilience. The study ",
    footL: "1640 人",
    footR: "PMID:41847288",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort profile: the Resilient Minds national study of mental health and cognitive resilience in community dwelling adults aged 18 to 93." },
      { k: "作者", v: "Anstey, Brady, Zheng, et al." },
      { k: "期刊", v: "Front Digit Health" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.3389/fdgth.2026.1710349" },
      { k: "PMID", v: "41847288" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "1640 人" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Anstey, Brady, Zheng, et al. Cohort profile: the Resilient Minds national study of mental health and cognitive resilience in community dwelling adults aged 18 to 93. Front Digit Health. 2026. doi:10.3389/fdgth.2026.1710349", doi: "doi:10.3389/fdgth.2026.1710349", src: "PMID:41847288" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cpgv", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort Profile: Generation Victoria (GenV). [待核实]",
    en: "Cohort Profile: Generation Victoria (GenV).",
    summary: "新发现的数据集文献：Cohort Profile: Generation Victoria (GenV).",
    footL: "待核实",
    footR: "PMID:41844214",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort Profile: Generation Victoria (GenV)." },
      { k: "作者", v: "Hughes, Siero, Gülenç, et al." },
      { k: "期刊", v: "Int J Epidemiol" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1093/ije/dyag028" },
      { k: "PMID", v: "41844214" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Hughes, Siero, Gülenç, et al. Cohort Profile: Generation Victoria (GenV). Int J Epidemiol. 2026. doi:10.1093/ije/dyag028", doi: "doi:10.1093/ije/dyag028", src: "PMID:41844214" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "jacsis", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Data Resource Profile: The Japan COVID-19 and Society Internet Survey (JACSIS). [待核实]",
    en: "Data Resource Profile: The Japan COVID-19 and Society Internet Survey (JACSIS).",
    summary: "新发现的数据集文献：Data Resource Profile: The Japan COVID-19 and Society Internet Survey (JACSIS).",
    footL: "待核实",
    footR: "PMID:41806390",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Data Resource Profile: The Japan COVID-19 and Society Internet Survey (JACSIS)." },
      { k: "作者", v: "Someko, Anan, Tabuchi, et al." },
      { k: "期刊", v: "Int J Epidemiol" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1093/ije/dyag025" },
      { k: "PMID", v: "41806390" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Someko, Anan, Tabuchi, et al. Data Resource Profile: The Japan COVID-19 and Society Internet Survey (JACSIS). Int J Epidemiol. 2026. doi:10.1093/ije/dyag025", doi: "doi:10.1093/ije/dyag025", src: "PMID:41806390" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "sahd", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Sequencing and health data resource of children of African ancestry. [待核实]",
    en: "Sequencing and health data resource of children of African ancestry.",
    summary: "Individuals who self-report as Black or African American are historically underrepresented in genome-wide studies of disease risk, a disparity particularly evident in pediatric disease research. To ad",
    footL: "15684 人",
    footR: "PMID:41793414",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Sequencing and health data resource of children of African ancestry." },
      { k: "作者", v: "Kottyan, Richards, Tracy, et al." },
      { k: "期刊", v: "Genet Med" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1016/j.gim.2025.101660" },
      { k: "PMID", v: "41793414" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "15684 人" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Kottyan, Richards, Tracy, et al. Sequencing and health data resource of children of African ancestry. Genet Med. 2026. doi:10.1016/j.gim.2025.101660", doi: "doi:10.1016/j.gim.2025.101660", src: "PMID:41793414" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cput3", cat: "m3", tag: "脑科学", tc: "t-brain",
    title: "Cohort Profile Update: The Harmonised Cognitive Assessment Protocol sub-study of [待核实]",
    en: "Cohort Profile Update: The Harmonised Cognitive Assessment Protocol sub-study of the Northern Ireland Cohort for the Lon",
    summary: "新发现的数据集文献：Cohort Profile Update: The Harmonised Cognitive Assessment Protocol sub-study of the Northern Irelan",
    footL: "待核实",
    footR: "PMID:41784528",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort Profile Update: The Harmonised Cognitive Assessment Protocol sub-study of the Northern Ireland Cohort for the Longitudinal Study of Ageing (NICOLA-HCAP)." },
      { k: "作者", v: "Marr, O\'Hara, Ward, et al." },
      { k: "期刊", v: "Int J Epidemiol" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1093/ije/dyag029" },
      { k: "PMID", v: "41784528" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Marr, O\'Hara, Ward, et al. Cohort Profile Update: The Harmonised Cognitive Assessment Protocol sub-study of the Northern Ireland Cohort for the Longitudinal Study of Ageing (NICOLA-HCAP). Int J Epidemiol. 2026. doi:10.1093/ije/dyag029", doi: "doi:10.1093/ije/dyag029", src: "PMID:41784528" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "strong", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort profile: design and respondent characteristics for the longitudinal Surve [待核实]",
    en: "Cohort profile: design and respondent characteristics for the longitudinal Survey of Trauma, Resilience and Opportunity ",
    summary: "The Survey of Trauma, Resilience and Opportunity among Neighbourhoods in the Gulf (STRONG) is a longitudinal study assessing disaster exposures and outcomes of adults living along the US Gulf Coast. I",
    footL: "520 人",
    footR: "PMID:41760150",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort profile: design and respondent characteristics for the longitudinal Survey of Trauma, Resilience and Opportunity Among Neighbourhoods in the Gulf (STRONG) cohort." },
      { k: "作者", v: "Harding, Parker, Parks, et al." },
      { k: "期刊", v: "BMJ Open" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1136/bmjopen-2025-112552" },
      { k: "PMID", v: "41760150" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "520 人" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Harding, Parker, Parks, et al. Cohort profile: design and respondent characteristics for the longitudinal Survey of Trauma, Resilience and Opportunity Among Neighbourhoods in the Gulf (STRONG) cohort. BMJ Open. 2026. doi:10.1136/bmjopen-2025-112552", doi: "doi:10.1136/bmjopen-2025-112552", src: "PMID:41760150" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "hsca", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Health status characteristics and aging determinants of centenarians in Colombia [待核实]",
    en: "Health status characteristics and aging determinants of centenarians in Colombia: a real-life expanded cohort profile de",
    summary: "The study of centenarians from a biopsychosocial perspective would allow for understanding the complex interactions among biological, psychological, and social factors, and their impact on defining a ",
    footL: "待核实",
    footR: "PMID:41749124",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Health status characteristics and aging determinants of centenarians in Colombia: a real-life expanded cohort profile description." },
      { k: "作者", v: "Lozada-Martinez, Castelblanco-Toro, Salazar-Uribe, et al." },
      { k: "期刊", v: "BMC Geriatr" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1186/s12877-026-07198-z" },
      { k: "PMID", v: "41749124" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Lozada-Martinez, Castelblanco-Toro, Salazar-Uribe, et al. Health status characteristics and aging determinants of centenarians in Colombia: a real-life expanded cohort profile description. BMC Geriatr. 2026. doi:10.1186/s12877-026-07198-z", doi: "doi:10.1186/s12877-026-07198-z", src: "PMID:41749124" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cpta", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort Profile: The Adolescent and Young Adult Tracking Engagement and Managemen [待核实]",
    en: "Cohort Profile: The Adolescent and Young Adult Tracking Engagement and Management Skills (AYA TEAMS) Longitudinal Cohort",
    summary: "To describe the rationale, methods, and baseline sample descriptives of the Adolescent and Young Adult Tracking Engagement and Management Skills (AYA TEAMS) cohort. The AYA TEAMS study is a longitudin",
    footL: "待核实",
    footR: "PMID:41728276",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort Profile: The Adolescent and Young Adult Tracking Engagement and Management Skills (AYA TEAMS) Longitudinal Cohort of Childhood Cancer Survivors in the United States." },
      { k: "作者", v: "King-Dowling, Woodard, Faust, et al." },
      { k: "期刊", v: "medRxiv" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.64898/2026.02.11.26346092" },
      { k: "PMID", v: "41728276" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "King-Dowling, Woodard, Faust, et al. Cohort Profile: The Adolescent and Young Adult Tracking Engagement and Management Skills (AYA TEAMS) Longitudinal Cohort of Childhood Cancer Survivors in the United States. medRxiv. 2026. doi:10.64898/2026.02.11.26346092", doi: "doi:10.64898/2026.02.11.26346092", src: "PMID:41728276" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cpts", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort Profile: the SMRU Refugee and Migrant Pregnancy Study in Western Thailand [待核实]",
    en: "Cohort Profile: the SMRU Refugee and Migrant Pregnancy Study in Western Thailand and Eastern Myanmar.",
    summary: "Background Marginalised populations face significant health risks in pregnancy with reduced access to preventive and life-saving services due to conflict and migration. Infectious disease risk is high",
    footL: "待核实",
    footR: "PMID:41726082",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort Profile: the SMRU Refugee and Migrant Pregnancy Study in Western Thailand and Eastern Myanmar." },
      { k: "作者", v: "McGready, J White, Nosten" },
      { k: "期刊", v: "Wellcome Open Res" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.12688/wellcomeopenres.25582.2" },
      { k: "PMID", v: "41726082" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "McGready, J White, Nosten Cohort Profile: the SMRU Refugee and Migrant Pregnancy Study in Western Thailand and Eastern Myanmar. Wellcome Open Res. 2026. doi:10.12688/wellcomeopenres.25582.2", doi: "doi:10.12688/wellcomeopenres.25582.2", src: "PMID:41726082" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cpuh", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort Profile Update: HUNT4 70. [待核实]",
    en: "Cohort Profile Update: HUNT4 70.",
    summary: "新发现的数据集文献：Cohort Profile Update: HUNT4 70.",
    footL: "待核实",
    footR: "PMID:41709676",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort Profile Update: HUNT4 70." },
      { k: "作者", v: "Skjellegrind, Thingstad, Gjøra, et al." },
      { k: "期刊", v: "Int J Epidemiol" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1093/ije/dyag011" },
      { k: "PMID", v: "41709676" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Skjellegrind, Thingstad, Gjøra, et al. Cohort Profile Update: HUNT4 70. Int J Epidemiol. 2026. doi:10.1093/ije/dyag011", doi: "doi:10.1093/ije/dyag011", src: "PMID:41709676" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cpsc", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort profile: Sub-cohort study on the second phase of the Chiba Study of Mothe [待核实]",
    en: "Cohort profile: Sub-cohort study on the second phase of the Chiba Study of Mother and Child Health (C-MACH), Japan.",
    summary: "The second phase of the Chiba Study of Mother and Child Health (C-MACH) was initiated to investigate how environmental exposures from the fetal period to early childhood influence maternal and child h",
    footL: "待核实",
    footR: "PMID:41708169",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort profile: Sub-cohort study on the second phase of the Chiba Study of Mother and Child Health (C-MACH), Japan." },
      { k: "作者", v: "Takaguchi, Yoda-Tsumura, Nakayama, et al." },
      { k: "期刊", v: "BMJ Open" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1136/bmjopen-2025-110424" },
      { k: "PMID", v: "41708169" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Takaguchi, Yoda-Tsumura, Nakayama, et al. Cohort profile: Sub-cohort study on the second phase of the Chiba Study of Mother and Child Health (C-MACH), Japan. BMJ Open. 2026. doi:10.1136/bmjopen-2025-110424", doi: "doi:10.1136/bmjopen-2025-110424", src: "PMID:41708169" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "signal", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Stroke Investigation Group in North and Central London (SIGNAL): cohort profile  [待核实]",
    en: "Stroke Investigation Group in North and Central London (SIGNAL): cohort profile of a prospective large-scale comprehensi",
    summary: "Large-scale stroke registries can provide critical insights into disease mechanisms, progression and healthcare needs, informing prevention and care. However, few collect detailed demographic, brain i",
    footL: "931 人",
    footR: "PMID:41617242",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Stroke Investigation Group in North and Central London (SIGNAL): cohort profile of a prospective large-scale comprehensive stroke registry." },
      { k: "作者", v: "Ozkan, Ambler, Nash, et al." },
      { k: "期刊", v: "BMJ Open" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1136/bmjopen-2025-110772" },
      { k: "PMID", v: "41617242" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "931 人" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Ozkan, Ambler, Nash, et al. Stroke Investigation Group in North and Central London (SIGNAL): cohort profile of a prospective large-scale comprehensive stroke registry. BMJ Open. 2026. doi:10.1136/bmjopen-2025-110772", doi: "doi:10.1136/bmjopen-2025-110772", src: "PMID:41617242" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "ncs", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Update of the Novara Cohort Study (NCS): protocol evolution of a population-base [待核实]",
    en: "Update of the Novara Cohort Study (NCS): protocol evolution of a population-based longitudinal study on ageing in Northe",
    summary: "The Novara Cohort Study (NCS) was established to investigate the biological, psychological and social factors that influence ageing in the general population. The study aims to identify early risk fac",
    footL: "待核实",
    footR: "PMID:41617235",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Update of the Novara Cohort Study (NCS): protocol evolution of a population-based longitudinal study on ageing in Northern Italy - cohort profile." },
      { k: "作者", v: "Cracas, Garro, Venetucci, et al." },
      { k: "期刊", v: "BMJ Open" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1136/bmjopen-2025-109328" },
      { k: "PMID", v: "41617235" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Cracas, Garro, Venetucci, et al. Update of the Novara Cohort Study (NCS): protocol evolution of a population-based longitudinal study on ageing in Northern Italy - cohort profile. BMJ Open. 2026. doi:10.1136/bmjopen-2025-109328", doi: "doi:10.1136/bmjopen-2025-109328", src: "PMID:41617235" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "tamhs", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort Profile: The Tokyo Adolescent Mental Health Study (TAMHS). [待核实]",
    en: "Cohort Profile: The Tokyo Adolescent Mental Health Study (TAMHS).",
    summary: "The Tokyo Adolescent Mental Health Study (TAMHS) is an ongoing, school-based longitudinal cohort designed to elucidate the developmental trajectories of mental health among adolescents in Japan and to",
    footL: "2435 人",
    footR: "PMID:41581911",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort Profile: The Tokyo Adolescent Mental Health Study (TAMHS)." },
      { k: "作者", v: "Zhou, Yamaguchi, Nishida, et al." },
      { k: "期刊", v: "J Epidemiol" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.2188/jea.JE20250338" },
      { k: "PMID", v: "41581911" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "2435 人" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Zhou, Yamaguchi, Nishida, et al. Cohort Profile: The Tokyo Adolescent Mental Health Study (TAMHS). J Epidemiol. 2026. doi:10.2188/jea.JE20250338", doi: "doi:10.2188/jea.JE20250338", src: "PMID:41581911" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "real", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Research on Eating and Adolescent Lifestyle (REAL) 2.0: 15-year follow-up study  [待核实]",
    en: "Research on Eating and Adolescent Lifestyle (REAL) 2.0: 15-year follow-up study of eating disorders and weight-related t",
    summary: "Few studies have examined how psychosocial risk and protective factors in adolescence shape mental health outcomes and other multimorbid conditions in adulthood, particularly among Canadian youth. The",
    footL: "待核实",
    footR: "PMID:41526025",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Research on Eating and Adolescent Lifestyle (REAL) 2.0: 15-year follow-up study of eating disorders and weight-related trajectories, mental health and substance use health from early adolescence to ea" },
      { k: "作者", v: "Obeid, Buchholz, Bradley, et al." },
      { k: "期刊", v: "BMJ Open" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1136/bmjopen-2025-103434" },
      { k: "PMID", v: "41526025" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Obeid, Buchholz, Bradley, et al. Research on Eating and Adolescent Lifestyle (REAL) 2.0: 15-year follow-up study of eating disorders and weight-related trajectories, mental health and substance use health from early adolescence to early adulthood-a Canadian cohort profile. BMJ Open. 2026. doi:10.1136/bmjopen-2025-103434", doi: "doi:10.1136/bmjopen-2025-103434", src: "PMID:41526025" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cpue", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort Profile Update: Expanding the Cardiovascular Risk in Young Finns Study in [待核实]",
    en: "Cohort Profile Update: Expanding the Cardiovascular Risk in Young Finns Study into a multigenerational cohort.",
    summary: "新发现的数据集文献：Cohort Profile Update: Expanding the Cardiovascular Risk in Young Finns Study into a multigeneration",
    footL: "待核实",
    footR: "PMID:41489589",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort Profile Update: Expanding the Cardiovascular Risk in Young Finns Study into a multigenerational cohort." },
      { k: "作者", v: "Pahkala, Rovio, Kartiosuo, et al." },
      { k: "期刊", v: "Int J Epidemiol" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1093/ije/dyaf206" },
      { k: "PMID", v: "41489589" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Pahkala, Rovio, Kartiosuo, et al. Cohort Profile Update: Expanding the Cardiovascular Risk in Young Finns Study into a multigenerational cohort. Int J Epidemiol. 2026. doi:10.1093/ije/dyaf206", doi: "doi:10.1093/ije/dyaf206", src: "PMID:41489589" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cput4", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort profile update: The 1993 Pelotas (Brazil) Birth Cohort follow-up at 30 ye [待核实]",
    en: "Cohort profile update: The 1993 Pelotas (Brazil) Birth Cohort follow-up at 30 years.",
    summary: "新发现的数据集文献：Cohort profile update: The 1993 Pelotas (Brazil) Birth Cohort follow-up at 30 years.",
    footL: "待核实",
    footR: "PMID:41481235",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort profile update: The 1993 Pelotas (Brazil) Birth Cohort follow-up at 30 years." },
      { k: "作者", v: "Gonçalves, Gonçalves-Silva, de Oliveira, et al." },
      { k: "期刊", v: "Int J Epidemiol" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1093/ije/dyaf211" },
      { k: "PMID", v: "41481235" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Gonçalves, Gonçalves-Silva, de Oliveira, et al. Cohort profile update: The 1993 Pelotas (Brazil) Birth Cohort follow-up at 30 years. Int J Epidemiol. 2026. doi:10.1093/ije/dyaf211", doi: "doi:10.1093/ije/dyaf211", src: "PMID:41481235" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "klso", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Korean longitudinal study on digitally optimized mental healthcare: a cohort pro [待核实]",
    en: "Korean longitudinal study on digitally optimized mental healthcare: a cohort profile.",
    summary: "The Korean Longitudinal Study on Digitally Optimized Mental Healthcare is an innovative multicenter trial-ready cohort study. It aims to develop a digitally integrated mental healthcare platform that ",
    footL: "3100 人",
    footR: "PMID:41455494",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Korean longitudinal study on digitally optimized mental healthcare: a cohort profile." },
      { k: "作者", v: "Kim, Choi, Kim, et al." },
      { k: "期刊", v: "Methods" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "10.1016/j.ymeth.2025.12.011" },
      { k: "PMID", v: "41455494" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "3100 人" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Kim, Choi, Kim, et al. Korean longitudinal study on digitally optimized mental healthcare: a cohort profile. Methods. 2026. doi:10.1016/j.ymeth.2025.12.011", doi: "doi:10.1016/j.ymeth.2025.12.011", src: "PMID:41455494" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "lsaha", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort profile: the Lebanon Study on Aging and HeAlth (LSAHA). [待核实]",
    en: "Cohort profile: the Lebanon Study on Aging and HeAlth (LSAHA).",
    summary: "This paper describes the design and cohort profile of the Lebanon Study on Aging and HeAlth (LSAHA), the first population-level study of Alzheimer\'s Disease and Related Dementias (ADRD) in an Arab co",
    footL: "待核实",
    footR: "PMID:41449362",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort profile: the Lebanon Study on Aging and HeAlth (LSAHA)." },
      { k: "作者", v: "Mendes de Leon, Elbejjani, Abdulrahim, et al." },
      { k: "期刊", v: "BMC Public Health" },
      { k: "年份", v: "2025" },
      { k: "DOI", v: "10.1186/s12889-025-25983-0" },
      { k: "PMID", v: "41449362" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Mendes de Leon, Elbejjani, Abdulrahim, et al. Cohort profile: the Lebanon Study on Aging and HeAlth (LSAHA). BMC Public Health. 2025. doi:10.1186/s12889-025-25983-0", doi: "doi:10.1186/s12889-025-25983-0", src: "PMID:41449362" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cppd", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort Profile: PRECISE-DYAD: a prospective cohort study linking maternal and in [待核实]",
    en: "Cohort Profile: PRECISE-DYAD: a prospective cohort study linking maternal and infant health trajectories in sub-Saharan ",
    summary: "The PRECISE-DYAD study is a prospective observational cohort, designed to investigate health outcomes among mother-child pairs (dyads), over the first three years of life in two contexts from sub-Saha",
    footL: "待核实",
    footR: "PMID:41445636",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort Profile: PRECISE-DYAD: a prospective cohort study linking maternal and infant health trajectories in sub-Saharan Africa." },
      { k: "作者", v: "Volvert, Wilson, Owino, et al." },
      { k: "期刊", v: "medRxiv" },
      { k: "年份", v: "2025" },
      { k: "DOI", v: "10.64898/2025.12.17.25342279" },
      { k: "PMID", v: "41445636" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Volvert, Wilson, Owino, et al. Cohort Profile: PRECISE-DYAD: a prospective cohort study linking maternal and infant health trajectories in sub-Saharan Africa. medRxiv. 2025. doi:10.64898/2025.12.17.25342279", doi: "doi:10.64898/2025.12.17.25342279", src: "PMID:41445636" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "aofp2", cat: "m3", tag: "脑科学", tc: "t-brain",
    title: "An Open, Fully-processed, Longitudinal Data Resource to Study Brain Development  [待核实]",
    en: "An Open, Fully-processed, Longitudinal Data Resource to Study Brain Development and Transdiagnostic Executive Function.",
    summary: "Executive function (EF) develops rapidly during adolescence. However, deficits in EF also emerge in adolescence, representing a transdiagnostic symptom associated with many forms of psychopathology. T",
    footL: "132 人",
    footR: "PMID:41292855",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "An Open, Fully-processed, Longitudinal Data Resource to Study Brain Development and Transdiagnostic Executive Function." },
      { k: "作者", v: "Sevchik, Shafiei, Murtha, et al." },
      { k: "期刊", v: "bioRxiv" },
      { k: "年份", v: "2025" },
      { k: "DOI", v: "10.1101/2025.11.10.687633" },
      { k: "PMID", v: "41292855" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "132 人" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Sevchik, Shafiei, Murtha, et al. An Open, Fully-processed, Longitudinal Data Resource to Study Brain Development and Transdiagnostic Executive Function. bioRxiv. 2025. doi:10.1101/2025.11.10.687633", doi: "doi:10.1101/2025.11.10.687633", src: "PMID:41292855" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cptn2", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort profile: the nurses\' mental health study. [待核实]",
    en: "Cohort profile: the nurses\' mental health study.",
    summary: "Owing to the special nature of work and practice environment, nurses face relatively higher mental health risks. The mental health problems of nurses in China\'s tertiary hospitals are particularly pr",
    footL: "待核实",
    footR: "PMID:41286936",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort profile: the nurses\' mental health study." },
      { k: "作者", v: "Zhang, Yu, Ning, et al." },
      { k: "期刊", v: "BMC Nurs" },
      { k: "年份", v: "2025" },
      { k: "DOI", v: "10.1186/s12912-025-04128-z" },
      { k: "PMID", v: "41286936" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Zhang, Yu, Ning, et al. Cohort profile: the nurses\' mental health study. BMC Nurs. 2025. doi:10.1186/s12912-025-04128-z", doi: "doi:10.1186/s12912-025-04128-z", src: "PMID:41286936" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cpap", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort profile: a prenatal birth cohort study of intergenerational risk and resi [待核实]",
    en: "Cohort profile: a prenatal birth cohort study of intergenerational risk and resilience after conflict and forced displac",
    summary: "As of 2024, 123.2 million people had been forcibly displaced as a result of persecution, armed conflict or climate-related catastrophes, and these numbers are predicted to rise. There is a growing awa",
    footL: "待核实",
    footR: "PMID:41248338",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort profile: a prenatal birth cohort study of intergenerational risk and resilience after conflict and forced displacement." },
      { k: "作者", v: "Wuermli, Hiott, Ugarte, et al." },
      { k: "期刊", v: "BMJ Open" },
      { k: "年份", v: "2025" },
      { k: "DOI", v: "10.1136/bmjopen-2025-099052" },
      { k: "PMID", v: "41248338" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Wuermli, Hiott, Ugarte, et al. Cohort profile: a prenatal birth cohort study of intergenerational risk and resilience after conflict and forced displacement. BMJ Open. 2025. doi:10.1136/bmjopen-2025-099052", doi: "doi:10.1136/bmjopen-2025-099052", src: "PMID:41248338" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "bhrc", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Cohort Profile: Brazilian High-Risk Cohort for Mental Health Conditions (BHRC). [待核实]",
    en: "Cohort Profile: Brazilian High-Risk Cohort for Mental Health Conditions (BHRC).",
    summary: "新发现的数据集文献：Cohort Profile: Brazilian High-Risk Cohort for Mental Health Conditions (BHRC).",
    footL: "待核实",
    footR: "PMID:41241815",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Cohort Profile: Brazilian High-Risk Cohort for Mental Health Conditions (BHRC)." },
      { k: "作者", v: "Salum, de Giusti, Souza, et al." },
      { k: "期刊", v: "Int J Epidemiol" },
      { k: "年份", v: "2025" },
      { k: "DOI", v: "10.1093/ije/dyaf192" },
      { k: "PMID", v: "41241815" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Salum, de Giusti, Souza, et al. Cohort Profile: Brazilian High-Risk Cohort for Mental Health Conditions (BHRC). Int J Epidemiol. 2025. doi:10.1093/ije/dyaf192", doi: "doi:10.1093/ije/dyaf192", src: "PMID:41241815" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cbbt", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Consumers’ Buying Behaviour Towards Local Food in Greece During Economic Depress [待核实]",
    en: "Consumers’ Buying Behaviour Towards Local Food in Greece During Economic Depression Period",
    summary: "新发现的数据集文献：Consumers’ Buying Behaviour Towards Local Food in Greece During Economic Depression Period",
    footL: "待核实",
    footR: "DOI:10.15556/ijsim.02.04.003",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Consumers’ Buying Behaviour Towards Local Food in Greece During Economic Depression Period" },
      { k: "作者", v: "Tsourgiannis L, Loizou E, Karasavoglou A, et al." },
      { k: "期刊", v: "International Journal of Strategic Innovative Marketing" },
      { k: "年份", v: "2116" },
      { k: "DOI", v: "10.15556/ijsim.02.04.003" },
      { k: "PMID", v: "" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Tsourgiannis L, Loizou E, Karasavoglou A, et al. Consumers’ Buying Behaviour Towards Local Food in Greece During Economic Depression Period International Journal of Strategic Innovative Marketing. 2116. doi:10.15556/ijsim.02.04.003", doi: "doi:10.15556/ijsim.02.04.003", src: "Crossref" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "laau", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Library anxiety among undergraduate students in Greece [待核实]",
    en: "Library anxiety among undergraduate students in Greece",
    summary: "新发现的数据集文献：Library anxiety among undergraduate students in Greece",
    footL: "待核实",
    footR: "DOI:10.15556/ijiim.02.02.003",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Library anxiety among undergraduate students in Greece" },
      { k: "作者", v: "Doris K, Provata P, Vraimaki E" },
      { k: "期刊", v: "International Journal on Integrated Information Management" },
      { k: "年份", v: "2115" },
      { k: "DOI", v: "10.15556/ijiim.02.02.003" },
      { k: "PMID", v: "" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Doris K, Provata P, Vraimaki E Library anxiety among undergraduate students in Greece International Journal on Integrated Information Management. 2115. doi:10.15556/ijiim.02.02.003", doi: "doi:10.15556/ijiim.02.02.003", src: "Crossref" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "caqc", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Consistency and Quality Check of Survey Data in India [待核实]",
    en: "Consistency and Quality Check of Survey Data in India",
    summary: "新发现的数据集文献：Consistency and Quality Check of Survey Data in India",
    footL: "待核实",
    footR: "DOI:10.12927/whp.2014.23793",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Consistency and Quality Check of Survey Data in India" },
      { k: "作者", v: "Swain P, Meitei M" },
      { k: "期刊", v: "World Health &amp; Population" },
      { k: "年份", v: "2104" },
      { k: "DOI", v: "10.12927/whp.2014.23793" },
      { k: "PMID", v: "" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "Swain P, Meitei M Consistency and Quality Check of Survey Data in India World Health &amp; Population. 2104. doi:10.12927/whp.2014.23793", doi: "doi:10.12927/whp.2014.23793", src: "Crossref" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "cpes", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "Collaborative Psychiatric Epidemiology Surveys 2001 - 2003 [待核实]",
    en: "Collaborative Psychiatric Epidemiology Surveys 2001 - 2003",
    summary: "新发现的数据集文献：Collaborative Psychiatric Epidemiology Surveys 2001 - 2003",
    footL: "待核实",
    footR: "新发现",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "Collaborative Psychiatric Epidemiology Surveys 2001 - 2003" },
      { k: "作者", v: "re3data.org" },
      { k: "期刊", v: "re3data registry" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "" },
      { k: "PMID", v: "" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "re3data.org Collaborative Psychiatric Epidemiology Surveys 2001 - 2003 re3data registry. 2026.", doi: "", src: "Crossref" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  },
{
    id: "gdr", cat: "m2", tag: "国际数据", tc: "t-intl",
    title: "GALENOS Data Repository [待核实]",
    en: "GALENOS Data Repository",
    summary: "新发现的数据集文献：GALENOS Data Repository",
    footL: "待核实",
    footR: "新发现",
    basic: [
      { k: "来源", v: "自动发现 (待人工核实)" },
      { k: "文献标题", v: "GALENOS Data Repository" },
      { k: "作者", v: "re3data.org" },
      { k: "期刊", v: "re3data registry" },
      { k: "年份", v: "2026" },
      { k: "DOI", v: "" },
      { k: "PMID", v: "" }
    ],
    struct: [
      { k: "数据结构", v: "待人工核实——请根据原文补充变量、量表、诊断工具等信息" },
      { k: "样本量", v: "待核实" }
    ],
    q: [
      { k: "研究问题", v: "待人工核实——请根据数据集设计补充研究问题" }
    ],
    lit: [
      { ref: "re3data.org GALENOS Data Repository re3data registry. 2026.", doi: "", src: "Crossref" }
    ],
    access: [
      { k: "获取方式", v: "待人工核实——请查阅原文获取数据申请/下载方式" },
      { k: "自动发现时间", v: "2026-08-16" }
    ]
  }
];
