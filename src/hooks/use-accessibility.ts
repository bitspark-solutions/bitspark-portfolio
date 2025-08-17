'use client';

import { useEffect, useRef, useState } from 'react';
import { 
  prefersReducedMotion, 
  getAnimationConfig, 
  createReducedMotionListener 
} from '@/utils/accessibility';
import { 
  FocusTrap, 
  RovingTabIndex, 
  handleEscapeKey, 
  announceToScreenReader 
} from '@/utils/keyboard-navigation';

/**
 * Hook for managing reduced motion preferences
 */
export function useReducedMotion() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    // Set initial value
    setShouldReduceMotion(prefersReducedMotion());

    // Listen for changes
    const cleanup = createReducedMotionListener((shouldReduce) => {
      setShouldReduceMotion(shouldReduce);
    });

    return cleanup;
  }, []);

  return {
    shouldReduceMotion,
    animationConfig: getAnimationConfig()
  };
}

/**
 * Hook for managing focus trap in modals/overlays
 */
export function useFocusTrap(isActive: boolean) {
  const containerRef = useRef<HTMLElement>(null);
  const focusTrapRef = useRef<FocusTrap | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (isActive) {
      focusTrapRef.current = new FocusTrap(containerRef.current);
      focusTrapRef.current.activate();
    } else {
      focusTrapRef.current?.deactivate();
      focusTrapRef.current = null;
    }

    return () => {
      focusTrapRef.current?.deactivate();
    };
  }, [isActive]);

  return containerRef;
}

/**
 * Hook for managing roving tabindex navigation
 */
export function useRovingTabIndex(
  itemSelector: string,
  orientation: 'horizontal' | 'vertical' | 'both' = 'both'
) {
  const containerRef = useRef<HTMLElement>(null);
  const rovingTabIndexRef = useRef<RovingTabIndex | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    rovingTabIndexRef.current = new RovingTabIndex(
      containerRef.current,
      itemSelector,
      orientation
    );

    return () => {
      rovingTabIndexRef.current?.destroy();
    };
  }, [itemSelector, orientation]);

  return containerRef;
}

/**
 * Hook for handling escape key events
 */
export function useEscapeKey(callback: () => void, isActive = true) {
  useEffect(() => {
    if (!isActive) return;

    const cleanup = handleEscapeKey(callback);
    return cleanup;
  }, [callback, isActive]);
}

/**
 * Hook for announcing content to screen readers
 */
export function useScreenReaderAnnouncement() {
  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    announceToScreenReader(message, priority);
  };

  return { announce };
}

/**
 * Hook for managing ARIA live regions
 */
export function useAriaLiveRegion(initialMessage = '') {
  const [message, setMessage] = useState(initialMessage);
  const [priority, setPriority] = useState<'polite' | 'assertive'>('polite');

  const announce = (newMessage: string, newPriority: 'polite' | 'assertive' = 'polite') => {
    setMessage(newMessage);
    setPriority(newPriority);
  };

  const clear = () => {
    setMessage('');
  };

  return {
    message,
    priority,
    announce,
    clear,
    ariaLiveProps: {
      'aria-live': priority,
      'aria-atomic': true,
      className: 'sr-only'
    }
  };
}

/**
 * Hook for managing keyboard navigation state
 */
export function useKeyboardNavigation() {
  const [isKeyboardUser, setIsKeyboardUser] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        setIsKeyboardUser(true);
      }
    };

    const handleMouseDown = () => {
      setIsKeyboardUser(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return { isKeyboardUser };
}

/**
 * Comprehensive accessibility hook that combines multiple features
 */
export function useAccessibility(options: {
  reducedMotion?: boolean;
  focusTrap?: boolean;
  escapeKey?: () => void;
  announcements?: boolean;
} = {}) {
  const { shouldReduceMotion, animationConfig } = useReducedMotion();
  const { announce } = useScreenReaderAnnouncement();
  const { isKeyboardUser } = useKeyboardNavigation();
  
  const focusTrapRef = useFocusTrap(options.focusTrap || false);
  
  useEscapeKey(
    options.escapeKey || (() => {}), 
    Boolean(options.escapeKey)
  );

  return {
    shouldReduceMotion: options.reducedMotion !== false ? shouldReduceMotion : false,
    animationConfig,
    announce: options.announcements !== false ? announce : () => {},
    isKeyboardUser,
    focusTrapRef,
    // Utility classes for conditional styling
    accessibilityClasses: {
      reducedMotion: shouldReduceMotion ? 'motion-reduce' : '',
      keyboardUser: isKeyboardUser ? 'keyboard-user' : 'mouse-user',
    }
  };
}