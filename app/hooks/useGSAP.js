'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export function useGSAPAnimations() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const isMobile = window.innerWidth < 768;

    // ── HERO: animate in on first load ──────────────────────────────────────
    gsap.set(['#hero-title', '#hero-subtitle', '#hero-cta'], { autoAlpha: 0, y: 40 });
    const heroTl = gsap.timeline({ delay: 0.1 });
    heroTl
      .to('#hero-title',    { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out' })
      .to('#hero-subtitle', { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
      .to('#hero-cta',      { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4');

    if (!isMobile) {
      gsap.set('.hero-float-icon', { autoAlpha: 0, scale: 0 });
      gsap.to('.hero-float-icon', {
        autoAlpha: 1, scale: 1, duration: 0.5, stagger: 0.12,
        ease: 'back.out(1.7)', delay: 0.5,
      });
    }

    // Navbar scroll handled by React state in Navbar.js

    // ── SCROLL-IN animations for sections (safe: start after DOM settled) ───
    const wait = isMobile ? 400 : 200;
    setTimeout(() => {
      const startV = isMobile ? 'top 100%' : 'top 82%';
      const startC = isMobile ? 'top 105%' : 'top 88%';
      const ta     = 'play none none none';

      const fly = (sel, vars, trigger) => {
        const els = document.querySelectorAll(sel);
        if (!els.length) return;
        els.forEach((el, i) => {
          gsap.fromTo(el,
            { autoAlpha: 0, y: vars.y ?? 0, x: vars.x ?? 0, scale: vars.scale ?? 1 },
            {
              autoAlpha: 1, y: 0, x: 0, scale: 1,
              duration: vars.dur ?? 0.7,
              ease: 'power3.out',
              delay: vars.stagger ? i * vars.stagger : (vars.delay ?? 0),
              scrollTrigger: { trigger: trigger ?? el, start: vars.start ?? startV, toggleActions: ta },
            }
          );
        });
      };

      // About
      fly('#about .about-title',        { x: -60, dur: 0.8 },          '#about');
      fly('#about .about-name',         { x: -50, dur: 0.7, delay: 0.1 }, '#about');
      fly('#about .about-description',  { y: 30,  dur: 0.8, delay: 0.2 }, '#about');
      fly('#about .about-image-wrapper',{ scale: 0.92, dur: 1 });

      // Stats
      document.querySelectorAll('.stat-number').forEach(el => {
        const raw = el.textContent.trim();
        const num = parseFloat(raw);
        const sfx = raw.replace(/[\d.]/g, '');
        const dec = raw.includes('.');
        if (isNaN(num)) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: num, duration: 1.5, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: startV, toggleActions: ta },
          onUpdate: () => { el.textContent = (dec ? obj.val.toFixed(2) : Math.round(obj.val)) + sfx; },
        });
      });

      // Experience
      fly('.exp-item', { x: -50, dur: 0.65, stagger: 0.08, start: startC });

      // Skills
      fly('#skills .skills-heading', { y: 40, dur: 0.8 }, '#skills');
      fly('.skill-card',  { y: 60, scale: 0.95, dur: 0.6, stagger: 0.07, start: startC });

      // Projects
      fly('#projects .projects-heading', { y: 40, dur: 0.8 }, '#projects');
      fly('.project-card', { y: 60, dur: 0.6, stagger: 0.07, start: startC });

      // Certificates
      fly('.cert-card', { y: 50, dur: 0.6, stagger: 0.08, start: startC });

      // Contact + Footer
      fly('#contact .contact-heading', { y: 40, dur: 0.8 }, '#contact');
      fly('#contact .contact-info',    { x: -50, dur: 0.7 }, '#contact');
      fly('#contact .contact-form',    { x: 50,  dur: 0.7, delay: 0.15 }, '#contact');
      fly('.footer-content',           { y: 50,  dur: 0.8 }, 'footer');

      ScrollTrigger.refresh();
    }, wait);

    // ── MAGNETIC BUTTONS ────────────────────────────────────────────────────
    if (!isMobile) {
      document.querySelectorAll('.magnetic-btn').forEach(btn => {
        btn.addEventListener('mousemove', e => {
          const r = btn.getBoundingClientRect();
          gsap.to(btn, { x: (e.clientX - r.left - r.width / 2) * 0.3, y: (e.clientY - r.top - r.height / 2) * 0.3, duration: 0.4, ease: 'power2.out' });
        });
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1,0.3)' });
        });
      });
    }

    // ── SMOOTH SCROLL ───────────────────────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        gsap.to(window, { scrollTo: { y: target, offsetY: 0 }, duration: isMobile ? 0.8 : 1.2, ease: 'power3.inOut' });
      });
    });

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);
}
