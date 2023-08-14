import './globals.css'
import type { Metadata } from 'next'
import { Golos_Text } from 'next/font/google'

const golos = Golos_Text({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eric Sheen',
  description: 'Official personal website of Eric Sheen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={golos.className}>{children}</body>
    </html>
  )
}
