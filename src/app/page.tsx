'use client';

import React from 'react';
import Image from 'next/image';
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
      {/* Modern Hero Section */}
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(66, 165, 245, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(33, 150, 243, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
          `,
          zIndex: 1
        }} />
        
        {/* Floating Particles */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '4px',
          height: '4px',
          background: 'rgba(255, 255, 255, 0.6)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite',
          zIndex: 2
        }} />
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '6px',
          height: '6px',
          background: 'rgba(66, 165, 245, 0.8)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse',
          zIndex: 2
        }} />
        <div style={{
          position: 'absolute',
          top: '30%',
          right: '30%',
          width: '3px',
          height: '3px',
          background: 'rgba(255, 255, 255, 0.4)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite',
          zIndex: 2
        }} />

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          zIndex: 3,
          position: 'relative'
        }}>
          {/* Left Content */}
          <div style={{ 
            flex: '1', 
            maxWidth: '600px',
            paddingRight: '2rem'
          }}>
            {/* Logo */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: '2rem' 
            }}>
              <Image 
                src="/logo.png" 
                alt="Bitspark Solutions" 
                width={60}
                height={60}
                style={{ 
                  marginRight: '1rem',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                }} 
              />
              <div>
                <h1 style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 700, 
                  margin: 0,
                  background: 'linear-gradient(45deg, #ffffff 0%, #e3f2fd 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Bitspark Solutions
                </h1>
                <p style={{ 
                  fontSize: '1rem', 
                  margin: 0, 
                  opacity: 0.8,
                  fontWeight: 500
                }}>
                  FINANCIAL TECHNOLOGY EXPERTS
                </p>
              </div>
            </div>

            {/* Main Headline */}
            <h2 style={{ 
              fontSize: '3.5rem', 
              fontWeight: 800, 
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              background: 'linear-gradient(45deg, #ffffff 0%, #e3f2fd 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              SCALABLE
              <br />
              <span style={{ color: '#42a5f5' }}>FINTECH</span>
              <br />
              PLATFORMS
            </h2>

            {/* Description */}
            <p style={{ 
              fontSize: '1.2rem', 
              lineHeight: 1.6,
              marginBottom: '2.5rem',
              opacity: 0.9,
              maxWidth: '500px'
            }}>
              We build secure, scalable fintech solutions that power the future of finance. 
              From payment processing to digital banking, we deliver enterprise-grade solutions 
              with uncompromising security and performance.
            </p>

            {/* CTA Buttons */}
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              marginBottom: '3rem',
              flexWrap: 'wrap'
            }}>
              <button style={{
                padding: '16px 32px',
                background: 'linear-gradient(45deg, #42a5f5 30%, #2196f3 90%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 8px 32px rgba(66, 165, 245, 0.3)',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
              onMouseOver={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.transform = 'translateY(-2px)';
                target.style.boxShadow = '0 12px 40px rgba(66, 165, 245, 0.4)';
              }}
              onMouseOut={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.transform = 'translateY(0)';
                target.style.boxShadow = '0 8px 32px rgba(66, 165, 245, 0.3)';
              }}>
                Get Started
              </button>
              <button style={{
                padding: '16px 32px',
                background: 'transparent',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
              onMouseOver={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                target.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseOut={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                target.style.background = 'transparent';
              }}>
                Learn More
              </button>
            </div>

            {/* Credibility Indicators */}
            <div style={{ 
              display: 'flex', 
              gap: '2rem', 
              flexWrap: 'wrap',
              opacity: 0.8
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.2rem' }}>🔒</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>PCI DSS Compliant</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.2rem' }}>⚡</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>99.9% Uptime</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.2rem' }}>🛡️</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>SOC 2 Certified</span>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Visual */}
          <div style={{ 
            flex: '1', 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            {/* Network/Data Flow Visualization */}
            <div style={{
              width: '400px',
              height: '400px',
              position: 'relative',
              background: 'radial-gradient(circle, rgba(66, 165, 245, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Central Hub */}
              <div style={{
                width: '120px',
                height: '120px',
                background: 'linear-gradient(45deg, #42a5f5 0%, #2196f3 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 40px rgba(66, 165, 245, 0.5)',
                position: 'relative',
                zIndex: 3
              }}>
                <span style={{ 
                  fontSize: '2rem', 
                  fontWeight: 'bold',
                  color: 'white'
                }}>BS</span>
              </div>

              {/* Orbiting Elements */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: '60px',
                    height: '60px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    border: '2px solid rgba(66, 165, 245, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: `rotate(${i * 60}deg) translateX(180px) rotate(-${i * 60}deg)`,
                    animation: `orbit 20s linear infinite`,
                    animationDelay: `${i * 2}s`
                  }}
                >
                  <div style={{
                    width: '8px',
                    height: '8px',
                    background: '#42a5f5',
                    borderRadius: '50%',
                    boxShadow: '0 0 10px rgba(66, 165, 245, 0.8)'
                  }} />
                </div>
              ))}

              {/* Connection Lines */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={`line-${i}`}
                  style={{
                    position: 'absolute',
                    width: '180px',
                    height: '2px',
                    background: 'linear-gradient(90deg, rgba(66, 165, 245, 0.3) 0%, transparent 100%)',
                    transformOrigin: 'left center',
                    transform: `rotate(${i * 60}deg)`,
                    top: '50%',
                    left: '50%',
                    marginTop: '-1px',
                    marginLeft: '60px',
                    animation: `pulse 3s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Key Stats - Bottom */}
        <div style={{ 
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', 
          gap: '4rem', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          zIndex: 3
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#42a5f5' }}>50+</div>
            <div style={{ fontSize: '0.9rem', opacity: 0.8, fontWeight: 500 }}>Projects Delivered</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#42a5f5' }}>99.9%</div>
            <div style={{ fontSize: '0.9rem', opacity: 0.8, fontWeight: 500 }}>Client Satisfaction</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#42a5f5' }}>24/7</div>
            <div style={{ fontSize: '0.9rem', opacity: 0.8, fontWeight: 500 }}>Support Available</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#42a5f5' }}>100%</div>
            <div style={{ fontSize: '0.9rem', opacity: 0.8, fontWeight: 500 }}>Security Compliance</div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(180px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(180px) rotate(-360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
      
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