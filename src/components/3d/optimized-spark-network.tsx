'use client';

import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useAccessibility } from '@/hooks/use-accessibility';
import { performanceMonitor, getPerformanceConfig, useIntersectionObserver } from '@/utils/performance';

// Lazy load the heavy 3D component
const SparkNetwork = React.lazy(() => import('./spark-network'));

// Fallback component for low-performance devices
const SparkNetworkFallback: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(62, 169, 252, 0.1) 0%, rgba(44, 185, 176, 0.1) 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 20% 30%, rgba(62, 169, 252, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(44, 185, 176, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 122, 89, 0.2) 0%, transparent 50%)
          `,
          animation: 'pulse 4s ease-in-out infinite'
        },
        '@keyframes pulse': {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 }
        }
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 1
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: 'primary.main',
            opacity: 0.7,
            fontSize: '0.875rem'
          }}
        >
          Interactive Network
        </Typography>
      </Box>
    </Box>
  );
};

// Loading component
const SparkNetworkLoading: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
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
          width: 24,
          height: 24,
          border: '2px solid transparent',
          borderTop: '2px solid #3DA9FC',
          borderRadius: '50%'
        }}
      />
    </Box>
  );
};

interface OptimizedSparkNetworkProps {
  className?: string;
}

export const OptimizedSparkNetwork: React.FC<OptimizedSparkNetworkProps> = ({ className }) => {
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
      <Box ref={containerRef} className={className} sx={{ position: 'relative', height: '100%' }}>
        <SparkNetworkFallback />
      </Box>
    );
  }
  
  return (
    <Box ref={containerRef} className={className} sx={{ position: 'relative', height: '100%' }}>
      <Suspense fallback={<SparkNetworkLoading />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          dpr={performanceConfig.renderScale}
          performance={{ min: 0.5 }}
          gl={{
            preserveDrawingBuffer: false,
            antialias: performanceConfig.animationQuality !== 'low',
            alpha: true,
            powerPreference: 'high-performance'
          }}
        >
          <SparkNetwork 
            nodeCount={performanceConfig.particleCount}
            animationQuality={performanceConfig.animationQuality as 'low' | 'medium' | 'high'}
            enablePostProcessing={performanceConfig.enablePostProcessing}
          />
        </Canvas>
      </Suspense>
    </Box>
  );
};

export default OptimizedSparkNetwork;