import React from 'react';
import AboutHero from '../components/about/AboutHero';
import CompanyOverview from '../components/about/CompanyOverview';
import MaritimeFoundation from '../components/about/MaritimeFoundation';
import TechnologyApproach from '../components/about/TechnologyApproach';
import Philosophy from '../components/about/Philosophy';
import IndustryVision from '../components/about/IndustryVision';

export default function About() {
  return (
    <div>
      <AboutHero />
      <CompanyOverview />
      <MaritimeFoundation />
      <TechnologyApproach />
      <Philosophy />
      <IndustryVision />
    </div>
  );
}