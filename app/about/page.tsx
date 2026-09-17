import Image from 'next/image';
/* oxlint-disable next/no-html-link-for-pages -- Static GitHub Pages export uses document navigation. */
import { Header, Footer } from '../shared';
import { CopyMiniProgramLink } from '../copy-mini-program';

const methods = [
  '用户研究',
  '用户旅程',
  '信息架构',
  '交互原型',
  'UI 设计',
  '可用性测试',
  '服务设计',
  'AIGC 辅助设计',
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main" className="about-page">
        <section className="about-page-hero wrap" data-reveal>
          <a className="back-link" href="/#about">
            ← 返回首页
          </a>
          <div className="about-hero-content">
            <div className="eyebrow hero-eyebrow">ABOUT GIA</div>
            <div className="about-hero-title">
              <h1>关于我</h1>
            </div>
            <p className="hero-positioning">
              从视觉设计出发，逐步将关注点扩展到用户研究、产品逻辑和完整的体验过程。
            </p>
          </div>
        </section>

        <section className="about-page-intro wrap" data-reveal>
          <Image
            src="/gia-portrait.jpg"
            alt="李佳玲 Gia Li"
            width={2856}
            height={1904}
            unoptimized
          />
          <div>
            <p className="about-page-lead">
              你好，我是李佳玲，一名拥有产品设计背景的 UX / UI 设计师。
            </p>
            <p>
              本科阶段的视觉与产品训练让我具备较好的形式表达能力。在实习和项目过程中，我发现自己更关心设计之前的问题：用户为什么会遇到困难、信息应该如何组织，以及设计怎样真正支持业务和使用过程。
            </p>
            <p>
              因此，我在研究生阶段选择用户体验与服务设计，并持续练习从研究、分析、体验策略到交互和界面设计的完整方法。
            </p>
            <div className="about-methods">
              {methods.map((method) => (
                <span key={method}>{method}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="about-index-section wrap" data-reveal>
          <header className="about-index-heading">
            <div className="eyebrow">EXPERIENCE</div>
            <h2>实习与项目经历</h2>
          </header>
          <div className="experience-card-list">
            <article className="experience-card">
              <div className="experience-mark mark-gia">G.</div>
              <div className="experience-card-copy">
                <h3>Gia Li 个人作品集网站</h3>
                <p>UX / UI 设计与网站搭建</p>
                <span>2026.09 — 至今</span>
              </div>
            </article>
            <article className="experience-card">
              <div className="experience-mark mark-insurance">团</div>
              <div className="experience-card-copy">
                <h3>某大型保险公司团险销售系统</h3>
                <p>B2B 产品设计</p>
                <span>2026.04 — 2026.08</span>
              </div>
              <a
                className="action-button action-button-secondary experience-action magnetic"
                href="/work/insurance"
              >
                <span>查看案例</span>
                <b aria-hidden="true">→</b>
              </a>
            </article>
            <article className="experience-card">
              <div className="experience-mark mark-yz">元</div>
              <div className="experience-card-copy">
                <h3>元稚项目组</h3>
                <p>产品 / UI 设计实习</p>
                <span>2025.11 — 2026.03</span>
              </div>
              <CopyMiniProgramLink />
            </article>
            <article className="experience-card">
              <div className="experience-mark mark-sparck">S</div>
              <div className="experience-card-copy">
                <h3>Sparck × Loughborough</h3>
                <p>UX Designer · UReady</p>
                <span>2025.04 — 2025.07</span>
              </div>
              <a
                className="action-button action-button-secondary experience-action magnetic"
                href="/work/uready"
              >
                <span>查看案例</span>
                <b aria-hidden="true">→</b>
              </a>
            </article>
            <article className="experience-card">
              <div className="experience-mark mark-lv">LV</div>
              <div className="experience-card-copy">
                <h3>Louis Vuitton 官网</h3>
                <p>UX Researcher / Product Designer</p>
                <span>2024.11 — 2025.02</span>
              </div>
              <a
                className="action-button action-button-secondary experience-action magnetic"
                href="/work/lv"
              >
                <span>查看案例</span>
                <b aria-hidden="true">→</b>
              </a>
            </article>
            <article className="experience-card">
              <div className="experience-mark mark-mango">M</div>
              <div className="experience-card-copy">
                <h3>芒果TV</h3>
                <p>视觉 / 3D 设计实习</p>
                <span>2023.04 — 2023.07</span>
              </div>
            </article>
          </div>
        </section>

        <section
          className="about-index-section education-index-section wrap"
          data-reveal
        >
          <header className="about-index-heading">
            <div className="eyebrow">EDUCATION</div>
            <h2>学习经历</h2>
          </header>
          <div className="experience-card-list">
            <article className="experience-card">
              <div className="experience-mark mark-lboro">L</div>
              <div className="experience-card-copy">
                <h3>英国拉夫堡大学</h3>
                <p>用户体验与服务设计</p>
                <span>硕士</span>
              </div>
            </article>
            <article className="experience-card">
              <div className="experience-mark mark-zjicm">浙</div>
              <div className="experience-card-copy">
                <h3>浙江传媒学院</h3>
                <p>产品设计</p>
                <span>本科</span>
              </div>
            </article>
          </div>
        </section>

        <section className="about-page-cta wrap" data-reveal>
          <div>
            <div className="eyebrow">MORE DETAILS</div>
            <h2>查看完整简历</h2>
          </div>
          <a
            className="action-button magnetic"
            href="/resume-gia-li.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>打开 PDF</span>
            <b aria-hidden="true">↗</b>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
