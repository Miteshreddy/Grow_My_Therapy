import React from 'react';
import Link from 'next/link';
import { footerLinks } from '@/data/navigation';

export default function LegalBar() {
  return (
    <div className="w-full bg-[#64938D] text-white py-4 sm:py-5">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs sm:text-[13px] font-light text-center">
        {footerLinks.legal.map((item, index) => (
          <React.Fragment key={item.title}>
            {item.href.startsWith('http') ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                {item.title}
              </a>
            ) : (
              <Link
                href={item.href}
                className="hover:opacity-80 transition-opacity"
              >
                {item.title}
              </Link>
            )}
            {index < footerLinks.legal.length - 1 && (
              <span className="opacity-60 select-none">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
