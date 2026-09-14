import React from 'react';
import Image from 'next/image';
import { drMayaData } from '@/data/drMayaContent';

export default function HowWeWork() {
  return (
    <section id="approach" className="w-full bg-[#F3EFEA] py-12 sm:py-16 lg:py-22">
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-14 xl:gap-20">
          
          {/* Left Content Column */}
          <div className="w-full lg:w-[58%] xl:w-[60%] flex flex-col justify-between">
            
            {/* Eyebrow */}
            <p className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-[#C47D63] font-medium mb-4 sm:mb-5">
              {drMayaData.methods.eyebrow}
            </p>

            {/* H2 Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.22] text-[#1F2421] font-serif mb-6 lg:mb-8">
              Evidence-based therapy tailored to both your{' '}
              <span className="italic font-light text-[#2C3E35]">mind and nervous system</span>.
            </h2>

            {/* Mobile Dunes Image: appears between H2 and body text on mobile (< lg) */}
            <div className="block lg:hidden mb-8">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-sm overflow-hidden shadow-sm">
                <Image
                  src="/images/how-we-work-dunes.jpg"
                  alt="Coastal dunes reflecting natural calm and grounded regulation"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                  unoptimized
                />
              </div>
            </div>

            {/* 2-Column Body Modality Descriptions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12 mb-8 sm:mb-10">
              {/* Column 1: CBT & EMDR */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-sans text-[12px] tracking-[0.12em] uppercase font-semibold text-[#2C3E35] mb-2">
                    Cognitive Behavioral Therapy (CBT)
                  </h4>
                  <p className="text-[15px] sm:text-[15.5px] text-[#565C58] font-light leading-[1.8]">
                    We examine automatic thoughts, perfectionistic standards, and catastrophic overthinking, giving you clear cognitive frameworks to step back and reframe distress.
                  </p>
                </div>
                <div>
                  <h4 className="font-sans text-[12px] tracking-[0.12em] uppercase font-semibold text-[#2C3E35] mb-2">
                    EMDR Therapy
                  </h4>
                  <p className="text-[15px] sm:text-[15.5px] text-[#565C58] font-light leading-[1.8]">
                    A structured, research-backed protocol that helps reprocess painful memories, easing the emotional and somatic charge so they no longer disrupt your present life.
                  </p>
                </div>
              </div>

              {/* Column 2: Mindfulness & Somatic Techniques */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-sans text-[12px] tracking-[0.12em] uppercase font-semibold text-[#2C3E35] mb-2">
                    Mindfulness-Based Practices
                  </h4>
                  <p className="text-[15px] sm:text-[15.5px] text-[#565C58] font-light leading-[1.8]">
                    Cultivating real-time awareness and non-judgmental acceptance to untangle from panic, emotional reactivity, and constant internal urgency.
                  </p>
                </div>
                <div>
                  <h4 className="font-sans text-[12px] tracking-[0.12em] uppercase font-semibold text-[#2C3E35] mb-2">
                    Body-Oriented (Somatic) Work
                  </h4>
                  <p className="text-[15px] sm:text-[15.5px] text-[#565C58] font-light leading-[1.8]">
                    Because chronic stress lives in the body, we incorporate physiological regulation to help you release physical tension, improve sleep, and feel grounded.
                  </p>
                </div>
              </div>
            </div>

            {/* Underlined CTA Link */}
            <div>
              <a
                href="#office"
                className="cta-underline text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-medium"
              >
                DISCOVER OUR SANTA MONICA OFFICE &amp; TELEHEALTH
              </a>
            </div>

          </div>

          {/* Desktop Dune Photo Column: shown on desktop (lg+), aligned at the top */}
          <div className="hidden lg:block w-full lg:w-[42%] xl:w-[40%] flex-shrink-0">
            <div className="relative w-full lg:h-[560px] xl:h-[600px] rounded-sm overflow-hidden shadow-sm">
              <Image
                src="/images/how-we-work-dunes.jpg"
                alt="Coastal landscape representing calm and grounded emotional health"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/5 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
