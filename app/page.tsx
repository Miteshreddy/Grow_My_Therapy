import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PhilosophySection from '@/components/PhilosophySection';
import WhoWeHelp from '@/components/WhoWeHelp';
import QuoteBanner from '@/components/QuoteBanner';
import AreasOfExpertise from '@/components/AreasOfExpertise';
import HowWeWork from '@/components/HowWeWork';
import SpecialtiesIntro from '@/components/SpecialtiesIntro';
import SpecialtiesGrid from '@/components/SpecialtiesGrid';
import OurOffice from '@/components/OurOffice';
import FAQSection from '@/components/FAQSection';
import AppointmentCTA from '@/components/AppointmentCTA';
import Footer from '@/components/Footer';
import LegalBar from '@/components/LegalBar';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1F2421]">
      {/* 1. Header & Navigation */}
      <Header />

      <main id="main-content" className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Resonance / Who This Is For */}
        <PhilosophySection />

        {/* 4. Three Core Clinical Services */}
        <WhoWeHelp />

        {/* 5. Coastal Quote Banner */}
        <QuoteBanner />

        {/* 6. About Dr. Maya Reynolds, PsyD (with official portrait) */}
        <AreasOfExpertise />

        {/* 7. Integrative Modalities & Methods */}
        <HowWeWork />

        {/* 8. Pacing & Collaborative Transition */}
        <SpecialtiesIntro />

        {/* 9. Specialized Focus Areas Grid */}
        <SpecialtiesGrid />

        {/* 10. [NEW] Our Office - A Calm Space for Healing */}
        <OurOffice />

        {/* 11. [NEW] Frequently Asked Questions */}
        <FAQSection />

        {/* 12. Connect & Schedule Consultation CTA */}
        <AppointmentCTA />
      </main>

      {/* 13. Main Practice Footer */}
      <Footer />

      {/* 14. Professional Disclaimer Bar */}
      <LegalBar />
    </div>
  );
}
