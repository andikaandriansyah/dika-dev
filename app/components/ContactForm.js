'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const body = JSON.stringify(Object.fromEntries(fd));

    // ── Optimistic UI: tampil sukses LANGSUNG ──────────────────────────────
    setStatus('sent');
    e.target.reset();
    setTimeout(() => setStatus('idle'), 4000);

    // ── Kirim email di background (fire & forget) ──────────────────────────
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    }).catch(() => {
      // Gagal di background — tidak ganggu UX, tapi log di console
      console.error('Background email send failed');
    });
  }

  return (
    <div className="contact-form-card">
      <h2 style={{ marginBottom: '0.5rem', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.04em' }}>
        Send a Message
      </h2>
      <p style={{ marginBottom: '2rem', color: '#737373' }}>
        I usually respond within 24 hours.
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <input
          className="form-input"
          name="name"
          placeholder="Your Name"
          autoComplete="name"
          required
          disabled={status === 'sent'}
        />
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Your Email"
          autoComplete="email"
          required
          disabled={status === 'sent'}
        />
        <textarea
          className="form-input form-textarea"
          name="message"
          placeholder="Your Message"
          rows="5"
          autoComplete="off"
          required
          disabled={status === 'sent'}
        />
        <button
          type="submit"
          className="btn-submit"
          disabled={status === 'sent'}
          style={{
            background: status === 'sent' ? '#16a34a' : '#000',
            transition: 'background 0.3s',
          }}
        >
          {status === 'sent' ? '✓ Message Sent!' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
