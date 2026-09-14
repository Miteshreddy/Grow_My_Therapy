import React from 'react';
import Image from 'next/image';
import { drMayaData } from '@/data/drMayaContent';

export default function QuoteBanner() {
  return (
    <section
      id="quote-banner"
      className="relative w-full min-h-[480px] sm:min-h-[540px] lg:min-h-[620px] flex items-end overflow-hidden bg-[#1F2D26]"
      style={{
        backgroundImage: "url('/images/quote-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Image with Next.js optimization and unoptimized safety */}
      <Image
        src="/images/quote-bg.jpg"
        alt="Expansive Pacific shoreline representing calm and grounded reflection"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
        unoptimized
      />

      {/* Forest-tinted dark overlay for calm and high contrast */}
      <div className="absolute inset-0 bg-[#16221C]/65 pointer-events-none" />

      {/* Quote Content positioned in the lower area */}
      <div className="relative z-10 w-full max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14 pb-14 sm:pb-16 lg:pb-22">
        <div className="max-w-3xl">
          <p className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-[#DDA18E] font-medium mb-4">
            A GUIDING PRINCIPLE
          </p>
          <blockquote className="text-white text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-light leading-[1.38] font-serif">
            “Therapy is not just about symptom relief.{' '}
            <span className="italic font-normal text-[#FAF8F5]">
              It is about developing insight, resilience, and a stronger relationship with yourself over time.”
            </span>
          </blockquote>
          <p className="text-sm tracking-[0.12em] uppercase text-white/75 font-sans mt-5">
            — {drMayaData.name} · {drMayaData.title}
          </p>
        </div>
      </div>
    </section>
  );
}
