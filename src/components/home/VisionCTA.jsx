import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Wifi, BarChart } from 'lucide-react';
import Button from '../shared/Button';
import { createPageUrl } from '../../utils';

export default function VisionCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase text-teal-600 mb-3 sm:mb-4">
            Our Vision
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight max-w-4xl mx-auto mb-6 sm:mb-8 px-4">
            The Future of Maritime is{' '}
            <span className="gradient-text">Connected, Efficient, and Digitally Enabled</span>
          </h2>
          <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8 flex-wrap px-4">
            {[
              { icon: Globe, label: 'Connected' },
              { icon: BarChart, label: 'Efficient' },
              { icon: Wifi, label: 'Digital' }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-2 text-slate-600"
              >
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500" />
                <span className="text-sm sm:text-base font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl" />
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <svg className="w-full h-full opacity-10">
              <defs>
                <pattern id="cta-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="1" fill="#14B8A6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-pattern)" />
            </svg>
          </div>
          
          <div className="relative px-6 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-20 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
              Let's Build Smarter Maritime Operations
            </h3>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
              Partner with maritime professionals who understand your challenges and have the digital expertise to solve them. Schedule a consultation to discuss how we can support your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button href={createPageUrl('Contact')} variant="primary" size="large" icon>
                Speak With Our Team
              </Button>
              <Button href={createPageUrl('Solutions')} variant="secondary" size="large">
                View Our Capabilities
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}