import React from 'react';
import { drMayaData, SpecialtyItem } from '@/data/drMayaContent';

export default function SpecialtiesGrid() {
  const column1 = [drMayaData.specialtiesGrid[0], drMayaData.specialtiesGrid[1]];
  const column2 = [drMayaData.specialtiesGrid[2], drMayaData.specialtiesGrid[3]];

  const renderCard = (item: SpecialtyItem) => (
    <div key={item.title} className="flex flex-col justify-between items-start group">
      <div>
        <h4 className="text-2xl sm:text-[25px] font-normal text-[#1F2421] font-serif mb-3 leading-snug group-hover:text-[#2C3E35] transition-colors">
          {item.title}
        </h4>
        <p className="text-[15px] sm:text-[16px] text-[#565C58] font-light leading-[1.85]">
          {item.description}
        </p>
      </div>
      <div className="mt-6">
        <a
          href={item.anchor}
          className="cta-underline text-[11px] sm:text-[12px] tracking-[0.16em] uppercase font-medium"
        >
          EXPLORE THIS CONCERN
        </a>
      </div>
    </div>
  );

  return (
    <section id="specialties-grid" className="w-full bg-[#FAF8F5] pt-8 pb-16 lg:pb-22 border-b border-[#E5E0D8]/60">
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 xl:gap-24">
          
          {/* Left Title */}
          <div className="lg:w-[32%] flex-shrink-0">
            <p className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-[#C47D63] font-medium mb-3">
              PRIMARY CLINICAL FOCUS
            </p>
            <h3 className="text-3xl sm:text-4xl lg:text-[45px] font-normal text-[#1F2421] font-serif leading-[1.2]">
              Specialized care for{' '}
              <span className="italic font-light text-[#2C3E35]">
                deep, lasting
              </span>{' '}
              recovery.
            </h3>
            <p className="text-[14px] sm:text-[15px] text-[#565C58] font-light leading-[1.75] mt-5 max-w-sm">
              Helping thoughtful adults navigate internal pressure, resolve trauma safely, and find emotional and physiological regulation.
            </p>
          </div>

          {/* Right Columns: Column 1 on left, Column 2 on right (stacked on mobile) */}
          <div className="lg:w-[68%] grid grid-cols-1 sm:grid-cols-2 gap-x-12 xl:gap-x-16 gap-y-12 lg:gap-y-14">
            {/* Column 1: Anxiety/Panic & Trauma */}
            <div className="flex flex-col gap-y-12 lg:gap-y-14">
              {column1.map(renderCard)}
            </div>

            {/* Column 2: Burnout & Perfectionism */}
            <div className="flex flex-col gap-y-12 lg:gap-y-14">
              {column2.map(renderCard)}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
