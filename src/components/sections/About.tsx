import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Security,
  Speed,
  Visibility,
  LocationOn,
  CheckCircle,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { colors } from '@/theme/theme';

const principles = [
  {
    icon: Visibility,
    title: 'Transparency',
    description: 'Clear communication, honest timelines, and open processes throughout every project.',
  },
  {
    icon: Security,
    title: 'Security First',
    description: 'Every solution is built with security and compliance as foundational principles.',
  },
  {
    icon: Speed,
    title: 'Reliability',
    description: 'Consistent delivery of high-quality, scalable solutions that stand the test of time.',
  },
];

const team = [
  {
    name: 'Ahmed Hassan',
    role: 'Founder & CTO',
    expertise: 'Fintech Architecture',
    avatar: '/team/ahmed.jpg',
  },
  {
    name: 'Sarah Khan',
    role: 'Lead Developer',
    expertise: 'API Integration',
    avatar: '/team/sarah.jpg',
  },
  {
    name: 'Rahim Ali',
    role: 'DevOps Engineer',
    expertise: 'Cloud Infrastructure',
    avatar: '/team/rahim.jpg',
  },
];

const whatWeDontDo = [
  'Build without understanding your business',
  'Compromise on security for speed',
  'Use outdated technologies',
  'Leave you without proper documentation',
  'Charge hidden fees or surprise costs',
];

export const About: React.FC = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 12,
        background: 'white',
      }}
    >
      <Container maxWidth="lg">
        {/* Mission Section */}
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
              About Bitspark Solutions
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
              We&apos;re a specialized software development company focused on building 
              secure, scalable fintech solutions that power the future of finance.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <LocationOn sx={{ color: colors.primary[500] }} />
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Based in Dhaka, Bangladesh • Serving clients globally
              </Typography>
            </Box>
          </Box>
        </motion.div>

        {/* Principles */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {principles.map((principle, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={principle.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
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
                      <principle.icon sx={{ color: 'white', fontSize: 32 }} />
                    </Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ fontWeight: 600, mb: 2 }}
                    >
                      {principle.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      {principle.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: 'text.primary',
              }}
            >
              Our Team
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: '600px',
                mx: 'auto',
                color: 'text.secondary',
              }}
            >
              Experienced professionals passionate about building exceptional fintech solutions
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {team.map((member, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={member.name}>
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
                      border: '1px solid rgba(33, 150, 243, 0.1)',
                      '&:hover': {
                        borderColor: colors.primary[500],
                        boxShadow: `0px 8px 24px rgba(33, 150, 243, 0.15)`,
                      },
                    }}
                  >
                    <CardContent>
                      <Avatar
                        src={member.avatar}
                        sx={{
                          width: 80,
                          height: 80,
                          mx: 'auto',
                          mb: 2,
                          background: colors.gradient.buttonPrimary,
                        }}
                      />
                      <Typography
                        variant="h6"
                        component="h4"
                        sx={{ fontWeight: 600, mb: 1 }}
                      >
                        {member.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: colors.primary[600], mb: 1 }}
                      >
                        {member.role}
                      </Typography>
                      <Chip
                        label={member.expertise}
                        size="small"
                        sx={{
                          background: colors.primary[50],
                          color: colors.primary[700],
                          fontWeight: 500,
                        }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* What We Don't Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card
            sx={{
              background: colors.gradient.hero,
              border: '1px solid rgba(33, 150, 243, 0.1)',
              p: 4,
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  textAlign: 'center',
                  color: 'text.primary',
                }}
              >
                What We Don&apos;t Do
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  textAlign: 'center',
                  color: 'text.secondary',
                }}
              >
                We believe in transparency and setting clear expectations. Here&apos;s what you won&apos;t get from us:
              </Typography>
              <Grid container spacing={2}>
                {whatWeDontDo.map((item, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircle sx={{ color: colors.primary[500], fontSize: 20 }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};
