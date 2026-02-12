import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Cpu, Award, TrendingUp } from 'lucide-react';

const credentials = [
  {
    icon: Anchor,
    title: 'Maritime Heritage',
    description: 'Founded by seafaring professionals with decades of combined operational experience at sea and ashore.'
  },
  {
    icon: Award,
    title: 'Cross-Disciplinary Expertise',
    description: 'Engineering, maritime business, and advanced technology leadership in one team.'
  },
  {
    icon: Cpu,
    title: 'Technology Leadership',
    description: 'Deep experience in digital systems, data platforms, and maritime innovation.'
  },
  {
    icon: TrendingUp,
    title: 'Industry Commitment',
    description: 'Long-term focus on supporting maritime operations through digital transformation.'
  }
];

export default function TrustCredibility() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="trust-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="#0D9488" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#trust-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-teal-600 mb-4">
            Why Maritime Professionals Trust Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Built by Maritime Professionals, Powered by Technology
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Selayar Global was created by people who understand the realities of vessel operations, compliance pressures, and the unique challenges of the maritime industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/20">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}