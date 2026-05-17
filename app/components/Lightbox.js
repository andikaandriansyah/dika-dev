'use client';
import { useState, useEffect } from 'react';

export default function Lightbox() {
  const [state, setState] = useState({ open: false, src: '', caption: '' });

  useEffect(() => {
    window.openLightbox = (src, caption) => {
      setState({ open: true, src, caption });
      document.body.style.overflow = 'hidden';
    };
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const closeLightbox = () => {
    setState(s => ({ ...s, open: false }));
    document.body.style.overflow = '';
  };

  if (!state.open) return null;

  return (
    <div id="lightbox" className="open" onClick={closeLightbox}>
      <button className="lightbox-close" onClick={closeLightbox}>
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        Close (ESC)
      </button>
      <div onClick={e => e.stopPropagation()} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.25rem' }}>
        <img src={state.src} alt={state.caption} />
        {state.caption && <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem', textAlign: 'center', fontWeight: 500 }}>{state.caption}</p>}
      </div>
    </div>
  );
}
