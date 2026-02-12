import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Rss, Bell } from 'lucide-react';
import GridOverlay from '../components/shared/GridOverlay';
import Button from '../components/shared/Button';
import { createPageUrl } from '../utils';

export default function Insights() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 ocean-gradient overflow-hidden">
        <GridOverlay />
        
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-teal-500" />
              <span className="text-teal-400 text-sm font-semibold tracking-wider uppercase">
                Insights
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Maritime Industry{' '}
              <span className="gradient-text">Insights</span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Stay informed with the latest perspectives on maritime technology, operational best practices, and industry trends.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
            <path 
              fill="#f8fafc" 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            />
          </svg>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Rss className="w-10 h-10 text-teal-600" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Insights Coming Soon
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We're preparing a collection of articles, case studies, and industry perspectives that will provide valuable insights into maritime technology and operational excellence.
              </p>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-12">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">What to Expect</h3>
                <div className="grid sm:grid-cols-2 gap-6 text-left">
                  {[
                    {
                      title: 'Industry Perspectives',
                      description: 'Thoughtful analysis of trends shaping the maritime sector'
                    },
                    {
                      title: 'Technology Insights',
                      description: 'How digital innovation is transforming maritime operations'
                    },
                    {
                      title: 'Best Practices',
                      description: 'Operational guidance and implementation strategies'
                    },
                    {
                      title: 'Case Studies',
                      description: 'Real-world examples of maritime digital transformation'
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-slate-600 text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href={createPageUrl('Contact')} variant="primary" icon>
                  Contact Us for Updates
                </Button>
                <Button href={createPageUrl('Solutions')} variant="outline">
                  Explore Our Solutions
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
                  <pattern id="insights-cta-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="30" cy="30" r="1" fill="#14B8A6" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#insights-cta-pattern)" />
              </svg>
            </div>
            
            <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                Have Questions About Maritime Technology?
              </h3>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
                While we prepare our insights content, we're happy to discuss your specific questions about maritime technology and digital transformation.
              </p>
              <Button href={createPageUrl('Contact')} variant="primary" size="large" icon>
                Start a Conversation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}