import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #2196f3 0%, #212121 100%)',
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h1
          style={{
            fontSize: '8rem',
            fontWeight: 700,
            margin: '0 0 1rem 0',
            background: 'linear-gradient(45deg, #42a5f5 30%, #2196f3 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 600,
            margin: '0 0 1rem 0',
          }}
        >
          Page Not Found
        </h2>

        <p
          style={{
            fontSize: '1.2rem',
            margin: '0 0 2rem 0',
            maxWidth: '600px',
            opacity: 0.9,
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back to building amazing fintech solutions.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: 'linear-gradient(45deg, #42a5f5 30%, #2196f3 90%)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '1.1rem',
            }}
          >
            🏠 Go Home
          </Link>

          <Link
            href="javascript:history.back()"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: 'transparent',
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '1.1rem',
              textDecoration: 'none',
            }}
          >
            ← Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
