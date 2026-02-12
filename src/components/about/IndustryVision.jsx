import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Wifi, BarChart3, Users } from 'lucide-react';
import Button from '../shared/Button';
import { createPageUrl } from '../../utils';

export default function IndustryVision() {
  return (
    <section className="py-24 ocean-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <pattern id="vision-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="#14B8A6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#vision-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-teal-400 mb-4">
              Our Vision for the Industry
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Shaping the Future of Maritime
            </h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                We envision a maritime industry where digital capabilities enhance rather than replace human expertise. Where data flows seamlessly between vessel and shore. Where operational decisions are informed by real-time intelligence.
              </p>
              <p>
                Our long-term commitment is to be a trusted partner in this transformation - helping maritime businesses navigate the journey from traditional operations to digitally-enabled excellence.
              </p>
              <p>
                We're building for a future where maritime operations are more connected, more efficient, and more sustainable - while preserving the seafaring traditions and expertise that have always defined this industry.
              </p>
            </div>
            <div className="mt-10">
              <Button href={createPageUrl('Contact')} variant="primary" icon>
                Partner With Us
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Globe, value: 'Global', label: 'Reach & Impact' },
                { icon: Wifi, value: 'Connected', label: 'Operations' },
                { icon: BarChart3, value: 'Data', label: 'Intelligence' },
                { icon: Users, value: 'Human', label: 'Expertise' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 text-center"
                >
                  <item.icon className="w-8 h-8 text-teal-400 mx-auto mb-4" />
                  <p className="text-2xl font-bold text-white mb-1">{item.value}</p>
                  <p className="text-slate-400 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}