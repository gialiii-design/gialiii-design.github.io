import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:{default:'李佳玲 Gia Li · 产品 / UX / UI 作品集',template:'%s · Gia Li'},icons:{icon:'/favicon.svg'},description:'李佳玲 Gia Li 的个人设计作品集。探索用户体验、交互设计、业务流程与品牌视觉。',metadataBase:new URL('https://gia-li-design.crafty-cabin-2572.chatgpt.site')};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}
