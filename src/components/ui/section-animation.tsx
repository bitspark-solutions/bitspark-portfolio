'use client';

import React, { useEffect, useState } from 'react';
import { motion, Variants, useInView, Easing } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { getAnimationConfig, createReducedMotionListener } from '@/utils/accessibility';

interface SectionAnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  stagger?: boolean;
  staggerDelay?: number;
}

interface StaggeredAnimationProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

// Hook to track motion preferences
function useReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    // Set initial value
    if (typeof window !== 'undefined') {
      setPrefersReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }

    // Listen for changes
    const cleanup = createReducedMotionListener(setPrefersReduced);
    return cleanup;
  }, []);

  return prefersReduced;
}

// Create variants based on motion preference
function createSectionVariants(prefersReduced: boolean): Variants {
  const config = getAnimationConfig(prefersReduced);
  
  return {
    hidden: {
      opacity: prefersReduced ? 1 : 0,
      y: prefersReduced ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: config.duration,
        ease: config.ease as Easing,
      },
    },
  };
}

function createStaggerVariants(prefersReduced: boolean): {
  container: Variants;
  item: Variants;
} {
  const config = getAnimationConfig(prefersReduced);
  
  return {
    container: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: config.staggerDelay,
        },
      },
    },
    item: {
      hidden: {
        opacity: prefersReduced ? 1 : 0,
        y: prefersReduced ? 0 : 16,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: config.duration * 0.67,
          ease: config.ease as Easing,
        },
      },
    },
  };
}

export function SectionAnimation({
  children,
  delay = 0,
  className = ''
}: SectionAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();
  const variants = createSectionVariants(prefersReducedMotion);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ transitionDelay: `${delay}s` }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggeredAnimation({
  children,
  className = ''
}: StaggeredAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();
  const { container, item } = createStaggerVariants(prefersReducedMotion);

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}