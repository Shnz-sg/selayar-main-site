import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { MapPin, Mail, Phone, Linkedin, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: 'About' },
    { name: 'Solutions', href: 'Solutions' },
    { name: 'Industries', href: 'Industries' },
    { name: 'Insights', href: 'Insights' },
  ],
  solutions: [
    { name: 'Maritime Consultancy', href: 'Solutions' },
    { name: 'Digital Solutions', href: 'Solutions' },
    { name: 'Systems Integration', href: 'Solutions' },
    { name: 'Data Intelligence', href: 'Solutions' },
  ],
  industries: [
    { name: 'Ship Owners', href: 'Industries' },
    { name: 'Ship Managers', href: 'Industries' },
    { name: 'Offshore Operations', href: 'Industries' },
    { name: 'Marine Services', href: 'Industries' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#14B8A6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to={createPageUrl('Home')} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-tight">SELAYAR</span>
                <span className="text-teal-400 text-xs tracking-widest">GLOBAL</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
              Powering the future of maritime operations through expertise, innovation, and intelligent digital solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Singapore</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <a href="mailto:contact@selayar.sg" className="text-sm hover:text-teal-400 transition-colors">
                  contact@selayar.sg
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={createPageUrl(link.href)}
                    className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={createPageUrl(link.href)}
                    className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={createPageUrl(link.href)}
                    className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Selayar Global. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-teal-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-teal-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}