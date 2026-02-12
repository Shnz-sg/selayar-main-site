import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../shared/Button';

const navLinks = [
  { name: 'Home', href: 'Home' },
  { name: 'About Us', href: 'About' },
  { name: 'Solutions', href: 'Solutions' },
  { name: 'Industries', href: 'Industries' },
  { name: 'Insights', href: 'Insights' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#0A0F1F]/98 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-[#0FFAFE]/10' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-[90rem] mx-auto fluid-spacing-x">
        <div className="flex items-center justify-between" style={{ height: 'clamp(4rem, 8vh, 5rem)' }}>
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center" style={{ gap: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697c25ce038544edfdd2590e/f8cf5cb3c_Subject2.png"
              alt="Selayar Logo"
              style={{ height: 'clamp(2.5rem, 4vw + 1rem, 3.5rem)', width: 'auto' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center" style={{ gap: 'clamp(0.25rem, 0.5vw, 0.5rem)' }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === createPageUrl(link.href);
              return (
                <Link
                  key={link.name}
                  to={createPageUrl(link.href)}
                  className={`relative font-medium transition-colors ${
                    isActive ? 'text-teal-400' : 'text-slate-300 hover:text-white'
                  }`}
                  style={{ 
                    padding: 'clamp(0.375rem, 0.75vw, 0.5rem) clamp(0.75rem, 1.5vw, 1rem)',
                    fontSize: 'clamp(0.8125rem, 0.875vw + 0.25rem, 0.875rem)'
                  }}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-teal-400 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button href={createPageUrl('Contact')} variant="primary" size="small">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900/98 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === createPageUrl(link.href);
                return (
                  <Link
                    key={link.name}
                    to={createPageUrl(link.href)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive 
                        ? 'bg-teal-600/20 text-teal-400' 
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4">
                <Button href={createPageUrl('Contact')} variant="primary" className="w-full">
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}