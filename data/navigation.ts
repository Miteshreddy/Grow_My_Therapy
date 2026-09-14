export interface NavItem {
  title: string;
  href: string;
  children?: { title: string; href: string }[];
}

export const headerNavItems: NavItem[] = [
  {
    title: 'ABOUT',
    href: '#about',
  },
  {
    title: 'SERVICES',
    href: '#services',
  },
  {
    title: 'APPROACH',
    href: '#approach',
  },
  {
    title: 'OUR OFFICE',
    href: '#office',
  },
  {
    title: 'FAQS',
    href: '#faqs',
  },
];

export const footerLinks = {
  navigate: [
    { title: 'Home', href: '#' },
    { title: 'About Dr. Maya', href: '#about' },
    { title: 'Therapy Services', href: '#services' },
    { title: 'Integrative Approach', href: '#approach' },
    { title: 'Our Office', href: '#office' },
    { title: 'Frequently Asked Questions', href: '#faqs' },
    { title: 'Contact & Consultations', href: '#contact' },
  ],
  services: [
    { title: 'Anxiety & Panic Therapy', href: '#services' },
    { title: 'Trauma Therapy & EMDR', href: '#services' },
    { title: 'Burnout & Perfectionism Support', href: '#services' },
    { title: 'Cognitive Behavioral Therapy (CBT)', href: '#approach' },
    { title: 'Mindfulness & Somatic Practices', href: '#approach' },
    { title: 'Telehealth Throughout California', href: '#office' },
  ],
  contact: {
    name: 'Dr. Maya Reynolds, PsyD',
    title: 'Licensed Clinical Psychologist',
    addressLines: ['123th Street 45 W', 'Santa Monica, CA 90401'],
    telehealth: 'Telehealth available across California',
    serving: 'Serving Santa Monica, West Los Angeles, Venice, Pacific Palisades & all California via Telehealth',
  },
  legal: [
    { title: 'Privacy Policy', href: '#' },
    { title: 'Terms of Service', href: '#' },
    { title: 'Notice of Privacy Practices', href: '#' },
    { title: 'Good Faith Estimate Notice', href: '#' },
  ],
};
