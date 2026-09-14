'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { headerNavItems } from '@/data/navigation';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        id="header"
        className="w-full bg-[#FAF8F5]/95 backdrop-blur-md sticky top-0 z-40 transition-colors duration-200 border-b border-[#E5E0D8]"
      >
        <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14 py-4 lg:py-5 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link href="#" className="block focus:outline-none group">
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-[26px] lg:text-[28px] font-medium tracking-[-0.01em] text-[#2C3E35] group-hover:text-[#1F2D26] transition-colors leading-tight">
                Dr. Maya Reynolds<span className="text-[#C47D63] font-normal">, PsyD</span>
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-[#565C58] font-medium mt-0.5">
                Licensed Clinical Psychologist · Santa Monica, CA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-8 xl:space-x-10"
          >
            {headerNavItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-[11px] xl:text-[12px] tracking-[0.18em] uppercase font-medium text-[#1F2421] nav-link-hover py-1 transition-colors hover:text-[#C47D63]"
              >
                {item.title}
              </a>
            ))}

            {/* Desktop Contact CTA Button */}
            <a
              href="#contact"
              className="btn-forest ml-2"
            >
              SCHEDULE A CONSULTATION
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
            className="lg:hidden p-2 text-[#2C3E35] focus:outline-none flex flex-col justify-center items-center gap-[5px] w-10 h-10"
          >
            <span className="w-6 h-px bg-[#2C3E35] block"></span>
            <span className="w-6 h-px bg-[#2C3E35] block"></span>
            <span className="w-6 h-px bg-[#2C3E35] block"></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
