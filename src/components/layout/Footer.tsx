'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  LinkedIn,
  Twitter,
  GitHub,
  Email,
  LocationOn,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const footerSections = [
  {
    title: 'Services',
    links: [
      { label: 'Payment Platforms', href: '#services' },
      { label: 'Digital Banking', href: '#services' },
      { label: 'API Integration', href: '#services' },
      { label: 'Security & Compliance', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#team' },
      { label: 'Case Studies', href: '#case-studies' },
      { label: 'Contact', href: '#contact' },
    ],
  },
];

const socialLinks = [
  { icon: LinkedIn, href: 'https://linkedin.com/company/bitspark-solutions', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/bitspark_sol', label: 'Twitter' },
  { icon: GitHub, href: 'https://github.com/bitspark-solutions', label: 'GitHub' },
  { icon: Email, href: 'mailto:hello@bitsparksolutions.com', label: 'Email' },
];

export const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #2196f3 0%, #212121 100%)',
        color: 'white',
        py: 8,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: 'white',
                }}
              >
                Bitspark Solutions
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                Building the future of fintech with secure, scalable, and compliant software solutions.
              </Typography>
              
              {/* Contact Info */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOn sx={{ mr: 1, fontSize: 20 }} />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Dhaka, Bangladesh
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Email sx={{ mr: 1, fontSize: 20 }} />
                  <Link
                    href="mailto:hello@bitsparksolutions.com"
                    sx={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}
                  >
                    hello@bitsparksolutions.com
                  </Link>
                </Box>
              </Box>

              {/* Social Links */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <IconButton
                      component="a"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        },
                      }}
                    >
                      <social.icon />
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <Grid size={{ xs: 6, md: 3 }} key={section.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    fontSize: '1rem',
                  }}
                >
                  {section.title}
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                  {section.links.map((link) => (
                    <Box component="li" key={link.label} sx={{ mb: 1 }}>
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }}
                        sx={{
                          color: 'white',
                          textDecoration: 'none',
                          opacity: 0.8,
                          fontSize: '0.875rem',
                          cursor: 'pointer',
                          '&:hover': {
                            opacity: 1,
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        {link.label}
                      </Link>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2025 Bitspark Solutions. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              href="/privacy"
              sx={{
                color: 'white',
                textDecoration: 'none',
                opacity: 0.8,
                fontSize: '0.875rem',
                '&:hover': { opacity: 1 },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              sx={{
                color: 'white',
                textDecoration: 'none',
                opacity: 0.8,
                fontSize: '0.875rem',
                '&:hover': { opacity: 1 },
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};