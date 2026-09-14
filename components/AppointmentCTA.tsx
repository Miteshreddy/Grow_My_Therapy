import React from 'react';
import Image from 'next/image';
import { drMayaData } from '@/data/drMayaContent';

export default function AppointmentCTA() {
  return (
    <section id="contact" className="w-full bg-[#F3EFEA] py-20 lg:py-28 overflow-hidden border-b border-[#E5E0D8]/60">
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 xl:gap-16">
          
          {/* Left Decorative Image (desktop view) */}
          <div className="hidden lg:block w-[180px] xl:w-[200px] h-[400px] xl:h-[460px] flex-shrink-0 relative rounded-sm overflow-hidden self-end shadow-sm">
            <Image
              src="/images/shells-left.jpg"
              alt="Hands gently resting on warm sand, reflecting grounding and pause"
              fill
              sizes="200px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>

          {/* Center Text Block */}
          <div className="w-full lg:max-w-lg xl:max-w-xl flex flex-col items-start justify-center">
            
            {/* Eyebrow */}
            <p className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-[#C47D63] font-medium mb-4">
              CONNECT &amp; GET STARTED
            </p>

            {/* H2 Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-normal leading-[1.22] text-[#1F2421] font-serif mb-6">
              Taking the next step toward{' '}
              <span className="italic font-light text-[#2C3E35]">
                calm and sustainable
              </span>{' '}
              living.
            </h2>

            {/* Description */}
            <p className="text-[15px] sm:text-[16px] text-[#565C58] font-light leading-[1.85] mb-5">
              Finding a therapist who combines practical evidence-based tools with depth-oriented exploration—and who understands the realities of living and working in a fast-paced environment—is an essential first step.
            </p>
            <p className="text-[15px] sm:text-[16px] text-[#565C58] font-light leading-[1.85] mb-6">
              Whether you are looking for in-person psychotherapy at my private Santa Monica office or prefer the convenience of secure telehealth across California, I invite you to reach out.
            </p>

            {/* Practice Details Badge */}
            <div className="bg-white/90 p-4 rounded-sm border border-[#E5E0D8] mb-8 w-full">
              <p className="text-xs uppercase tracking-[0.12em] text-[#2C3E35] font-semibold">
                Dr. Maya Reynolds, PsyD
              </p>
              <p className="text-sm text-[#565C58] mt-1">
                {drMayaData.location.fullAddress}
              </p>
              <p className="text-xs text-[#C47D63] font-medium mt-1">
                {drMayaData.location.telehealthCoverage}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="mailto:contact@drmayareynolds.com"
                className="btn-forest text-center w-full sm:w-auto"
              >
                SCHEDULE A CONSULTATION
              </a>
              <a
                href="#office"
                className="cta-underline text-[11px] sm:text-[12px] tracking-[0.16em] uppercase font-medium"
              >
                VIEW OFFICE LOCATION
              </a>
            </div>

          </div>

          {/* Right Image Block */}
          <div className="w-full sm:w-[320px] lg:w-[360px] xl:w-[400px] h-[340px] sm:h-[420px] lg:h-[540px] flex-shrink-0 relative rounded-sm overflow-hidden mt-6 lg:mt-0 self-start shadow-sm">
            <Image
              src="/images/shells-right.jpg"
              alt="Grounded coastal moment reflecting self-compassion and healing"
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
