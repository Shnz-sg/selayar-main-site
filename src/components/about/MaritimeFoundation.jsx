import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Shield, FileCheck, Navigation } from 'lucide-react';

const foundations = [
  {
    icon: Anchor,
    title: 'Operational Experience',
    description: 'Deep understanding of vessel operations, crew management, and day-to-day maritime challenges.'
  },
  {
    icon: Shield,
    title: 'Compliance Awareness',
    description: 'Familiarity with regulatory frameworks, classification requirements, and industry standards.'
  },
  {
    icon: FileCheck,
    title: 'Process Knowledge',
    description: 'Comprehensive understanding of maritime workflows, documentation, and operational procedures.'
  },
  {
    icon: Navigation,
    title: 'Industry Networks',
    description: 'Strong relationships across the maritime ecosystem, from shipyards to port authorities.'
  }
];

export default function MaritimeFoundation() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-teal-600 mb-4">
            Our Maritime Foundation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Built on Real Maritime Experience
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our team's foundation in maritime operations gives us an authentic understanding of the industry's needs. We don't just study maritime challenges - we've lived them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {foundations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <item.icon className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}