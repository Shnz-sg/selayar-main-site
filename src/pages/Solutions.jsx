import React from 'react';
import { Compass, Monitor, Layers, BarChart3 } from 'lucide-react';
import SolutionsHero from '../components/solutions/SolutionsHero';
import SolutionCard from '../components/solutions/SolutionCard';
import SolutionsCTA from '../components/solutions/SolutionsCTA';

const solutions = [
  {
    icon: Compass,
    title: 'Maritime Consultancy',
    description: 'Advisory support for operational efficiency, compliance awareness, and maritime process improvement. We bring decades of real-world maritime experience to help you optimize your operations.',
    features: [
      {
        title: 'Operational Efficiency Reviews',
        description: 'Comprehensive analysis of current operations to identify improvement opportunities and cost savings.'
      },
      {
        title: 'Compliance Advisory',
        description: 'Guidance on regulatory requirements, industry standards, and best practices for maritime compliance.'
      },
      {
        title: 'Process Optimization',
        description: 'Streamlining operational workflows to reduce redundancy and improve coordination.'
      },
      {
        title: 'Strategic Planning',
        description: 'Long-term operational planning and strategic advisory for fleet and business development.'
      }
    ]
  },
  {
    icon: Monitor,
    title: 'Digital Maritime Solutions',
    description: 'Design and development of digital tools that improve reporting, coordination, and shore–vessel communication. We create purpose-built solutions for the unique demands of maritime operations.',
    features: [
      {
        title: 'Custom Application Development',
        description: 'Bespoke digital tools designed specifically for your operational requirements.'
      },
      {
        title: 'Workflow Digitization',
        description: 'Converting manual processes into streamlined digital workflows for improved efficiency.'
      },
      {
        title: 'Reporting Systems',
        description: 'Automated reporting solutions that reduce administrative burden and improve data accuracy.'
      },
      {
        title: 'Shore-Vessel Connectivity',
        description: 'Enhanced communication systems bridging shore-based teams with vessel operations.'
      }
    ]
  },
  {
    icon: Layers,
    title: 'Systems & Integration',
    description: 'Integrating maritime operations with modern software systems, dashboards, and automated workflows. We connect your existing infrastructure with new technologies for seamless operational flow.',
    features: [
      {
        title: 'System Integration',
        description: 'Connecting disparate systems to enable seamless data flow across your operations.'
      },
      {
        title: 'API Development',
        description: 'Building interfaces that allow different platforms and tools to communicate effectively.'
      },
      {
        title: 'Dashboard Solutions',
        description: 'Centralized visibility into operations through intuitive management dashboards.'
      },
      {
        title: 'Workflow Automation',
        description: 'Automating routine tasks and processes to reduce manual effort and errors.'
      }
    ]
  },
  {
    icon: BarChart3,
    title: 'Data & Operational Intelligence',
    description: 'Using operational data to support smarter decisions, improved visibility, and performance optimization. We transform raw data into actionable insights that drive better outcomes.',
    features: [
      {
        title: 'Data Analytics',
        description: 'Advanced analysis of operational data to uncover trends, patterns, and opportunities.'
      },
      {
        title: 'Performance Monitoring',
        description: 'Real-time tracking of key performance indicators across your operations.'
      },
      {
        title: 'Predictive Insights',
        description: 'Using historical data to anticipate future needs and potential challenges.'
      },
      {
        title: 'Business Intelligence',
        description: 'Strategic insights that inform decision-making at all levels of your organization.'
      }
    ]
  }
];

export default function Solutions() {
  return (
    <div>
      <SolutionsHero />
      {solutions.map((solution, index) => (
        <SolutionCard
          key={solution.title}
          {...solution}
          index={index}
          reversed={index % 2 === 1}
        />
      ))}
      <SolutionsCTA />
    </div>
  );
}