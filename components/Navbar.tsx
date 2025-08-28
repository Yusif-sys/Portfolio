'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
    >
      <div className="container-max">
        <div className="flex items-center justify-center h-16">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="nav-link cursor-pointer text-white"
                  style={{ color: '#ffffff' }}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
