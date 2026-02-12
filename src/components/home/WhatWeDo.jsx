import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Monitor, Layers, BarChart3, ArrowRight } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { createPageUrl } from '../../utils';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Compass,
    title: 'Maritime Consultancy',
    description: 'Operational advisory and practical solutions for shipowners, managers, and maritime service providers. We bring real-world maritime experience to every engagement.',
    features: ['Operational Efficiency', 'Process Improvement', 'Compliance Advisory']
  },
  {
    icon: Monitor,
    title: 'Digital Maritime Solutions',
    description: 'Development of digital tools that modernize workflows, reporting, and operational coordination between shore and vessel.',
    features: ['Workflow Digitization', 'Reporting Systems', 'Shore-Vessel Coordination']
  },
  {
    icon: Layers,
    title: 'Systems & Integration',
    description: 'Connecting maritime operations with modern software, automation, and data platforms for seamless operational flow.',
    features: ['Software Integration', 'Automated Workflows', 'Platform Connectivity']
  },
  {
    icon: BarChart3,
    title: 'Data & Operational Intelligence',
    description: 'Using maritime data and analytics to improve decision-making, visibility, and performance across operations.',
    features: ['Data Analytics', 'Performance Insights', 'Operational Visibility']
  }
];

export default function WhatWeDo() {
  return (
    <section className="bg-white relative overflow-hidden fluid-spacing-y">
      <div className="w-full max-w-[90rem] mx-auto fluid-spacing-x">
        <SectionHeading
          eyebrow="Our Solutions"
          title="Four Pillars of Maritime Expertise"
          description="Comprehensive capabilities across maritime consultancy, digital solutions, systems integration, and operational intelligence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 'clamp(1.5rem, 3vw, 2rem)', marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 sm:p-8 lg:p-10 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-transparent group-hover:border-transparent transition-all duration-500">
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4 sm:mb-6 group-hover:bg-white/20 transition-colors duration-500">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600 group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 sm:mb-6 group-hover:text-white/90 transition-colors duration-500">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-3 py-1 bg-white/80 text-slate-700 text-xs font-medium rounded-full group-hover:bg-white/20 group-hover:text-white transition-colors duration-500"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link 
                  to={createPageUrl('Solutions')}
                  className="inline-flex items-center text-teal-600 font-semibold text-sm group-hover:text-white transition-colors duration-500"
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}