import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full bg-[#EFECE6] pt-6 pb-16 lg:pt-10 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-14 xl:gap-16">
          
          {/* Family Photo: order-2 on mobile, order-1 on desktop */}
          <div className="order-2 lg:order-1 w-full lg:w-[360px] xl:w-[390px] flex-shrink-0">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:h-[580px] xl:h-[620px]">
              <Image
                src="/images/hero-family.jpg"
                alt="Family walking together on the beach"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Text Content: order-1 on mobile, order-2 on desktop */}
          <div className="order-1 lg:order-2 flex-1 min-w-0 flex flex-col justify-center lg:pl-2 xl:pl-6">
            {/* Eyebrow */}
            <p className="text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-[#555555] font-medium mb-6 lg:mb-8 leading-[1.6] max-w-[340px]">
              ONLINE &amp; IN-PERSON COUNSELING IN<br className="hidden sm:inline" /> NEWBURY PARK &amp; ACROSS CA
            </p>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[52px] font-light leading-[1.2] text-[#2B2B2B] mb-6 lg:mb-8 font-serif">
              Rebuild your foundation <br className="hidden sm:inline" />
              on solid ground and finally <br className="hidden sm:inline" />
              begin to{' '}
              <span className="font-script text-[#86B3B3] text-[1.18em] relative inline-block top-1 sm:top-1.5 ml-1">
                thrive.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-[17px] text-[#444444] font-light leading-[1.8] mb-8 lg:mb-10 max-w-2xl xl:whitespace-nowrap">
              Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
            </p>

            {/* Underline CTA Link */}
            <div>
              <Link
                href="/contact"
                className="cta-underline text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-medium text-[#2B2B2B]"
              >
                BOOK AN APPOINTMENT
              </Link>
            </div>
          </div>

          {/* Right Edge Ocean Wave Peek (Visible on xl desktop screens) */}
          <div className="hidden xl:block order-3 w-[110px] 2xl:w-[140px] h-[520px] flex-shrink-0 relative overflow-hidden self-center ml-auto">
            <Image
              src="/images/hero-waves.jpg"
              alt="Shoreline ocean waves"
              fill
              sizes="(max-width: 1536px) 110px, 140px"
              className="object-cover object-right opacity-95"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
