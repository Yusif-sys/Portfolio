'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Phone, Download } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'yusif.imanov2006@gmail.com',
    href: 'mailto:yusif.imanov2006@gmail.com'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Yusif-sys',
    href: 'https://github.com/Yusif-sys'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Yusif Imanov',
    href: 'https://www.linkedin.com/in/yusif-i-044919272'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '650-788-9085',
    href: 'tel:650-788-9085'
  }
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Contact Me
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            You can contact me through any of these channels. Will respond within 24 hours.
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="grid gap-6">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.label === 'Email' || contact.label === 'Phone' ? '_self' : '_blank'}
                rel={contact.label === 'Email' || contact.label === 'Phone' ? '' : 'noopener noreferrer'}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors duration-200 group"
              >
                <div className="p-2 bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors duration-200">
                  <contact.icon size={20} className="text-gray-300" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400 font-normal">
                    {contact.label}
                  </p>
                  <p className="text-white font-normal">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Additional Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out if you have any questions or would like to collaborate on a project. I&apos;m always excited to work on new challenges!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
