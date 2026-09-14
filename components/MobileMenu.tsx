'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { headerNavItems } from '@/data/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openFolder, setOpenFolder] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleFolder = (title: string) => {
    setOpenFolder(openFolder === title ? null : title);
  };

  return (
    <div
      id="mobile-menu-overlay"
      className="fixed inset-0 z-50 bg-[#EFECE6] flex flex-col justify-between p-6 sm:p-10 overflow-y-auto animate-fadeIn"
    >
      {/* Top Bar: Logo + Close Button */}
      <div className="flex items-center justify-between pb-6">
        <Link href="/" onClick={onClose} className="block">
          <Image
            src="/images/logo.png"
            alt="Conejo Valley Family Counseling"
            width={160}
            height={50}
            className="w-auto h-10 object-contain"
            priority
          />
        </Link>
        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 text-[#2B2B2B] hover:opacity-75 transition-opacity focus:outline-none"
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
      <div className="flex-1 py-10 flex flex-col justify-center space-y-5">
        {headerNavItems.map((item) => {
          if (item.children) {
            const isExpanded = openFolder === item.title;
            return (
              <div key={item.title}>
                <button
                  onClick={() => toggleFolder(item.title)}
                  className="w-full flex items-center justify-between text-left text-3xl sm:text-4xl font-light tracking-[0.06em] uppercase text-[#2B2B2B] py-2 focus:outline-none"
                >
                  <span>{item.title}</span>
                  <span
                    className={`text-2xl font-light transition-transform duration-200 ${
                      isExpanded ? 'rotate-90' : ''
                    }`}
                  >
                    &gt;
                  </span>
                </button>
                {isExpanded && (
                  <div className="pl-4 pt-3 pb-2 space-y-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        onClick={onClose}
                        className="block text-lg sm:text-xl text-[#555555] hover:text-[#2B2B2B] transition-colors py-1"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <div key={item.title}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block text-3xl sm:text-4xl font-light tracking-[0.06em] uppercase text-[#2B2B2B] py-2 hover:opacity-75 transition-opacity"
              >
                {item.title}
              </Link>
            </div>
          );
        })}
      </div>

      {/* Bottom Action: Contact Pill Button */}
      <div className="pt-6 pb-6 flex justify-center">
        <Link
          href="/contact"
          onClick={onClose}
          className="w-[75%] max-w-[280px] text-center border border-[#2B2B2B] rounded-full py-3.5 text-xs tracking-[0.2em] uppercase font-medium text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white transition-colors"
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
}
