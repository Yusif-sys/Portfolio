'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-gray-300">Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span className="text-gray-300">by Yusif Imanov</span>
          </div>

          <p className="text-gray-400 text-sm">
            © 2024 Yusif Imanov. All rights reserved.
          </p>

          <div className="mt-6 flex justify-center space-x-6">
            <a
              href="https://github.com/Yusif-sys"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yusif-i-044919272"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:yusif.imanov2006@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
