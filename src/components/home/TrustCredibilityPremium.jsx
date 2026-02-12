import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Award, Cpu, TrendingUp, Shield, Users } from 'lucide-react';

const credentials = [
  {
    icon: Anchor,
    stat: "25+",
    label: "Years Combined",
    description: "Maritime Experience"
  },
  {
    icon: Shield,
    stat: "Global",
    label: "Operations",
    description: "Singapore-Based"
  },
  {
    icon: Cpu,
    stat: "Digital",
    label: "Innovation",
    description: "Technology Leadership"
  },
  {
    icon: Award,
    stat: "Cross",
    label: "Disciplinary",
    description: "Expert Team"
  }
];

const trustPoints = [
  "Founded by seafaring professionals with firsthand operational experience",
  "Deep expertise in maritime operations, compliance, and vessel management",
  "Advanced technology capabilities in digital systems and data platforms",
  "Singapore headquarters with global maritime industry reach"
];

export default function TrustCredibilityPremium() {
  return (
    <section className="relative bg-gradient-to-b from-[#0A0F1F] to-[#081825] overflow-hidden fluid-spacing-y">
      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="trust-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#0FFAFE" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#trust-grid)" />
        </svg>
      </div>

      <div className="relative w-full max-w-[90rem] mx-auto fluid-spacing-x">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
          style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}
        >
          <div className="flex items-center justify-center mb-[clamp(1rem,2.5vh,1.5rem)]" style={{ gap: 'clamp(0.5rem, 1.5vw, 1rem)' }}>
            <div className="h-px bg-gradient-to-r from-transparent via-[#0FFAFE] to-transparent" style={{ width: 'clamp(2rem, 4vw, 3rem)' }} />
            <span className="text-[#0FFAFE] font-semibold tracking-[0.15em] uppercase" style={{ fontSize: 'clamp(0.625rem, 0.75vw + 0.25rem, 0.75rem)' }}>
              Why Maritime Leaders Choose Us
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-[#0FFAFE] to-transparent" style={{ width: 'clamp(2rem, 4vw, 3rem)' }} />
          </div>
          <h2 className="font-bold text-[#F9FAFB] leading-tight" style={{ fontSize: 'clamp(1.75rem, 3.5vw + 0.5rem, 3.75rem)', marginBottom: 'clamp(1rem, 2.5vh, 1.5rem)' }}>
            Built by Maritime Professionals
          </h2>
          <p className="text-[#E1E8F0] leading-relaxed" style={{ fontSize: 'clamp(0.9375rem, 1.25vw + 0.5rem, 1.25rem)' }}>
            Real experience at sea. Real expertise in operations. Real technology innovation.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 'clamp(1rem, 2.5vw, 1.5rem)', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          {credentials.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-[#0FFAFE]/20 rounded-2xl hover:border-[#0FFAFE]/50 hover:bg-white/8 transition-all duration-300" style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
                {/* Icon */}
                <div className="bg-gradient-to-br from-[#0FFAFE] to-[#1AC6FF] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" 
                     style={{ 
                       width: 'clamp(3rem, 4vw, 3.5rem)', 
                       height: 'clamp(3rem, 4vw, 3.5rem)',
                       marginBottom: 'clamp(1rem, 2.5vw, 1.5rem)'
                     }}>
                  <item.icon className="text-[#0A0F1F]" style={{ width: 'clamp(1.5rem, 2vw, 1.75rem)', height: 'clamp(1.5rem, 2vw, 1.75rem)' }} />
                </div>
                
                {/* Content */}
                <div className="font-bold text-[#0FFAFE]" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>{item.stat}</div>
                <div className="font-semibold text-[#F9FAFB]" style={{ fontSize: 'clamp(0.9375rem, 1.25vw, 1.125rem)', marginBottom: 'clamp(0.25rem, 0.5vw, 0.5rem)' }}>{item.label}</div>
                <div className="text-[#94A3B8]" style={{ fontSize: 'clamp(0.8125rem, 1vw, 0.875rem)' }}>{item.description}</div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0FFAFE]/0 to-[#1AC6FF]/0 group-hover:from-[#0FFAFE]/5 group-hover:to-[#1AC6FF]/5 rounded-2xl transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-start bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-[#0FFAFE]/30 transition-all duration-300"
                style={{ 
                  gap: 'clamp(0.75rem, 1.5vw, 1rem)', 
                  padding: 'clamp(1rem, 2.5vw, 1.5rem)' 
                }}
              >
                <div className="bg-[#0FFAFE] rounded-full flex-shrink-0" style={{ width: 'clamp(0.375rem, 0.5vw, 0.5rem)', height: 'clamp(0.375rem, 0.5vw, 0.5rem)', marginTop: 'clamp(0.375rem, 0.75vw, 0.5rem)' }} />
                <p className="text-[#E1E8F0] leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.25rem, 1rem)' }}>{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}