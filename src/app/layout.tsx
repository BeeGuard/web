import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bee Guard',
  description: 'Bee Guard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  )
}
