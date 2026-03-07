import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
// استدعاء الهيدر - تأكدي أن المسار صحيح واسم الملف header.tsx
import Header from '@/components/header' 

const cairo = Cairo({ subsets: ['arabic', 'latin'], weight: ['400', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'كيان شباب المستقبل',
  description: 'نمكّن الشباب من تطوير مهارات القيادة والإبداع لبناء جيل مستعد للمستقبل',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${cairo.className} antialiased min-h-screen bg-background`}>
        <Header /> 
        
        <main className="relative flex flex-col">
          {children}
        </main>

        <Analytics />
      </body>
    </html>
  )
}
