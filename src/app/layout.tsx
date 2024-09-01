'use client'

import React from 'react'

import { ThemeProvider } from 'next-themes'

import './globals.css'
import Nav from '@/app/_components/nav/Nav'
import { QueryProvider } from '@/app/_modules/providers/QueryProvider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ThemeProvider attribute="class">
          <QueryProvider>
            <Nav />
            {children}
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
