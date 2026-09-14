import React from 'react';
import Image from 'next/image';

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="w-full bg-[#EFECE6] py-16 lg:py-24 border-t border-[#DCD7CE]/40"
    >
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        
        {/* Main Section H2 */}
        <div className="max-w-2xl lg:max-w-[700px] mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[45px] xl:text-[48px] font-light leading-[1.25] text-[#2B2B2B] font-serif">
            You’re holding onto hope that life <br className="hidden sm:inline" />
            can be better than it is right now.
          </h2>
        </div>

        {/* 3-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Column 1: Subhead + Paragraph 1 */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <p className="font-sans text-[11px] sm:text-[12px] tracking-[0.14em] uppercase font-medium text-[#2B2B2B] leading-relaxed mb-6 max-w-[320px]">
              AT CONEJO VALLEY FAMILY COUNSELING WE WANT TO MAKE THAT HOPE A REALITY.
            </p>
            <p className="text-[15px] sm:text-[16px] text-[#444444] font-light leading-[1.85]">
              Whether you&apos;re an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.
            </p>
          </div>

          {/* Column 2: Paragraph 2 */}
          <div className="lg:col-span-4 flex flex-col justify-start pt-0">
            <p className="text-[15px] sm:text-[16px] text-[#444444] font-light leading-[1.85]">
              First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
            </p>
          </div>

          {/* Column 3: Shoreline Water Photo */}
          <div className="lg:col-span-4 w-full mt-4 lg:mt-0">
            <div className="relative w-full aspect-[4/3] lg:h-[350px] overflow-hidden">
              <Image
                src="/images/shoreline-water.jpg"
                alt="Gentle waves washing over sandy beach"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
