import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Anchor, Globe, Activity } from 'lucide-react';
import Button from '../shared/Button';
import GridOverlay from '../shared/GridOverlay';
import { createPageUrl } from '../../utils';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center ocean-gradient overflow-hidden">
      {/* Background Elements */}
      <GridOverlay />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Ship silhouette overlay */}
      <div className="absolute bottom-0 right-0 w-full h-1/3 opacity-5">
        <svg viewBox="0 0 1200 300" className="w-full h-full" preserveAspectRatio="xMaxYMax slice">
          <path 
            fill="#14B8A6" 
            d="M1200,300 L1200,150 L1100,140 L1080,100 L1060,100 L1060,80 L1040,80 L1040,100 L1020,100 L1000,140 L950,140 L900,130 L800,135 L700,140 L600,145 L0,200 L0,300 Z"
          />
        </svg>
      </div>

      {/* Horizon line */}
      <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-teal-500" />
              <span className="text-teal-400 text-sm font-semibold tracking-wider uppercase">
                Maritime Technology & Consultancy
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-8">
              Maritime Expertise Meets{' '}
              <span className="gradient-text">Digital Innovation</span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
              Selayar Global helps shipping companies, offshore operators, and marine service providers modernize operations through proven maritime expertise and intelligent digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={createPageUrl('Contact')} variant="primary" size="large" icon>
                Request a Consultation
              </Button>
              <Button href={createPageUrl('Solutions')} variant="secondary" size="large">
                Explore Solutions
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
              {[
                { icon: Globe, label: 'Global Reach', value: 'Worldwide' },
                { icon: Anchor, label: 'Maritime Focus', value: 'Deep Expertise' },
                { icon: Activity, label: 'Digital First', value: 'Innovation' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-teal-400 mx-auto mb-2" />
                  <p className="text-white font-semibold text-sm">{stat.value}</p>
                  <p className="text-slate-500 text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Circular orbit lines */}
              <div className="absolute inset-0 rounded-full border border-teal-500/20 animate-spin-slow" style={{ animationDuration: '30s' }} />
              <div className="absolute inset-8 rounded-full border border-teal-500/15 animate-spin-slow" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
              <div className="absolute inset-16 rounded-full border border-teal-500/10 animate-spin-slow" style={{ animationDuration: '20s' }} />
              
              {/* Central element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 bg-gradient-to-br from-teal-500/20 to-teal-600/10 rounded-full backdrop-blur-sm border border-teal-500/30 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/30">
                    <Globe className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>

              {/* Orbiting nodes */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-slate-800 rounded-lg border border-teal-500/30 flex items-center justify-center shadow-lg">
                  <Anchor className="w-6 h-6 text-teal-400" />
                </div>
              </div>
              <div className="absolute bottom-8 right-0 translate-x-1/2">
                <div className="w-10 h-10 bg-slate-800 rounded-lg border border-teal-500/30 flex items-center justify-center shadow-lg">
                  <Activity className="w-5 h-5 text-teal-400" />
                </div>
              </div>
              <div className="absolute bottom-8 left-0 -translate-x-1/2">
                <div className="w-10 h-10 bg-slate-800 rounded-lg border border-teal-500/30 flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave transition */}
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