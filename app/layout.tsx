import React from 'react'
import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Copyrights from '@/components/Copyrights'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Partabs Dine ',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        
        {children}
        <Copyrights />
        </body>
    </html>
  )
}
