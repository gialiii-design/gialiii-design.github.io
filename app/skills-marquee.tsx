'use client';

import { useState } from 'react';

const capabilityLine =
  'USER RESEARCH · PRODUCT DESIGN · UI DESIGN · SERVICE DESIGN · AIGC · ';

export function SkillsMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className={`marquee${paused ? ' is-paused' : ''}`}
      aria-label="专业能力滚动展示"
      data-reveal
    >
      <button
        className="marquee-control"
        type="button"
        aria-pressed={paused}
        onClick={() => setPaused((value) => !value)}
      >
        <span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span>
        {paused ? '继续滚动' : '暂停滚动'}
      </button>
      <div className="marquee-track">
        <span>{capabilityLine}</span>
        <span aria-hidden="true">{capabilityLine}</span>
      </div>
    </div>
  );
}
