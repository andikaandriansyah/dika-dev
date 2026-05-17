import { hero, about, contact, experiences, projects, skills, certificates } from './data/content';
import Portfolio from './components/Portfolio';

export const metadata = {
  title: 'M Andika Andriansyah — Fullstack Developer',
  description: 'Fullstack Developer specializing in Next.js, React, Laravel, and Flutter. Building digital products from design to deployment.',
  keywords: 'fullstack developer, next.js, react, laravel, flutter, portfolio, andika andriansyah',
  openGraph: {
    title: 'M Andika Andriansyah — Fullstack Developer',
    description: 'Building Digital Value. Fullstack Developer from Karawang, Indonesia.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <Portfolio
      hero={hero}
      about={about}
      contact={contact}
      experiences={experiences}
      projects={projects}
      skills={skills}
      certificates={certificates}
    />
  );
}
