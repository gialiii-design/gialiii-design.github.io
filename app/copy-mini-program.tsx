'use client';

import {useState} from 'react';

const miniProgramCode = '#小程序://元稚星/iceGGvYpIvFjUlz';

export function CopyMiniProgramLink() {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(miniProgramCode);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return <button type="button" className="action-button action-button-secondary experience-action magnetic copy-link" onClick={copyCode} aria-live="polite">
    {copied ? '已复制，请在微信中打开 ✓' : '复制元稚星小程序入口 →'}
  </button>;
}
