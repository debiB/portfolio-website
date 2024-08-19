import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'CustomEd',
      url: 'https://github.com/debiB/customEd',
      repo: 'https://github.com/debiB/customEd',
      img: 'https://res.cloudinary.com/dmxwknzev/image/upload/v1723716032/p8phrdtltrj1y3gqycsd.png',
      year: 2024,
      tags: ['ReactJs', 'NextJs', 'RTK Query', 'Redux', 'ShadCN','Tailwind' ],
      description: "The project uses AI to create personalized learning paths for students. Teachers manage classrooms, discussions, and quizzes, while admins oversee activities for effective management."
    },
    {
      id: getId(),
      name: 'Wander wise',
      url: 'https://github.com/debiB/wander_wise',
      repo: 'https://github.com/debiB/wander_wise',
      img: 'https://res.cloudinary.com/dmxwknzev/image/upload/v1723716470/ti9lbdbh9vaacnzzuknr.png',
      year: 2024,
      tags: ['ReactJs', 'NextJs', 'RTK Query', 'Redux', 'ShadCN','Tailwind' ],
      description: "Wander Wise uses AI to offer personalized travel recommendations based on users' past ratings and preferences. It suggests tailored destinations and itineraries, learning from feedback to refine its recommendations and enhance future travel experiences."
    },
    {
      id: getId(),
      name: 'Campus Bulletin App',
      url: 'https://res.cloudinary.com/dmxwknzev/image/upload/v1723716703/uoj2jy7wr5qfqqg8wsr3.png',
      repo: 'https://github.com/Son-OfAnton/campus-bulletin-app',
      img: 'https://res.cloudinary.com/dmxwknzev/image/upload/v1723716703/uoj2jy7wr5qfqqg8wsr3.png',
      year: 2024,
      tags: ['Flutter', 'Riverpod', 'ASP.NET'],
      description: "The mobile app allows students to subscribe to channels from administrators, teachers, and representatives, receiving notifications about important announcements, events, and updates to stay informed."
    },
    {
      id: getId(),
      name: 'Mesob Magic',
      url: 'https://github.com/debiB/mesobmagic',
      repo: 'https://github.com/debiB/mesobmagic',
      img: 'https://res.cloudinary.com/dmxwknzev/image/upload/v1723717406/shy9asddfjjum64n0tpv.png',
      year: 2023,
      tags: ['HTML', 'CSS', 'Javascript'],
      description: "Mesob Magic is a recipe-sharing website where users can explore, contribute, rate, and comment on recipes. It features diverse recipes with advanced search filters and user profiles for managing contributions and interacting with others."
    },
    
  ],
};
