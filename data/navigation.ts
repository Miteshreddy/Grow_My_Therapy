export interface NavItem {
  title: string;
  href: string;
  children?: { title: string; href: string }[];
}

export const headerNavItems: NavItem[] = [
  {
    title: 'ABOUT',
    href: '/therapists-newbury-park',
  },
  {
    title: 'OUR TEAM',
    href: '#',
    children: [
      { title: 'Jennifer Anderson, LMFT', href: '/jennifer-anderson' },
      { title: 'Candace Bletscher, AMFT', href: '/candace-bletscher' },
      { title: 'Heather Williams-Baumgart, AMFT', href: '/heather-williams-baumgart' },
      { title: 'Michaela Gorospe, AMFT', href: '/michaela-gorospe' },
      { title: 'Samantha Johnson, AMFT', href: '/samantha-johnson' },
      { title: 'Autumn Bodily, AMFT', href: '/autumn-bodily' },
      { title: 'Andrea Watkins, APCC', href: '/andrea-watkins' },
      { title: 'Rosa Gomez, AMFT', href: '/rosa-gomez' },
      { title: 'Chad Flores, AMFT', href: '/chad-flores' },
    ],
  },
  {
    title: 'SPECIALTIES',
    href: '#',
    children: [
      { title: 'Dissociation', href: '/dissociative-identity-disorder-therapist-newbury-park' },
      { title: 'Trauma', href: '/trauma-counseling-newbury-park' },
      { title: 'Special Needs Parenting', href: '/counseling-special-needs-parents-newbury-park' },
      { title: 'Couples', href: '/couples-therapy' },
      { title: 'Children & Teens', href: '/children-and-teens' },
      { title: 'Anxiety & Depression', href: '/anxiety-depression' },
      { title: 'Adoption', href: '/adoption-therapy-ventura-county-ca' },
    ],
  },
  {
    title: 'METHODS',
    href: '#',
    children: [
      { title: 'EMDR', href: '/emdr-therapy-newbury-park' },
      { title: 'Brainspotting', href: '/brainspotting' },
      { title: 'Somatic Therapy', href: '/somatic-therapy' },
      { title: 'Parts Work Therapy', href: '/parts-work-therapy' },
    ],
  },
  {
    title: 'FAQS',
    href: '/faqs',
  },
];

export const footerLinks = {
  navigate: [
    { title: 'Home', href: '/home' },
    { title: 'About', href: '/therapists-newbury-park' },
    { title: 'FAQs', href: '/faqs' },
    { title: 'Contact', href: '/contact' },
  ],
  team: [
    { title: 'Jennifer Anderson', href: '/jennifer-anderson' },
    { title: 'Heather Williams-Baumgart', href: '/heather-williams-baumgart' },
    { title: 'Autumn Bodily', href: '/autumn-bodily' },
    { title: 'Michaela Gorospe', href: '/michaela-gorospe' },
    { title: 'Candace Bletscher', href: '/candace-bletscher' },
    { title: 'Samantha Johnson', href: '/samantha-johnson' },
    { title: 'Andrea Watkins', href: '/andrea-watkins' },
    { title: 'Rosa Gomez', href: '/rosa-gomez' },
    { title: 'Chad Flores', href: '/chad-flores' },
  ],
  contact: {
    addressLines: ['925 Broadbeck Dr', 'Suites 200 and 225', 'Newbury Park, CA 91320'],
    email: 'info@conejovalleycounseling.com',
    phone: '805.242.3120',
    serving: 'Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, & Simi Valley',
  },
  legal: [
    { title: 'Terms', href: '/terms' },
    { title: 'Privacy Policy', href: '/privacy-policy' },
    { title: 'Disclaimer', href: '/disclaimer' },
    { title: 'Website by Walker Strategy Co.', href: 'https://walkerstrategyco.com' },
  ],
};
