'use client'

import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Programming Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++']
  },
  {
    category: 'Frontend Development',
    items: ['React', 'Next.js', 'Vue.js', 'TailwindCSS', 'HTML/CSS']
  },
  {
    category: 'Backend Development',
    items: ['Node.js', 'Express.js', 'Python Flask', 'PostgreSQL', 'MongoDB']
  },
  {
    category: 'AI & Machine Learning',
    items: ['TensorFlow', 'OpenAI API', 'Natural Language Processing', 'Computer Vision']
  },
  {
    category: 'Tools & Technologies',
    items: ['Git', 'Docker', 'AWS', 'Vercel', 'Firebase']
  }
]

const learningJourney = [
  'Started with Python → learned Java → now exploring full-stack and AI'
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-black">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Skills
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here is an overview of my technical skills and experience.
          </p>
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl text-white mb-6">
              My Learning Journey
            </h3>
            {learningJourney.map((journey, index) => (
              <div
                key={index}
                className="inline-block px-6 py-3 bg-gray-800 rounded-lg border border-gray-700 shadow-sm"
              >
                <p className="text-lg text-gray-300 font-normal">
                  {journey}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-sm"
            >
              <h3 className="text-lg text-white mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-normal"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 max-w-2xl mx-auto">
            I&apos;m constantly learning and expanding my skill set. Currently focused on AI/ML applications and building scalable full-stack solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
