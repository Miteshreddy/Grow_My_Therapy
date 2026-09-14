import React from 'react';
import Image from 'next/image';
import { drMayaData } from '@/data/drMayaContent';

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full bg-[#FAF8F5] pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-[#E5E0D8]/60"
    >
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 xl:gap-16">
          
          {/* Practice Office Visual: order-2 on mobile, order-1 on desktop */}
          <div className="order-2 lg:order-1 w-full lg:w-[380px] xl:w-[420px] flex-shrink-0">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:h-[590px] xl:h-[630px] rounded-sm overflow-hidden shadow-sm bg-[#F3EFEA]">
              <Image
                src="/images/office-2.jpg"
                alt="Dr. Maya Reynolds Santa Monica therapy office with natural light, bookshelf, and calm seating"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-sm border border-white/40">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#2C3E35] font-medium">
                  Santa Monica Office · 123th St 45 W
                </p>
                <p className="text-[12px] text-[#565C58]">
                  In-person &amp; California telehealth
                </p>
              </div>
            </div>
          </div>

          {/* Text Content: order-1 on mobile, order-2 on desktop */}
          <div className="order-1 lg:order-2 flex-1 min-w-0 flex flex-col justify-center lg:pl-2 xl:pl-6">
            {/* Eyebrow */}
            <p className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-[#C47D63] font-medium mb-4 sm:mb-6 leading-[1.6]">
              {drMayaData.hero.eyebrow}
            </p>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-[44px] xl:text-[50px] font-normal leading-[1.18] text-[#1F2421] mb-6 font-serif">
              Thoughtful Therapy for{' '}
              <br className="hidden sm:inline" />
              <span className="italic font-light text-[#2C3E35]">Anxiety, Trauma</span> &amp; Burnout{' '}
              <br className="hidden sm:inline" />
              in{' '}
              <span className="relative inline-block">
                Santa Monica.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-[17px] text-[#565C58] font-light leading-[1.8] mb-6 max-w-2xl">
              {drMayaData.hero.subheading}
            </p>

            {/* In-person & Telehealth Callout Badge */}
            <div className="flex items-center gap-2 mb-8 text-[12px] sm:text-[13px] text-[#2C3E35] font-medium bg-[#F3EFEA] px-3.5 py-2 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-[#C47D63] inline-block animate-pulse"></span>
              <span>In-person Santa Monica sessions &amp; secure telehealth across California</span>
            </div>

            {/* CTAs: Primary Pill Button + Secondary Underlined Link */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
              <a
                href="#contact"
                className="btn-forest text-center w-full sm:w-auto"
              >
                SCHEDULE A CONSULTATION
              </a>
              <a
                href="#services"
                className="cta-underline text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-medium"
              >
                EXPLORE THERAPY SERVICES
              </a>
            </div>
          </div>

          {/* Right Edge Ocean Wave Peek (Visible on xl desktop screens) */}
          <div className="hidden xl:block order-3 w-[100px] 2xl:w-[130px] h-[520px] flex-shrink-0 relative overflow-hidden self-center ml-auto rounded-sm opacity-90">
            <Image
              src="/images/hero-waves.jpg"
              alt="Pacific Ocean coast in Southern California"
              fill
              sizes="(max-width: 1536px) 100px, 130px"
              className="object-cover object-right"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
