import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import {ToastContainer as Toaster} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './globals.css'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BeeGuard',
  description: 'BeeGuard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>
      {children}
      <Toaster/>
      </body>
    </html>
  )
}
