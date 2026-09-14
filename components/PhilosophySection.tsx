import React from 'react';
import Image from 'next/image';
import { drMayaData } from '@/data/drMayaContent';

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="w-full bg-[#F3EFEA] py-12 sm:py-16 lg:py-22 border-t border-[#E5E0D8]/60"
    >
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        
        {/* Eyebrow + Main Section H2 */}
        <div className="max-w-3xl lg:max-w-[840px] mb-8 sm:mb-10 lg:mb-12">
          <p className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-[#C47D63] font-medium mb-3">
            {drMayaData.resonance.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-normal leading-[1.22] text-[#1F2421] font-serif">
            You look functional on the outside.{' '}
            <span className="italic font-light text-[#2C3E35]">
              Yet inside, you&apos;re exhausted from holding everything together.
            </span>
          </h2>
        </div>

        {/* 3-Column Content Layout matching Phase 1 structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Column 1: Uppercase Subhead + Paragraph 1 */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <p className="font-sans text-[11px] sm:text-[12px] tracking-[0.14em] uppercase font-medium text-[#2C3E35] leading-relaxed mb-5 max-w-[320px]">
              GROUNDED PSYCHOTHERAPY FOR ADULTS READY TO STEP OUT OF SURVIVAL MODE.
            </p>
            <p className="text-[15px] sm:text-[16px] text-[#565C58] font-light leading-[1.85]">
              {drMayaData.resonance.body1}
            </p>
          </div>

          {/* Column 2: Paragraph 2 */}
          <div className="lg:col-span-4 flex flex-col justify-start pt-0">
            <p className="text-[15px] sm:text-[16px] text-[#565C58] font-light leading-[1.85] mb-6">
              {drMayaData.resonance.body2}
            </p>
            <p className="text-[15px] sm:text-[16px] text-[#565C58] font-light leading-[1.85]">
              My goal is not just temporary symptom relief, but helping you develop insight, resilience, and a stronger, more compassionate relationship with yourself over time.
            </p>
          </div>

          {/* Column 3: Calming Shoreline Photo */}
          <div className="lg:col-span-4 w-full mt-2 lg:mt-0">
            <div className="relative w-full aspect-[4/3] lg:h-[360px] rounded-sm overflow-hidden shadow-sm bg-[#EAE4DC]">
              <Image
                src="/images/shoreline-water.jpg"
                alt="Calm Pacific shoreline water reflecting gentle daylight"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
