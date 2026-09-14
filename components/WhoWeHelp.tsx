import React from 'react';
import Image from 'next/image';
import { drMayaData } from '@/data/drMayaContent';

export default function WhoWeHelp() {
  return (
    <section id="services" className="w-full bg-[#FAF8F5] py-16 sm:py-18 lg:py-24">
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        
        {/* Section Heading with Terracotta Accent */}
        <div className="max-w-2xl mb-10 lg:mb-14">
          <p className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-[#C47D63] font-medium mb-3">
            AREAS OF CLINICAL PRACTICE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#1F2421] font-serif leading-[1.2]">
            Therapy tailored to your{' '}
            <span className="italic font-light text-[#2C3E35]">mind and body</span>.
          </h2>
        </div>

        {/* 3-Column Services Grid matching Phase 1 structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 xl:gap-14">
          {drMayaData.services.map((item) => (
            <div key={item.id} className="flex flex-col group">
              {/* Card Image */}
              <div className="relative w-full aspect-square rounded-sm overflow-hidden bg-[#F3EFEA] shadow-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Eyebrow */}
              <span className="text-[11px] tracking-[0.16em] uppercase text-[#C47D63] font-medium mt-6 mb-2 block">
                {item.eyebrow}
              </span>

              {/* Card Title */}
              <h3 className="text-2xl lg:text-[26px] font-normal text-[#1F2421] font-serif mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Card Description - increased readability */}
              <p className="text-[15px] sm:text-[16px] text-[#565C58] font-light leading-[1.8] mb-5">
                {item.description}
              </p>

              {/* Bullet Points - increased font size from 13px to 14.5px */}
              <ul className="space-y-2.5 mb-6 border-t border-[#E5E0D8] pt-4">
                {item.bullets.map((b, idx) => (
                  <li key={idx} className="text-[14px] sm:text-[14.5px] text-[#565C58] flex items-start gap-2.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C47D63] mt-2 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Link */}
              <div className="mt-auto pt-2">
                <a
                  href="#contact"
                  className="cta-underline text-[11px] sm:text-[12px] tracking-[0.16em] uppercase font-medium"
                >
                  LEARN MORE &amp; CONNECT
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
