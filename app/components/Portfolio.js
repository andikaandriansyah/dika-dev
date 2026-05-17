'use client';
import { useGSAPAnimations } from '../hooks/useGSAP';
import Navbar from './Navbar';
import ContactForm from './ContactForm';
import Lightbox from './Lightbox';
import dynamic from 'next/dynamic';
import { Code, PenTool, Globe, Sparkles, ArrowRight, MoveRight, Download, Briefcase, Monitor, Server, Smartphone, Wrench, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const ThreeHero = dynamic(() => import('./ThreeHero'), { ssr: false });

function parseTags(str) {
  if (!str) return [];
  return str.split(',').map(t => t.trim()).filter(Boolean);
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero({ data }) {
  const floatIcons = [
    { icon: <Code className="h-10 w-10" />, pos: { top: '15%', left: '10%' } },
    { icon: <PenTool className="h-10 w-10" />, pos: { top: '25%', right: '15%' } },
    { icon: <Globe className="h-10 w-10" />, pos: { left: '20%', bottom: '25%' } },
    { icon: <Sparkles className="h-10 w-10" />, pos: { right: '10%', bottom: '15%' } },
  ];
  const marqueeItems = ['User Interface', 'User Experience', 'Web Development', 'Mobile Apps', 'System Design', 'Prototyping'];
  return (
    <section id="home">
      <div style={{ position: 'relative', display: 'flex', minHeight: '100vh', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', maxWidth: '100%', paddingTop: '5rem', background: '#0a0a0a', color: '#fff' }}>
        <ThreeHero />
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, minWidth: '100%', minHeight: '100%' }}>
          {data.background_image && (
            <>
              <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <img src={data.background_image} alt="Hero Background" className="hero-bg-img" />
              </div>
              <div className="hero-gradient" />
            </>
          )}
          {!data.background_image && <div className="hero-overlay" />}
        </div>
        <div className="hero-noise">
          <svg style={{ height: '100%', width: '100%' }}>
            <filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>

        {/* Floating Lucide Icons */}
        <div className="hero-float-icons-container">
          {floatIcons.map((ic, i) => (
            <div key={i} className="hero-float-icon" style={ic.pos}>{ic.icon}</div>
          ))}
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div id="hero-title" style={{ position: 'relative', maxWidth: '64rem', marginTop: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#bbf7d0', background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(34,197,94,0.35)', borderRadius: '100px', padding: '0.375rem 0.875rem' }}>
                <span style={{ position: 'relative', display: 'inline-flex', width: '0.5rem', height: '0.5rem', flexShrink: 0 }}>
                  <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#22c55e', opacity: 0.6, animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite' }} />
                  <span style={{ position: 'relative', width: '0.5rem', height: '0.5rem', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                </span>
                {data.badge_text}
              </span>
            </div>
            <h1 className="hero-h1">{data.title}</h1>
          </div>
          <p id="hero-subtitle" className="hero-subtitle">
            {data.subtitle}
            {data.tagline && <span style={{ fontWeight: 700, position: 'relative', display: 'inline-block', margin: '0 0.5rem' }}>{data.tagline}</span>}
          </p>
          <div id="hero-cta" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
            <a href="#projects" className="btn-primary magnetic-btn">
              View My Work <ArrowRight style={{ height: '1.25rem', width: '1.25rem' }} />
            </a>
            <a href="#contact" className="btn-outline magnetic-btn group">
              Get in Touch <MoveRight className="hero-cta-arrow" />
            </a>
          </div>
        </div>

        {/* Marquee */}
        <div className="marquee-track">
          <div style={{ position: 'relative', display: 'flex', width: '100%', overflow: 'hidden' }} className="mask-linear-fade">
            <div className="marquee-inner">
              {[0,1,2,3].map(r => (
                <div key={r} style={{ display: 'flex', alignItems: 'center' }}>
                  {marqueeItems.map((item, i) => (
                    <span key={`${r}-${i}`}>
                      <span className="label">{item}</span>
                      <span className="dot" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────
function About({ data }) {
  return (
    <section id="about">
      <div className="container" style={{ padding: '0 1rem' }}>
        <div style={{ padding: '4rem 0' }} className="about-section-inner">
          <div className="about-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h2 className="about-title">Who I Am</h2>
                <h3 className="about-name">{data.title}</h3>
                <div className="about-divider" />
              </div>
              <div className="about-description" style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: data.description }} />
              <div style={{ paddingTop: '1rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                {[
                  { label: 'Years Exp.', value: data.years_experience },
                  { label: 'Projects', value: data.projects_completed },
                  { label: 'GPA', value: data.gpa },
                ].map(s => (
                  <div key={s.label}>
                    <span className="stat-number">{s.value}</span>
                    <span style={{ fontSize: '0.75rem', color: '#737373', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</span>
                  </div>
                ))}
              </div>
              {data.resume_url && (
                <div style={{ paddingTop: '1rem' }}>
                  <a href={data.resume_url} target="_blank" rel="noopener noreferrer" className="btn-cv">
                    Download CV <Download style={{ height: '1rem', width: '1rem' }} />
                  </a>
                </div>
              )}
            </div>
            <div className="about-image-wrapper">
              {data.image_url && <img alt={data.title} src={data.image_url} />}
              <div className="about-circle-1" />
              <div className="about-circle-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
function Experience({ data }) {
  return (
    <section id="experience" style={{ background: 'rgba(250,250,250,0.5)' }}>
      <div className="container" style={{ padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-eyebrow">Career Path</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem' }}>Experience</h2>
          </div>
          <div className="exp-timeline">
            {data.map((exp, i) => (
              <div key={exp.id} className="exp-item" style={{ paddingBottom: i < data.length - 1 ? '3rem' : 0 }}>
                <div className="exp-dot" style={{ background: exp.badge ? '#171717' : '#a3a3a3' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#262626' }}>{exp.period}</span>
                    {exp.badge && (
                      <span className="badge-pill badge-neutral">{exp.badge}</span>
                    )}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#737373', fontSize: '0.875rem' }}>
                    <Briefcase style={{ height: '0.875rem', width: '0.875rem', flexShrink: 0 }} />
                    <span style={{ fontWeight: 500 }}>{exp.company}</span>
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {exp.description.split('\n').filter(l => l.trim().startsWith('-')).map((line, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', color: '#525252' }}>
                        <span style={{ marginRight: '0.625rem', marginTop: '0.375rem', height: '0.375rem', width: '0.375rem', flexShrink: 0, borderRadius: '50%', background: '#d4d4d4', display: 'inline-block' }} />
                        <span>{line.trim().replace(/^-\s*/, '')}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.tags && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', paddingTop: '0.5rem' }}>
                      {parseTags(exp.tags).map(t => (
                        <span key={t} className="tag-pill">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SKILLS ──────────────────────────────────────────────────────────────────
const SKILL_ICONS = {
  'Frontend': <Monitor className="h-8 w-8" />,
  'Backend': <Server className="h-8 w-8" />,
  'Mobile & VR': <Smartphone className="h-8 w-8" />,
  'Tools & Design': <Wrench className="h-8 w-8" />,
};

function Skills({ data }) {
  return (
    <section id="skills" style={{ padding: '5rem 0', position: 'relative', width: '100%', overflow: 'hidden' }}>
      <div className="circle-decor" style={{ left: '-100px', top: '5rem', width: '400px', height: '400px' }} />
      <div className="circle-decor" style={{ right: '-100px', bottom: '5rem', width: '400px', height: '400px' }} />
      <div className="skills-heading" style={{ marginBottom: '3.5rem', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <h2 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: '1rem' }}>Tech Stack</h2>
        <div className="h1-divider" style={{ marginBottom: '1.5rem' }} />
        <p style={{ fontSize: '1.125rem', color: '#737373', maxWidth: '42rem', margin: '0 auto', lineHeight: 1.6 }}>My preferred weapons of choice.</p>
      </div>
      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(2,1fr)', width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '0 1rem', position: 'relative', zIndex: 10 }} className="skills-grid">
        {Object.entries(data).map(([category, items]) => (
          <div key={category} className="skill-card">
            <div className="skill-icon">{SKILL_ICONS[category] || SKILL_ICONS['Tools & Design']}</div>
            <h3>{category}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
              {items.map(item => (
                <span key={item} className="skill-tag-item">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── PROJECTS ────────────────────────────────────────────────────────────────
function Projects({ data }) {
  return (
    <section id="projects" style={{ padding: '5rem 0', background: 'rgba(250,250,250,0.5)' }}>
      <div className="container">
        <div className="projects-heading" style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <span className="section-eyebrow">Portfolio</span>
          <h2 className="section-title" style={{ marginTop: '0.5rem' }}>Featured Projects</h2>
          <p style={{ marginTop: '1rem', maxWidth: '700px', margin: '1rem auto 0', fontSize: '1.125rem', color: '#737373' }}>Digital solutions I have built — from government mapping apps to AI-powered platforms.</p>
        </div>
        <div style={{ display: 'grid', gap: '2rem', maxWidth: '64rem', margin: '0 auto' }} className="projects-grid">
          {data.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-img-wrap" onClick={() => window.openLightbox?.(project.image_url, project.title)}>
                <img src={project.image_url} alt={project.title} />
                <div className="project-overlay">
                  <div className="zoom-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                  </div>
                </div>
              </div>
              <div className="project-body">
                <span className="cat-badge"><span className="cat-dot" />{project.category}</span>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, lineHeight: 1.3 }}>{project.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#737373', lineHeight: 1.6, flexGrow: 1 }}>{project.description}</p>
                {project.tech_stack && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', paddingTop: '0.75rem', borderTop: '1px solid #f5f5f5' }}>
                    {project.tech_stack.split(' · ').map(t => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CERTIFICATES ────────────────────────────────────────────────────────────
function Certificates({ data }) {
  return (
    <section id="certificates" style={{ padding: '5rem 0', background: '#fff' }}>
      <div className="container">
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <span className="section-eyebrow">Portfolio</span>
          <h2 className="section-title" style={{ marginTop: '0.5rem' }}>Certificates</h2>
          <p style={{ marginTop: '1rem', maxWidth: '700px', margin: '1rem auto 0', fontSize: '1.125rem', color: '#737373' }}>Professional certifications and achievements that validate my expertise.</p>
        </div>
        <div style={{ display: 'grid', gap: '2rem', maxWidth: '72rem', margin: '0 auto' }} className="certs-grid">
          {data.map(cert => (
            <div key={cert.id} className="cert-card" onClick={() => window.openLightbox?.(cert.image_url, cert.title)}>
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="cert-img-wrap">
                  <img src={cert.image_url} alt={cert.title} />
                  <div className="cert-overlay">
                    <div className="zoom-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                  <h3 className="cert-title">{cert.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.875rem', color: '#737373' }}>{cert.issuer}</span>
                    <span className="cert-date-badge">{cert.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function Contact({ data }) {
  return (
    <section id="contact" style={{ padding: '5rem 0' }}>
      <div className="container">
        <div className="contact-heading" style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <span className="section-eyebrow">Get in Touch</span>
          <h2 className="section-title" style={{ marginTop: '0.5rem' }}>Contact Me</h2>
          <p style={{ marginTop: '1rem', maxWidth: '700px', margin: '1rem auto 0', fontSize: '1.125rem', color: '#737373' }}>Have a project in mind or want to collaborate? Send me a message.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href={`mailto:${data.email}`} className="contact-info-card">
              <div className="contact-icon"><Mail style={{ height: '1.25rem', width: '1.25rem' }} /></div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#a3a3a3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.125rem' }}>Email</p>
                <p style={{ fontSize: '1rem', fontWeight: 700, color: '#171717' }}>{data.email}</p>
              </div>
              <div className="contact-arrow-icon"><ArrowUpRight style={{ height: '1rem', width: '1rem' }} /></div>
            </a>
            <div className="contact-info-card" style={{ cursor: 'default' }}>
              <div className="contact-icon"><MapPin style={{ height: '1.25rem', width: '1.25rem' }} /></div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#a3a3a3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.125rem' }}>Location</p>
                <p style={{ fontSize: '1rem', fontWeight: 700, color: '#171717' }}>{data.location}</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer({ hero, contact }) {
  return (
    <footer>
      <div className="footer-watermark" aria-hidden="true">{hero.brand_name}</div>
      <div className="container footer-content" style={{ position: 'relative', zIndex: 10 }}>
        <div className="footer-main-grid">
          <div className="footer-left">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="footer-available" style={{ color: '#bbf7d0', background: 'rgba(22,163,74,0.15)', borderColor: 'rgba(34,197,94,0.35)' }}>
                <span className="ping" style={{ '--ping-color': '#22c55e' }} />
                {hero.badge_text}
              </div>
              <h2 className="footer-headline">
                Let's make something <br />
                <span style={{ color: '#737373' }}>amazing together.</span>
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href={`mailto:${contact.email}`} className="footer-email-link group">
                <span>{contact.email}</span>
              </a>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-links-grid">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h4 className="footer-col-title">Menu</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {['home','about','projects','contact'].map(s => (
                    <li key={s}><a href={`#${s}`} className="footer-nav-link" style={{ textTransform: 'capitalize' }}>{s}</a></li>
                  ))}
                </ul>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h4 className="footer-col-title">Socials</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { label: 'GitHub', href: contact.github_url },
                    { label: 'LinkedIn', href: contact.linkedin_url },
                    { label: 'Instagram', href: contact.instagram_url },
                  ].filter(s => s.href).map(s => (
                    <li key={s.label}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" className="footer-social-link group">
                        {s.label} <ArrowUpRight className="footer-social-arrow" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span style={{ fontSize: '1.875rem', fontWeight: 700, letterSpacing: '-0.04em' }}>{hero.brand_name}</span>
              <p style={{ fontSize: '0.875rem', color: '#737373', maxWidth: '20rem' }}>Crafting digital experiences with precision and passion.</p>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', marginBottom: '1.5rem', background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.4)', borderRadius: '100px', padding: '0.375rem 0.875rem' }}>
            <span style={{ position: 'relative', display: 'inline-flex', width: '0.5rem', height: '0.5rem' }}>
              <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#16a34a', opacity: 0.6, animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite' }} />
              <span style={{ position: 'relative', width: '0.5rem', height: '0.5rem', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            </span>
            {hero.badge_text}
          </span>
            <p style={{ fontSize: '0.75rem', color: '#525252' }}>© {new Date().getFullYear()} M Andika Andriansyah. All rights reserved.</p>
          </div>
          <a href="#home" className="back-top" aria-label="Back to top">
            <div className="back-top-circle" style={{ position: 'relative' }}>
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
              <svg className="spin-text" viewBox="0 0 100 100">
                <defs><path id="circle-path" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" /></defs>
                <text fontSize="10" fontWeight="700" letterSpacing="3" fill="white" style={{ textTransform: 'uppercase' }}>
                  <textPath href="#circle-path" startOffset="0%">Back to Top • Back to Top • Back to Top •</textPath>
                </text>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── ROOT ────────────────────────────────────────────────────────────────────
export default function Portfolio({ hero, about, contact, experiences, projects, skills, certificates }) {
  useGSAPAnimations();
  return (
    <>
      <Navbar brandName={hero.brand_name} />
      <main>
        <Hero data={hero} />
        <About data={about} />
        <Experience data={experiences} />
        <Skills data={skills} />
        <Projects data={projects} />
        <Certificates data={certificates} />
        <Contact data={contact} />
      </main>
      <Footer hero={hero} contact={contact} />
      <Lightbox />
    </>
  );
}
