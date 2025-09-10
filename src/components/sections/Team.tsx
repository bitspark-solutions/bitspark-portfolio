'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Button, Chip } from '@mui/material';
import { LinkedIn, GitHub, Code, Security, Speed, Group, School } from '@mui/icons-material';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Ahmed Rahman',
    role: 'Founder & CTO',
    bio: '15+ years building scalable fintech platforms. Former lead architect at major payment processors.',
    expertise: ['System Architecture', 'Fintech', 'Security'],
    image: '/images/team/ahmed-rahman.jpg',
    linkedin: 'https://linkedin.com/in/ahmed-rahman',
    github: 'https://github.com/ahmed-rahman'
  },
  {
    name: 'Fatima Khan',
    role: 'Lead Backend Engineer',
    bio: 'Expert in .NET Core and microservices architecture. Specializes in payment processing systems.',
    expertise: ['C#/.NET', 'Microservices', 'Payments'],
    image: '/images/team/fatima-khan.jpg',
    linkedin: 'https://linkedin.com/in/fatima-khan',
    github: 'https://github.com/fatima-khan'
  },
  {
    name: 'Mohammad Ali',
    role: 'Senior Frontend Engineer',
    bio: 'React and Next.js specialist with a focus on enterprise-grade user experiences.',
    expertise: ['React', 'Next.js', 'TypeScript'],
    image: '/images/team/mohammad-ali.jpg',
    linkedin: 'https://linkedin.com/in/mohammad-ali',
    github: 'https://github.com/mohammad-ali'
  },
  {
    name: 'Sara Ahmed',
    role: 'DevOps Engineer',
    bio: 'Kubernetes and cloud infrastructure expert. Ensures 99.9% uptime for critical systems.',
    expertise: ['Kubernetes', 'AWS', 'CI/CD'],
    image: '/images/team/sara-ahmed.jpg',
    linkedin: 'https://linkedin.com/in/sara-ahmed',
    github: 'https://github.com/sara-ahmed'
  },
  {
    name: 'Rashid Hassan',
    role: 'Security Engineer',
    bio: 'Cybersecurity specialist with deep expertise in fintech compliance and threat modeling.',
    expertise: ['Security', 'Compliance', 'Threat Modeling'],
    image: '/images/team/rashid-hassan.jpg',
    linkedin: 'https://linkedin.com/in/rashid-hassan',
    github: 'https://github.com/rashid-hassan'
  },
  {
    name: 'Aisha Mahmood',
    role: 'Product Manager',
    bio: 'Bridges technical complexity with business requirements. Former fintech product lead.',
    expertise: ['Product Strategy', 'Fintech', 'User Research'],
    image: '/images/team/aisha-mahmood.jpg',
    linkedin: 'https://linkedin.com/in/aisha-mahmood',
    github: 'https://github.com/aisha-mahmood'
  }
];

const values = [
  {
    title: 'Technical Excellence',
    description: 'We maintain the highest standards in code quality, architecture, and security.',
    icon: Code
  },
  {
    title: 'Security First',
    description: 'Every decision is made with security and compliance in mind.',
    icon: Security
  },
  {
    title: 'Performance Focus',
    description: 'We optimize for speed, scalability, and reliability in everything we build.',
    icon: Speed
  },
  {
    title: 'Collaborative Culture',
    description: 'We believe in knowledge sharing, mentorship, and continuous learning.',
    icon: Group
  }
];

const hiring = [
  {
    role: 'Senior Full-Stack Engineer',
    type: 'Full-time',
    location: 'Dhaka, Bangladesh (Remote OK)',
    requirements: ['5+ years experience', 'React/Next.js', 'C#/.NET', 'Fintech experience preferred']
  },
  {
    role: 'DevOps Engineer',
    type: 'Full-time',
    location: 'Dhaka, Bangladesh (Remote OK)',
    requirements: ['3+ years experience', 'Kubernetes', 'AWS/Azure', 'CI/CD expertise']
  },
  {
    role: 'Security Engineer',
    type: 'Full-time',
    location: 'Dhaka, Bangladesh (Remote OK)',
    requirements: ['4+ years experience', 'Cybersecurity', 'Compliance', 'Fintech background']
  }
];

export const Team: React.FC = () => {
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
                background: 'linear-gradient(45deg, #1976d2 30%, #0d47a1 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Team & Culture
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
              Meet the talented individuals building the future of fintech. 
              We&apos;re a diverse team of engineers, designers, and product experts 
              passionate about creating secure, scalable solutions.
            </Typography>
          </Box>
        </motion.div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={4} mb={8}>
            {teamMembers.map((member) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={member.name}>
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
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <Avatar
                      src={member.image}
                      sx={{
                        width: 120,
                        height: 120,
                        mx: 'auto',
                        mb: 2,
                        border: '4px solid #e3f2fd'
                      }}
                    />
                    <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mb: 2, color: '#2196f3', fontWeight: 500 }}>
                      {member.role}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 3, opacity: 0.8, lineHeight: 1.6 }}>
                      {member.bio}
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={1} justifyContent="center" mb={3}>
                      {member.expertise.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            backgroundColor: '#e3f2fd',
                            color: '#2196f3',
                            fontSize: '0.75rem'
                          }}
                        />
                      ))}
                    </Box>
                    <Box display="flex" gap={1} justifyContent="center">
                      <Button
                        size="small"
                        startIcon={<LinkedIn />}
                        sx={{ color: '#2196f3' }}
                      >
                        LinkedIn
                      </Button>
                      <Button
                        size="small"
                        startIcon={<GitHub />}
                        sx={{ color: '#2196f3' }}
                      >
                        GitHub
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" component="h3" sx={{ mb: 4, fontWeight: 600, textAlign: 'center' }}>
            Our Values
          </Typography>
          <Grid container spacing={4} mb={8}>
            {values.map((value) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={value.title}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    textAlign: 'center',
                    p: 3
                  }}
                >
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: '#2196f3',
                      mx: 'auto',
                      mb: 2
                    }}
                  >
                    <value.icon sx={{ fontSize: 30 }} />
                  </Avatar>
                  <Typography variant="h6" component="h4" sx={{ mb: 2, fontWeight: 600 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.6 }}>
                    {value.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Diversity & Inclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mb: 8,
              p: 4,
              background: 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)',
              borderRadius: 3,
              color: 'white',
              textAlign: 'center'
            }}
          >
            <Typography variant="h4" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
              Diversity & Inclusion
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              We believe diverse teams build better products. Our team represents different 
              backgrounds, experiences, and perspectives, united by our passion for 
              technical excellence and innovation.
            </Typography>
            <Box display="flex" justifyContent="center" gap={4} flexWrap="wrap">
              <Box textAlign="center">
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#90caf9' }}>
                  40%
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Women in Engineering
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#90caf9' }}>
                  6
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Countries Represented
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#90caf9' }}>
                  15+
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Years Average Experience
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" component="h3" sx={{ mb: 4, fontWeight: 600, textAlign: 'center' }}>
            Join Our Team
          </Typography>
          <Grid container spacing={4}>
            {hiring.map((position) => (
              <Grid size={{ xs: 12, md: 4 }} key={position.role}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" component="h4" sx={{ mb: 1, fontWeight: 600 }}>
                      {position.role}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mb: 2, color: '#2196f3' }}>
                      {position.type} • {position.location}
                    </Typography>
                    <Box mb={3}>
                      {position.requirements.map((req, reqIndex) => (
                        <Chip
                          key={reqIndex}
                          label={req}
                          size="small"
                          sx={{
                            backgroundColor: '#e3f2fd',
                            color: '#2196f3',
                            mr: 1,
                            mb: 1,
                            fontSize: '0.75rem'
                          }}
                        />
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        background: 'linear-gradient(45deg, #42a5f5 30%, #2196f3 90%)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #2196f3 30%, #42a5f5 90%)'
                        }
                      }}
                    >
                      Apply Now
                    </Button>
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
          transition={{ duration: 0.6, delay: 0.6 }}
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
              Ready to Build the Future of Fintech?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, opacity: 0.8, maxWidth: 500, mx: 'auto' }}>
              We&apos;re always looking for talented individuals who share our passion 
              for technical excellence and innovation. Join us in building secure, 
              scalable fintech solutions.
            </Typography>
            <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap">
              <Button
                variant="contained"
                size="large"
                startIcon={<School />}
                sx={{
                  background: 'linear-gradient(45deg, #42a5f5 30%, #2196f3 90%)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #2196f3 30%, #42a5f5 90%)'
                  }
                }}
              >
                View All Positions
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
                Learn About Culture
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
