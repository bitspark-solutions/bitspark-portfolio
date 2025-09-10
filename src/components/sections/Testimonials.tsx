'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Rating, Chip, Button } from '@mui/material';
import { FormatQuote, Star, TrendingUp, Security, Speed } from '@mui/icons-material';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'FinTech Innovations',
    image: '/images/testimonials/sarah-johnson.jpg',
    quote: 'Bitspark Solutions transformed our payment infrastructure. The team\'s expertise in fintech compliance and scalable architecture exceeded our expectations.',
    rating: 5,
    metrics: {
      label: 'Payment Processing Speed',
      value: '300%',
      improvement: 'faster'
    },
    project: 'Payment Platform Migration'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder',
    company: 'Digital Banking Co',
    image: '/images/testimonials/michael-chen.jpg',
    quote: 'Working with Bitspark was a game-changer. They delivered a secure, compliant banking platform that passed all regulatory audits on the first try.',
    rating: 5,
    metrics: {
      label: 'Compliance Score',
      value: '100%',
      improvement: 'audit success'
    },
    project: 'Neobank Platform'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'VP Engineering',
    company: 'Lending Solutions',
    image: '/images/testimonials/emily-rodriguez.jpg',
    quote: 'The microservices architecture they built for our lending platform handles 10x more transactions with zero downtime. Exceptional work.',
    rating: 5,
    metrics: {
      label: 'System Uptime',
      value: '99.99%',
      improvement: 'reliability'
    },
    project: 'Lending Platform'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Head of Product',
    company: 'Payment Gateway Inc',
    image: '/images/testimonials/david-kim.jpg',
    quote: 'Bitspark\'s API integration expertise saved us months of development time. Their documentation and support are outstanding.',
    rating: 5,
    metrics: {
      label: 'Development Time',
      value: '60%',
      improvement: 'faster delivery'
    },
    project: 'API Integration Suite'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'CEO',
    company: 'Crypto Exchange',
    image: '/images/testimonials/lisa-thompson.jpg',
    quote: 'Security was our top priority, and Bitspark delivered. Their threat modeling and security implementation gave us complete confidence.',
    rating: 5,
    metrics: {
      label: 'Security Score',
      value: 'A+',
      improvement: 'security rating'
    },
    project: 'Crypto Trading Platform'
  },
  {
    id: 6,
    name: 'Ahmed Hassan',
    role: 'Technical Director',
    company: 'Regional Bank',
    image: '/images/testimonials/ahmed-hassan.jpg',
    quote: 'The team\'s understanding of both local regulations and global best practices made them the perfect partner for our digital transformation.',
    rating: 5,
    metrics: {
      label: 'Regulatory Compliance',
      value: '100%',
      improvement: 'compliance rate'
    },
    project: 'Digital Banking Transformation'
  }
];

const stats = [
  {
    value: '50+',
    label: 'Projects Delivered',
    icon: TrendingUp
  },
  {
    value: '99.9%',
    label: 'Client Satisfaction',
    icon: Star
  },
  {
    value: '100%',
    label: 'Security Compliance',
    icon: Security
  },
  {
    value: '24/7',
    label: 'Support Available',
    icon: Speed
  }
];

export const Testimonials: React.FC = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #212121 0%, #424242 100%)',
        color: 'white'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 2,
                fontWeight: 700,
                color: 'white'
              }}
            >
              Client Testimonials
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                maxWidth: 600,
                mx: 'auto',
                opacity: 0.8,
                lineHeight: 1.6
              }}
            >
              Don&apos;t just take our word for it. Here&apos;s what our clients say 
              about working with Bitspark Solutions.
            </Typography>
          </Box>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={4} mb={8}>
            {stats.map((stat) => (
              <Grid size={{ xs: 6, md: 3 }} key={stat.label}>
                <Box textAlign="center">
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: '#42a5f5',
                      mx: 'auto',
                      mb: 2
                    }}
                  >
                    <stat.icon sx={{ fontSize: 30 }} />
                  </Avatar>
                  <Typography variant="h4" component="div" sx={{ fontWeight: 700, mb: 1 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {testimonials.map((testimonial) => (
              <Grid size={{ xs: 12, md: 6 }} key={testimonial.id}>
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 3,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.3)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box display="flex" alignItems="center" gap={2} mb={3}>
                      <Avatar
                        src={testimonial.image}
                        sx={{
                          width: 60,
                          height: 60,
                          border: '2px solid #42a5f5'
                        }}
                      />
                      <Box>
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: '#42a5f5' }}>
                          {testimonial.role}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          {testimonial.company}
                        </Typography>
                      </Box>
                    </Box>

                    <Box display="flex" alignItems="center" gap={1} mb={2}>
                      <FormatQuote sx={{ color: '#42a5f5', fontSize: 20 }} />
                      <Rating value={testimonial.rating} readOnly size="small" />
                    </Box>

                    <Typography variant="body1" sx={{ mb: 3, opacity: 0.9, lineHeight: 1.6, fontStyle: 'italic' }}>
                      &ldquo;{testimonial.quote}&rdquo;
                    </Typography>

                    <Box
                      sx={{
                        p: 2,
                        background: 'rgba(66, 165, 245, 0.1)',
                        borderRadius: 2,
                        mb: 2
                      }}
                    >
                      <Typography variant="subtitle2" sx={{ color: '#42a5f5', mb: 1 }}>
                        {testimonial.metrics.label}
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                        {testimonial.metrics.value}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        {testimonial.metrics.improvement}
                      </Typography>
                    </Box>

                    <Chip
                      label={testimonial.project}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(66, 165, 245, 0.2)',
                        color: '#42a5f5'
                      }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Video Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 8,
              p: 4,
              background: 'linear-gradient(135deg, #42a5f5 0%, #2196f3 100%)',
              borderRadius: 3,
              textAlign: 'center'
            }}
          >
            <Typography variant="h4" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
              Watch Client Success Stories
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, maxWidth: 500, mx: 'auto' }}>
              See how we&apos;ve helped fintech companies achieve their goals through 
              secure, scalable software solutions.
            </Typography>
            <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap">
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'white',
                  color: '#2196f3',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.9)'
                  }
                }}
              >
                Watch Case Studies
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                Read Full Reviews
              </Button>
            </Box>
          </Box>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 6,
              p: 3,
              background: 'rgba(255,255,255,0.05)',
              borderRadius: 2,
              textAlign: 'center'
            }}
          >
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
              Trusted by leading fintech companies worldwide
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" gap={4} flexWrap="wrap">
              <Typography variant="h6" sx={{ opacity: 0.6 }}>FinTech Innovations</Typography>
              <Typography variant="h6" sx={{ opacity: 0.6 }}>Digital Banking Co</Typography>
              <Typography variant="h6" sx={{ opacity: 0.6 }}>Lending Solutions</Typography>
              <Typography variant="h6" sx={{ opacity: 0.6 }}>Payment Gateway Inc</Typography>
              <Typography variant="h6" sx={{ opacity: 0.6 }}>Crypto Exchange</Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
