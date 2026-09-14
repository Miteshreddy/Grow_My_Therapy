import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="w-full bg-[#EFECE6] py-20 lg:py-28">
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-14 xl:gap-20">
          
          {/* Left Content Column */}
          <div className="w-full lg:w-[58%] xl:w-[60%] flex flex-col justify-between">
            
            {/* Eyebrow */}
            <p className="text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-[#555555] font-medium mb-6">
              HOW WE WORK
            </p>

            {/* H2 Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-light leading-[1.25] text-[#2B2B2B] font-serif mb-10">
              We’re here to make a difference.
            </h2>

            {/* 2-Column Body Paragraphs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12 mb-10">
              {/* Column 1 */}
              <div>
                <p className="font-sans text-[11px] sm:text-[12px] tracking-[0.06em] uppercase font-medium text-[#2B2B2B] leading-relaxed mb-5 max-w-[340px]">
                  THE CLIENTS WE WORK WITH ARE BALANCING SO MANY THINGS AT ONCE, IT’S OFTEN HARD FOR THEM TO PUT THEMSELVES FIRST.
                </p>
                <p className="text-[15px] sm:text-[16px] text-[#444444] font-light leading-[1.85]">
                  Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.
                </p>
              </div>

              {/* Column 2 */}
              <div className="pt-0 md:pt-1">
                <p className="text-[15px] sm:text-[16px] text-[#444444] font-light leading-[1.85]">
                  Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.
                </p>
              </div>
            </div>

            {/* Underlined CTA Link */}
            <div>
              <Link
                href="/therapists-newbury-park"
                className="cta-underline text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-medium text-[#2B2B2B]"
              >
                LEARN MORE ABOUT US
              </Link>
            </div>

          </div>

          {/* Right Dune Photo Column - starts aligned at the top with the eyebrow */}
          <div className="w-full lg:w-[42%] xl:w-[40%] flex-shrink-0 mt-6 lg:mt-0">
            <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:h-[640px] xl:h-[690px] overflow-hidden">
              <Image
                src="/images/how-we-work-dunes.jpg"
                alt="Mother and daughter dancing joyfully on sandy dunes"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
