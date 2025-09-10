'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Industries } from '@/components/sections/Industries';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Process } from '@/components/sections/Process';
import { TechStack } from '@/components/sections/TechStack';
import { Insights } from '@/components/sections/Insights';
import { OpenSource } from '@/components/sections/OpenSource';
import { Team } from '@/components/sections/Team';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #2196f3 0%, #212121 100%)', color: 'white' }}>
      <Header />
      <div style={{ padding: '2rem', textAlign: 'center', paddingTop: '6rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Bitspark Solutions</h1>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', opacity: 0.9 }}>Scalable Fintech Platforms & Secure API Integrations</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
          We build secure, scalable fintech solutions that power the future of finance. 
          From payment processing to digital banking, we deliver enterprise-grade solutions 
          with uncompromising security and performance.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
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
        
        {/* Credibility Bar */}
        <div style={{ 
          display: 'flex', 
          gap: '2rem', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          marginBottom: '2rem',
          opacity: 0.8
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>🔒</span>
            <span>PCI DSS Compliant</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>⚡</span>
            <span>99.9% Uptime</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>🛡️</span>
            <span>SOC 2 Certified</span>
          </div>
        </div>
        
        {/* Key Stats */}
        <div style={{ 
          display: 'flex', 
          gap: '3rem', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          marginTop: '2rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#42a5f5' }}>50+</div>
            <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Projects Delivered</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#42a5f5' }}>99.9%</div>
            <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Client Satisfaction</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#42a5f5' }}>24/7</div>
            <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Support Available</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#42a5f5' }}>100%</div>
            <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Security Compliance</div>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <Services />
      
      {/* About Section */}
      <About />
      
      {/* Industries Section */}
      <Industries />
      
      {/* Case Studies Section */}
      <CaseStudies />
      
      {/* Process Section */}
      <Process />
      
      {/* Tech Stack Section */}
      <TechStack />
      
      {/* Insights Section */}
      <Insights />
      
      {/* Open Source Section */}
      <OpenSource />
      
      {/* Team Section */}
      <Team />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}