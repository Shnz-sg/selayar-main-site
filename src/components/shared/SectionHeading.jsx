import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ 
  eyebrow, 
  title, 
  description, 
  centered = true,
  light = false 
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}
      style={{ marginBottom: 'clamp(3rem, 5vw, 4rem)' }}
    >
      {eyebrow && (
        <span 
          className={`inline-block font-semibold tracking-wider uppercase ${
            light ? 'text-teal-300' : 'text-teal-600'
          }`}
          style={{ fontSize: 'clamp(0.625rem, 0.75vw + 0.25rem, 0.75rem)', marginBottom: 'clamp(0.75rem, 1.5vh, 1rem)' }}
        >
          {eyebrow}
        </span>
      )}
      <h2 
        className={`font-bold leading-tight ${light ? 'text-white' : 'text-slate-900'}`}
        style={{ fontSize: 'clamp(1.5rem, 3vw + 0.5rem, 3rem)', marginBottom: 'clamp(1rem, 2vh, 1.5rem)' }}
      >
        {title}
      </h2>
      {description && (
        <p 
          className={`leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}
          style={{ fontSize: 'clamp(0.9375rem, 1.25vw + 0.5rem, 1.25rem)' }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}