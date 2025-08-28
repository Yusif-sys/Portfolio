'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative bg-black">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl text-white mb-8"
          >
            Yusif.
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed mb-12"
          >
            <p>
              Hi,I&apos;m Yusif, a second year CS Student and developer focused on building the future with code. I&apos;m interested in AI and Full-Stack development.
            </p>
            <p>
              You&apos;ll find projects that reflect my skills and growth as a developer. From designing intuitive user interfaces to building AI-powered applications, I collaborate with teams to build high-quality, scalable solutions that enhance user experiences.
            </p>
            <p>
              Always eager to learn, I thrive on solving complex problems. Outside of coding, I enjoy watching Formula 1 and combat sports. Feel free to reach out to me!
            </p>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full flex flex-col sm:flex-row gap-4 items-start justify-start -ml-4 sm:-ml-6 lg:-ml-8"
          >
            <Link href="/Yusif%20Imanov%20Resume.pdf" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="self-start px-8 py-4 bg-white text-black rounded-lg font-normal hover:bg-gray-200 transition-colors duration-200 inline-flex items-center gap-2"
              >
                Download Resume
                <Download size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
