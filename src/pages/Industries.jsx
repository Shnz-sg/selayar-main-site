import React from 'react';
import { Ship, Users, Anchor, Wrench, MapPin } from 'lucide-react';
import IndustriesHero from '../components/industries/IndustriesHero';
import IndustrySection from '../components/industries/IndustrySection';
import SolutionsCTA from '../components/solutions/SolutionsCTA';

const industries = [
  {
    icon: Ship,
    title: 'Ship Owners & Operators',
    description: 'Supporting vessel owners with operational insights, digital tools, and strategic advisory to optimize fleet performance and drive operational excellence across your entire maritime portfolio.',
    challenges: [
      'Managing fleet-wide operational efficiency',
      'Maintaining compliance across multiple flag states',
      'Coordinating between multiple vessels and shore teams',
      'Accessing real-time operational data for decision-making',
      'Balancing cost control with operational quality'
    ],
    solutions: [
      'Fleet performance monitoring and analytics',
      'Digital tools for shore-vessel coordination',
      'Compliance management systems',
      'Operational process optimization',
      'Data-driven decision support systems'
    ]
  },
  {
    icon: Users,
    title: 'Ship Managers',
    description: 'Enabling ship managers with streamlined processes, enhanced operational visibility, and digital tools that improve client service delivery and internal operational efficiency.',
    challenges: [
      'Managing diverse client requirements',
      'Maintaining visibility across managed fleets',
      'Standardizing operations across different vessel types',
      'Efficient reporting to principals',
      'Crew management and coordination'
    ],
    solutions: [
      'Centralized fleet management dashboards',
      'Automated reporting systems',
      'Standardized operational workflows',
      'Client portal solutions',
      'Integrated crew management tools'
    ]
  },
  {
    icon: Anchor,
    title: 'Offshore & Support Vessels',
    description: 'Specialized solutions for offshore operations and support vessel management, addressing the unique challenges of offshore logistics, coordination, and operational safety.',
    challenges: [
      'Complex logistics and scheduling',
      'Weather-dependent operations',
      'Multi-party coordination requirements',
      'Strict safety and compliance standards',
      'Remote operational environments'
    ],
    solutions: [
      'Logistics and scheduling optimization',
      'Operational coordination platforms',
      'Safety management systems',
      'Real-time tracking and monitoring',
      'Documentation and compliance tools'
    ]
  },
  {
    icon: Wrench,
    title: 'Marine Service Providers',
    description: 'Helping marine service providers modernize their service delivery, improve client coordination, and enhance operational capabilities through digital transformation.',
    challenges: [
      'Managing multiple client relationships',
      'Coordinating service delivery timing',
      'Maintaining service quality standards',
      'Tracking job completion and billing',
      'Communication with vessel operations'
    ],
    solutions: [
      'Service management platforms',
      'Client relationship management',
      'Job tracking and scheduling systems',
      'Digital documentation solutions',
      'Integration with client systems'
    ]
  },
  {
    icon: MapPin,
    title: 'Ports & Anchorage Operations',
    description: 'Supporting port and anchorage services with data-driven operational tools that improve vessel coordination, service delivery, and operational visibility.',
    challenges: [
      'Vessel traffic coordination',
      'Service scheduling and delivery',
      'Multi-stakeholder communication',
      'Resource allocation optimization',
      'Operational visibility and reporting'
    ],
    solutions: [
      'Vessel coordination systems',
      'Service scheduling platforms',
      'Stakeholder communication tools',
      'Resource management solutions',
      'Operational analytics dashboards'
    ]
  }
];

export default function Industries() {
  return (
    <div>
      <IndustriesHero />
      {industries.map((industry, index) => (
        <IndustrySection
          key={industry.title}
          {...industry}
          index={index}
        />
      ))}
      <SolutionsCTA />
    </div>
  );
}