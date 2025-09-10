'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { ArrowForward, TrendingUp, Code, Security } from '@mui/icons-material';
import { motion } from 'framer-motion';

const insights = [
  {
    id: 1,
    title: 'Building Secure Fintech APIs: A Complete Guide',
    excerpt: 'Learn how to implement PCI DSS compliant APIs with proper authentication, encryption, and monitoring.',
    category: 'Security',
    readTime: '8 min read',
    date: '2024-12-15',
    image: '/images/insights/fintech-apis.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'Microservices Architecture for Financial Platforms',
    excerpt: 'Design patterns and best practices for building scalable, resilient financial systems.',
    category: 'Architecture',
    readTime: '12 min read',
    date: '2024-12-10',
    image: '/images/insights/microservices.jpg',
    featured: false
  },
  {
    id: 3,
    title: 'DevOps for Compliance: CI/CD in Regulated Environments',
    excerpt: 'How to maintain development velocity while meeting strict regulatory requirements.',
    category: 'DevOps',
    readTime: '6 min read',
    date: '2024-12-05',
    image: '/images/insights/devops-compliance.jpg',
    featured: false
  },
  {
    id: 4,
    title: 'Real-time Payment Processing: Technical Deep Dive',
    excerpt: 'Architecture decisions and performance optimizations for high-frequency payment systems.',
    category: 'Payments',
    readTime: '10 min read',
    date: '2024-11-28',
    image: '/images/insights/payment-processing.jpg',
    featured: false
  }
];

const categories = [
  { name: 'All', count: 12, icon: TrendingUp },
  { name: 'Architecture', count: 4, icon: Code },
  { name: 'Security', count: 3, icon: Security },
  { name: 'DevOps', count: 3, icon: TrendingUp },
  { name: 'Payments', count: 2, icon: TrendingUp }
];

export const Insights: React.FC = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #f5f5f5 0%, #e3f2fd 100%)',
        color: '#212121'
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
                background: 'linear-gradient(45deg, #2196f3 30%, #212121 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Insights & Technical Blog
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
              Deep technical insights, best practices, and lessons learned from building 
              enterprise-grade fintech solutions.
            </Typography>
          </Box>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2} mb={6}>
            {categories.map((category) => (
              <Chip
                key={category.name}
                label={`${category.name} (${category.count})`}
                variant="outlined"
                sx={{
                  borderColor: '#2196f3',
                  color: '#2196f3',
                  '&:hover': {
                    backgroundColor: '#2196f3',
                    color: 'white'
                  }
                }}
              />
            ))}
          </Box>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card
            sx={{
              mb: 6,
              background: 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)',
              color: 'white',
              borderRadius: 3,
              overflow: 'hidden'
            }}
          >
            <Grid container>
              <Grid size={{ xs: 12, md: 8 }}>
                <CardContent sx={{ p: 4 }}>
                  <Chip
                    label="Featured"
                    sx={{
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      mb: 2
                    }}
                  />
                  <Typography variant="h4" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                    {insights[0].title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, opacity: 0.9, lineHeight: 1.6 }}>
                    {insights[0].excerpt}
                  </Typography>
                  <Box display="flex" alignItems="center" gap={2} mb={3}>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      {insights[0].readTime}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      {insights[0].date}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForward />}
                    sx={{
                      backgroundColor: 'white',
                      color: '#2196f3',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.9)'
                      }
                    }}
                  >
                    Read Article
                  </Button>
                </CardContent>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <CardMedia
                  component="div"
                  sx={{
                    height: '100%',
                    minHeight: 300,
                    background: 'linear-gradient(45deg, #42a5f5 30%, #2196f3 90%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Security sx={{ fontSize: 80, opacity: 0.3 }} />
                </CardMedia>
              </Grid>
            </Grid>
          </Card>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {insights.slice(1).map((insight) => (
              <Grid size={{ xs: 12, md: 6 }} key={insight.id}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
                    }
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      height: 200,
                      background: 'linear-gradient(45deg, #e3f2fd 30%, #bbdefb 90%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {insight.category === 'Architecture' && <Code sx={{ fontSize: 60, color: '#2196f3' }} />}
                    {insight.category === 'DevOps' && <TrendingUp sx={{ fontSize: 60, color: '#2196f3' }} />}
                    {insight.category === 'Payments' && <Security sx={{ fontSize: 60, color: '#2196f3' }} />}
                  </CardMedia>
                  <CardContent sx={{ p: 3 }}>
                    <Chip
                      label={insight.category}
                      size="small"
                      sx={{
                        backgroundColor: '#e3f2fd',
                        color: '#2196f3',
                        mb: 2
                      }}
                    />
                    <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                      {insight.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 3, opacity: 0.8, lineHeight: 1.6 }}>
                      {insight.excerpt}
                    </Typography>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                      <Typography variant="caption" sx={{ opacity: 0.6 }}>
                        {insight.readTime} • {insight.date}
                      </Typography>
                      <Button
                        size="small"
                        endIcon={<ArrowForward />}
                        sx={{ color: '#2196f3' }}
                      >
                        Read
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 8,
              p: 4,
              background: 'linear-gradient(135deg, #212121 0%, #424242 100%)',
              borderRadius: 3,
              textAlign: 'center',
              color: 'white'
            }}
          >
            <Typography variant="h4" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
              Stay Updated with Technical Insights
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, opacity: 0.8, maxWidth: 500, mx: 'auto' }}>
              Get the latest articles on fintech architecture, security best practices, 
              and development insights delivered to your inbox.
            </Typography>
            <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap">
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: 'linear-gradient(45deg, #42a5f5 30%, #2196f3 90%)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #2196f3 30%, #42a5f5 90%)'
                  }
                }}
              >
                Subscribe to Newsletter
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
                View All Articles
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
