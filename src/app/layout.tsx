import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Helixon - Digital Marketing Agency',
  description: 'Helixon is a modern digital marketing agency focused on helping businesses dominate online with SEO, paid ads, social media, and premium website experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
