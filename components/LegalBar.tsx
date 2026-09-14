import React from 'react';
import { footerLinks } from '@/data/navigation';
import { drMayaData } from '@/data/drMayaContent';

export default function LegalBar() {
  return (
    <div className="w-full bg-[#16221C] text-[#FAF8F5]/85 py-6 border-t border-[#2C3E35]">
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14 flex flex-col items-center gap-4 text-xs font-light text-center">
        
        {/* Medical & Psychological Disclaimer */}
        <p className="max-w-4xl text-[11px] sm:text-xs text-[#FAF8F5]/65 leading-relaxed">
          {drMayaData.name} is a {drMayaData.title} practicing in Santa Monica, California. Information provided on this website is for informational and educational purposes only and does not establish a therapist-client relationship. If you are experiencing a mental health emergency, please dial 988 or visit your nearest emergency room.
        </p>

        {/* Legal Links & Copyright */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] sm:text-xs text-[#FAF8F5]/75">
          <span>&copy; {new Date().getFullYear()} {drMayaData.name}. All rights reserved.</span>
          <span className="opacity-40 select-none">·</span>
          {footerLinks.legal.map((item, index) => (
            <React.Fragment key={item.title}>
              <a
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.title}
              </a>
              {index < footerLinks.legal.length - 1 && (
                <span className="opacity-40 select-none">·</span>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </div>
  );
}
