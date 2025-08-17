'use client';

import { ParallaxProvider as ScrollParallaxProvider } from 'react-scroll-parallax';
import { useEffect, useState } from 'react';

interface ParallaxProviderProps {
  children: React.ReactNode;
}

export default function ParallaxProvider({ children }: ParallaxProviderProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // If user prefers reduced motion, don't use parallax
  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <ScrollParallaxProvider>
      {children}
    </ScrollParallaxProvider>
  );
}