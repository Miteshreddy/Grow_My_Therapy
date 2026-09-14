import React from 'react';
import Link from 'next/link';

interface SpecialtyCard {
  title: string;
  description: string;
  href: string;
}

const column1: SpecialtyCard[] = [
  {
    title: 'Trauma',
    description:
      'We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.',
    href: '/trauma-counseling-newbury-park',
  },
  {
    title: 'Dissociation',
    description:
      'The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.',
    href: '/dissociative-identity-disorder-therapist-newbury-park',
  },
];

const column2: SpecialtyCard[] = [
  {
    title: 'EMDR',
    description:
      'Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.',
    href: '/emdr-therapy-newbury-park',
  },
  {
    title: 'Special Needs Parenting',
    description:
      'Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.',
    href: '/counseling-special-needs-parents-newbury-park',
  },
];

export default function SpecialtiesGrid() {
  const renderCard = (item: SpecialtyCard) => (
    <div key={item.title} className="flex flex-col justify-between items-start">
      <div>
        <h4 className="text-2xl sm:text-[26px] font-light text-[#2B2B2B] font-serif mb-4">
          {item.title}
        </h4>
        <p className="text-[15px] sm:text-[16px] text-[#444444] font-light leading-[1.85]">
          {item.description}
        </p>
      </div>
      <div className="mt-6">
        <Link
          href={item.href}
          className="cta-underline text-[11px] sm:text-[12px] tracking-[0.16em] uppercase font-medium text-[#2B2B2B]"
        >
          LEARN MORE
        </Link>
      </div>
    </div>
  );

  return (
    <section id="specialties-grid" className="w-full bg-[#FFFFFF] pt-12 pb-20 lg:pb-28">
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 xl:gap-24">
          
          {/* Left Title */}
          <div className="lg:w-[32%] flex-shrink-0">
            <h3 className="text-3xl sm:text-4xl lg:text-[46px] font-light text-[#2B2B2B] font-serif leading-[1.2]">
              Our{' '}
              <span className="font-script text-[#86B3B3] text-[1.18em] relative inline-block top-1">
                specialties
              </span>
              <br />
              include…
            </h3>
          </div>

          {/* Right Columns: Column 1 on left, Column 2 on right (stacked on mobile) */}
          <div className="lg:w-[68%] grid grid-cols-1 sm:grid-cols-2 gap-x-12 xl:gap-x-16 gap-y-12 lg:gap-y-14">
            {/* Column 1: Trauma, then Dissociation */}
            <div className="flex flex-col gap-y-12 lg:gap-y-14">
              {column1.map(renderCard)}
            </div>

            {/* Column 2: EMDR, then Special Needs Parenting */}
            <div className="flex flex-col gap-y-12 lg:gap-y-14">
              {column2.map(renderCard)}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
