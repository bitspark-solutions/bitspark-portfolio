'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip, Avatar } from '@mui/material';
import { GitHub, Code, School, Group, Star, ForkRight, Visibility } from '@mui/icons-material';
import { motion } from 'framer-motion';

const repositories = [
  {
    name: 'fintech-api-sdk',
    description: 'TypeScript SDK for building secure fintech applications with built-in compliance features.',
    language: 'TypeScript',
    stars: 234,
    forks: 45,
    watchers: 89,
    topics: ['fintech', 'typescript', 'sdk', 'api', 'security']
  },
  {
    name: 'payment-gateway-integration',
    description: 'Unified payment gateway integration library supporting Stripe, Adyen, and custom providers.',
    language: 'C#',
    stars: 156,
    forks: 32,
    watchers: 67,
    topics: ['payments', 'csharp', 'stripe', 'adyen', 'integration']
  },
  {
    name: 'compliance-audit-tools',
    description: 'Automated compliance checking tools for PCI DSS and SOC 2 requirements.',
    language: 'Python',
    stars: 98,
    forks: 23,
    watchers: 45,
    topics: ['compliance', 'python', 'pci-dss', 'soc2', 'audit']
  }
];

const contributions = [
  {
    project: 'Next.js',
    description: 'Performance improvements for App Router',
    type: 'Framework',
    impact: 'High'
  },
  {
    project: 'Material-UI',
    description: 'Accessibility enhancements for enterprise components',
    type: 'UI Library',
    impact: 'Medium'
  },
  {
    project: 'Playwright',
    description: 'E2E testing utilities for fintech applications',
    type: 'Testing',
    impact: 'Medium'
  }
];

const speaking = [
  {
    event: 'Fintech DevCon 2024',
    title: 'Building Secure APIs for Financial Services',
    date: '2024-11-15',
    location: 'San Francisco, CA',
    type: 'Conference'
  },
  {
    event: 'Dhaka Tech Meetup',
    title: 'Modern DevOps Practices for Regulated Industries',
    date: '2024-10-20',
    location: 'Dhaka, Bangladesh',
    type: 'Meetup'
  },
  {
    event: 'API World 2024',
    title: 'API Security Best Practices in Fintech',
    date: '2024-09-10',
    location: 'Virtual',
    type: 'Webinar'
  }
];

export const OpenSource: React.FC = () => {
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
                background: 'linear-gradient(45deg, #42a5f5 30%, #90caf9 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Open Source & Community
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
              Contributing to the developer community through open source projects, 
              technical talks, and knowledge sharing.
            </Typography>
          </Box>
        </motion.div>

        {/* GitHub Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" component="h3" sx={{ mb: 4, fontWeight: 600, textAlign: 'center' }}>
            Open Source Projects
          </Typography>
          <Grid container spacing={4} mb={8}>
            {repositories.map((repo) => (
              <Grid size={{ xs: 12, md: 4 }} key={repo.name}>
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
                    <Box display="flex" alignItems="center" gap={2} mb={2}>
                      <GitHub sx={{ color: '#42a5f5' }} />
                      <Typography variant="h6" component="h4" sx={{ fontWeight: 600 }}>
                        {repo.name}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 3, opacity: 0.8, lineHeight: 1.6 }}>
                      {repo.description}
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={1} mb={3}>
                      {repo.topics.map((topic) => (
                        <Chip
                          key={topic}
                          label={topic}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(66, 165, 245, 0.2)',
                            color: '#42a5f5',
                            fontSize: '0.75rem'
                          }}
                        />
                      ))}
                    </Box>
                    <Box display="flex" alignItems="center" gap={3} mb={3}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Star sx={{ fontSize: 16, color: '#42a5f5' }} />
                        <Typography variant="body2">{repo.stars}</Typography>
                      </Box>
                      <Box display="flex" alignItems="center" gap={1}>
                        <ForkRight sx={{ fontSize: 16, color: '#42a5f5' }} />
                        <Typography variant="body2">{repo.forks}</Typography>
                      </Box>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Visibility sx={{ fontSize: 16, color: '#42a5f5' }} />
                        <Typography variant="body2">{repo.watchers}</Typography>
                      </Box>
                    </Box>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<GitHub />}
                      sx={{
                        borderColor: '#42a5f5',
                        color: '#42a5f5',
                        '&:hover': {
                          borderColor: '#42a5f5',
                          backgroundColor: 'rgba(66, 165, 245, 0.1)'
                        }
                      }}
                    >
                      View on GitHub
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Community Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" component="h3" sx={{ mb: 4, fontWeight: 600, textAlign: 'center' }}>
            Community Contributions
          </Typography>
          <Grid container spacing={4} mb={8}>
            {contributions.map((contribution) => (
              <Grid size={{ xs: 12, md: 4 }} key={contribution.project}>
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 3,
                    textAlign: 'center'
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        backgroundColor: '#42a5f5',
                        mx: 'auto',
                        mb: 2
                      }}
                    >
                      <Code sx={{ fontSize: 30 }} />
                    </Avatar>
                    <Typography variant="h6" component="h4" sx={{ mb: 1, fontWeight: 600 }}>
                      {contribution.project}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
                      {contribution.description}
                    </Typography>
                    <Chip
                      label={contribution.type}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(66, 165, 245, 0.2)',
                        color: '#42a5f5',
                        mb: 1
                      }}
                    />
                    <Typography variant="caption" display="block" sx={{ opacity: 0.6 }}>
                      Impact: {contribution.impact}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Speaking Engagements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" component="h3" sx={{ mb: 4, fontWeight: 600, textAlign: 'center' }}>
            Speaking & Knowledge Sharing
          </Typography>
          <Grid container spacing={4}>
            {speaking.map((talk) => (
              <Grid size={{ xs: 12, md: 4 }} key={talk.event}>
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 3,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box display="flex" alignItems="center" gap={2} mb={2}>
                      <Avatar
                        sx={{
                          width: 40,
                          height: 40,
                          backgroundColor: '#42a5f5'
                        }}
                      >
                        <School sx={{ fontSize: 20 }} />
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          {talk.event}
                        </Typography>
                        <Typography variant="caption" sx={{ opacity: 0.6 }}>
                          {talk.date}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="h6" component="h4" sx={{ mb: 2, fontWeight: 600 }}>
                      {talk.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
                      {talk.location}
                    </Typography>
                    <Chip
                      label={talk.type}
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

        {/* Call to Action */}
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
              background: 'linear-gradient(135deg, #42a5f5 0%, #2196f3 100%)',
              borderRadius: 3,
              textAlign: 'center'
            }}
          >
            <Typography variant="h4" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
              Collaborate with Us
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, maxWidth: 500, mx: 'auto' }}>
              Interested in contributing to our open source projects or collaborating 
              on fintech solutions? Let&apos;s build something amazing together.
            </Typography>
            <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap">
              <Button
                variant="contained"
                size="large"
                startIcon={<GitHub />}
                sx={{
                  backgroundColor: 'white',
                  color: '#2196f3',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.9)'
                  }
                }}
              >
                View GitHub Profile
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Group />}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                Join Community
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
