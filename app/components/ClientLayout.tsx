"use client"

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'
import Loading from './Loading'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Loading key="loading" />
      ) : (
        <>
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
          <ScrollToTop />
        </>
      )}
    </AnimatePresence>
  )
} 