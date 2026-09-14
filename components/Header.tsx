'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { headerNavItems } from '@/data/navigation';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      <header
        id="header"
        className="w-full bg-[#EFECE6] sticky top-0 z-40 transition-colors duration-200"
      >
        <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14 py-5 lg:py-7 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="block focus:outline-none">
            <Image
              src="/images/logo.png"
              alt="Conejo Valley Family Counseling"
              width={180}
              height={52}
              className="h-9 sm:h-11 lg:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-9 xl:space-x-11"
          >
            {headerNavItems.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.title}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      className="text-[12px] tracking-[0.16em] uppercase font-medium text-[#2B2B2B] nav-link-hover py-1 flex items-center gap-1 focus:outline-none"
                    >
                      {item.title}
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute left-0 top-full pt-3 w-64 transition-all duration-200 z-50 ${
                        activeDropdown === item.title
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                      }`}
                    >
                      <div className="bg-[#EFECE6] border border-[#DCD7CE] shadow-sm py-2 px-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            className="block px-4 py-2 text-[12px] tracking-[0.05em] text-[#2B2B2B] hover:border-b hover:border-[#2B2B2B] hover:bg-black/5 transition-all"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-[12px] tracking-[0.16em] uppercase font-medium text-[#2B2B2B] nav-link-hover py-1"
                >
                  {item.title}
                </Link>
              );
            })}

            {/* Desktop Contact CTA Button */}
            <Link
              href="/contact"
              className="btn-pill-outline ml-4"
            >
              CONTACT
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
            className="lg:hidden p-2 text-[#2B2B2B] focus:outline-none flex flex-col justify-center items-center gap-[5px] w-9 h-9"
          >
            <span className="w-5.5 h-px bg-[#2B2B2B] block"></span>
            <span className="w-5.5 h-px bg-[#2B2B2B] block"></span>
            <span className="w-5.5 h-px bg-[#2B2B2B] block"></span>
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
