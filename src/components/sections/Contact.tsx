'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Send,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <Box
      id="contact"
      sx={{
        py: 12,
        background: 'linear-gradient(135deg, #2196f3 0%, #212121 100%)',
        color: 'white',
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
                color: 'white',
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                maxWidth: '700px',
                mx: 'auto',
                opacity: 0.9,
                lineHeight: 1.6,
              }}
            >
              Ready to build your fintech solution? Let&apos;s discuss your project requirements
              and create something amazing together.
            </Typography>
          </Box>

          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid size={{ xs: 12, md: 8 }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                      Send us a message
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: 'white',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                              '&.Mui-focused': {
                                color: 'white',
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Email"
                          type="email"
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: 'white',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                              '&.Mui-focused': {
                                color: 'white',
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Company"
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: 'white',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                              '&.Mui-focused': {
                                color: 'white',
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Message"
                          multiline
                          rows={4}
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: 'white',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                              '&.Mui-focused': {
                                color: 'white',
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <Button
                          variant="contained"
                          size="large"
                          startIcon={<Send />}
                          sx={{
                            background: 'linear-gradient(45deg, #42a5f5 30%, #2196f3 90%)',
                            '&:hover': {
                              background: 'linear-gradient(45deg, #2196f3 30%, #42a5f5 90%)',
                            },
                            py: 1.5,
                            px: 4,
                            fontSize: '1.1rem',
                            fontWeight: 600,
                          }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Contact Info */}
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                    Contact Information
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Email sx={{ color: '#42a5f5', fontSize: 24 }} />
                      <Box>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          Email
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          hello@bitsparksolutions.com
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Phone sx={{ color: '#42a5f5', fontSize: 24 }} />
                      <Box>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          Phone
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          +880 123 456 7890
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <LocationOn sx={{ color: '#42a5f5', fontSize: 24 }} />
                      <Box>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          Location
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          Dhaka, Bangladesh
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Why Choose Us?
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {[
                      'PCI DSS Compliant Solutions',
                      '24/7 Technical Support',
                      'Agile Development Process',
                      'Scalable Architecture',
                      'Security-First Approach',
                    ].map((item, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: '#42a5f5',
                          }}
                        />
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};