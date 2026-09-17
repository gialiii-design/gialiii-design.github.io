'use client';

import {useState} from 'react';
import {projects} from './projects';

type Filter = 'all' | 'product' | 'service' | 'visual';

const filters: Array<[Filter, string]> = [
  ['all', 'All'],
  ['product', 'Product & UX'],
  ['service', 'Service'],
  ['visual', 'UI & Visual'],
];

const groups: Array<{id: Exclude<Filter, 'all'>, title: string, english: string}> = [
  {id: 'product', title: '产品与体验设计', english: 'PRODUCT & EXPERIENCE DESIGN'},
  {id: 'service', title: '服务与场景设计', english: 'SERVICE & CONTEXT DESIGN'},
  {id: 'visual', title: 'UI、视觉与新技术实践', english: 'UI, VISUAL & EMERGING PRACTICE'},
];

const projectFacts: Record<string, string> = {
  insurance: 'B端系统 · 个人项目 · 2025',
  uready: '移动端产品 · 团队项目 · 2025',
  lv: '体验评估 · 个人方案 · 2025',
  careshare: '服务设计 · 团队项目 · 2024',
  upup: '社区健康 · 概念项目 · 2024',
  aigc: 'AIGC 视觉 · 个人探索 · 2025',
};

const groupProjects = {
  product: ['insurance', 'uready', 'lv'],
  service: ['careshare', 'upup'],
  visual: ['aigc'],
};

export function WorkShowcase() {
  const [filter, setFilter] = useState<Filter>('all');
  const counts: Record<Filter, number> = {all: 9, product: 3, service: 2, visual: 4};

  return <section id="work" className="work-section wrap">
    <div className="section-heading-unified work-intro" data-reveal>
      <div><div className="eyebrow">SELECTED WORK</div><h2>作品</h2></div>
      <div className="work-filter-wrap">
        <div className="work-filter" role="group" aria-label="筛选作品">
          {filters.map(([id, label]) => <button type="button" key={id} className={filter === id ? 'is-active' : ''} aria-pressed={filter === id} onClick={() => setFilter(id)}>{label}</button>)}
        </div>
        <p aria-live="polite">Showing {filter === 'all' ? 'all ' : ''}{counts[filter]} works</p>
      </div>
    </div>

    {groups.map(group => <section className={`work-group work-group-${group.id}`} hidden={filter !== 'all' && filter !== group.id} key={group.id}>
      <div className="work-group-heading" data-reveal>
        <div><p>{group.english}</p><h3>{group.title}</h3></div>
      </div>

      {group.id !== 'visual' && <div className={`project-grid ${group.id === 'product' ? 'featured-grid' : 'service-grid'}`}>
        {groupProjects[group.id].map((slug, index) => <ProjectCard slug={slug} key={slug} featured={group.id === 'product' && index === 0}/>) }
      </div>}

      {group.id === 'visual' && <div className="visual-practice-grid">
        <ProjectCard slug="aigc" visual/>
        <VisualPlaceholder number="01" short="UI" type="INTERNSHIP / UI" title="元稚产品 UI" description="产品界面、组件与迭代片段"/>
        <VisualPlaceholder number="02" short="3D" type="INTERNSHIP / 3D / MOTION" title="芒果TV 综艺视觉" description="建模、渲染与动态合成片段"/>
        <VisualPlaceholder number="03" short="EXP." type="PERSONAL / 3D" title="个人 3D 探索" description="造型、材质与视觉实验"/>
      </div>}
    </section>)}
  </section>;
}

function ProjectCard({slug, featured = false, visual = false}: {slug: string, featured?: boolean, visual?: boolean}) {
  const project = projects.find(item => item.slug === slug)!;
  return <a className={`project-card ${project.slug}${featured ? ' is-featured' : ''}${visual ? ' visual-case-card' : ''}`} href={`/work/${project.slug}`} data-reveal="project">
    <div className={`project-image transition-${project.slug}`}><img src={projectCover(project.slug)} alt={project.title + '项目展示'} width="1920" height="1080" loading="lazy"/><span aria-hidden="true">↗</span></div>
    <div className="project-meta"><span>{projectFacts[project.slug]}</span><span>{project.category}</span></div>
    <h3>{project.title}</h3><p>{project.subtitle}</p>
  </a>;
}

function VisualPlaceholder({number, short, type, title, description}: {number: string, short: string, type: string, title: string, description: string}) {
  return <article className="visual-work-card" data-reveal>
    <div className="visual-work-slot" aria-hidden="true"><span>{number}</span><strong>{short}</strong></div>
    <div><span className="visual-work-type">{type}</span><h3>{title}</h3><p>{description}</p></div>
  </article>;
}

function projectCover(slug: string) {
  if (slug === 'careshare') return '/projects/careshare-0.jpg';
  if (slug === 'upup') return '/projects/upup-0.png';
  if (slug === 'insurance') return '/projects/insurance-0.jpg';
  return `/projects/${slug}-0.webp`;
}
