import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Users, Anchor, Wrench, MapPin, ArrowRight } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import Button from '../shared/Button';
import { createPageUrl } from '../../utils';

const industries = [
  {
    icon: Ship,
    title: 'Ship Owners & Operators',
    description: 'Supporting vessel owners with operational insights and digital tools for fleet management.'
  },
  {
    icon: Users,
    title: 'Ship Managers',
    description: 'Enabling ship managers with streamlined processes and enhanced operational visibility.'
  },
  {
    icon: Anchor,
    title: 'Offshore & Support Vessels',
    description: 'Specialized solutions for offshore operations and support vessel management.'
  },
  {
    icon: Wrench,
    title: 'Marine Service Providers',
    description: 'Helping service providers modernize their delivery and client coordination.'
  },
  {
    icon: MapPin,
    title: 'Ports & Anchorage Operations',
    description: 'Supporting port and anchorage services with data-driven operational tools.'
  }
];

export default function IndustriesServed() {
  return (
    <section className="py-24 lg:py-32 ocean-gradient relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <pattern id="industry-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1.5" fill="#14B8A6" />
              <line x1="0" y1="40" x2="80" y2="40" stroke="#14B8A6" strokeWidth="0.3" strokeDasharray="4 4" />
              <line x1="40" y1="0" x2="40" y2="80" stroke="#14B8A6" strokeWidth="0.3" strokeDasharray="4 4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#industry-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Trusted Across the Maritime Sector"
          description="We work with a diverse range of maritime businesses, bringing tailored solutions to each unique operational environment."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-500/30 transition-colors duration-300">
                <industry.icon className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{industry.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button href={createPageUrl('Industries')} variant="secondary" icon>
            Explore All Industries
          </Button>
        </motion.div>
      </div>
    </section>
  );
}