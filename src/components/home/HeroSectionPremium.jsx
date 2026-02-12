import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Button from '../shared/Button';
import { createPageUrl } from '../../utils';

const heroVariations = [
  {
    id: 1,
    headline: "Where Maritime Operations",
    subheadline: "Meet Digital Intelligence",
    description: "Selayar Global delivers expert maritime consultancy and advanced digital solutions to shipping companies, offshore operators, and marine service providers worldwide.",
    primaryCTA: "Start a Conversation",
    secondaryCTA: "Explore Our Solutions",
    microCopy: "Trusted by maritime leaders globally",
    imageStyle: "digital-ocean"
  },
  {
    id: 2,
    headline: "Maritime Expertise.",
    subheadline: "Digital Transformation.",
    description: "We combine decades of seafaring experience with cutting-edge technology to modernize your operations and drive measurable results.",
    primaryCTA: "Request Consultation",
    secondaryCTA: "View Capabilities",
    microCopy: "Founded by maritime professionals",
    imageStyle: "vessel-silhouette"
  },
  {
    id: 3,
    headline: "Intelligent Solutions",
    subheadline: "For Modern Maritime",
    description: "Transform your fleet operations with consultancy services and digital platforms built by people who understand the sea.",
    primaryCTA: "Connect With Us",
    secondaryCTA: "Our Approach",
    microCopy: "Singapore-based, globally focused",
    imageStyle: "offshore-night"
  },
  {
    id: 4,
    headline: "Navigate the Future",
    subheadline: "Of Maritime Operations",
    description: "From compliance advisory to operational intelligence, we deliver the expertise and technology maritime businesses need to thrive.",
    primaryCTA: "Speak With Our Team",
    secondaryCTA: "Learn More",
    microCopy: "Serving the global maritime industry",
    imageStyle: "aerial-port"
  },
  {
    id: 5,
    headline: "Built by Seafarers.",
    subheadline: "Powered by Innovation.",
    description: "Selayar Global bridges traditional maritime expertise with modern digital capabilities to optimize operations worldwide.",
    primaryCTA: "Get Started",
    secondaryCTA: "Discover Solutions",
    microCopy: "Real experience. Real results.",
    imageStyle: "data-mesh"
  }
];

export default function HeroSectionPremium() {
  const [currentVariation, setCurrentVariation] = useState(0);
  const hero = heroVariations[currentVariation];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#081825] via-[#0A0F1F] to-[#02060E]" />
      
      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          <defs>
            <pattern id="premium-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#0FFAFE" opacity="0.3" />
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#0FFAFE" strokeWidth="0.5" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#premium-grid)" />
        </svg>
      </div>

      {/* Glowing Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 -left-40 w-96 h-96 bg-[#0FFAFE] rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/3 -right-40 w-96 h-96 bg-[#1AC6FF] rounded-full blur-[120px]"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto fluid-spacing-x" style={{ paddingTop: 'clamp(4rem, 10vh, 7rem)', paddingBottom: 'clamp(2.5rem, 6vh, 4.5rem)' }}>
        <div className="grid lg:grid-cols-2 fluid-gap items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVariation}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Micro Label */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center mb-[clamp(1.5rem,4vh,2.5rem)]"
                style={{ gap: 'clamp(0.5rem, 1vw, 1rem)' }}
              >
                <div className="h-px bg-gradient-to-r from-[#0FFAFE] to-transparent" style={{ width: 'clamp(2rem, 4vw, 4rem)' }} />
                <span className="text-[#0FFAFE] font-semibold tracking-[0.15em] uppercase" style={{ fontSize: 'clamp(0.625rem, 0.75vw + 0.25rem, 0.75rem)' }}>
                  {hero.microCopy}
                </span>
              </motion.div>

              {/* Headlines */}
              <h1 className="font-bold leading-[1.1]" style={{ fontSize: 'clamp(2rem, 5vw + 0.5rem, 4.5rem)', marginBottom: 'clamp(1rem, 3vh, 2rem)' }}>
                <span className="block text-[#F9FAFB]">{hero.headline}</span>
                <span className="block gradient-text text-glow">{hero.subheadline}</span>
              </h1>

              {/* Description */}
              <p className="text-[#E1E8F0] leading-relaxed max-w-xl" style={{ fontSize: 'clamp(0.9375rem, 1.25vw + 0.5rem, 1.25rem)', marginBottom: 'clamp(2rem, 4vh, 3rem)' }}>
                {hero.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row justify-center sm:justify-start" style={{ gap: 'clamp(0.75rem, 2vw, 1rem)', marginBottom: 'clamp(2rem, 4vh, 3rem)' }}>
                <motion.a
                  href={createPageUrl('Contact')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-gradient-to-r from-[#0FFAFE] to-[#1AC6FF] text-[#0A0F1F] font-bold rounded-xl shadow-lg shadow-[#0FFAFE]/20 hover:shadow-[#0FFAFE]/40 transition-all duration-300 flex items-center justify-center"
                  style={{ 
                    padding: 'clamp(0.75rem, 1.5vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
                    fontSize: 'clamp(0.875rem, 1vw + 0.25rem, 1rem)',
                    gap: 'clamp(0.375rem, 0.75vw, 0.5rem)'
                  }}
                >
                  {hero.primaryCTA}
                  <ArrowRight className="fluid-icon group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href={createPageUrl('Solutions')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-white/5 backdrop-blur-sm border border-[#0FFAFE]/30 text-[#F9FAFB] font-semibold rounded-xl hover:bg-white/10 hover:border-[#0FFAFE]/50 transition-all duration-300 flex items-center justify-center"
                  style={{ 
                    padding: 'clamp(0.75rem, 1.5vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
                    fontSize: 'clamp(0.875rem, 1vw + 0.25rem, 1rem)',
                    gap: 'clamp(0.375rem, 0.75vw, 0.5rem)'
                  }}
                >
                  {hero.secondaryCTA}
                  <ChevronRight className="fluid-icon group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>

              {/* Variation Selector (for demo) */}
              <div className="flex justify-center sm:justify-start" style={{ gap: 'clamp(0.375rem, 0.75vw, 0.5rem)' }}>
                {heroVariations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVariation(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentVariation 
                        ? 'bg-[#0FFAFE]' 
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    style={{ width: index === currentVariation ? 'clamp(3rem, 4vw, 4rem)' : 'clamp(2rem, 3vw, 3rem)' }}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-[#0FFAFE]/20 rounded-full"
              />
              
              {/* Inner Glow Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border-2 border-[#1AC6FF]/30 rounded-full"
              />

              {/* Center Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-[#0FFAFE]/20 to-[#1AC6FF]/20 rounded-full premium-glow flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#0FFAFE] to-[#1AC6FF] rounded-full opacity-60 animate-pulse" />
                </div>
              </div>

              {/* Floating Data Points */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                  className="absolute w-3 h-3 bg-[#0FFAFE] rounded-full"
                  style={{
                    top: `${20 + Math.sin(i * Math.PI / 3) * 30}%`,
                    left: `${20 + Math.cos(i * Math.PI / 3) * 30}%`
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path 
            fill="#F9FAFB" 
            fillOpacity="0.03"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}