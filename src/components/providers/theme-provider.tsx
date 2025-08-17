'use client';

import React, { useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import theme from '../../theme/theme';
import ParallaxProvider from './parallax-provider';
import EmotionRegistry from './emotion-registry';
import { validateBrandColors } from '@/utils/accessibility';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Validate color contrast on mount (development only)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const validation = validateBrandColors();
      
      // Log validation results
      console.log('✅ Brand color contrast validation:', validation);
    }
  }, []);

  return (
    <EmotionRegistry>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <ParallaxProvider>
          {children}
        </ParallaxProvider>
      </MuiThemeProvider>
    </EmotionRegistry>
  );
}