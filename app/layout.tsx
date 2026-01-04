import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { ChatbotProvider } from '@/components/chatbot-provider'
import { LanguageProvider } from '@/components/language-provider'
import './globals.css'

export const metadata: Metadata = {
  title: '500x Platform',
  description: '500x.pro Theme',
  generator: '500.app',
  icons: {
    icon: '/500x-Favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <LanguageProvider>
          <ChatbotProvider>
            {children}
          </ChatbotProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}

