import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
import {
  Search,
  Handshake,
  DesignServices,
  Build,
  Security,
  RocketLaunch,
  Settings,
  Timeline,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { colors } from '@/theme/theme';

const processSteps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'Deep dive into your business requirements and technical constraints',
    duration: '1-2 weeks',
    deliverables: [
      'Requirements analysis',
      'Technical feasibility study',
      'Architecture recommendations',
      'Project roadmap',
    ],
    inputs: ['Business goals', 'Current systems', 'Compliance requirements'],
    outputs: ['Technical specification', 'Project timeline', 'Resource plan'],
  },
  {
    icon: Handshake,
    title: 'Align',
    description: 'Align on scope, timeline, and engagement model with clear expectations',
    duration: '1 week',
    deliverables: [
      'Project charter',
      'Sprint planning',
      'Communication protocols',
      'Success metrics',
    ],
    inputs: ['Requirements document', 'Budget constraints', 'Timeline preferences'],
    outputs: ['Signed agreement', 'Team assignments', 'Communication plan'],
  },
  {
    icon: DesignServices,
    title: 'Design',
    description: 'Create detailed system architecture and user experience design',
    duration: '2-3 weeks',
    deliverables: [
      'System architecture',
      'Database design',
      'API specifications',
      'UI/UX mockups',
    ],
    inputs: ['Technical requirements', 'User stories', 'Design guidelines'],
    outputs: ['Architecture diagrams', 'Design system', 'Development guidelines'],
  },
  {
    icon: Build,
    title: 'Build',
    description: 'Develop the solution using agile methodology with regular demos',
    duration: '4-12 weeks',
    deliverables: [
      'Working software',
      'Unit tests',
      'Integration tests',
      'Documentation',
    ],
    inputs: ['Design specifications', 'Development environment', 'Test data'],
    outputs: ['Deployed features', 'Test reports', 'Code documentation'],
  },
  {
    icon: Security,
    title: 'Harden',
    description: 'Security testing, performance optimization, and compliance validation',
    duration: '1-2 weeks',
    deliverables: [
      'Security audit report',
      'Performance benchmarks',
      'Compliance documentation',
      'Penetration testing',
    ],
    inputs: ['Working software', 'Security requirements', 'Performance targets'],
    outputs: ['Security report', 'Performance metrics', 'Compliance certificates'],
  },
  {
    icon: RocketLaunch,
    title: 'Ship',
    description: 'Deploy to production with monitoring and support handover',
    duration: '1 week',
    deliverables: [
      'Production deployment',
      'Monitoring setup',
      'User training',
      'Support documentation',
    ],
    inputs: ['Tested software', 'Production environment', 'User training plan'],
    outputs: ['Live system', 'Monitoring dashboards', 'User guides'],
  },
  {
    icon: Settings,
    title: 'Operate',
    description: 'Ongoing support, maintenance, and continuous improvement',
    duration: 'Ongoing',
    deliverables: [
      '24/7 monitoring',
      'Regular updates',
      'Performance reports',
      'Feature enhancements',
    ],
    inputs: ['Live system', 'User feedback', 'Performance data'],
    outputs: ['System health reports', 'Feature updates', 'Support tickets'],
  },
];

const engagementModels = [
  {
    title: 'Fixed-Scope Discovery',
    description: 'Comprehensive analysis and planning for your project',
    duration: '1-2 weeks',
    deliverables: ['Technical specification', 'Architecture design', 'Project roadmap'],
    bestFor: 'New projects requiring detailed planning',
    price: 'Starting at $5,000',
  },
  {
    title: 'Milestone-Based Delivery',
    description: 'Development delivered in defined milestones with clear deliverables',
    duration: '2-6 months',
    deliverables: ['Working software', 'Regular demos', 'Progress reports'],
    bestFor: 'Medium to large projects with defined requirements',
    price: 'Starting at $15,000',
  },
  {
    title: 'Dedicated Squads',
    description: 'Dedicated team working exclusively on your project',
    duration: '3-12 months',
    deliverables: ['Full development team', 'Daily communication', 'Agile delivery'],
    bestFor: 'Large-scale projects requiring dedicated resources',
    price: 'Starting at $25,000/month',
  },
  {
    title: 'Retainer Model',
    description: 'Ongoing support and maintenance with priority access',
    duration: 'Ongoing',
    deliverables: ['24/7 support', 'Regular updates', 'Priority development'],
    bestFor: 'Established systems requiring ongoing support',
    price: 'Starting at $5,000/month',
  },
];

export const Process: React.FC = () => {
  return (
    <Box
      id="process"
      sx={{
        py: 12,
        background: 'white',
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
                background: 'linear-gradient(45deg, #1976d2 30%, #0d47a1 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Our Process
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
              A proven methodology that ensures successful project delivery 
              with transparency, quality, and continuous communication.
            </Typography>
          </Box>
        </motion.div>

        {/* Process Steps */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            component="h3"
            sx={{
              textAlign: 'center',
              fontWeight: 600,
              mb: 6,
              color: 'text.primary',
            }}
          >
            Development Process
          </Typography>

          <Grid container spacing={4}>
            {processSteps.map((step, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={step.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      border: '1px solid rgba(33, 150, 243, 0.1)',
                      '&:hover': {
                        borderColor: colors.primary[500],
                        boxShadow: `0px 8px 24px rgba(33, 150, 243, 0.15)`,
                        transform: 'translateY(-4px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: 2,
                            background: colors.gradient.buttonPrimary,
                            mr: 2,
                          }}
                        >
                          <step.icon sx={{ color: 'white', fontSize: 24 }} />
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            component="h4"
                            sx={{ fontWeight: 600 }}
                          >
                            {step.title}
                          </Typography>
                          <Chip
                            label={step.duration}
                            size="small"
                            sx={{
                              background: colors.primary[50],
                              color: colors.primary[700],
                              fontWeight: 500,
                            }}
                          />
                        </Box>
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', mb: 3 }}
                      >
                        {step.description}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}
                      >
                        Key Deliverables:
                      </Typography>
                      <List dense>
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <ListItem key={deliverableIndex} sx={{ px: 0, py: 0.25 }}>
                            <ListItemIcon sx={{ minWidth: 24 }}>
                              <Box
                                sx={{
                                  width: 4,
                                  height: 4,
                                  borderRadius: '50%',
                                  background: colors.primary[500],
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={deliverable}
                              primaryTypographyProps={{
                                variant: 'body2',
                                color: 'text.secondary',
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Engagement Models */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            component="h3"
            sx={{
              textAlign: 'center',
              fontWeight: 600,
              mb: 6,
              color: 'text.primary',
            }}
          >
            Engagement Models
          </Typography>

          <Grid container spacing={4}>
            {engagementModels.map((model, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={model.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 4,
                      height: '100%',
                      background: colors.gradient.hero,
                      border: '1px solid rgba(33, 150, 243, 0.1)',
                      '&:hover': {
                        borderColor: colors.primary[500],
                        boxShadow: `0px 8px 24px rgba(33, 150, 243, 0.15)`,
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Timeline sx={{ color: colors.primary[500], mr: 1 }} />
                      <Typography
                        variant="h6"
                        component="h4"
                        sx={{ fontWeight: 600 }}
                      >
                        {model.title}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{ color: 'text.secondary', mb: 3 }}
                    >
                      {model.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}
                      >
                        Duration: {model.duration}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}
                      >
                        Best for: {model.bestFor}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 600, mb: 2, color: colors.primary[600] }}
                      >
                        {model.price}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}
                    >
                      Key Deliverables:
                    </Typography>
                    <List dense>
                      {model.deliverables.map((deliverable, deliverableIndex) => (
                        <ListItem key={deliverableIndex} sx={{ px: 0, py: 0.25 }}>
                          <ListItemIcon sx={{ minWidth: 24 }}>
                            <Box
                              sx={{
                                width: 4,
                                height: 4,
                                borderRadius: '50%',
                                background: colors.primary[500],
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={deliverable}
                            primaryTypographyProps={{
                              variant: 'body2',
                              color: 'text.secondary',
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* RACI Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography
              variant="h5"
              component="h3"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: 'text.primary',
              }}
            >
              Our Promise to You
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: '600px',
                mx: 'auto',
                color: 'text.secondary',
                mb: 4,
              }}
            >
              We provide complete transparency with weekly demos, regular progress reports, 
              and clear communication throughout the entire development process.
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
