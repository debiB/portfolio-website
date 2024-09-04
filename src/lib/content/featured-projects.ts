import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Adot',
      description: 'All-in-One Hub for Learning, Tracking, and Connecting, tailored for pregnant moms and parents-to-be, addressing the needs of over 130 million pregnancies globally each year.',
      tasks:
        "I partner with backend teams to integrate APIs and backend logic into the frontend UI while composing responsive web pages using React, Next.js, and TailwindCSS to enhance the user experience.",
      url: 'https://www.adot.life/',
      img: 'https://res.cloudinary.com/dmxwknzev/image/upload/v1723712240/lu1sm7ttbpydfqfz2ct0.png',
      tags: [
        'NextJs 14',
        'TypeScript',
        'TailwindCSS',
        'Framer motion'
      ],
    },
    {
      id: getId(),
      name: 'HakimHub',
      description:
        'AI-based medical recommendation system for Ethiopia, using conversational interfaces to provide personalized suggestions for doctors and medical facilities.',
      tasks:
        'I coded responsive web pages using React, Next.js, and TailwindCSS, and collaborated with backend engineers to seamlessly integrate APIs and the datastore with the frontend UI.',
      url: 'https://www.hakimhub.app/',
      img: 'https://res.cloudinary.com/dmxwknzev/image/upload/v1723713422/bl3xqrezcc2mk6tyudku.png',
      tags: ['NextJs', 'TypeScript', 'TailwindCSS','ShadCN', 'RTK Query','Redux'],
    },
     {
      id: getId(),
      name: 'Bazar',
      description:
        'This e-commerce site uses a chatbot for easy product listing and offers advanced filtering for a streamlined shopping experience.',
      tasks:
       'As a product manager, I shaped the app by conducting user interviews and market research to gather insights, understand needs, and identify trends. This helped me make informed decisions on features, aligning them with user expectations and market demands.',
      url: 'https://bazar-teal.vercel.app/products',
      img: 'https://res.cloudinary.com/dmxwknzev/image/upload/v1725375203/bazar_fls4wc.png',
      tags: ['Product Management', 'Project Management', 'Market Research','User Interviews'],
    },

  ],
};

export default featuredProjectsSection;
