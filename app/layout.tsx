import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import ClientLayout from './components/ClientLayout'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dra. Laís Carolina - Odontologia Especializada',
  description: 'Transforme seu sorriso com tratamentos personalizados e tecnologia de ponta. Sua saúde bucal é nossa prioridade.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={outfit.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
} 