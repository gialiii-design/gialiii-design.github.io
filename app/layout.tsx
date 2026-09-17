import type {Metadata} from 'next';
import './globals.css';
import {MotionEffects} from './motion-effects';
export const metadata:Metadata={title:{default:'李佳玲 Gia Li · 产品 / UX / UI 作品集',template:'%s · Gia Li'},icons:{icon:'/favicon.svg'},description:'李佳玲 Gia Li，产品 / UX / UI 设计师。以研究理解真实问题，用系统思维把洞察转化为清晰、可落地的产品体验。',metadataBase:new URL('https://gialiii-design.github.io')};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body><MotionEffects/>{children}</body></html>}
