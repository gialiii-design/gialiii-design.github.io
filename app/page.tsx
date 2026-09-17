import Image from 'next/image';
/* oxlint-disable next/no-html-link-for-pages -- Static GitHub Pages export uses document navigation. */
import { Header, Footer } from './shared';
import { SkillsMarquee } from './skills-marquee';
import { WorkShowcase } from './work-showcase';

const capabilities = [
  [
    '01',
    '用户研究',
    '访谈、观察与可用性测试，把零散反馈整理成可解释的设计判断。',
  ],
  [
    '02',
    '产品体验与信息架构',
    '梳理业务、用户与内容关系，建立清晰的任务路径和信息层级。',
  ],
  [
    '03',
    'UI 与视觉设计',
    '从核心流程到高保真界面，兼顾视觉表达、规范与研发落地。',
  ],
  [
    '04',
    'AIGC 辅助设计',
    '用 AI 快速探索人物、场景和视觉方向，再完成筛选、合成与版式设计。',
  ],
];

const skills = [
  '用户研究',
  '产品策略',
  '信息架构',
  '交互设计',
  'UI 设计',
  '可用性测试',
  '服务设计',
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero wrap">
          <div className="eyebrow hero-eyebrow">产品 / UX / UI 设计师</div>
          <div className="hero-name hero-original-name">
            <h1>
              Gia Li<span>.</span>
            </h1>
            <span>李佳玲</span>
          </div>
          <div className="hero-bottom">
            <p className="hero-positioning">
              以研究理解真实问题，用系统思维把洞察转化为清晰、可落地的产品体验。
            </p>
            <div className="hero-actions">
              <a className="action-button magnetic" href="#work">
                <span>查看作品</span>
                <b aria-hidden="true">↓</b>
              </a>
              <a
                className="action-button action-button-secondary magnetic"
                href="/resume-gia-li.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>下载简历</span>
                <b aria-hidden="true">↗</b>
              </a>
            </div>
          </div>
        </section>

        <SkillsMarquee />

        <WorkShowcase />

        <section id="capabilities" className="capabilities-section wrap">
          <div className="section-heading-unified" data-reveal>
            <div>
              <div className="eyebrow">CAPABILITIES</div>
              <h2>能力方向</h2>
            </div>
            <p>从理解用户和业务，到组织产品体验并完成界面表达。</p>
          </div>
          <div className="capability-grid">
            {capabilities.map(([number, title, body], index) => (
              <article
                className="capability-card"
                key={title}
                data-reveal
                data-delay={String((index % 2) + 1)}
              >
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about-section wrap" data-reveal>
          <div className="section-heading-unified">
            <div>
              <div className="eyebrow">ABOUT / EXPERIENCE</div>
              <h2>关于我</h2>
            </div>
          </div>
          <div className="about-home-grid">
            <Image
              className="about-portrait"
              src="/gia-portrait.jpg"
              alt="李佳玲 Gia Li"
              width={2856}
              height={1904}
              unoptimized
            />
            <div className="about-home-copy">
              <p>
                我是一名拥有产品设计背景的 UX / UI
                设计师，硕士毕业于英国拉夫堡大学用户体验与服务设计专业。
              </p>
              <p>
                我关注用户真实需求、商业目标与产品可行性之间的关系，擅长通过用户研究、可用性测试和信息架构梳理发现问题，并将研究洞察转化为清晰、可落地的产品策略与界面体验。
              </p>
              <p>
                从服务设计、无障碍体验到 B
                端复杂系统，我希望设计不只是呈现结果，也能解释问题为什么发生，以及方案如何被验证。
              </p>
              <h3 className="skills-heading">核心能力</h3>
              <div className="skills">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <div className="about-links">
                <a className="action-button magnetic" href="/about">
                  <span>进一步了解我</span>
                  <b aria-hidden="true">→</b>
                </a>
                <a
                  className="action-button action-button-secondary magnetic"
                  href="/resume-gia-li.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>查看完整简历</span>
                  <b aria-hidden="true">↗</b>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" data-reveal>
          <div className="contact-inner wrap">
            <div>
              <div className="eyebrow">CONTACT</div>
              <h2>联系我</h2>
            </div>
            <div className="contact-content">
              <p>
                如果你正在寻找一位兼顾用户研究、产品逻辑与界面体验的设计师，欢迎与我联系。
              </p>
              <a className="contact-email" href="mailto:lijialing0120@163.com">
                lijialing0120@163.com
              </a>
              <a
                className="action-button magnetic"
                href="mailto:lijialing0120@163.com"
              >
                <span>发送邮件</span>
                <b aria-hidden="true">↗</b>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
