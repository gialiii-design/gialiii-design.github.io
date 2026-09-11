export const prototypeUrl = 'https://www.figma.com/proto/nLs1qfMkAN1l3BmE5f5q5J/Group-12---Industry-Project?page-id=23%3A3&node-id=49-4014&viewport=-4295%2C-2627%2C0.6&t=AgRoVNXeuDC0op9J-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=49%3A4014&show-proto-sidebar=1';

export const evidenceLinks: Record<string, {label: string; href: string}[]> = {
  uready: [
    {label: '查看研究过程', href: 'https://www.figma.com/board/lUWerGJRP9oiiP1myJwqS8/Group-12---Industry-Project?node-id=715-4953&t=ggnbfHl3nSLpd7Rp-1'},
    {label: '查看 UI 过程', href: 'https://www.figma.com/design/TYSKqEY3D7sFXpAdCYCKPq/UReady?node-id=0-1&t=0geKDisnzme1HNXv-1'},
  ],
  careshare: [
    {label: '查看服务设计过程', href: 'https://miro.com/app/board/uXjVIRzLGYQ=/?share_link_id=937717218812'},
  ],
  insurance: [
    {label: '查看完整脱敏方案', href: '/projects/insurance-anonymized-case-study.pdf'},
    {label: '查看设计过程', href: 'https://www.figma.com/design/UMxuI1QCK0h4DWXVV7GmS1/%E4%BF%9D%E9%99%A9%E9%94%80%E5%94%AE%E7%B3%BB%E7%BB%9F?node-id=9-8&t=q4cXAjFNVtphFAkH-1'},
  ],
  aigc: [
    {label: '查看 AIGC 探索过程', href: 'https://www.figma.com/design/UMxuI1QCK0h4DWXVV7GmS1/%E4%BF%9D%E9%99%A9%E9%94%80%E5%94%AE%E7%B3%BB%E7%BB%9F?node-id=1376-18554&t=q4cXAjFNVtphFAkH-1'},
  ],
  lv: [
    {label: '查看可用性评估报告', href: '/projects/lv-usability-evaluation-presentation.pdf'},
  ],
};

type Chapter = {id: string; title: string; pages: [number, string][]};
export const chapters: Record<string, Chapter[]> = {
  uready: [
    {id: 'research', title: '背景与研究', pages: [[2, '项目背景：行前准备的信息困境'], [3, '从研究中重新定义问题']]},
    {id: 'design', title: '策略与核心体验', pages: [[4, '从用户洞察到产品策略'], [5, '个性化准备路径'], [6, '整合可信信息'], [7, '核心界面展示']]},
    {id: 'testing', title: '用户测试', pages: [[8, '用户测试与方案反馈']]},
  ],
  lv: [
    {id: 'research', title: '评估框架与研究洞察', pages: [[2, '评估框架'], [3, '研究发现'], [4, '洞察提炼']]},
    {id: 'exploration', title: '更连贯的商品探索体验', pages: [[5, '商品探索体验概览'], [6, '统一筛选系统'], [7, '强化导航反馈'], [8, '支持商品回溯'], [9, '前置库存状态反馈']]},
    {id: 'decision', title: '让关键信息更接近决策', pages: [[10, '购买决策支持概览'], [11, '提升关键信息可见性'], [12, '补充决策依据']]},
    {id: 'understanding', title: '让品牌表达更容易理解', pages: [[13, '品牌表达优化概览'], [14, '提升信息可读性'], [15, '降低术语理解门槛'], [16, '图文协同表达']]},
  ],
  aigc: [
    {id: 'direction', title: '业务背景与设计流程', pages: [[2, '业务背景与视觉方向'], [4, '从设计拆解到视觉落地']]},
    {id: 'school', title: '开学季 · 活力与守护', pages: [[5, '开学季主题与版式拆解'], [9, '人物形象生成问题'], [10, '人物形象调整'], [11, '人物形象确定与关键词解析'], [12, '角色与动作延展'], [13, '人物、校园与品牌符号融合'], [15, '海报、宣传物料与活动详情页适配']]},
    {id: 'autumn', title: '中秋 · 陪伴与团圆', pages: [[6, '中秋主题与版式拆解'], [7, '视觉风格比较与选择'], [8, '中秋场景迭代'], [14, '家庭、场景与中秋元素融合'], [16, '中秋活动视觉应用']]},
    {id: 'outcome', title: '最终视觉展示', pages: [[3, '两组活动视觉与应用总览']]},
  ],
  careshare: [
    {id: 'journey', title: '从照护压力到服务旅程', pages: [[7, '家长从了解服务到预约、接送与反馈的完整旅程']]},
    {id: 'principles', title: '三项服务原则', pages: [[8, '信任与安全、社区支持、灵活照护']]},
    {id: 'outcome', title: '官网与 App 原型', pages: [[18, '官网、App 与品牌触点的最终输出']]},
  ],
  upup: [
    {id: 'research', title: '用户研究与服务概念', pages: [[5, '从糖尿病患者的日常行为与社区观察出发']]},
    {id: 'journey', title: '用户旅程与线下活动空间', pages: [[6, '从发现活动到参与、交流与反馈的体验链路'], [2, '站立式活动空间与活动参与流程']]},
    {id: 'app', title: 'App 预约与活动体验', pages: [[3, '活动浏览、预约、电子票与通知流程']]},
  ],
};

export const lvSteps = [
  ['发现问题', '通过启发式评估检查浏览与购物流程，识别可用性问题。'],
  ['验证问题', '结合定量、定性用户测试与无障碍评估，核对问题对任务完成和信息理解的影响。'],
  ['提炼洞察', '交叉分析不同方法的发现，归纳商品探索、购买决策与信息理解三个方向的核心问题。'],
  ['优化体验', '把洞察对应到筛选、导航、关键信息和品牌表达的具体优化方案。'],
];
