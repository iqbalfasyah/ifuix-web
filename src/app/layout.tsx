import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { LanguageProvider } from '../components/LanguageProvider'
import { MainLayout } from '../layouts/MainLayout'
import '../styles/index.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://ifuix.com'),
  icons: { icon: '/favicon.png' },
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <MainLayout>{children}</MainLayout>
        </LanguageProvider>
      </body>
    </html>
  )
}
