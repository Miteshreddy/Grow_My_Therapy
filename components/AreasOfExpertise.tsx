import React from 'react';
import Link from 'next/link';

interface ExpertiseItem {
  label: string;
  href?: string;
}

const columnOne: ExpertiseItem[] = [
  { label: 'DISSOCIATION', href: '/dissociative-identity-disorder-therapist-newbury-park' },
  { label: 'TRAUMA', href: '/trauma-counseling-newbury-park' },
  { label: 'FAMILY CONFLICT' },
  { label: 'SPECIAL NEEDS PARENTING', href: '/counseling-special-needs-parents-newbury-park' },
  { label: 'DEPRESSION', href: '/anxiety-depression' },
  { label: 'MARRIAGE', href: '/couples-therapy' },
];

const columnTwo: ExpertiseItem[] = [
  { label: 'ANXIETY', href: '/anxiety-depression' },
  { label: 'RELATIONSHIPS' },
  { label: 'CHILDREN', href: '/children-and-teens' },
  { label: 'TEENS', href: '/children-and-teens' },
  { label: 'INTIMACY & CONNECTION', href: '/couples-therapy' },
  { label: '...AND MORE.' },
];

export default function AreasOfExpertise() {
  return (
    <section id="expertise" className="w-full bg-[#FFFFFF] py-20 lg:py-28">
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16 xl:gap-24">
          
          {/* Left Heading */}
          <div className="lg:w-[35%] flex-shrink-0 lg:pt-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-light text-[#2B2B2B] font-serif leading-[1.25] whitespace-normal">
              <span className="inline-block">Our areas of</span>{' '}
              <br />
              <span className="font-script text-[#86B3B3] text-[1.18em] relative inline-block top-1">
                expertise
              </span>
            </h2>
          </div>

          {/* Right 2-Column List */}
          <div className="lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 gap-x-12 xl:gap-x-16">
            
            {/* Column 1 */}
            <div>
              {columnOne.map((item, index) => (
                <div
                  key={item.label}
                  className={`py-5 sm:py-6 ${
                    index < columnOne.length - 1 ? 'border-b border-[#E5E0D8]' : ''
                  }`}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block text-[12px] sm:text-[13px] tracking-[0.16em] uppercase font-medium text-[#2B2B2B] hover:opacity-70 transition-opacity"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="block text-[12px] sm:text-[13px] tracking-[0.16em] uppercase font-medium text-[#2B2B2B]">
                      {item.label}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div>
              {columnTwo.map((item, index) => (
                <div
                  key={item.label}
                  className={`py-5 sm:py-6 ${
                    index < columnTwo.length - 1 ? 'border-b border-[#E5E0D8]' : ''
                  }`}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block text-[12px] sm:text-[13px] tracking-[0.16em] uppercase font-medium text-[#2B2B2B] hover:opacity-70 transition-opacity"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="block text-[12px] sm:text-[13px] tracking-[0.16em] uppercase font-medium text-[#2B2B2B]">
                      {item.label}
                    </span>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
