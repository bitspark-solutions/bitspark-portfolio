'use client';

import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useAccessibility } from '@/hooks/use-accessibility';
import { performanceMonitor, getPerformanceConfig, useIntersectionObserver } from '@/utils/performance';

// Lazy load the heavy 3D component
const IntegrationRing = React.lazy(() => import('./integration-ring'));

// Fallback component for low-performance devices
const IntegrationRingFallback: React.FC<{ logos: string[] }> = ({ logos }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, rgba(62, 169, 252, 0.1) 0%, rgba(44, 185, 176, 0.1) 100%)',
        borderRadius: '50%',
        border: '2px solid rgba(62, 169, 252, 0.3)'
      }}
    >
      {/* Central hub */}
      <Box
        sx={{
          position: 'absolute',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #3DA9FC 0%, #2CB9B0 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(62, 169, 252, 0.3)'
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            fontWeight: 600,
            fontSize: '0.875rem',
            textAlign: 'center'
          }}
        >
          BitSpark
        </Typography>
      </Box>
      
      {/* Logo positions around the circle */}
      {logos.map((logo, index) => {
        const angle = (index * 360) / logos.length;
        const radius = 140;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        
        return (
          <motion.div
            key={logo}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              width: '60px',
              height: '60px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: 'white',
                fontWeight: 500,
                fontSize: '0.75rem',
                textAlign: 'center'
              }}
            >
              {logo}
            </Typography>
          </motion.div>
        );
      })}
      
      {/* Connection lines */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      >
        {logos.map((_, index) => {
          const angle = (index * 360) / logos.length;
          const radius = 140;
          const x1 = 200 + Math.cos((angle * Math.PI) / 180) * 60; // Center to inner
          const y1 = 200 + Math.sin((angle * Math.PI) / 180) * 60;
          const x2 = 200 + Math.cos((angle * Math.PI) / 180) * radius; // Inner to outer
          const y2 = 200 + Math.sin((angle * Math.PI) / 180) * radius;
          
          return (
            <motion.line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(62, 169, 252, 0.4)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
            />
          );
        })}
      </svg>
    </Box>
  );
};

// Loading component
const IntegrationRingLoading: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, rgba(62, 169, 252, 0.05) 0%, rgba(44, 185, 176, 0.05) 100%)'
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        style={{
          width: 32,
          height: 32,
          border: '3px solid transparent',
          borderTop: '3px solid #3DA9FC',
          borderRadius: '50%'
        }}
      />
    </Box>
  );
};

interface OptimizedIntegrationRingProps {
  logos?: string[];
  className?: string;
}

export const OptimizedIntegrationRing: React.FC<OptimizedIntegrationRingProps> = ({ 
  logos = ['Adyen', 'Stripe', 'Unit.co', 'SSLCommerz'],
  className 
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(containerRef, { threshold: 0.1 });
  const { shouldReduceMotion } = useAccessibility();
  
  const [performanceConfig, setPerformanceConfig] = React.useState(getPerformanceConfig());
  const [shouldRender3D, setShouldRender3D] = React.useState(true);
  
  // Monitor performance and adjust accordingly
  React.useEffect(() => {
    const unsubscribe = performanceMonitor.subscribe((metrics) => {
      const config = getPerformanceConfig();
      setPerformanceConfig(config);
      
      // Disable 3D if performance is too low
      if (metrics.fps < 20 || metrics.isLowPerformance) {
        setShouldRender3D(false);
      }
    });
    
    return unsubscribe;
  }, []);
  
  // Don't render 3D if reduced motion is preferred or performance is low
  const render3D = useMemo(() => {
    return !shouldReduceMotion && shouldRender3D && isInView;
  }, [shouldReduceMotion, shouldRender3D, isInView]);
  
  if (!render3D) {
    return (
      <Box ref={containerRef} className={className} sx={{ position: 'relative' }}>
        <IntegrationRingFallback logos={logos} />
      </Box>
    );
  }
  
  return (
    <Box ref={containerRef} className={className} sx={{ position: 'relative', height: '400px' }}>
      <Suspense fallback={<IntegrationRingLoading />}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          dpr={performanceConfig.renderScale}
          performance={{ min: 0.5 }}
          gl={{
            preserveDrawingBuffer: false,
            antialias: performanceConfig.animationQuality !== 'low',
            alpha: true,
            powerPreference: 'high-performance'
          }}
        >
          <IntegrationRing 
            logos={logos}
            animationQuality={performanceConfig.animationQuality as 'low' | 'medium' | 'high'}
            enablePostProcessing={performanceConfig.enablePostProcessing}
          />
        </Canvas>
      </Suspense>
    </Box>
  );
};

export default OptimizedIntegrationRing;