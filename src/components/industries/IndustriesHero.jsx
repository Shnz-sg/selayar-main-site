import React from 'react';
import { motion } from 'framer-motion';
import GridOverlay from '../shared/GridOverlay';

export default function IndustriesHero() {
  return (
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
              Industries We Serve
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Serving the Global{' '}
            <span className="gradient-text">Maritime Sector</span>
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed">
            We work with diverse maritime businesses, bringing tailored solutions and deep industry understanding to each unique operational environment.
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
  );
}