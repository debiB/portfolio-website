import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from `/containers/About.tsx`
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I work with:',
    items: [
      'NextJs',
      'TailwindCSS',
      'ExpressJs',
      'ASP.NET',
      'ReactJs',
      'MongoDB',
      'PostgreSQL',
    ],
  },
  img: '/linkedin.jpg',
};
