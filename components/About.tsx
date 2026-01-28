'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="section-padding bg-black">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-8">
            About Me
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg mx-auto"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I&apos;m a CS student in the Bay Area, originally from Azerbaijan. I&apos;m interested in AI, full-stack development, and building tools that connect real life with technology.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Outside coding, I&apos;m training for a marathon and always learning new things. I believe in the power of technology to solve real-world problems and create meaningful impact.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              When I&apos;m not coding or running, you can find me exploring new technologies, collaborating on open-source projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12"
          >
            <a
              href="/Yusif_Imanov_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-normal hover:bg-gray-200 transition-colors duration-200"
            >
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
