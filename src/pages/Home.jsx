import React from 'react';
import HeroSectionPremium from '../components/home/HeroSectionPremium';
import TrustCredibilityPremium from '../components/home/TrustCredibilityPremium';
import WhatWeDo from '../components/home/WhatWeDo';
import FounderStory from '../components/home/FounderStory';
import IndustriesServed from '../components/home/IndustriesServed';
import VisionCTA from '../components/home/VisionCTA';

export default function Home() {
  return (
    <div className="bg-[#0A0F1F]">
      <HeroSectionPremium />
      <TrustCredibilityPremium />
      <WhatWeDo />
      <FounderStory />
      <IndustriesServed />
      <VisionCTA />
    </div>
  );
}