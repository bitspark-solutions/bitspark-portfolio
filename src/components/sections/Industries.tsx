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
  AccountBalance,
  Payment,
  TrendingUp,
  Security,
  Speed,
  Assessment,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { colors } from '@/theme/theme';

const industries = [
  {
    icon: Payment,
    title: 'Payments',
    description: 'Secure payment processing and gateway integrations',
    features: [
      'PCI DSS compliant payment flows',
      'Multi-currency support',
      'Fraud detection and prevention',
      'Real-time transaction monitoring',
      'Chargeback management',
    ],
    technologies: ['Stripe', 'Adyen', 'Square', 'PayPal'],
    color: colors.primary[500],
  },
  {
    icon: AccountBalance,
    title: 'Lending',
    description: 'Digital lending platforms and loan management systems',
    features: [
      'Credit scoring algorithms',
      'Automated underwriting',
      'Document verification',
      'Risk assessment models',
      'Regulatory compliance',
    ],
    technologies: ['Bank APIs', 'KYC/AML', 'Credit Bureaus', 'Blockchain'],
    color: colors.primary[600],
  },
  {
    icon: TrendingUp,
    title: 'Neobanking',
    description: 'Modern digital banking solutions and core banking systems',
    features: [
      'Account management',
      'Digital wallets',
      'Investment platforms',
      'Budgeting tools',
      'Open banking APIs',
    ],
    technologies: ['Core Banking', 'Open Banking', 'Plaid', 'Yodlee'],
    color: colors.primary[700],
  },
  {
    icon: Assessment,
    title: 'Marketplaces',
    description: 'Financial marketplace platforms and trading systems',
    features: [
      'Order matching engines',
      'Real-time pricing',
      'Portfolio management',
      'Risk management',
      'Compliance reporting',
    ],
    technologies: ['Trading APIs', 'Market Data', 'Blockchain', 'AI/ML'],
    color: colors.primary[800],
  },
];

const complianceFeatures = [
  {
    icon: Security,
    title: 'Security & Compliance',
    description: 'Built-in security measures and regulatory compliance',
    items: [
      'SOC 2 Type II certified',
      'ISO 27001 compliant',
      'GDPR ready',
      'PCI DSS Level 1',
      'Regular security audits',
    ],
  },
  {
    icon: Speed,
    title: 'Performance & Scalability',
    description: 'High-performance systems that scale with your business',
    items: [
      '99.9% uptime SLA',
      'Auto-scaling infrastructure',
      'Global CDN deployment',
      'Real-time monitoring',
      'Disaster recovery',
    ],
  },
];

export const Industries: React.FC = () => {
  return (
    <Box
      id="industries"
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
              Industries We Serve
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                maxWidth: '700px',
                mx: 'auto',
                color: 'text.secondary',
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              Specialized expertise in fintech verticals with deep understanding 
              of regulatory requirements and industry best practices.
            </Typography>
          </Box>
        </motion.div>

        {/* Industries Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {industries.map((industry, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={industry.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    border: `2px solid ${industry.color}20`,
                    '&:hover': {
                      borderColor: industry.color,
                      boxShadow: `0px 8px 24px ${industry.color}20`,
                      transform: 'translateY(-4px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          background: `${industry.color}20`,
                          mr: 2,
                        }}
                      >
                        <industry.icon sx={{ color: industry.color, fontSize: 32 }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="h5"
                          component="h3"
                          sx={{ fontWeight: 600, mb: 1 }}
                        >
                          {industry.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: 'text.secondary' }}
                        >
                          {industry.description}
                        </Typography>
                      </Box>
                    </Box>

                    <List dense sx={{ mb: 3 }}>
                      {industry.features.map((feature, featureIndex) => (
                        <ListItem key={featureIndex} sx={{ px: 0, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                background: industry.color,
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              variant: 'body2',
                              color: 'text.secondary',
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {industry.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            background: `${industry.color}15`,
                            color: industry.color,
                            fontWeight: 500,
                            border: `1px solid ${industry.color}30`,
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Compliance & Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            component="h3"
            sx={{
              textAlign: 'center',
              fontWeight: 600,
              mb: 6,
              color: 'text.primary',
            }}
          >
            How We Map Your Risk Surface
          </Typography>

          <Grid container spacing={4}>
            {complianceFeatures.map((feature, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={feature.title}>
                <motion.div
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
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
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          background: colors.gradient.buttonPrimary,
                          mr: 2,
                        }}
                      >
                        <feature.icon sx={{ color: 'white', fontSize: 28 }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          component="h4"
                          sx={{ fontWeight: 600, mb: 1 }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary' }}
                        >
                          {feature.description}
                        </Typography>
                      </Box>
                    </Box>

                    <List dense>
                      {feature.items.map((item, itemIndex) => (
                        <ListItem key={itemIndex} sx={{ px: 0, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                background: colors.primary[500],
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography
              variant="h6"
              sx={{ mb: 3, color: 'text.secondary' }}
            >
              Ready to build your fintech solution?
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Chip
                label="Discuss Your Project"
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
