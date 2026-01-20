import React from "react"
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: 'BETELGEUSE — Digital Genesis Lab',
  description: 'Создай свой первый IT-сервис за 6 месяцев. Без программистов. Без зависимости.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark">
      <body className={`${jetbrainsMono.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
