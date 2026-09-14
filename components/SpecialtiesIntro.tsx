import React from 'react';
import Image from 'next/image';

export default function SpecialtiesIntro() {
  return (
    <section id="specialties-intro" className="w-full bg-[#FFFFFF] pt-16 sm:pt-20 lg:pt-28 pb-10 sm:pb-12 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-center">
        
        {/* Left Surf Photo: full bleed to left on desktop, padded on mobile */}
        <div className="w-full lg:w-[52%] px-6 sm:px-10 lg:px-0 flex-shrink-0">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[420px] xl:h-[460px] overflow-hidden bg-[#F4F0EA]">
            <Image
              src="/images/specialties-surf.jpg"
              alt="Family standing together in ocean surf at the beach"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover object-center"
              unoptimized
            />
          </div>
        </div>

        {/* Right Heading */}
        <div className="w-full lg:w-[48%] px-6 sm:px-10 lg:px-12 xl:px-16 mt-8 lg:mt-0 flex items-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-light leading-[1.25] text-[#2B2B2B] font-serif max-w-lg">
            Honoring where you’ve <br className="hidden sm:inline" />
            been{' '}
            <span className="font-script text-[#86B3B3] text-[1.22em] relative inline-block top-1 mx-1">
              &amp;
            </span>{' '}
            helping shape <br className="hidden sm:inline" />
            where you’re headed.
          </h2>
        </div>

      </div>
    </section>
  );
}
