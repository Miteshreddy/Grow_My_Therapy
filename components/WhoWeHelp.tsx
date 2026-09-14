import React from 'react';
import Image from 'next/image';

interface ServiceCard {
  title: string;
  image: string;
  alt: string;
  description: string;
  href?: string;
}

const services: ServiceCard[] = [
  {
    title: 'Adults',
    image: '/images/adults.jpg',
    alt: 'Two women sitting together on beach looking out at ocean',
    description:
      'Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.',
  },
  {
    title: 'Couples',
    image: '/images/couples.jpg',
    alt: 'Affectionate couple embracing on sunny beach',
    description:
      'Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.',
    href: '/couples-therapy',
  },
  {
    title: 'Children & Teens',
    image: '/images/children.jpg',
    alt: 'Young boy lifting and spinning smiling little sister on the beach',
    description:
      'Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.',
    href: '/children-and-teens',
  },
];

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="w-full bg-[#FFFFFF] py-20 lg:py-28">
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        
        {/* Section Heading with Script Accent */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-light text-[#2B2B2B] font-serif leading-[1.2]">
            Who we{' '}
            <span className="font-script text-[#86B3B3] text-[1.18em] relative inline-block top-1 ml-1">
              help
            </span>
          </h2>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 xl:gap-14">
          {services.map((item) => (
            <div key={item.title} className="flex flex-col group">
              {/* Card Image */}
              <div className="relative w-full aspect-square overflow-hidden bg-[#F4F0EA]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Card Title */}
              <h3 className="text-2xl lg:text-[26px] font-light text-[#2B2B2B] font-serif mt-7 mb-4">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-[15px] sm:text-[16px] text-[#444444] font-light leading-[1.8]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
