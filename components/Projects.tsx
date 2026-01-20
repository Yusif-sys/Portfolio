'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: 'Bitcoin bot',
    description: 'Built an automated Python trading bot for Kalshi prediction markets that continuously monitors live order books, evaluates market conditions using configurable strategy logic, and executes trades with secure, environment-based authentication and modular architecture.',
    tech: ['Python', 'RSA-PSS', 'Kalshi API', 'Cryptography', 'REST APIs'],
    github: 'https://github.com/Yusif-sys/BTCBOTKALSHI'
  },
  {
    title: 'BeanThere',
    description: 'BeanThere is a web application that streamlines coffee shop discovery by combining location-based filtering with preference-driven recommendations. Built with Next.js and deployed on Vercel, it integrates external APIs for real-time data and uses a clean, responsive UI for seamless navigation. The goal is to reduce the friction of finding the right café by aligning user intent with contextual results.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'External APIs'],
    github: 'https://github.com/Yusif-sys/BeanThere.git'
  },
  {
    title: 'E-commerce Platform',
    description: 'Created this platform to solve the challenge of building a scalable, user-friendly online shopping experience. Focused on performance and user experience.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com/Yusif-sys/ecommerce-platform',
    demo: 'https://ecommerce-demo.vercel.app'
  },
  {
    title: 'Task Management Tool',
    description: 'Built this tool to help teams collaborate more effectively. The motivation was to create something that actually makes project management feel simple and intuitive.',
    tech: ['Vue.js', 'Firebase', 'TailwindCSS', 'Vuex'],
    github: 'https://github.com/Yusif-sys/task-manager',
    demo: 'https://task-manager-demo.vercel.app'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-black">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Work
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Below is a selection of professional projects I&apos;ve worked on throughout my learning journey. This portfolio includes projects I&apos;ve built from scratch to improve my skills and showcase my technical abilities.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-normal"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-center gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-normal hover:bg-gray-200 transition-colors duration-200"
                  >
                    <Github size={18} />
                    View Code
                  </Link>
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border-2 border-white text-white rounded-lg font-normal hover:bg-white hover:text-black transition-all duration-200"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>

              {index < projects.length - 1 && (
                <div className="w-32 h-px bg-gray-700 mx-auto" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
