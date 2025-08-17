'use client';

import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Navbar from '@/components/navigation/navbar';
import { useAccessibility } from '@/hooks/use-accessibility';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { announce } = useAccessibility();

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme-mode');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  // Handle theme toggle
  const handleThemeToggle = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme-mode', newMode ? 'dark' : 'light');
    announce(`Switched to ${newMode ? 'dark' : 'light'} mode`);
    
    // Update document class for theme switching
    document.documentElement.classList.toggle('dark', newMode);
  };

  // Apply theme class on mount
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      {/* Navbar */}
      <Navbar onThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} />
      
      {/* Main content area */}
      <Box
        component="main"
        id="main-content"
        tabIndex={-1}
        sx={{
          minHeight: '100vh',
          pt: { xs: 8, sm: 9 }, // Account for navbar height
          position: 'relative',
          outline: 'none',
        }}
        role="main"
        aria-label="Main content"
      >
        {children}
      </Box>
      
      {/* ARIA live region for announcements */}
      <Box
        id="aria-live-region"
        aria-live="polite"
        aria-atomic="true"
        sx={{
          position: 'absolute',
          left: -10000,
          width: 1,
          height: 1,
          overflow: 'hidden',
        }}
      />
      
      {/* Screen reader only content */}
      <Box
        component="div"
        sx={{
          position: 'absolute',
          left: -10000,
          width: 1,
          height: 1,
          overflow: 'hidden',
        }}
      >
        <h1>Bitspark Solutions - Enterprise Systems and Integrations</h1>
        <p>
          Navigate through our solutions for ERP, CRM, e-commerce, and banking systems
          with deep payments integrations for garments, logistics, and fintech industries.
        </p>
      </Box>
    </>
  );
}