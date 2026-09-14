export interface ServiceItem {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  bullets: string[];
  image: string;
}

export interface SpecialtyItem {
  title: string;
  description: string;
  anchor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const drMayaData = {
  name: 'Dr. Maya Reynolds, PsyD',
  title: 'Licensed Clinical Psychologist',
  shortTitle: 'Clinical Psychologist',
  tagline: 'Warm, grounded therapy for high-achieving adults navigating anxiety, trauma, and burnout.',
  location: {
    address: '123th Street 45 W',
    city: 'Santa Monica',
    state: 'CA',
    zip: '90401',
    fullAddress: '123th Street 45 W, Santa Monica, CA 90401',
    region: 'Santa Monica, California',
    telehealthCoverage: 'Available throughout California via secure telehealth',
  },
  contact: {
    ctaPrimary: 'Schedule a Consultation',
    ctaSecondary: 'Start a Conversation',
    ctaOffice: 'Explore Therapy Options',
  },
  hero: {
    eyebrow: 'LICENSED CLINICAL PSYCHOLOGIST · SANTA MONICA, CALIFORNIA',
    h1: 'Thoughtful Therapy for Anxiety, Trauma, and Burnout in Santa Monica',
    subheading:
      'Warm, collaborative psychotherapy for high-achieving adults, professionals, and creatives who feel functional on the outside while quietly carrying exhaustion, chronic worry, or the impact of past experiences.',
    telehealthNote: 'In-person sessions in Santa Monica · Secure telehealth for clients across California',
  },
  resonance: {
    eyebrow: 'WHO THIS IS FOR',
    quoteHeading:
      '“You look functional on the outside. But inside, you’re exhausted from overthinking and holding everything together.”',
    body1:
      'Many of the adults I work with are high-achieving, thoughtful, and deeply self-aware. On paper, things appear fine—yet internally, you may feel on edge, stuck in constant worry, or quietly bracing for something to go wrong.',
    body2:
      'Whether you are coping with persistent bodily tension, sleep difficulties, professional pressure, or earlier life experiences that continue to echo in your relationships and confidence, therapy can be a space to step out of survival mode.',
  },
  services: [
    {
      id: 'anxiety-panic',
      title: 'Anxiety & Panic Therapy',
      eyebrow: 'MIND-BODY REGULATION',
      description:
        'Support for adults dealing with chronic worry, panic, difficulty sleeping, and persistent bodily tension. We work collaboratively to understand both the emotional and physiological patterns keeping you in overthinking and hypervigilance.',
      bullets: [
        'Relief from constant worry, racing thoughts, and overthinking',
        'Addressing bodily tension, sleep difficulties, and panic symptoms',
        'Practical tools combined with deep insight into underlying triggers',
      ],
      image: '/images/adult-calm.jpg',
    },
    {
      id: 'trauma-emdr',
      title: 'Trauma Therapy & EMDR',
      eyebrow: 'SAFETY & STABILIZATION',
      description:
        'Carefully paced trauma work for single-incident events as well as complex, long-standing patterns from childhood, relationships, or chronic stress. Integrating EMDR and body-oriented practices to help painful memories rework safely.',
      bullets: [
        'Healing single-incident and complex developmental trauma',
        'Careful pacing centered on emotional safety and stabilization',
        'Evidence-based EMDR and somatic regulation techniques',
      ],
      image: '/images/adult-reflection.jpg',
    },
    {
      id: 'burnout-perfectionism',
      title: 'Burnout & Perfectionism Support',
      eyebrow: 'SUSTAINABLE LIVING',
      description:
        'Therapy designed for entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through internal pressure. A structured, compassionate space to slow down and build sustainable ways of working and living.',
      bullets: [
        'Reconnecting with yourself after prolonged professional exhaustion',
        'Untangling perfectionism, high internal demands, and guilt',
        'Cultivating genuine resilience and a healthier relationship with work',
      ],
      image: '/images/adult-creative.jpg',
    },
  ] as ServiceItem[],
  quoteBanner: {
    quote:
      'Therapy is not just about symptom relief. It is about developing insight, resilience, and a stronger, more compassionate relationship with yourself over time.',
    attribution: 'Dr. Maya Reynolds, PsyD',
  },
  about: {
    eyebrow: 'ABOUT DR. MAYA REYNOLDS, PSYD',
    heading: 'A warm, collaborative, and grounded approach to meaningful change.',
    leadParagraph:
      'I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.',
    bodyParagraphs: [
      'Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge. Clients frequently come to me feeling “functional” on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong.',
      'I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they’re experiencing.',
      'I believe therapy works best when clients feel respected, understood, and actively involved in the process. If you’re looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit.',
    ],
    portrait: '/images/maya-portrait.jpg',
  },
  methods: {
    eyebrow: 'INTEGRATIVE MODALITIES',
    heading: 'Evidence-based methods tailored to your mind and body.',
    description:
      'We integrate practical tools with depth-oriented exploration to address both how thoughts shape emotion and how stress is held in the physical nervous system.',
    modalitiesList: [
      {
        name: 'Cognitive Behavioral Therapy (CBT)',
        description:
          'Clarifying the connection between thoughts, emotions, and behaviors to interrupt unhelpful cognitive spirals and overthinking.',
      },
      {
        name: 'EMDR Therapy',
        description:
          'Reworking how painful memories and trauma are processed and stored in the brain, reducing distress and restoring safety.',
      },
      {
        name: 'Mindfulness-Based Practices',
        description:
          'Fostering present-moment awareness and non-judgmental acceptance to navigate worry, panic, and internal reactivity.',
      },
      {
        name: 'Body-Oriented (Somatic) Techniques',
        description:
          'Tuning into physical sensations, tension, and nervous system states to support physiological regulation and grounded calm.',
      },
    ],
  },
  specialtiesGrid: [
    {
      title: 'Anxiety & Panic',
      description:
        'Moving beyond managing symptoms to understanding the root physiological and emotional drivers of worry, panic, and nervous system tension.',
      anchor: '#contact',
    },
    {
      title: 'Trauma & Earlier Life Experiences',
      description:
        'Paced trauma work prioritizing safety, stabilization, and resolution of experiences that affect relationships, confidence, and safety.',
      anchor: '#contact',
    },
    {
      title: 'Burnout & Chronic Stress',
      description:
        'Reclaiming energy and self-connection when years of high achievement and pushing through stress have left you feeling disconnected.',
      anchor: '#contact',
    },
    {
      title: 'Perfectionism & Internal Pressure',
      description:
        'Softening relentless internal expectations, cultivating genuine self-compassion, and designing more sustainable rhythms of life.',
      anchor: '#contact',
    },
  ] as SpecialtyItem[],
  office: {
    eyebrow: 'OUR OFFICE',
    heading: 'A Calm Space for Healing',
    subheading:
      'Quiet, private in-person therapy in Santa Monica, alongside secure telehealth for clients located anywhere in California.',
    description:
      'My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.',
    features: [
      'Warm natural light, exposed brick, and clean, uncluttered design',
      'Quiet, confidential setting designed for comfort and emotional safety',
      'Easily accessible location in downtown Santa Monica',
      'Flexible options: in-person sessions or secure California telehealth',
    ],
    images: ['/images/office-1.jpg', '/images/office-2.jpg'],
  },
  faqs: [
    {
      question: 'Who do you typically work with?',
      answer:
        'I specialize in working with adults who are thoughtful, self-aware, and often high-achieving—such as professionals, entrepreneurs, and creatives. Many feel “functional” on the outside while quietly struggling with anxiety, overthinking, bodily tension, professional burnout, or the lingering effects of earlier life experiences.',
    },
    {
      question: 'Do you offer in-person sessions, virtual therapy, or both?',
      answer:
        'I offer both in-person therapy from my quiet, private office in Santa Monica, California, as well as secure telehealth sessions for clients located anywhere in the state of California.',
    },
    {
      question: 'What is your approach to trauma therapy and EMDR?',
      answer:
        'Trauma work is an integral part of my practice. I work with both single-incident trauma and complex, long-standing patterns stemming from childhood, relationships, or chronic stress. My approach is carefully paced, emphasizing safety, stabilization, and helping you feel regulated in your daily life—not just during our sessions.',
    },
    {
      question: 'What can I expect from our therapy sessions?',
      answer:
        'I take a warm, collaborative, and grounded approach. Sessions are structured enough to provide clear support, while leaving ample room for reflection and depth. We combine practical, evidence-based tools (CBT, EMDR, mindfulness, and somatic practices) with deep exploration to address both the emotional and physiological sides of your experience.',
    },
    {
      question: 'How does therapy help with burnout and perfectionism?',
      answer:
        'After years of pushing through high internal pressure and stress, it is common to feel disconnected from yourself. Therapy provides a dedicated space to slow down, examine unsustainable expectations, and develop healthier, more resilient ways of living and working.',
    },
  ] as FAQItem[],
};
