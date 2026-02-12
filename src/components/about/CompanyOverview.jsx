import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Ship, Cpu, Target } from 'lucide-react';

export default function CompanyOverview() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Company Overview
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Selayar Global operates at the intersection of maritime operations and digital technology. We are a Singapore-based company dedicated to supporting the global shipping and offshore sectors with expertise, innovation, and practical solutions.
              </p>
              <p>
                Our organization brings together professionals with genuine maritime backgrounds - people who understand the realities of vessel operations, the pressures of compliance environments, and the day-to-day challenges faced by shipping companies worldwide.
              </p>
              <p>
                Selayar was founded by seafaring professionals whose experience at sea shaped the company's direction from the very beginning. With firsthand knowledge of shipboard life and operational demands, our founders built Selayar to bridge the gap between real-world maritime operations and modern digital capabilities.
              </p>
              <p>
                The team's background spans cross-disciplinary expertise in engineering, maritime business, and advanced technology, allowing us to approach industry challenges from operational, commercial, and digital perspectives at the same time. This unique blend ensures that every solution we design is technically sound, commercially practical, and operationally realistic.
              </p>
              <p>
                A key pillar of Selayar's foundation is strong technology leadership, including deep experience in digital systems and innovation. This insight has helped shape Selayar into a company that doesn't just understand maritime - it understands how technology can responsibly and effectively transform it.
              </p>
              <p>
                What sets us apart is our dual perspective: we see the maritime industry through the eyes of experienced operators, while simultaneously embracing the transformative potential of modern digital systems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Globe, label: 'Global Operations', color: 'from-teal-400 to-teal-600' },
                { icon: Ship, label: 'Maritime Focus', color: 'from-slate-600 to-slate-800' },
                { icon: Cpu, label: 'Digital Solutions', color: 'from-teal-500 to-cyan-500' },
                { icon: Target, label: 'Practical Results', color: 'from-slate-700 to-slate-900' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-semibold text-slate-900">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}