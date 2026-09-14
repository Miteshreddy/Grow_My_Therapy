import React from 'react';
import Image from 'next/image';
import { drMayaData } from '@/data/drMayaContent';

export default function OurOffice() {
  return (
    <section id="office" className="w-full bg-[#F3EFEA] py-16 sm:py-18 lg:py-24 border-b border-[#E5E0D8]/60">
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <p className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-[#C47D63] font-medium mb-3">
            {drMayaData.office.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#1F2421] font-serif leading-[1.2] mb-5">
            {drMayaData.office.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#565C58] font-light leading-[1.8]">
            {drMayaData.office.subheading}
          </p>
        </div>

        {/* 2-Column Main Content & Gallery */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 xl:gap-20">
          
          {/* Left Text / Practice Details */}
          <div className="w-full lg:w-[45%] flex flex-col justify-between">
            <div className="bg-white/80 p-8 sm:p-10 rounded-sm border border-[#E5E0D8] shadow-sm mb-8">
              <h3 className="font-serif text-2xl text-[#2C3E35] mb-4 font-normal">
                Designed for Calm &amp; Emotional Safety
              </h3>
              <p className="text-[15px] sm:text-[16px] text-[#565C58] font-light leading-[1.85] mb-6">
                {drMayaData.office.description}
              </p>
              
              <div className="border-t border-[#E5E0D8] pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2C3E35]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#2C3E35]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.14em] font-semibold text-[#2C3E35]">
                      In-Person Santa Monica Office
                    </h4>
                    <p className="text-sm text-[#565C58] mt-0.5">
                      {drMayaData.location.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C47D63]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#C47D63]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.14em] font-semibold text-[#2C3E35]">
                      Secure California Telehealth
                    </h4>
                    <p className="text-sm text-[#565C58] mt-0.5">
                      {drMayaData.location.telehealthCoverage}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Features List - enhanced readability */}
            <div className="space-y-3 px-2">
              {drMayaData.office.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 text-[14px] sm:text-[15px] text-[#565C58]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C47D63] flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="#contact" className="btn-forest">
                REQUEST AN IN-PERSON OR VIRTUAL SESSION
              </a>
            </div>
          </div>

          {/* Right Images Gallery: 2 Authentic Office Photos */}
          <div className="w-full lg:w-[55%] flex flex-col sm:flex-row gap-6 lg:gap-8">
            {/* Photo 1: Brick columns and daylight */}
            <div className="flex-1 flex flex-col">
              <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden shadow-sm bg-[#EAE4DC] border border-[#E5E0D8]">
                <Image
                  src="/images/office-1.jpg"
                  alt="Santa Monica therapy office featuring brick columns, natural daylight, and comfortable seating"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover object-center"
                />
              </div>
              <p className="text-xs text-[#565C58] font-light mt-3 tracking-wide">
                Natural daylight &amp; exposed brick accents creating a grounded setting.
              </p>
            </div>

            {/* Photo 2: Bookshelf and seating */}
            <div className="flex-1 flex flex-col sm:mt-10">
              <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden shadow-sm bg-[#EAE4DC] border border-[#E5E0D8]">
                <Image
                  src="/images/office-2.jpg"
                  alt="Therapy space with comfortable sofa, olive tree, and calm coastal artwork"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover object-center"
                />
              </div>
              <p className="text-xs text-[#565C58] font-light mt-3 tracking-wide">
                Uncluttered, comfortable environment designed to ease your arrival.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
