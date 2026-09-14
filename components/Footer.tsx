import React from 'react';
import { drMayaData } from '@/data/drMayaContent';
import { footerLinks } from '@/data/navigation';

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-[#FAF8F5] pt-16 pb-12 lg:pt-20 lg:pb-16 border-t border-[#E5E0D8]">
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12">
          
          {/* Column 1: Brand Info (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-start pr-0 lg:pr-6">
            <div className="mb-6">
              <span className="font-serif text-2xl lg:text-[26px] font-medium text-[#2C3E35] leading-tight block">
                Dr. Maya Reynolds<span className="text-[#C47D63]">, PsyD</span>
              </span>
              <span className="text-xs tracking-[0.14em] uppercase text-[#565C58] font-medium mt-1 block">
                Licensed Clinical Psychologist
              </span>
            </div>
            <p className="text-[14px] sm:text-[15px] text-[#565C58] font-light leading-[1.8] max-w-sm mb-6">
              Warm, grounded psychotherapy for high-achieving adults, professionals, and creatives. In-person therapy in Santa Monica and secure telehealth throughout California.
            </p>
            <div className="text-xs text-[#C47D63] font-medium tracking-wide">
              Santa Monica, CA · California Telehealth
            </div>
          </div>

          {/* Column 2: Navigate (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <p className="font-sans text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-semibold text-[#2C3E35] mb-6">
              NAVIGATE
            </p>
            <ul className="space-y-3">
              {footerLinks.navigate.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-[14px] text-[#565C58] font-light hover:text-[#C47D63] transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <p className="font-sans text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-semibold text-[#2C3E35] mb-6">
              CLINICAL FOCUS
            </p>
            <ul className="space-y-3">
              {footerLinks.services.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="text-[14px] text-[#565C58] font-light hover:text-[#C47D63] transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Practice Details & Location (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <p className="font-sans text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-semibold text-[#2C3E35] mb-6">
              PRACTICE LOCATION
            </p>
            <div className="space-y-3 text-[14px] text-[#565C58] font-light leading-relaxed">
              <p>
                <span className="block font-medium text-[#2C3E35]">Santa Monica Office</span>
                <span className="block">{drMayaData.location.address}</span>
                <span className="block">{drMayaData.location.city}, {drMayaData.location.state} {drMayaData.location.zip}</span>
              </p>
              <div className="pt-2">
                <p className="text-xs uppercase tracking-[0.12em] font-medium text-[#2C3E35] mb-1">
                  Virtual Care
                </p>
                <p className="text-xs text-[#565C58] leading-relaxed">
                  {drMayaData.location.telehealthCoverage}
                </p>
              </div>
              <p className="text-[13px] text-[#565C58]/80 pt-3 leading-normal max-w-xs border-t border-[#E5E0D8]">
                {footerLinks.contact.serving}
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
