import {projects} from './projects';
import {Header, Footer} from './shared';

const skills = ['用户研究', '产品策略', '信息架构', '交互设计', 'UI 设计', '可用性测试', '服务设计'];

export default function Home() {
  return <>
    <Header />
    <main id="main">
      <section className="hero wrap">
        <div className="eyebrow">产品 / UX / UI 设计师</div>
        <div className="hero-name"><h1>Gia Li<span>.</span></h1><span>李佳玲</span></div>
        <div className="hero-bottom">
          <p className="hero-positioning">以研究理解真实问题，用系统思维把洞察转化为清晰、可落地的产品体验。</p>
          <a className="text-link" href="#work">浏览精选作品 ↓</a>
        </div>
      </section>
      <section id="about" className="about-section wrap">
        <div className="about-heading"><div className="eyebrow">ABOUT</div><h2>关于我</h2><img className="about-portrait" src="/gia-portrait.jpg" alt="李佳玲 Gia Li" width="2856" height="1904" loading="lazy"/></div>
        <div>
          <p>我是一名拥有产品设计背景的 UX / UI 设计师，毕业于拉夫堡大学用户体验与服务<span className="keep-together">设计专业。</span></p>
          <p>我关注用户真实需求、商业目标与产品可行性之间的关系，擅长通过用户研究、可用性测试和信息架构梳理发现问题，并将研究洞察转化为清晰、可落地的产品策略与<span className="keep-together">界面体验。</span></p>
          <p>从服务设计、无障碍体验到 B 端复杂系统，我希望设计不只是呈现结果，也能解释问题为什么发生，以及方案<span className="keep-together">如何被验证。</span></p>
          <h3 className="skills-heading">核心能力</h3>
          <div className="skills">{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
          <a className="text-link resume-link" href="/resume-gia-li.pdf" target="_blank" rel="noopener noreferrer" aria-label="查看完整简历 PDF，在新标签页打开">查看完整简历 ↗</a>
        </div>
      </section>
      <section id="work" className="wrap">
        <div className="section-label"><h2>精选作品 <span>Selected work</span></h2><span>01 — 05 / + EXPLORATION</span></div>
        <div className="project-grid">{projects.map(p =>
          <a className={`project-card ${p.slug}`} key={p.slug} href={`/work/${p.slug}`}>
            <div className="project-image"><img src={projectCover(p.slug)} alt={p.title + '项目展示'} width="1920" height="1080" loading="lazy"/><span aria-hidden="true">↗</span></div>
            <div className="project-meta"><span>{p.number}</span><span>{p.category}</span></div>
            <h3>{p.title}</h3><p>{p.subtitle}</p>
          </a>
        )}</div>
      </section>
      <section id="contact" className="contact-section">
        <div className="contact-inner wrap">
          <div><div className="eyebrow">CONTACT</div><h2>联系我</h2></div>
          <div className="contact-content">
            <p>如果你正在寻找一位兼顾用户研究、产品逻辑与界面体验的设计师，欢迎与我联系。</p>
            <a className="contact-email" href="mailto:lijialing0120@163.com">lijialing0120@163.com</a>
            <a className="text-link" href="mailto:lijialing0120@163.com">发送邮件 ↗</a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}

function projectCover(slug: string) {
  if (slug === 'careshare') return '/projects/careshare-0.jpg';
  if (slug === 'upup') return '/projects/upup-0.png';
  if (slug === 'insurance') return '/projects/insurance-0.jpg';
  return `/projects/${slug}-0.webp`;
}
