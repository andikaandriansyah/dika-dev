export const hero = {
  badge_text: 'Available for new projects',
  brand_name: 'Andika.',
  title: 'Building Digital Value.',
  subtitle: 'I build personal portfolio websites that stand out.',
  tagline: 'Modern & Minimalist.',
  background_image: '/images/foto-dika.png',
};

export const about = {
  title: 'M Andika Andriansyah',
  description: `<p>Fullstack Developer with 2+ years of experience building web and mobile applications for various clients. Undergraduate student in Information Systems at Universitas Bina Sarana Informatika (GPA 3.85/4.00, Semester 6) with an official competency certification from BNSP.</p><p>Specialist in the Laravel, Next.js, React, and Flutter ecosystem — experienced in managing end-to-end development cycles from Figma design to production deployment. Background in freelance development and internships in professional work environments.</p>`,
  years_experience: '2+',
  projects_completed: '10+',
  gpa: '3.85',
  resume_url: 'https://drive.google.com/file/d/1AFbuoHoQrAB9npM7ZfDSn53F00lRWyeb/view?usp=sharing',
  image_url: '/images/foto-dika.png',
};

export const contact = {
  email: 'andikaandriansyah01@gmail.com',
  location: 'Karawang, Indonesia',
  github_url: 'https://github.com/andikaandriansyah',
  linkedin_url: 'https://www.linkedin.com/in/andikaandrians/',
  instagram_url: 'https://www.instagram.com/andika_andrians',
};

export const experiences = [
  {
    id: 1,
    period: 'March 2026',
    role: 'BNSP Nationally Certified',
    badge: 'BNSP Nationally Certified',
    badge_color: 'green',
    company: 'BNSP via LSP Universitas Bina Sarana Informatika • Jakarta, Indonesia',
    description: `- Passed the official national competency examination and earned a certificate (No. 6/070 2514 3 0830217/2026) as a Programmer in Software Development — valid for 3 years.\n- This credential is the highest-level certification for software developers in Indonesia, jointly acknowledged by the government and the professional industry.\n- Officially registered under Reg. No. — fully verifiable by HR at any time.`,
    tags: 'BNSP,Nationally Recognized,Software Development,Programmer',
  },
  {
    id: 2,
    period: '2025 — Now',
    role: 'Fullstack Developer',
    badge: null,
    badge_color: null,
    company: 'Freelance • Karawang, Indonesia',
    description: `- Successfully delivered end-to-end projects — from initial requirements gathering and architecture planning to deployment and handover, with zero compromises on deadline.\n- Led the full stack development of Cleanscape VR, managing the entire lifecycle from on-site 360° image capture to a fully deployed VR web application now actively used by Environmental Engineering students at PT IPAL SIER.\n- Built a VR learning platform using Next.js (React) and A-Frame — making complex industrial processes accessible and engaging through immersive technology.\n- Leveraged AI-powered tools (Claude, ChatGPT, Cursor, and model-based AI tools) to accelerate delivery speed and maintain high code quality across projects.`,
    tags: 'React / Next.js,A-Frame VR,360° Imaging,Project Management,Client Delivery,Claude AI',
  },
  {
    id: 3,
    period: 'July 2025',
    role: 'Software Development Workshop',
    badge: null,
    badge_color: null,
    company: 'Universitas Bina Sarana Informatika • Sentul, West Java',
    description: `- Completed an industry-simulated software development program built around real-world scenarios, covering workshop sessions, a live project sprint, and a formal technical presentation to industry speakers.\n- Demonstrated the ability to deliver under pressure (72.5 intensive hours) while delivering and presenting technical solutions to a professional panel.`,
    tags: 'Industry Grade,Sprint Project,Tech Presentation',
  },
  {
    id: 4,
    period: 'May 2024',
    role: 'Ethical Hacking & SOC',
    badge: 'Prakerja Verified',
    badge_color: 'red',
    company: 'Course-Net • Verified by Prakerja',
    description: `- Earned hands-on proficiency in ethical hacking based on SKKNI No. 181/2020 (Security Operations Center standard).\n- Capable of drafting incident response procedures and detecting security anomalies — directly relevant to building secure applications from the ground up.\n- Certificate independently verified by Prakerja — ensuring training quality and authenticity.`,
    tags: 'Ethical Hacking,Threat Intelligence,SOC,Vulnerability Detection,Incident Response',
  },
  {
    id: 5,
    period: 'June 2024',
    role: 'Database Design & Data Warehouse',
    badge: 'Graduated with Distinction',
    badge_color: 'green',
    company: 'Course-Net • Verified by Prakerja',
    description: `- Graduated with distinction — demonstrating solid mastery in database design, data warehouse architecture, and full data lifecycle management per SKKNI No. 265/2020.\n- These skills directly strengthen my role as a fullstack developer capable of designing and managing production databases without relying on external database consultants.`,
    tags: 'Database Design,Data Warehouse,SQL,Data Management,Backup & Restore',
  },
  {
    id: 6,
    period: 'April 2024',
    role: 'Data Analytics Foundations',
    badge: null,
    badge_color: null,
    company: 'Revou (PT Revolusi Cita Edukasi) • Online',
    description: `- Built a strong foundation in data analytics — learning to read, interpret, and apply data as the basis for sound technical decisions.\n- Complements fullstack expertise with a data-driven mindset: building features not just that work, but that can be measured, validated, and improved over time.`,
    tags: 'Data Analytics,Data-Driven Thinking,Revou Certified',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Web GIS — Marine & Fisheries Mapping (Subang)',
    category: 'Web GIS · Government',
    description: 'An interactive web-based GIS application for real-time mapping of marine and fisheries data in Subang Regency. Displays fishermen statistics, business groups, and government aid directly on an OpenStreetMap with layer filter and automated report download features.',
    tech_stack: 'Leaflet.js · OpenStreetMap · JavaScript · Laravel · MySQL · GeoJSON',
    image_url: '/images/Experience/GIS Subang.PNG',
  },
  {
    id: 2,
    title: 'HRIS — Human Resource Information System',
    category: 'Web App · Human Resources',
    description: 'A web-based human resource management platform covering attendance, payroll, and employee performance evaluation modules. Features an analytics dashboard with weekly attendance charts, department distribution, and a digital leave approval system for HR operational efficiency.',
    tech_stack: 'React · Tailwind CSS · Recharts · Node.js · PostgreSQL · REST API',
    image_url: '/images/Experience/HRIS.png',
  },
  {
    id: 3,
    title: 'TemanKarierKu — AI Career Platform',
    category: 'Landing Page · AI SaaS',
    description: 'An all-in-one AI platform landing page helping Indonesian professionals build resumes, analyze CVs automatically, and discover jobs matching their profile. Showcases Resume Builder AI, ATS Analyzer, Smart Job Matching, and AI Career Coach in a modern, conversion-optimized design.',
    tech_stack: 'Next.js · Tailwind CSS · TypeScript · Framer Motion · Claude AI API',
    image_url: '/images/Experience/Resume AI.png',
  },
  {
    id: 4,
    title: 'SISTABURAH — Digital Hajj & Umrah Savings',
    category: 'Web App · FinTech',
    description: 'An admin application for managing digital Hajj and Umrah savings for pilgrims. Features per-pilgrim savings tracking, deposit confirmation, monthly deposit trend charts, and a broadcast notification system — purpose-built for Islamic travel bureaus.',
    tech_stack: 'Laravel · Vue.js · Chart.js · MySQL · Tailwind CSS · Inertia.js',
    image_url: '/images/Experience/Tabungan Haji.png',
  },
];

export const skills = {
  'Frontend': ['Next.js', 'React.js', 'Tailwind CSS', 'Vue.js'],
  'Backend': ['Laravel', 'Node.js', 'Express.js', 'Supabase'],
  'Mobile & VR': ['Flutter', 'A-Frame (VR)', 'Inertia.js', 'Kotlin'],
  'Tools & Design': ['Git', 'Docker', 'VS Code', 'Windsurf', 'Antigravity', 'Claude AI', 'DeepSeek AI', 'Gemini AI', 'ChatGPT', 'Stripe'],
};

export const certificates = [
  {
    id: 1,
    title: 'BNSP Programmer Software Development',
    issuer: 'BNSP — National Professional Certification Agency • Jakarta',
    date: 'March 6, 2026',
    credential_url: null,
    image_url: '/images/sertifikat/SertifikatDigitalmhs_20260125_190439_page-0001.jpg',
  },
  {
    id: 2,
    title: 'Ethical Hacking & IT Security Techniques',
    issuer: 'Course-Net — Verified by Prakerja (2405/PK-00301)',
    date: 'May 2024',
    credential_url: null,
    image_url: '/images/sertifikat/CompletionCertificateMoehammad Andika Andriansyah -109225 (3)_page-0001.jpg',
  },
  {
    id: 3,
    title: 'Database Design & Building a Data Engineer Career',
    issuer: 'Course-Net — Verified by Prakerja (2406/PK-00144)',
    date: 'June 2024',
    credential_url: null,
    image_url: '/images/sertifikat/CompletionCertificateMoehammad Andika Andriansyah -109850 (1)_page-0001.jpg',
  },
  {
    id: 4,
    title: 'IT Bootcamp "Software Development For Industry"',
    issuer: 'Universitas Bina Sarana Informatika • Sentul, West Java',
    date: 'July 2–3, 2025',
    credential_url: null,
    image_url: '/images/sertifikat/WhatsApp Image 2026-05-03 at 04.58.35.jpeg',
  },
  {
    id: 5,
    title: 'Data Analytics Foundations',
    issuer: 'Course-Net — Verified by Prakerja (SKKNI No. 265/2020)',
    date: 'June 2024',
    credential_url: null,
    image_url: '/images/sertifikat/moehammad-andika-andriansyah-certificate-completion-damc_page-0001.jpg',
  },
];
