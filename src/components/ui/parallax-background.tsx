'use client';

import React from 'react';
import { Box, useTheme } from '@mui/material';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { getAnimationConfig, prefersReducedMotion } from '@/utils/accessibility';

interface ParallaxBackgroundProps {
  variant?: 'geometric' | 'dots' | 'waves' | 'grid';
  intensity?: 'subtle' | 'medium' | 'strong';
  color?: 'primary' | 'secondary' | 'accent';
  opacity?: number;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  variant = 'geometric',
  intensity = 'medium',
  color = 'primary',
  opacity = 0.1,
}) => {
  const theme = useTheme();
  const shouldReduceMotion = prefersReducedMotion();
  const animConfig = getAnimationConfig(shouldReduceMotion);
  
  const getColor = () => {
    switch (color) {
      case 'primary':
        return theme.palette.primary.main;
      case 'secondary':
        return theme.palette.secondary.main;
      case 'accent':
        return '#FF7A59'; // Coral Pop
      default:
        return theme.palette.primary.main;
    }
  };
  
  const getIntensityValues = () => {
    const baseValues = {
      subtle: { speed: [-5, 5], scale: [0.8, 1.2] },
      medium: { speed: [-15, 15], scale: [0.6, 1.4] },
      strong: { speed: [-25, 25], scale: [0.4, 1.6] },
    };
    
    const values = baseValues[intensity] || baseValues.medium;
    
    // Apply parallax strength from animation config
    return {
      speed: values.speed.map(s => s * animConfig.parallaxStrength),
      scale: values.scale,
    };
  };
  
  const { speed, scale } = getIntensityValues();
  const baseColor = getColor();
  
  const renderGeometric = () => (
    <>
      {/* Layer 1: Large triangles */}
      <Parallax speed={shouldReduceMotion ? 0 : speed[0] as number} scale={scale as [number, number]}>
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: opacity, rotate: shouldReduceMotion ? 0 : 360 }}
          transition={{ duration: shouldReduceMotion ? 0 : 60, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '200px',
            height: '200px',
            background: `linear-gradient(45deg, ${baseColor}20, transparent)`,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            filter: 'blur(1px)',
          }}
        />
      </Parallax>
      
      {/* Layer 2: Medium circles */}
      <Parallax speed={shouldReduceMotion ? 0 : speed[1] as number} scale={scale as [number, number]}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: opacity * 0.7, scale: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 8, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${baseColor}15, transparent)`,
            filter: 'blur(2px)',
          }}
        />
      </Parallax>
      
      {/* Layer 3: Small hexagons */}
      <Parallax speed={shouldReduceMotion ? 0 : (speed[0] as number) * 0.5} scale={scale as [number, number]}>
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: opacity * 0.5, rotate: shouldReduceMotion ? 0 : -180 }}
          transition={{ duration: shouldReduceMotion ? 0 : 40, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            top: '30%',
            right: '60%',
            width: '80px',
            height: '80px',
            background: `${baseColor}10`,
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
          }}
        />
      </Parallax>
    </>
  );
  
  const renderDots = () => (
    <>
      {Array.from({ length: 20 }).map((_, i) => (
        <Parallax
          key={i}
          speed={shouldReduceMotion ? 0 : ((speed[0] as number) + (i % 3) * 5)}
          scale={scale as [number, number]}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: opacity * (0.3 + (i % 3) * 0.2), scale: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : (2 + (i % 3)),
              repeat: Infinity,
              repeatType: 'reverse',
              delay: shouldReduceMotion ? 0 : (i * 0.1),
            }}
            style={{
              position: 'absolute',
              top: `${10 + (i % 5) * 20}%`,
              left: `${5 + (i % 4) * 25}%`,
              width: `${8 + (i % 3) * 4}px`,
              height: `${8 + (i % 3) * 4}px`,
              borderRadius: '50%',
              background: baseColor,
              filter: 'blur(0.5px)',
            }}
          />
        </Parallax>
      ))}
    </>
  );
  
  const renderWaves = () => (
    <>
      {/* Wave 1 */}
      <Parallax speed={shouldReduceMotion ? 0 : speed[0] as number} scale={scale as [number, number]}>
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: shouldReduceMotion ? '-100%' : '100vw' }}
          transition={{ duration: shouldReduceMotion ? 0 : 20, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            top: '20%',
            left: 0,
            width: '200%',
            height: '100px',
            background: `linear-gradient(90deg, transparent, ${baseColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}, transparent)`,
            borderRadius: '50px',
            transform: 'rotate(-5deg)',
            filter: 'blur(3px)',
          }}
        />
      </Parallax>
      
      {/* Wave 2 */}
      <Parallax speed={shouldReduceMotion ? 0 : speed[1] as number} scale={scale as [number, number]}>
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: shouldReduceMotion ? '100vw' : '-100%' }}
          transition={{ duration: shouldReduceMotion ? 0 : 25, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            top: '70%',
            left: 0,
            width: '200%',
            height: '80px',
            background: `linear-gradient(90deg, transparent, ${baseColor}${Math.floor(opacity * 0.5 * 255).toString(16).padStart(2, '0')}, transparent)`,
            borderRadius: '40px',
            transform: 'rotate(3deg)',
            filter: 'blur(2px)',
          }}
        />
      </Parallax>
    </>
  );
  
  const renderGrid = () => (
    <Parallax speed={shouldReduceMotion ? 0 : speed[0] as number} scale={scale as [number, number]}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: opacity * 0.3 }}
        transition={{ duration: shouldReduceMotion ? 0 : 2 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(${baseColor}20 1px, transparent 1px),
            linear-gradient(90deg, ${baseColor}20 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          filter: 'blur(0.5px)',
        }}
      />
    </Parallax>
  );
  
  const renderVariant = () => {
    switch (variant) {
      case 'geometric':
        return renderGeometric();
      case 'dots':
        return renderDots();
      case 'waves':
        return renderWaves();
      case 'grid':
        return renderGrid();
      default:
        return renderGeometric();
    }
  };
  
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {renderVariant()}
    </Box>
  );
};

export default ParallaxBackground;