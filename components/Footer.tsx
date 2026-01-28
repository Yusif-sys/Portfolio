'use client'

import { motion } from 'framer-motion'

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
          <p className="text-gray-400 text-sm mb-4">© 2024. All rights reserved.</p>

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
