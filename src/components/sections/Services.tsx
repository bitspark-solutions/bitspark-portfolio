'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  Payment,
  AccountBalance,
  Security,
  Speed,
  TrendingUp,
  Support,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Payment,
    title: 'Payment Platforms',
    description: 'Secure, PCI DSS compliant payment processing solutions',
    features: ['Multi-currency support', 'Fraud detection', 'Real-time processing'],
  },
  {
    icon: AccountBalance,
    title: 'Digital Banking',
    description: 'Modern neobank applications and core banking systems',
    features: ['Account management', 'Digital wallets', 'Investment platforms'],
  },
  {
    icon: Security,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security with regulatory compliance',
    features: ['SOC 2 Type II', 'ISO 27001', 'GDPR ready'],
  },
  {
    icon: Speed,
    title: 'API Integration',
    description: 'Seamless integration with financial service providers',
    features: ['RESTful APIs', 'Webhook support', 'Real-time sync'],
  },
  {
    icon: TrendingUp,
    title: 'Analytics & Reporting',
    description: 'Advanced analytics and business intelligence',
    features: ['Real-time dashboards', 'Custom reports', 'Predictive analytics'],
  },
  {
    icon: Support,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance',
    features: ['Dedicated support', 'SLA guarantees', 'Proactive monitoring'],
  },
];

export const Services: React.FC = () => {
  return (
    <Box
      id="services"
      sx={{
        py: 12,
        background: 'white',
      }}
    >
      <Container maxWidth="lg">
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
                background: 'linear-gradient(45deg, #2196f3 30%, #42a5f5 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Our Services
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
              Comprehensive fintech solutions designed to accelerate your digital transformation
              and drive business growth.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={service.title}>
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
                        borderColor: '#2196f3',
                        boxShadow: '0px 8px 24px rgba(33, 150, 243, 0.15)',
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
                            background: 'linear-gradient(45deg, #42a5f5 30%, #2196f3 90%)',
                            mr: 2,
                          }}
                        >
                          <service.icon sx={{ color: 'white', fontSize: 32 }} />
                        </Box>
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{ fontWeight: 600 }}
                        >
                          {service.title}
                        </Typography>
                      </Box>
                      
                      <Typography
                        variant="body1"
                        sx={{ color: 'text.secondary', mb: 3 }}
                      >
                        {service.description}
                      </Typography>

                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {service.features.map((feature, featureIndex) => (
                          <Box
                            key={featureIndex}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                            }}
                          >
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                background: '#2196f3',
                              }}
                            />
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};