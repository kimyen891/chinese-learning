import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AnimatedHeader from './components/AnimatedHeader'
import AnimatedSidebar from './components/AnimatedSidebar'
import { Providers } from './providers'
import AnimatedFooter from './components/AnimatedFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HSK Panda',
  description: 'A platform for learning Chinese language',
}
export const dynamicParams = true
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedHeader />
        <main className="min-h-screen container mx-auto mt-24 flex">
          <div className="w-full xl:w-5/6 px-4 xl:pr-8">
            <Providers>{children}</Providers>
          </div>
          <AnimatedSidebar />
        </main>
        <AnimatedFooter/>
      </body>
    </html>
  )
}
