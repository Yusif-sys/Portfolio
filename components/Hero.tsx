'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download } from 'lucide-react'
import Image from 'next/image'

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
              I&apos;m a CS Student specializing in AI and Full-Stack development, passionate about crafting innovative solutions through code.
            </p>
            <p>
              From designing intuitive user interfaces to building AI-powered applications, I collaborate with teams to build high-quality, scalable solutions that enhance user experiences.
            </p>
            <p>
              Organized, curious, and always eager to learn, I thrive on solving complex problems. Also, a runner training for a marathon and always exploring new technologies.
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

      {/* Hammer positioned safely */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 pointer-events-none"
      >
        <motion.div
          animate={{
            rotate: [0, -2, 2, -2, 0],
            y: [0, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/hammer.jpg"
            alt="Hammer and Nail"
            width={70}
            height={70}
            className="object-contain"
            style={{
              filter: 'brightness(1.1) contrast(1.1)',
              mixBlendMode: 'multiply'
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
