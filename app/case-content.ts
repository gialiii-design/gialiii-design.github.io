export const prototypeUrl = 'https://www.figma.com/proto/nLs1qfMkAN1l3BmE5f5q5J/Group-12---Industry-Project?page-id=23%3A3&node-id=49-4014&viewport=-4295%2C-2627%2C0.6&t=AgRoVNXeuDC0op9J-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=49%3A4014&show-proto-sidebar=1';

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
};

export const lvSteps = [
  ['发现问题', '通过启发式评估检查浏览与购物流程，识别可用性问题。'],
  ['验证问题', '结合定量、定性用户测试与无障碍评估，核对问题对任务完成和信息理解的影响。'],
  ['提炼洞察', '交叉分析不同方法的发现，归纳商品探索、购买决策与信息理解三个方向的核心问题。'],
  ['优化体验', '把洞察对应到筛选、导航、关键信息和品牌表达的具体优化方案。'],
];
