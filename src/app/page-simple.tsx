import React from 'react';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #2196f3 0%, #212121 100%)', color: 'white' }}>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Bitspark Solutions</h1>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', opacity: 0.9 }}>Scalable Fintech Platforms & Secure API Integrations</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
          We build secure, scalable fintech solutions that power the future of finance. 
          From payment processing to digital banking, we deliver enterprise-grade solutions 
          with uncompromising security and performance.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{
            padding: '12px 24px',
            background: 'linear-gradient(45deg, #42a5f5 30%, #2196f3 90%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: 600,
            cursor: 'pointer'
          }}>
            Get Started
          </button>
          <button style={{
            padding: '12px 24px',
            background: 'transparent',
            color: 'white',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: 600,
            cursor: 'pointer'
          }}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
