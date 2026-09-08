import Link from 'next/link';
export function Header(){return <><a className="skip-link" href="#main">跳至内容</a><header className="site-header wrap"><Link href="/" className="brand" aria-label="Gia Li 首页">G.<span>GIA LI / 李佳玲</span></Link><nav aria-label="主导航"><Link href="/#about">关于</Link><Link href="/#work">作品</Link><Link href="/#contact">联系</Link><span className="nav-role">产品 / UX / UI</span></nav></header></>}
export function Footer(){return <footer className="footer footer-compact wrap"><span>© 2026 Gia Li · 李佳玲</span><a className="text-link" href="#main">返回顶部 ↑</a></footer>}
