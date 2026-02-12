import React from 'react';
import { motion } from 'framer-motion';
import Button from '../shared/Button';
import { createPageUrl } from '../../utils';

export default function SolutionsCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl" />
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <svg className="w-full h-full opacity-10">
              <defs>
                <pattern id="solutions-cta-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="1" fill="#14B8A6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#solutions-cta-pattern)" />
            </svg>
          </div>
          
          <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
              Let's discuss how our solutions can address your specific maritime challenges and drive meaningful improvements across your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={createPageUrl('Contact')} variant="primary" size="large" icon>
                Start a Conversation
              </Button>
              <Button href={createPageUrl('Industries')} variant="secondary" size="large">
                View Industries
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}