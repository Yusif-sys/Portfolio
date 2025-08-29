'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' }
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
    >
      <div className="container-max">
        <div className="flex items-center h-16 px-4 relative">
          {/* Mobile Menu Button - Left side */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:text-blue-400 transition-colors absolute left-4"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo/Brand - Centered on mobile, left on desktop */}
          <Link href="/" className="text-xl font-bold text-white md:mr-8 mx-auto md:mx-0">
            Yusif
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="nav-link cursor-pointer text-white hover:text-blue-400 transition-colors"
                    style={{ color: '#ffffff' }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Spacer for mobile to balance the logo */}
          <div className="md:hidden w-10"></div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 border-t border-gray-800"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
            >
              <div className="px-4 py-4 space-y-4">
                {navItems.map((item, index) => (
                  <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-white hover:text-blue-400 transition-colors py-2 text-lg"
                      style={{ color: '#ffffff' }}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
