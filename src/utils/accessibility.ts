/**
 * Accessibility utilities for color contrast and motion preferences
 */

// WCAG AA contrast ratio requirement is 4.5:1 for normal text, 3:1 for large text
const WCAG_AA_NORMAL = 4.5;
const WCAG_AA_LARGE = 3.0;

/**
 * Convert hex color to RGB values
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Calculate relative luminance of a color
 */
function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors
 */
export function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return 0;
  
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Check if color combination meets WCAG AA standards
 */
export function meetsWCAGAA(
  foreground: string,
  background: string,
  isLargeText = false
): boolean {
  const ratio = getContrastRatio(foreground, background);
  const threshold = isLargeText ? WCAG_AA_LARGE : WCAG_AA_NORMAL;
  return ratio >= threshold;
}

/**
 * Validate all brand color combinations
 */
export function validateBrandColors() {
  const brandColors = {
    midnightIndigo: '#2E2A5E',
    electricBlue: '#3DA9FC',
    seaTeal: '#2CB9B0',
    coralPop: '#FF7A59',
    backgroundDefault: '#0B0F1A',
    backgroundPaper: '#11162A',
    textPrimary: '#F6F7FB',
    textSecondary: '#C6CBDF',
    borders: '#21263A',
  };

  const results = {
    primaryTextOnDefault: meetsWCAGAA(
      brandColors.textPrimary,
      brandColors.backgroundDefault
    ),
    primaryTextOnPaper: meetsWCAGAA(
      brandColors.textPrimary,
      brandColors.backgroundPaper
    ),
    secondaryTextOnDefault: meetsWCAGAA(
      brandColors.textSecondary,
      brandColors.backgroundDefault
    ),
    secondaryTextOnPaper: meetsWCAGAA(
      brandColors.textSecondary,
      brandColors.backgroundPaper
    ),
    electricBlueOnDefault: meetsWCAGAA(
      brandColors.electricBlue,
      brandColors.backgroundDefault
    ),
    seaTealOnDefault: meetsWCAGAA(
      brandColors.seaTeal,
      brandColors.backgroundDefault
    ),
    coralPopOnDefault: meetsWCAGAA(
      brandColors.coralPop,
      brandColors.backgroundDefault
    ),
  };

  return results;
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Create a media query listener for reduced motion preference
 */
export function createReducedMotionListener(
  callback: (prefersReduced: boolean) => void
): () => void {
  if (typeof window === 'undefined') return () => {};
  
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const handler = (e: MediaQueryListEvent) => callback(e.matches);
  
  mediaQuery.addEventListener('change', handler);
  
  // Return cleanup function
  return () => mediaQuery.removeEventListener('change', handler);
}

/**
 * Get animation configuration based on motion preference
 */
export function getAnimationConfig(prefersReduced?: boolean) {
  const shouldReduce = prefersReduced ?? prefersReducedMotion();
  
  return {
    duration: shouldReduce ? 0 : 0.6,
    ease: shouldReduce ? 'linear' : 'easeOut',
    staggerDelay: shouldReduce ? 0 : 0.1,
    parallaxStrength: shouldReduce ? 0 : 1,
  };
}

/**
 * Focus management utilities
 */
export const focusUtils = {
  /**
   * Trap focus within an element
   */
  trapFocus(element: HTMLElement): () => void {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    element.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => element.removeEventListener('keydown', handleTabKey);
  },

  /**
   * Announce content to screen readers
   */
  announce(message: string, priority: 'polite' | 'assertive' = 'polite') {
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', priority);
    announcer.setAttribute('aria-atomic', 'true');
    announcer.style.position = 'absolute';
    announcer.style.left = '-10000px';
    announcer.style.width = '1px';
    announcer.style.height = '1px';
    announcer.style.overflow = 'hidden';
    
    document.body.appendChild(announcer);
    announcer.textContent = message;
    
    setTimeout(() => {
      document.body.removeChild(announcer);
    }, 1000);
  },
};