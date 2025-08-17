'use client';

import React, { useRef } from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import dynamic from 'next/dynamic';
import integrationsData from '@/content/integrations.json';
import ParallaxBackground from '../ui/parallax-background';
import { SectionAnimation, StaggeredAnimation } from '../ui/section-animation';

// Import optimized 3D integration ring
const OptimizedIntegrationRing = dynamic(() => import('@/components/3d/optimized-integration-ring').then(mod => mod.OptimizedIntegrationRing), { ssr: false });

// Legacy 3D Ring Canvas Component removed - using OptimizedIntegrationRing instead

// Animation variants removed - using SectionAnimation component instead

export default function Integrations() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  
  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #0B0F1A 0%, #11162A 100%)',
      }}
    >
      {/* Multi-layer parallax backgrounds */}
      <ParallaxBackground variant="waves" intensity="medium" color="secondary" opacity={0.06} />
      <ParallaxBackground variant="geometric" intensity="subtle" color="primary" opacity={0.04} />
      {/* Parallax Background Elements */}
      <Parallax speed={-5} style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(61, 169, 252, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
      </Parallax>
      
      <motion.div style={{ y, zIndex: 2, position: 'relative' }}>
        <Container maxWidth="xl">
          <SectionAnimation delay={0.2}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center' }}>
              <Box sx={{ flex: 1 }}>
                <Typography
                  id="integrations-heading"
                  variant="h2"
                  component="h2"
                  sx={{
                    mb: 3,
                    background: 'linear-gradient(135deg, #3DA9FC 0%, #2CB9B0 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {integrationsData.title}
                </Typography>
                
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ mb: 4, lineHeight: 1.6 }}
                >
                  {integrationsData.subtitle}
                </Typography>
                
                <StaggeredAnimation staggerDelay={0.1}>
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                    {integrationsData.features.map((feature, index) => (
                      <Box key={index}>
                        <Card
                          sx={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(61, 169, 252, 0.2)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              boxShadow: '0 8px 32px rgba(61, 169, 252, 0.2)',
                              border: '1px solid rgba(61, 169, 252, 0.4)',
                            },
                          }}
                        >
                          <CardContent sx={{ p: 3 }}>
                            <Typography
                              variant="h6"
                              sx={{
                                mb: 1,
                                color: 'primary.main',
                                fontWeight: 600,
                              }}
                            >
                              {feature.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{ lineHeight: 1.5 }}
                            >
                              {feature.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Box>
                    ))}
                  </Box>
                </StaggeredAnimation>
              </Box>
              
              <Box sx={{ flex: 1 }}>
                <SectionAnimation delay={0.6}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        aspectRatio: '1',
                        maxWidth: '500px',
                        position: 'relative',
                        filter: 'drop-shadow(0 0 30px rgba(61, 169, 252, 0.3))',
                      }}
                    >
                      <OptimizedIntegrationRing />
                    </Box>
                  </Box>
                </SectionAnimation>
              </Box>
            </Box>
          </SectionAnimation>
        </Container>
      </motion.div>
    </Box>
  );
}