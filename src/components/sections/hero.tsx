'use client';

import React from 'react';
import { Container, Typography, Button, Box, Chip } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import heroData from '@/content/hero.json';
import ParallaxBackground from '../ui/parallax-background';
import { SectionAnimation, StaggeredAnimation } from '../ui/section-animation';

// Dynamically import OptimizedSparkNetwork to avoid SSR issues
const OptimizedSparkNetwork = dynamic(() => import('@/components/3d/optimized-spark-network'), {
  ssr: false,
  loading: () => (
    <div style={{ width: '100%', height: '100%', background: 'transparent' }} />
  ),
});

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      type: 'spring' as const,
      stiffness: 220,
      damping: 22,
    },
  },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0B0F1A 0%, #11162A 50%, #2E2A5E 100%)',
      }}
    >
      {/* Multi-layer parallax backgrounds */}
      <ParallaxBackground variant="geometric" intensity="subtle" color="primary" opacity={0.08} />
      <ParallaxBackground variant="dots" intensity="medium" color="secondary" opacity={0.05} />
      <ParallaxBackground variant="grid" intensity="subtle" color="accent" opacity={0.03} />
      
      {/* Parallax Background Layers */}
      <Parallax speed={-20} style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '200px',
            height: '200px',
            background: 'linear-gradient(45deg, #2E2A5E, transparent)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            opacity: 0.3,
          }}
        />
      </Parallax>
      
      <Parallax speed={-15} style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Box
          sx={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            width: '150px',
            height: '150px',
            background: 'linear-gradient(135deg, #3DA9FC, transparent)',
            clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
            opacity: 0.2,
          }}
        />
      </Parallax>

      <Parallax speed={-10} style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Box
          sx={{
            position: 'absolute',
            top: '40%',
            left: '70%',
            width: '100px',
            height: '100px',
            background: 'linear-gradient(90deg, #2CB9B0, transparent)',
            borderRadius: '50%',
            opacity: 0.15,
          }}
        />
      </Parallax>

      {/* Grid Pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(33, 38, 58, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(33, 38, 58, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.5,
          zIndex: 1,
        }}
      />

      <motion.div style={{ y, opacity, width: '100%', zIndex: 2 }}>
        <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
              <Box sx={{ flex: 1 }}>
              <SectionAnimation delay={0.2}>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={itemVariants}>
                    <Typography
                      id="hero-heading"
                      variant="h1"
                      component="h1"
                      sx={{
                        mb: 3,
                        background: 'linear-gradient(135deg, #3DA9FC 0%, #2CB9B0 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 0 30px rgba(61, 169, 252, 0.3)',
                      }}
                    >
                      {heroData.title}
                    </Typography>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <Typography
                      variant="h5"
                      component="p"
                      color="text.secondary"
                      sx={{ mb: 4, lineHeight: 1.6 }}
                    >
                      {heroData.subtitle}
                    </Typography>
                  </motion.div>
                  
                  <motion.div
                    variants={itemVariants}
                    style={{ display: 'flex', gap: 16, marginBottom: 32, flexWrap: 'wrap' }}
                  >
                    {heroData.ctas.map((cta, index) => (
                      <motion.div key={index} variants={buttonVariants} whileHover="hover">
                        <Button
                          variant={cta.variant as 'contained' | 'outlined'}
                          size="large"
                          href={cta.href}
                          sx={{
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: '-100%',
                              width: '100%',
                              height: '100%',
                              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                              transition: 'left 0.5s',
                            },
                            '&:hover::before': {
                              left: '100%',
                            },
                          }}
                        >
                          {cta.label}
                        </Button>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <StaggeredAnimation>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {heroData.highlights.map((highlight, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                        >
                          <Chip
                            label={highlight}
                            variant="outlined"
                            sx={{
                              borderColor: 'primary.main',
                              color: 'primary.main',
                              background: 'rgba(61, 169, 252, 0.1)',
                              backdropFilter: 'blur(10px)',
                            }}
                          />
                        </motion.div>
                      ))}
                    </Box>
                  </StaggeredAnimation>
                </motion.div>
              </SectionAnimation>
              </Box>
              
              <Box sx={{ flex: 1 }}>
              <SectionAnimation delay={0.6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      minHeight: { xs: '300px', md: '500px' },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        aspectRatio: '1',
                        maxWidth: '500px',
                        filter: 'drop-shadow(0 0 50px rgba(61, 169, 252, 0.3))',
                      }}
                    >
                      <OptimizedSparkNetwork />
                    </Box>
                  </Box>
                </motion.div>
              </SectionAnimation>
              </Box>
            </Box>
          </Container>
      </motion.div>
    </Box>
  );
}
