import React from 'react';
import Image from 'next/image';
import { drMayaData } from '@/data/drMayaContent';

export default function AreasOfExpertise() {
  return (
    <section id="about" className="w-full bg-[#FAF8F5] py-16 sm:py-18 lg:py-24 border-b border-[#E5E0D8]/60">
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 xl:gap-20">
          
          {/* Left: Maya's Official Portrait from Profile */}
          <div className="w-full sm:w-[420px] lg:w-[440px] xl:w-[480px] flex-shrink-0">
            <div className="relative w-full aspect-[2/3] rounded-sm overflow-hidden shadow-md bg-[#F3EFEA] border border-[#E5E0D8]">
              <Image
                src={drMayaData.about.portrait}
                alt="Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist in Santa Monica"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Portrait Caption / Credentials */}
            <div className="mt-4 px-1 flex flex-col">
              <span className="font-serif text-xl text-[#2C3E35] font-medium">
                {drMayaData.name}
              </span>
              <span className="text-xs tracking-[0.14em] uppercase text-[#565C58]">
                {drMayaData.title} · Santa Monica, CA
              </span>
            </div>
          </div>

          {/* Right: Personal Narrative & Approach */}
          <div className="flex-1 min-w-0 flex flex-col justify-start">
            {/* Eyebrow */}
            <p className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-[#C47D63] font-medium mb-3">
              {drMayaData.about.eyebrow}
            </p>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-normal text-[#1F2421] font-serif leading-[1.22] mb-6">
              A warm, collaborative, and{' '}
              <span className="italic font-light text-[#2C3E35]">grounded space</span> for meaningful change.
            </h2>

            {/* Lead Paragraph */}
            <p className="text-base sm:text-lg text-[#2C3E35] font-medium leading-[1.75] mb-5">
              {drMayaData.about.leadParagraph}
            </p>

            {/* Body Paragraphs */}
            <div className="space-y-4 text-[15px] sm:text-[16px] text-[#565C58] font-light leading-[1.85] mb-8">
              {drMayaData.about.bodyParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y border-[#E5E0D8] mb-8">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#C47D63] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-sm uppercase tracking-[0.1em] font-medium text-[#2C3E35]">
                    Paced Trauma Work
                  </h4>
                  <p className="text-xs text-[#565C58] mt-0.5">
                    Careful pacing with emphasis on safety, stabilization, and daily regulation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#C47D63] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-sm uppercase tracking-[0.1em] font-medium text-[#2C3E35]">
                    Mind &amp; Body Integration
                  </h4>
                  <p className="text-xs text-[#565C58] mt-0.5">
                    Addressing both emotional patterns and physiological nervous system states.
                  </p>
                </div>
              </div>
            </div>

            {/* Underline CTA Link */}
            <div>
              <a
                href="#contact"
                className="btn-forest"
              >
                SCHEDULE A CONSULTATION WITH DR. MAYA
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
