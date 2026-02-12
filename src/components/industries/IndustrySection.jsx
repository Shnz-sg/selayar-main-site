import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../shared/Button';
import { createPageUrl } from '../../utils';

export default function IndustrySection({ 
  icon: Icon, 
  title, 
  description, 
  challenges,
  solutions,
  index 
}) {
  const isEven = index % 2 === 0;
  
  return (
    <section className={`py-20 ${isEven ? 'bg-slate-50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 items-start`}>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={isEven ? '' : 'lg:order-2'}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {description}
            </p>
            <Button href={createPageUrl('Contact')} variant="outline" icon>
              Discuss Your Needs
            </Button>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={isEven ? '' : 'lg:order-1'}
          >
            <div className="space-y-6">
              {/* Challenges */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Industry Challenges</h3>
                <ul className="space-y-3">
                  {challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-600">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-2xl p-6 border border-teal-200/50">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">How We Help</h3>
                <ul className="space-y-3">
                  {solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}