import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, LineChart, Cloud, ArrowRight } from 'lucide-react';

export default function TechnologyApproach() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="tech-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#0D9488" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12">
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <svg className="w-full h-full opacity-10">
                  <defs>
                    <pattern id="tech-inner" width="30" height="30" patternUnits="userSpaceOnUse">
                      <circle cx="15" cy="15" r="1" fill="#14B8A6" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#tech-inner)" />
                </svg>
              </div>
              
              <div className="relative space-y-6">
                {[
                  { icon: Cloud, label: 'Cloud-Native Solutions', desc: 'Modern infrastructure for maritime applications' },
                  { icon: Layers, label: 'Seamless Integration', desc: 'Connect existing systems with new technologies' },
                  { icon: LineChart, label: 'Data-Driven Insights', desc: 'Transform operational data into actionable intelligence' },
                  { icon: Zap, label: 'Rapid Deployment', desc: 'Quick implementation with minimal disruption' }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.label}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
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
              Our Technology-Driven Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Digital Innovation for Maritime Excellence
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                We believe in the transformative power of technology when applied thoughtfully to maritime operations. Our approach combines technical innovation with deep industry knowledge to create solutions that actually work in the real world.
              </p>
              <p>
                Rather than forcing generic technology onto maritime problems, we develop and customize digital tools specifically designed for the unique demands of shipping and offshore operations.
              </p>
              <p>
                Our mission is to help maritime businesses modernize their operations through smarter systems, connected technologies, and data-driven decision-making - without losing sight of the practical realities of running vessels and marine services.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}