'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ brandName = 'Andika.' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll(); // run once on mount
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#certificates', label: 'Certificates' },
  ];

  return (
    <>
      <header
        id="navbar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.4s ease',
          padding: scrolled ? '0.75rem 0' : '1.5rem 0',
          backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a
            href="#home"
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              letterSpacing: '-0.05em',
              textDecoration: 'none',
              transition: 'color 0.3s',
              color: scrolled ? '#000' : '#fff',
              position: 'relative',
              zIndex: 50,
            }}
          >
            {brandName}
          </a>

          {/* Desktop Nav */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  color: scrolled ? '#525252' : 'rgba(255,255,255,0.7)',
                  padding: '0.25rem 0',
                }}
                onMouseEnter={e => e.target.style.color = scrolled ? '#000' : '#fff'}
                onMouseLeave={e => e.target.style.color = scrolled ? '#525252' : 'rgba(255,255,255,0.7)'}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem',
                fontWeight: 500,
                height: '2.25rem',
                borderRadius: '100px',
                padding: '0 1.5rem',
                textDecoration: 'none',
                transition: 'all 0.2s',
                marginLeft: '0.5rem',
                background: scrolled ? '#000' : '#fff',
                color: scrolled ? '#fff' : '#000',
                border: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = scrolled ? '#262626' : '#e5e5e5'; }}
              onMouseLeave={e => { e.currentTarget.style.background = scrolled ? '#000' : '#fff'; }}
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="mobile-btn-wrap">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                padding: '0.5rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: scrolled ? '#000' : '#fff',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {menuOpen
                ? <X style={{ height: '1.5rem', width: '1.5rem' }} />
                : <Menu style={{ height: '1.5rem', width: '1.5rem' }} />
              }
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={menuOpen ? 'open' : ''}
        style={{
          position: 'fixed', inset: 0, zIndex: 40,
          background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(12px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem',
          opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s',
        }}
      >
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{ fontSize: '1.75rem', fontWeight: 500, color: '#fff', textDecoration: 'none' }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: '1rem', fontSize: '1rem', fontWeight: 500,
            background: '#fff', color: '#000', textDecoration: 'none',
            padding: '0.75rem 2rem', borderRadius: '100px',
          }}
        >
          Let&apos;s Talk
        </a>
      </div>
    </>
  );
}
