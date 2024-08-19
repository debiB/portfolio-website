import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Dibora Berhanu.',
  tagline: 'I build full-stack web apps and stunning interfaces.',
  description:
    "I'm a passionate full-stack web developer with hands-on experience in building web applications using React.js, Next.js with TypeScript, TailwindCSS, Node.js, and ASP.NET, along with UI/UX design skills.",
  specialText: '',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
