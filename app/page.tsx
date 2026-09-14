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
import AppointmentCTA from '@/components/AppointmentCTA';
import Footer from '@/components/Footer';
import LegalBar from '@/components/LegalBar';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#EFECE6] text-[#2B2B2B]">
      {/* 1. Header & Navigation */}
      <Header />

      <main id="main-content" className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Philosophy / Hope Section */}
        <PhilosophySection />

        {/* 4. Who We Help Section */}
        <WhoWeHelp />

        {/* 5. Coastal Quote Banner */}
        <QuoteBanner />

        {/* 6. Areas of Expertise */}
        <AreasOfExpertise />

        {/* 7. How We Work */}
        <HowWeWork />

        {/* 8. Specialties Intro */}
        <SpecialtiesIntro />

        {/* 9. Specialties 2x2 Grid */}
        <SpecialtiesGrid />

        {/* 10. Schedule an Appointment CTA */}
        <AppointmentCTA />
      </main>

      {/* 11. Main 4-Column Footer */}
      <Footer />

      {/* 12. Bottom Legal Teal Bar */}
      <LegalBar />
    </div>
  );
}
