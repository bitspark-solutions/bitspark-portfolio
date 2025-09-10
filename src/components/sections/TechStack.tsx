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
  Code,
  Cloud,
  Security,
  Speed,
  Storage,
  Api,
  BugReport,
  Build,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { colors } from '@/theme/theme';

const techCategories = [
  {
    icon: Code,
    title: 'Frontend',
    description: 'Modern, responsive user interfaces',
    technologies: [
      { name: 'React', category: 'Framework', level: 'Expert' },
      { name: 'Next.js', category: 'Framework', level: 'Expert' },
      { name: 'TypeScript', category: 'Language', level: 'Expert' },
      { name: 'Material UI', category: 'UI Library', level: 'Expert' },
      { name: 'Tailwind CSS', category: 'Styling', level: 'Advanced' },
      { name: 'Framer Motion', category: 'Animation', level: 'Advanced' },
    ],
  },
  {
    icon: Api,
    title: 'Backend',
    description: 'Scalable server-side solutions',
    technologies: [
      { name: 'Node.js', category: 'Runtime', level: 'Expert' },
      { name: '.NET Core', category: 'Framework', level: 'Expert' },
      { name: 'Go', category: 'Language', level: 'Advanced' },
      { name: 'Python', category: 'Language', level: 'Advanced' },
      { name: 'Express.js', category: 'Framework', level: 'Expert' },
      { name: 'FastAPI', category: 'Framework', level: 'Advanced' },
    ],
  },
  {
    icon: Storage,
    title: 'Database',
    description: 'Reliable data storage solutions',
    technologies: [
      { name: 'PostgreSQL', category: 'SQL', level: 'Expert' },
      { name: 'MongoDB', category: 'NoSQL', level: 'Expert' },
      { name: 'Redis', category: 'Cache', level: 'Expert' },
      { name: 'SQL Server', category: 'SQL', level: 'Advanced' },
      { name: 'MySQL', category: 'SQL', level: 'Advanced' },
      { name: 'Elasticsearch', category: 'Search', level: 'Advanced' },
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Scalable infrastructure and deployment',
    technologies: [
      { name: 'AWS', category: 'Cloud', level: 'Expert' },
      { name: 'Azure', category: 'Cloud', level: 'Expert' },
      { name: 'Docker', category: 'Containerization', level: 'Expert' },
      { name: 'Kubernetes', category: 'Orchestration', level: 'Advanced' },
      { name: 'Terraform', category: 'Infrastructure', level: 'Advanced' },
      { name: 'GitHub Actions', category: 'CI/CD', level: 'Expert' },
    ],
  },
  {
    icon: Security,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security measures',
    technologies: [
      { name: 'OAuth 2.0', category: 'Authentication', level: 'Expert' },
      { name: 'JWT', category: 'Authorization', level: 'Expert' },
      { name: 'SSL/TLS', category: 'Encryption', level: 'Expert' },
      { name: 'PCI DSS', category: 'Compliance', level: 'Expert' },
      { name: 'SOC 2', category: 'Compliance', level: 'Expert' },
      { name: 'GDPR', category: 'Compliance', level: 'Expert' },
    ],
  },
  {
    icon: Speed,
    title: 'Performance & Monitoring',
    description: 'Optimization and observability tools',
    technologies: [
      { name: 'Prometheus', category: 'Monitoring', level: 'Advanced' },
      { name: 'Grafana', category: 'Visualization', level: 'Advanced' },
      { name: 'New Relic', category: 'APM', level: 'Advanced' },
      { name: 'Lighthouse', category: 'Performance', level: 'Expert' },
      { name: 'Webpack', category: 'Bundling', level: 'Expert' },
      { name: 'Vite', category: 'Build Tool', level: 'Advanced' },
    ],
  },
];

const practices = [
  {
    icon: Build,
    title: 'Development Practices',
    items: [
      'Test-Driven Development (TDD)',
      'Continuous Integration/Deployment',
      'Code Reviews & Pair Programming',
      'Agile/Scrum Methodology',
      'Clean Architecture Principles',
      'SOLID Design Patterns',
    ],
  },
  {
    icon: BugReport,
    title: 'Quality Assurance',
    items: [
      'Unit Testing (Jest, NUnit)',
      'Integration Testing',
      'End-to-End Testing (Playwright)',
      'Performance Testing',
      'Security Testing & Penetration Testing',
      'Automated Testing Pipelines',
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Expert':
      return colors.primary[500];
    case 'Advanced':
      return colors.primary[400];
    default:
      return colors.secondary[500];
  }
};

export const TechStack: React.FC = () => {
  return (
    <Box
      id="tech-stack"
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
                background: 'linear-gradient(45deg, #1976d2 30%, #0d47a1 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Tech Stack & Practices
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                maxWidth: '700px',
                mx: 'auto',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.6,
              }}
            >
              Cutting-edge technologies and proven practices that power 
              secure, scalable fintech solutions.
            </Typography>
          </Box>
        </motion.div>

        {/* Technology Categories */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {techCategories.map((category, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={category.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
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
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          background: colors.gradient.buttonPrimary,
                          mr: 2,
                        }}
                      >
                        <category.icon sx={{ color: 'white', fontSize: 28 }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{ fontWeight: 600, mb: 1 }}
                        >
                          {category.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary' }}
                        >
                          {category.description}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {category.technologies.map((tech, techIndex) => (
                        <Box
                          key={techIndex}
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            p: 1.5,
                            borderRadius: 1,
                            background: colors.gradient.hero,
                            border: '1px solid rgba(33, 150, 243, 0.05)',
                          }}
                        >
                          <Box>
                            <Typography
                              variant="body2"
                              sx={{ fontWeight: 600, color: 'white' }}
                            >
                              {tech.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                            >
                              {tech.category}
                            </Typography>
                          </Box>
                          <Chip
                            label={tech.level}
                            size="small"
                            sx={{
                              background: `${getLevelColor(tech.level)}20`,
                              color: getLevelColor(tech.level),
                              fontWeight: 500,
                              border: `1px solid ${getLevelColor(tech.level)}30`,
                            }}
                          />
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Development Practices */}
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
            Development Practices
          </Typography>

          <Grid container spacing={4}>
            {practices.map((practice, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={practice.title}>
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
                      background: 'white',
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
                        <practice.icon sx={{ color: 'white', fontSize: 28 }} />
                      </Box>
                      <Typography
                        variant="h6"
                        component="h4"
                        sx={{ fontWeight: 600 }}
                      >
                        {practice.title}
                      </Typography>
                    </Box>

                    <List dense>
                      {practice.items.map((item, itemIndex) => (
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
              Ready to build with the latest technologies?
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Chip
                label="Discuss Your Tech Requirements"
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
