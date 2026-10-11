import React from 'react'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const sans = Inter({ subsets: ['latin'], variable: '--font-sans' })
const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Avnish Patel | Robotics Software Engineer',
  description:
    'Robotics Software Engineer building SLAM, state estimation, 3D perception and robot learning systems for surgical and field robots.',
  openGraph: {
    title: 'Avnish Patel | Robotics Software Engineer',
    description: 'SLAM, state estimation, 3D perception and robot learning for surgical and field robots.',
    type: 'website',
  },
}

// Applied before first paint so there is no light/dark flash. Dark is the default look.
const themeInitScript = `(function(){try{if(localStorage.getItem('theme')!=='light')document.documentElement.classList.add('dark')}catch(e){document.documentElement.classList.add('dark')}})();`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <ThemeProvider>
          <main className="flex-grow">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
