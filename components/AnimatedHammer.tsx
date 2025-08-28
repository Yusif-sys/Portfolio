'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AnimatedHammer() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative"
      >
        {/* Hammer and Nail Image */}
        <motion.div
          animate={{ 
            rotate: [0, -3, 3, -3, 0],
            y: [0, -8, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative z-10"
        >
          <Image 
            src="/hammer.jpg" 
            alt="Hammer and Nail"
            width={500} 
            height={1000}
            className="object-contain"
            priority
            style={{
              filter: 'brightness(1.05) contrast(1.1)',
              mixBlendMode: 'multiply'
            }}
          />
        </motion.div>

        {/* Floating Particles */}
        <motion.div
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-16 -right-12 w-2 h-2 bg-yellow-400 rounded-full"
        />
        
        <motion.div
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-12 -left-16 w-1.5 h-1.5 bg-orange-400 rounded-full"
        />
      </motion.div>
    </div>
  )
}
