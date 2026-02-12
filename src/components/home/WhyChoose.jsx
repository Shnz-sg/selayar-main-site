import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Zap, Target, Clock, HeartHandshake } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

const reasons = [
  {
    icon: Shield,
    title: 'Real Maritime Knowledge',
    description: 'Our team understands maritime operations from firsthand experience, not just theory.'
  },
  {
    icon: Zap,
    title: 'Technology-Enabled',
    description: 'We leverage modern technology to solve traditional maritime challenges effectively.'
  },
  {
    icon: Target,
    title: 'Practical Solutions',
    description: 'Focus on implementable solutions that deliver tangible operational improvements.'
  },
  {
    icon: Clock,
    title: 'Industry Awareness',
    description: 'Deep understanding of regulatory environments, compliance needs, and industry standards.'
  },
  {
    icon: HeartHandshake,
    title: 'Partnership Approach',
    description: 'We work alongside our clients as partners, not just service providers.'
  },
  {
    icon: CheckCircle2,
    title: 'Proven Methodologies',
    description: 'Structured approaches refined through real-world maritime implementations.'
  }
];

export default function WhyChoose() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-teal-50 rounded-full" />
              
              {/* Content card */}
              <div className="absolute inset-8 bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/30">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Maritime Expertise
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Combining decades of maritime operational experience with cutting-edge digital innovation.
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center">
                <Zap className="w-8 h-8 text-teal-500" />
              </div>
              <div className="absolute bottom-4 left-4 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center">
                <Target className="w-7 h-7 text-teal-500" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-teal-600 mb-4">
              Why Choose Selayar
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-8">
              The Selayar Difference
            </h2>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <reason.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{reason.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}