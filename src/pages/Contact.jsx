import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, Building2, Handshake, MessageSquare, CheckCircle } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import GridOverlay from '../components/shared/GridOverlay';
import Button from '../components/shared/Button';

const inquiryTypes = [
  { value: 'business', label: 'Business Inquiry', icon: Building2 },
  { value: 'partnership', label: 'Partnership Opportunity', icon: Handshake },
  { value: 'general', label: 'General Contact', icon: MessageSquare },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the form data
    setIsSubmitted(true);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      {/* Hero */}
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
                Contact Us
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Let's Build Smarter{' '}
              <span className="gradient-text">Maritime Operations</span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Ready to discuss how we can support your maritime operations? We're here to listen and explore how our expertise can address your specific challenges.
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

      {/* Contact Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Whether you're looking to optimize your maritime operations, explore digital transformation, or discuss a potential partnership, we'd be happy to hear from you.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Location</h4>
                    <p className="text-slate-600">Singapore</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <a href="mailto:contact@selayar.sg" className="text-teal-600 hover:text-teal-700 transition-colors">
                      contact@selayar.sg
                    </a>
                  </div>
                </div>
              </div>

              {/* Inquiry Types */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h4 className="font-semibold text-slate-900 mb-4">Ways to Connect</h4>
                <div className="space-y-4">
                  {inquiryTypes.map((type) => (
                    <div key={type.value} className="flex items-center gap-3">
                      <type.icon className="w-5 h-5 text-teal-500" />
                      <span className="text-slate-700">{type.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-slate-100">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Thank You for Reaching Out
                    </h3>
                    <p className="text-slate-600 max-w-md mx-auto">
                      We've received your message and will get back to you shortly. We look forward to discussing how we can support your maritime operations.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Send Us a Message
                    </h3>
                    <p className="text-slate-600 mb-8">
                      Fill out the form below and we'll respond within one business day.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            placeholder="Your full name"
                            required
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            placeholder="your@email.com"
                            required
                            className="h-12"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleChange('company', e.target.value)}
                            placeholder="Your company name"
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="inquiryType">Inquiry Type *</Label>
                          <Select
                            value={formData.inquiryType}
                            onValueChange={(value) => handleChange('inquiryType', value)}
                            required
                          >
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              {inquiryTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          placeholder="Tell us about your maritime operations and how we might help..."
                          required
                          className="min-h-[150px] resize-none"
                        />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full h-14 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold rounded-xl shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Send className="w-5 h-5" />
                        Send Message
                      </motion.button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl" />
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <svg className="w-full h-full opacity-10">
                <defs>
                  <pattern id="contact-cta-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="30" cy="30" r="1" fill="#14B8A6" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#contact-cta-pattern)" />
              </svg>
            </div>
            
            <div className="relative px-8 py-16 lg:px-16 lg:py-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Singapore-Based, Globally Focused
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    Headquartered in Singapore, one of the world's leading maritime hubs, Selayar Global serves clients across the global maritime industry.
                  </p>
                  <p className="text-slate-400">
                    Our strategic location enables us to support maritime businesses across Asia, Europe, the Middle East, and beyond.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div className="w-64 h-64 bg-gradient-to-br from-teal-500/20 to-teal-600/10 rounded-full flex items-center justify-center border border-teal-500/30">
                    <div className="w-48 h-48 bg-gradient-to-br from-teal-400/20 to-teal-600/20 rounded-full flex items-center justify-center border border-teal-500/20">
                      <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/30">
                        <MapPin className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}