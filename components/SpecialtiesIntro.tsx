import React from 'react';
import Image from 'next/image';

export default function SpecialtiesIntro() {
  return (
    <section id="specialties-intro" className="w-full bg-[#FAF8F5] pt-12 sm:pt-16 lg:pt-22 pb-8 sm:pb-10 overflow-hidden border-t border-[#E5E0D8]/60">
      <div className="w-full flex flex-col lg:flex-row items-center">
        
        {/* Left Surf Photo: full bleed to left on desktop, padded on mobile */}
        <div className="w-full lg:w-[52%] px-6 sm:px-10 lg:px-0 flex-shrink-0">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[420px] xl:h-[460px] rounded-r-sm overflow-hidden bg-[#F3EFEA] shadow-sm">
            <Image
              src="/images/specialties-surf.jpg"
              alt="Serene coastal surf reflecting depth and calm"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover object-center"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>
        </div>

        {/* Right Heading */}
        <div className="w-full lg:w-[48%] px-6 sm:px-10 lg:px-12 xl:px-18 mt-8 lg:mt-0 flex flex-col justify-center">
          <p className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-[#C47D63] font-medium mb-3">
            COLLABORATIVE HEALING
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-normal leading-[1.22] text-[#1F2421] font-serif max-w-lg">
            Honoring where you&apos;ve been{' '}
            <span className="italic font-light text-[#2C3E35]">
              &amp; shaping
            </span>{' '}
            where you&apos;re headed.
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#565C58] font-light leading-[1.8] mt-5 max-w-md">
            Whether unraveling chronic stress, healing unresolved trauma, or softening perfectionism, our work is paced carefully around safety and sustainable living.
          </p>
        </div>

      </div>
    </section>
  );
}
