import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Compass, Zap } from 'lucide-react';
import Button from '../shared/Button';
import { createPageUrl } from '../../utils';

export default function FounderStory() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 shadow-2xl">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10 rounded-3xl overflow-hidden">
                <svg className="w-full h-full">
                  <defs>
                    <pattern id="founder-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="1" fill="#14B8A6" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#founder-grid)" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative space-y-8">
                <div className="flex items-center justify-center gap-6">
                  <div className="w-20 h-20 bg-teal-500/20 rounded-2xl flex items-center justify-center border border-teal-500/30">
                    <Ship className="w-10 h-10 text-teal-400" />
                  </div>
                  <div className="text-teal-400 text-4xl font-light">→</div>
                  <div className="w-20 h-20 bg-teal-500/20 rounded-2xl flex items-center justify-center border border-teal-500/30">
                    <Zap className="w-10 h-10 text-teal-400" />
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-block px-4 py-2 bg-teal-500/20 rounded-full border border-teal-500/30 mb-4">
                    <span className="text-teal-400 text-sm font-semibold">From Sea to System</span>
                  </div>
                  <p className="text-slate-400 italic text-lg leading-relaxed">
                    "We started at sea. We understand the operational realities, the compliance pressures, and the challenges that come with managing vessels in a complex global environment."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-teal-600 mb-4">
              Our Origins
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6 sm:mb-8">
              Founded by Seafarers, Built for Maritime
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                Selayar Global was founded by maritime professionals whose careers began at sea. That firsthand experience on vessels shaped everything about how this company operates today.
              </p>
              <p>
                Our founders bring cross-disciplinary expertise spanning engineering, maritime business, and advanced technology. This unique combination allows us to see challenges through multiple lenses: operational, commercial, and digital.
              </p>
              <p>
                With strong technology leadership at our core, we understand not just maritime operations, but how digital systems can responsibly transform them. We built Selayar to bridge the gap between traditional maritime know-how and modern digital capabilities.
              </p>
            </div>

            <div className="mt-8">
              <Button href={createPageUrl('About')} variant="outline" icon>
                Read Our Full Story
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}