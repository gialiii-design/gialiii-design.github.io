import {notFound} from 'next/navigation';
import {projects} from '../../projects';
import {chapters, evidenceLinks, prototypeUrl} from '../../case-content';
import {Header, Footer} from '../../shared';

export async function generateMetadata({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const p = projects.find(p => p.slug === slug);
  return {title: p?.title ?? '项目', description: p?.intro};
}

export default async function Project({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const index = projects.findIndex(p => p.slug === slug);
  if (index < 0) notFound();
  const p = projects[index], next = projects[(index + 1) % projects.length];
  const sections = chapters[slug];
  const steps = p.steps;
  return <>
    <Header/>
    <main id="main" className="wrap">
      <section className="case-top">
        <a href="/#work" className="back-link">← 返回精选作品</a>
        <div className="eyebrow">{p.number} / {p.category}</div>
        <h1>{p.title}</h1><p className="case-subtitle">{p.subtitle}</p><p className="muted case-intro">{p.intro}</p>
        {(evidenceLinks[slug]?.length || slug === 'uready') && <div className="case-actions" aria-label="项目过程材料">
          {evidenceLinks[slug]?.map(link => <a className="text-link" href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>{link.label} ↗</a>)}
          {slug === 'uready' && <a className="text-link" href={prototypeUrl} target="_blank" rel="noopener noreferrer">体验交互原型 ↗</a>}
        </div>}
      </section>
      <div className="case-cover"><img src={projectAsset(p.slug)} alt={p.title + '项目展示'} width="1920" height="1080"/></div>
      <section className="case-info"><div className="eyebrow overview-label">PROJECT OVERVIEW</div><p className="case-focus">{p.focus}</p><div><h2>从问题出发</h2><p>{p.challenge}</p><h2>设计方向</h2><p>{p.approach}</p></div></section>
      {sections ? <>
        <nav className="case-toc" aria-label="项目内容目录"><span>项目内容</span>{sections.map(s => <a href={`#${s.id}`} key={s.id}>{s.title} ↓</a>)}</nav>
        <div className="case-chapters">{sections.map((s, i) => <section id={s.id} className="case-chapter" key={s.id}>
          <div className="chapter-heading"><span>0{i + 1}</span><h2>{s.title}</h2></div>
          <div className="case-gallery">{s.pages.map(([page, caption]) => <figure key={page}>
            <a href={projectAsset(slug, page)} target="_blank" rel="noopener noreferrer" aria-label={`查看大图：${caption}`}><img src={projectAsset(slug, page)} alt={caption} width="1920" height="1080" loading="lazy" decoding="async"/></a>
            <figcaption>{caption} ↗</figcaption>
          </figure>)}</div>
        </section>)}</div>
      </> : <>
        <section className="process" aria-label="设计思路">{steps.map(([title, body], i) => <div key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></div>)}</section>
      </>}
      <p className="case-note">{p.note}</p>
      <a className="case-next" href={`/work/${next.slug}`}><div><div className="eyebrow">{next.slug === 'aigc' ? '项目延伸 / EXPLORATION' : '继续浏览 / NEXT PROJECT'}</div><h2>{next.title}</h2></div><span aria-hidden="true">↗</span></a>
    </main>
    <Footer/>
  </>;
}

function projectAsset(slug: string, page?: number) {
  const suffix = page === undefined ? '0' : `page-${String(page).padStart(2, '0')}`;
  const extension = slug === 'careshare' || slug === 'insurance' ? 'jpg' : slug === 'upup' ? 'png' : 'webp';
  return `/projects/${slug}-${suffix}.${extension}`;
}
