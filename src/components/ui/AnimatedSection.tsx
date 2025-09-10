import React, { useRef, useEffect } from 'react';
import { Box, BoxProps } from '@mui/material';
import { motion, useInView, useAnimation } from 'framer-motion';

interface AnimatedSectionProps extends BoxProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const animationVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  slideInUp: {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  },
};

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  once = true,
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: threshold, 
    once,
    margin: '-50px 0px -50px 0px'
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isInView, controls, once]);

  return (
    <Box ref={ref} {...props}>
      <motion.div
        variants={animationVariants[animation]}
        initial="hidden"
        animate={controls}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
        }}
      >
        {children}
      </motion.div>
    </Box>
  );
};
