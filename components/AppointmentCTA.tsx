import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AppointmentCTA() {
  return (
    <section id="appointment" className="w-full bg-[#EFECE6] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 xl:gap-16">
          
          {/* Left Shell Photo (desktop view) */}
          <div className="hidden lg:block w-[180px] xl:w-[200px] h-[400px] xl:h-[460px] flex-shrink-0 relative overflow-hidden self-end">
            <Image
              src="/images/shells-left.jpg"
              alt="Hands gently gathering seashells on sandy beach"
              fill
              sizes="200px"
              className="object-cover object-center"
            />
          </div>

          {/* Center Text Block */}
          <div className="w-full lg:max-w-lg xl:max-w-xl flex flex-col items-start justify-center">
            
            {/* Eyebrow */}
            <p className="text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-[#555555] font-medium mb-6">
              SCHEDULE AN APPOINTMENT
            </p>

            {/* H2 Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-light leading-[1.25] text-[#2B2B2B] font-serif mb-8">
              Find a therapist who is the <br className="hidden sm:inline" />
              right fit for{' '}
              <span className="font-script text-[#86B3B3] text-[1.22em] relative inline-block top-1">
                you.
              </span>
            </h2>

            {/* Description */}
            <p className="text-[15px] sm:text-[16px] text-[#444444] font-light leading-[1.85] mb-6">
              Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we&apos;re here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
            </p>

            {/* Helper Prompt */}
            <p className="text-[14px] sm:text-[15px] text-[#555555] font-light mb-8">
              Click the button below to schedule an appointment.
            </p>

            {/* BOOK NOW Button */}
            <div>
              <Link
                href="/contact"
                className="btn-pill-outline px-9 py-3 text-[11px] tracking-[0.2em]"
              >
                BOOK NOW
              </Link>
            </div>

          </div>

          {/* Right Child Shells Photo */}
          <div className="w-full sm:w-[320px] lg:w-[360px] xl:w-[400px] h-[340px] sm:h-[420px] lg:h-[540px] flex-shrink-0 relative overflow-hidden mt-6 lg:mt-0 self-start">
            <Image
              src="/images/shells-right.jpg"
              alt="Child playing with shells in the sand"
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-cover object-center"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
