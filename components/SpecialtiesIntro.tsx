import React from 'react';
import Image from 'next/image';

export default function SpecialtiesIntro() {
  return (
    <section id="specialties-intro" className="w-full bg-[#FFFFFF] pt-20 lg:pt-28 pb-12">
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 xl:gap-20">
          
          {/* Left Surf Photo */}
          <div className="w-full lg:w-[50%] flex-shrink-0">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:h-[400px] overflow-hidden bg-[#F4F0EA]">
              <Image
                src="/images/specialties-surf.jpg"
                alt="Family standing together in ocean surf at the beach"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Heading */}
          <div className="w-full lg:w-[50%] flex items-center lg:pl-4">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-light leading-[1.25] text-[#2B2B2B] font-serif max-w-lg">
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
      </div>
    </section>
  );
}
