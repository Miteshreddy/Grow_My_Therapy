import React from 'react';
import Image from 'next/image';

export default function QuoteBanner() {
  return (
    <section
      id="quote-banner"
      className="relative w-full min-h-[480px] sm:min-h-[540px] lg:min-h-[620px] flex items-end overflow-hidden bg-[#2B2B2B]"
      style={{
        backgroundImage: "url('/images/quote-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Image with Next.js optimization and unoptimized safety */}
      <Image
        src="/images/quote-bg.jpg"
        alt="Children joyfully running on wide sandy beach"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
        unoptimized
      />

      {/* Dark tint overlay matching original 0.54 opacity */}
      <div className="absolute inset-0 bg-black/[0.54] pointer-events-none" />

      {/* Quote Content positioned in the lower area */}
      <div className="relative z-10 w-full max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14 pb-14 sm:pb-16 lg:pb-20">
        <div className="max-w-3xl">
          <blockquote className="text-white text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-light leading-[1.38] font-serif">
            You deserve a place where your story is <br className="hidden sm:inline" />
            heard, valued, and understood.{' '}
            <span className="italic">
              Nothing will be <br className="hidden sm:inline" />
              too heavy for us to carry together.
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
