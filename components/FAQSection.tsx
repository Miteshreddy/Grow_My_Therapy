'use client';

import React, { useState } from 'react';
import { drMayaData } from '@/data/drMayaContent';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="w-full bg-[#FAF8F5] py-16 sm:py-18 lg:py-24 border-b border-[#E5E0D8]/60">
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 lg:mb-14">
          <p className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-[#C47D63] font-medium mb-3">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-normal text-[#1F2421] font-serif leading-[1.2]">
            What to expect from{' '}
            <span className="italic font-light text-[#2C3E35]">our work together</span>.
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl space-y-4">
          {drMayaData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-[#E5E0D8] rounded-sm bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex items-center justify-between gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl sm:text-[22px] font-normal text-[#1F2421] group-hover:text-[#2C3E35] transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`text-[#C47D63] text-xl font-light transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 text-[15px] sm:text-[16px] text-[#565C58] font-light leading-[1.85] border-t border-[#E5E0D8]/50 pt-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Low-pressure CTA helper note */}
        <div className="mt-12 max-w-3xl pt-6 border-t border-[#E5E0D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-[#565C58] font-light">
            Have a question not addressed here? You are welcome to reach out directly.
          </p>
          <a
            href="#contact"
            className="cta-underline text-[11px] sm:text-[12px] tracking-[0.16em] uppercase font-medium flex-shrink-0"
          >
            START A CONVERSATION
          </a>
        </div>

      </div>
    </section>
  );
}
