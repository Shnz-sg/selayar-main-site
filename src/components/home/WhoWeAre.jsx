import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Cpu, Users, TrendingUp } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import Button from '../shared/Button';
import { createPageUrl } from '../../utils';

export default function WhoWeAre() {
  const features = [
    {
      icon: Ship,
      title: 'Maritime Heritage',
      description: 'Deep understanding of vessel operations, compliance environments, and real-world shipping challenges.'
    },
    {
      icon: Cpu,
      title: 'Digital Innovation',
      description: 'Modern technology solutions designed specifically for the unique demands of maritime operations.'
    },
    {
      icon: Users,
      title: 'Industry Partnership',
      description: 'Collaborative approach working alongside shipowners, managers, and service providers.'
    },
    {
      icon: TrendingUp,
      title: 'Operational Excellence',
      description: 'Focus on practical outcomes that improve efficiency, visibility, and performance.'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-50">
        <svg className="w-full h-full" style={{ opacity: 0.03 }}>
          <defs>
            <pattern id="who-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="#0D9488" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#who-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-teal-600 mb-4">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Where Ocean Operations Meet{' '}
              <span className="gradient-text">Digital Intelligence</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Selayar Global is a maritime-focused organization that combines deep operational experience with digital and data-driven solutions. We understand the complexities of the maritime industry because we come from it.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Our mission is to bridge traditional shipping operations with modern digital systems, helping maritime businesses navigate the transition to smarter, more connected operations.
            </p>
            <Button href={createPageUrl('About')} variant="outline" icon>
              Learn Our Story
            </Button>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-teal-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}