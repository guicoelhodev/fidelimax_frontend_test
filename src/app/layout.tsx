import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import  QueryProvider  from  '@/utils/QueryProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fidelimax test',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <QueryProvider>
          <div>{children}</div>
        </QueryProvider>
      </body>
    </html>
  )
}
