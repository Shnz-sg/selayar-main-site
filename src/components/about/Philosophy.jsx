import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Eye, Lightbulb, Scale } from 'lucide-react';

const principles = [
  {
    icon: Handshake,
    title: 'Partnership Over Transaction',
    description: 'We build lasting relationships with our clients, working as an extension of their teams rather than external vendors.'
  },
  {
    icon: Eye,
    title: 'Practical Over Theoretical',
    description: 'Every solution we propose must work in real-world maritime environments with real operational constraints.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation With Purpose',
    description: "We embrace new technologies only when they genuinely improve operations, not for innovation's sake alone."
  },
  {
    icon: Scale,
    title: 'Respect for Tradition',
    description: 'While we push for digital transformation, we deeply respect the established practices and wisdom of the maritime industry.'
  }
];

export default function Philosophy() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-teal-600 mb-4">
            Our Working Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Principles That Guide Us
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our philosophy shapes how we approach every project and relationship in the maritime industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 p-8 bg-slate-50 rounded-2xl"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/20">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}