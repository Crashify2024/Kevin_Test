import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Suspense } from 'react'
import LoadingIndicator from '@/components/loading-indicator'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crashify - Innovative Unfallberichterstattung für die Automobilbranche',
  description: 'Crashify revolutioniert die Unfallberichterstattung mit fortschrittlicher Technologie. Optimieren Sie Ihre Schadensregulierung und steigern Sie die Effizienz.',
  keywords: ['Unfallberichterstattung', 'Schadensanalyse', 'Automobilbranche', 'Versicherungstechnologie', 'Digitale Schadensregulierung'],
  openGraph: {
    title: 'Crashify - Revolutionäre Unfallberichterstattung',
    description: 'Optimieren Sie Ihre Schadensregulierung mit fortschrittlicher Technologie',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Crashify - Innovative Unfallberichterstattung',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.className}>
      <body>
        <div className="fixed inset-0 opacity-5 z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<LoadingIndicator />}>
              {children}
            </Suspense>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

