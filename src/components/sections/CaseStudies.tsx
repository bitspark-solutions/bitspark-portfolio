import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  TrendingUp,
  Security,
  Speed,
  CheckCircle,
  ArrowForward,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { colors } from '@/theme/theme';

const caseStudies = [
  {
    title: 'Digital Payment Platform',
    client: 'FinTech Startup',
    industry: 'Payments',
    challenge: 'Building a secure, scalable payment processing platform from scratch with PCI DSS compliance.',
    solution: 'Developed a microservices-based architecture with real-time fraud detection and multi-currency support.',
    results: [
      '99.9% uptime achieved',
      '50% reduction in processing time',
      'Zero security incidents',
      'PCI DSS Level 1 certification',
    ],
    technologies: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    timeline: '6 months',
    team: '5 developers',
    image: '/case-studies/payment-platform.jpg',
  },
  {
    title: 'Lending Management System',
    client: 'Regional Bank',
    industry: 'Lending',
    challenge: 'Modernizing legacy loan processing system to handle increased volume and regulatory requirements.',
    solution: 'Built a cloud-native platform with automated underwriting and real-time risk assessment.',
    results: [
      '300% increase in loan processing capacity',
      '80% reduction in manual processing',
      'Full regulatory compliance',
      'Real-time risk monitoring',
    ],
    technologies: ['.NET Core', 'SQL Server', 'Azure', 'Power BI', 'ML.NET'],
    timeline: '8 months',
    team: '7 developers',
    image: '/case-studies/lending-system.jpg',
  },
  {
    title: 'Neobank Mobile App',
    client: 'Digital Bank',
    industry: 'Neobanking',
    challenge: 'Creating a comprehensive mobile banking experience with advanced features and security.',
    solution: 'Developed a React Native app with biometric authentication and real-time transaction processing.',
    results: [
      '4.8/5 app store rating',
      '2M+ active users',
      '99.95% availability',
      'Zero data breaches',
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Kubernetes', 'GCP'],
    timeline: '10 months',
    team: '8 developers',
    image: '/case-studies/neobank-app.jpg',
  },
];

const metrics = [
  {
    icon: TrendingUp,
    value: '99.9%',
    label: 'Average Uptime',
    description: 'Across all deployed systems',
  },
  {
    icon: Security,
    value: '0',
    label: 'Security Incidents',
    description: 'Zero breaches in 5+ years',
  },
  {
    icon: Speed,
    value: '50%',
    label: 'Performance Improvement',
    description: 'Average speed increase',
  },
];

export const CaseStudies: React.FC = () => {
  return (
    <Box
      id="case-studies"
      sx={{
        py: 12,
        background: colors.gradient.hero,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 3,
                fontWeight: 700,
                background: colors.gradient.buttonPrimary,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Case Studies
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                maxWidth: '700px',
                mx: 'auto',
                color: 'text.secondary',
                lineHeight: 1.6,
              }}
            >
              Real projects, real results. See how we&apos;ve helped fintech companies 
              build secure, scalable solutions that drive business growth.
            </Typography>
          </Box>
        </motion.div>

        {/* Metrics */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {metrics.map((metric, index) => (
            <Grid size={{ xs: 12, sm: 4 }} key={metric.label}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    background: 'white',
                    border: '1px solid rgba(33, 150, 243, 0.1)',
                    '&:hover': {
                      borderColor: colors.primary[500],
                      boxShadow: `0px 8px 24px rgba(33, 150, 243, 0.15)`,
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        background: colors.gradient.buttonPrimary,
                        display: 'inline-flex',
                        mb: 2,
                      }}
                    >
                      <metric.icon sx={{ color: 'white', fontSize: 32 }} />
                    </Box>
                    <Typography
                      variant="h3"
                      component="div"
                      sx={{
                        fontWeight: 700,
                        color: colors.primary[500],
                        mb: 1,
                      }}
                    >
                      {metric.value}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      {metric.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary' }}
                    >
                      {metric.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Case Studies */}
        <Grid container spacing={4}>
          {caseStudies.map((study, index) => (
            <Grid size={{ xs: 12, lg: 4 }} key={study.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'white',
                    border: '1px solid rgba(33, 150, 243, 0.1)',
                    '&:hover': {
                      borderColor: colors.primary[500],
                      boxShadow: `0px 8px 24px rgba(33, 150, 243, 0.15)`,
                      transform: 'translateY(-4px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ mb: 2 }}>
                      <Chip
                        label={study.industry}
                        size="small"
                        sx={{
                          background: colors.primary[50],
                          color: colors.primary[700],
                          fontWeight: 500,
                          mb: 2,
                        }}
                      />
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{ fontWeight: 600, mb: 1 }}
                      >
                        {study.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', mb: 2 }}
                      >
                        {study.client}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', mb: 2, fontWeight: 500 }}
                    >
                      Challenge:
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', mb: 3 }}
                    >
                      {study.challenge}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', mb: 1, fontWeight: 500 }}
                    >
                      Solution:
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', mb: 3 }}
                    >
                      {study.solution}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', mb: 2, fontWeight: 500 }}
                    >
                      Key Results:
                    </Typography>
                    <List dense sx={{ mb: 3 }}>
                      {study.results.map((result, resultIndex) => (
                        <ListItem key={resultIndex} sx={{ px: 0, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircle sx={{ color: colors.primary[500], fontSize: 16 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={result}
                            primaryTypographyProps={{
                              variant: 'body2',
                              color: 'text.secondary',
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', mb: 1, fontWeight: 500 }}
                      >
                        Technologies:
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 2 }}>
                        {study.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              background: colors.secondary[100],
                              color: colors.secondary[700],
                              fontWeight: 500,
                              fontSize: '0.75rem',
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2, fontSize: '0.875rem' }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <strong>Timeline:</strong> {study.timeline}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <strong>Team:</strong> {study.team}
                      </Typography>
                    </Box>
                  </CardContent>

                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button
                      endIcon={<ArrowForward />}
                      sx={{
                        color: colors.primary[500],
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: colors.primary[50],
                        },
                      }}
                    >
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography
              variant="h6"
              sx={{ mb: 3, color: 'text.secondary' }}
            >
              Want to see your project featured here?
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Chip
                label="Start Your Project"
                sx={{
                  background: colors.gradient.buttonPrimary,
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '1rem',
                  px: 4,
                  py: 2,
                  cursor: 'pointer',
                  '&:hover': {
                    background: colors.gradient.buttonSecondary,
                  },
                }}
              />
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
