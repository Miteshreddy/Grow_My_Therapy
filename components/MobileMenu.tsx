'use client';

import React from 'react';
import Link from 'next/link';
import { headerNavItems } from '@/data/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu-overlay"
      className="fixed inset-0 z-50 bg-[#FAF8F5] flex flex-col justify-between p-6 sm:p-10 overflow-y-auto animate-fadeIn"
    >
      {/* Top Bar: Brand + Close Button */}
      <div className="flex items-center justify-between pb-6 border-b border-[#E5E0D8]">
        <Link href="#" onClick={onClose} className="block">
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-medium text-[#2C3E35]">
              Dr. Maya Reynolds<span className="text-[#C47D63]">, PsyD</span>
            </span>
            <span className="text-[10px] tracking-[0.14em] uppercase text-[#565C58] font-medium">
              Santa Monica, CA
            </span>
          </div>
        </Link>

        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 text-[#2C3E35] hover:text-[#C47D63] transition-colors focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 py-10 flex flex-col justify-center space-y-6">
        {headerNavItems.map((item) => (
          <div key={item.title}>
            <a
              href={item.href}
              onClick={onClose}
              className="block font-serif text-3xl sm:text-4xl font-normal tracking-[-0.01em] text-[#1F2421] hover:text-[#C47D63] transition-colors py-1.5"
            >
              {item.title}
            </a>
          </div>
        ))}
      </div>

      {/* Bottom Action: Contact Pill Button */}
      <div className="pt-6 pb-6 flex flex-col items-center gap-4 border-t border-[#E5E0D8]">
        <a
          href="#contact"
          onClick={onClose}
          className="btn-forest w-full max-w-[320px] text-center"
        >
          SCHEDULE A CONSULTATION
        </a>
        <p className="text-xs text-[#565C58] text-center tracking-wide">
          In-Person in Santa Monica · Telehealth Statewide in CA
        </p>
      </div>
    </div>
  );
}
