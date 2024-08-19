import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "Experience",
  experiences: [
    {
      company: 'A2SV',
      companyUrl: 'https://a2sv.org/',
      role: 'Frontend developer',
      started: 'August 2024',
      upto: 'present',
      tasks: [
        'Implement Adot, an All-in-One Hub for Learning, Tracking, and Connecting, tailored for pregnant moms and parents-to-be.',
        'Partner with backend teams to integrate APIs and backend logic with the frontend UI.',
        
      ],
    },
    {
      company: 'Eskalate',
      companyUrl: 'https://www.eskalate.io/',
      role: 'Frontend developer intern (Team lead)',
      started: 'Oct 2023',
      upto: 'June 2024',
      tasks: [
        'Implemented Hakimhub, an AI-based medical recommendation system for Ethiopia, using conversational interfaces to offer personalized doctor and medical facility suggestions.',
        'Coded responsive web pages utilizing React, Next.js, and TailwindCSS.',
        'Collaborated with diverse nationwide team of developers.',
      ],
    },
    
  ],
};
