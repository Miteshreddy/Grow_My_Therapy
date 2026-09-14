import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '@/data/navigation';

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-[#FFFFFF] pt-20 pb-16 lg:pt-24 lg:pb-20 border-t border-[#E5E0D8]/60">
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12">
          
          {/* Column 1: Brand Info (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-start pr-0 lg:pr-6">
            <Link href="/" className="inline-block mb-6 focus:outline-none">
              <Image
                src="/images/logo.png"
                alt="Conejo Valley Family Counseling"
                width={280}
                height={78}
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-[14px] sm:text-[15px] text-[#444444] font-light leading-[1.8] max-w-sm">
              We want to make getting started simple. You’re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.
            </p>
          </div>

          {/* Column 2: Navigate (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <p className="font-sans text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-medium text-[#2B2B2B] mb-6">
              NAVIGATE
            </p>
            <ul className="space-y-3">
              {footerLinks.navigate.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-[14px] sm:text-[15px] text-[#444444] font-light hover:text-[#2B2B2B] transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Team (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <p className="font-sans text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-medium text-[#2B2B2B] mb-6">
              OUR TEAM
            </p>
            <ul className="space-y-2.5">
              {footerLinks.team.map((member) => (
                <li key={member.title}>
                  <Link
                    href={member.href}
                    className="text-[14px] sm:text-[15px] text-[#444444] font-light hover:text-[#2B2B2B] transition-colors"
                  >
                    {member.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <p className="font-sans text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-medium text-[#2B2B2B] mb-6">
              CONTACT
            </p>
            <div className="space-y-3 text-[14px] sm:text-[15px] text-[#444444] font-light leading-relaxed">
              <p>
                {footerLinks.contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p className="pt-2">
                <a
                  href={`mailto:${footerLinks.contact.email}`}
                  className="hover:text-[#2B2B2B] transition-colors block"
                >
                  {footerLinks.contact.email}
                </a>
                <a
                  href={`tel:${footerLinks.contact.phone.replace(/\D/g, '')}`}
                  className="hover:text-[#2B2B2B] transition-colors block"
                >
                  {footerLinks.contact.phone}
                </a>
              </p>
              <p className="text-[13px] text-[#666666] pt-3 leading-normal max-w-xs">
                {footerLinks.contact.serving}
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
