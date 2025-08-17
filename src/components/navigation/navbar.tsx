'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  Container,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  LightMode,
  DarkMode,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAccessibility, useRovingTabIndex, useEscapeKey } from '@/hooks/use-accessibility';
import { KEYS } from '@/utils/keyboard-navigation';

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Insights', href: '/insights' },
  { label: 'Engagement', href: '#engagement' },
  { label: 'Contact', href: '/contact' },
];

interface NavbarProps {
  onThemeToggle?: () => void;
  isDarkMode?: boolean;
}

export default function Navbar({ onThemeToggle, isDarkMode = true }: NavbarProps) {
  const theme = useTheme();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { shouldReduceMotion, announce } = useAccessibility();
  const navRef = useRovingTabIndex('a, button', 'horizontal');

  // Handle mobile drawer close on escape
  useEscapeKey(() => {
    if (mobileOpen) {
      setMobileOpen(false);
      announce('Navigation menu closed');
    }
  }, mobileOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile drawer toggle
  const handleDrawerToggle = () => {
    const newState = !mobileOpen;
    setMobileOpen(newState);
    announce(newState ? 'Navigation menu opened' : 'Navigation menu closed');
  };

  // Handle navigation
  const handleNavigation = (href: string, external = false) => {
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (href.startsWith('#')) {
      // Smooth scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
      }
    } else {
      router.push(href);
    }
    
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, href: string, external = false) => {
    if (event.key === KEYS.ENTER || event.key === KEYS.SPACE) {
      event.preventDefault();
      handleNavigation(href, external);
    }
  };

  // Animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const drawerVariants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.3,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
    exit: {
      x: '100%',
      transition: {
        duration: shouldReduceMotion ? 0 : 0.3,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const staggerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.4,
      },
    },
  };

  // Desktop navigation
  const DesktopNav = () => (
    <Box
      component="nav"
      ref={navRef}
      sx={{
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        gap: 1,
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      {navItems.map((item) => (
        <Button
          key={item.href}
          component={Link}
          href={item.href}
          onClick={(e) => {
            if (item.href.startsWith('#')) {
              e.preventDefault();
              handleNavigation(item.href);
            }
          }}
          onKeyDown={(e) => handleKeyDown(e, item.href, item.external)}
          sx={{
            color: 'text.primary',
            fontWeight: 500,
            px: 2,
            py: 1,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '0.95rem',
            transition: theme.transitions.create(['background-color', 'transform'], {
              duration: shouldReduceMotion ? 0 : theme.transitions.duration.short,
            }),
            '&:hover': {
              backgroundColor: 'action.hover',
              transform: shouldReduceMotion ? 'none' : 'translateY(-1px)',
            },
            '&:focus-visible': {
              outline: `2px solid ${theme.palette.primary.main}`,
              outlineOffset: 2,
            },
          }}
          aria-label={`Navigate to ${item.label}`}
        >
          {item.label}
        </Button>
      ))}
      
      {/* Theme toggle */}
      <IconButton
        onClick={onThemeToggle}
        onKeyDown={(e) => {
          if (e.key === KEYS.ENTER || e.key === KEYS.SPACE) {
            e.preventDefault();
            onThemeToggle?.();
          }
        }}
        sx={{
          ml: 1,
          color: 'text.primary',
          '&:focus-visible': {
            outline: `2px solid ${theme.palette.primary.main}`,
            outlineOffset: 2,
          },
        }}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        {isDarkMode ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Box>
  );

  // Mobile drawer
  const MobileDrawer = () => (
    <Drawer
      variant="temporary"
      anchor="right"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile
      }}
      sx={{
        display: { xs: 'block', md: 'none' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: 280,
          backgroundColor: 'background.paper',
          borderLeft: `1px solid ${theme.palette.divider}`,
        },
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ height: '100%' }}
          >
            <Box sx={{ p: 2, borderBottom: `1px solid ${theme.palette.divider}` }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                  Menu
                </Typography>
                <IconButton
                  onClick={handleDrawerToggle}
                  onKeyDown={(e) => {
                    if (e.key === KEYS.ENTER || e.key === KEYS.SPACE) {
                      e.preventDefault();
                      handleDrawerToggle();
                    }
                  }}
                  sx={{
                    '&:focus-visible': {
                      outline: `2px solid ${theme.palette.primary.main}`,
                      outlineOffset: 2,
                    },
                  }}
                  aria-label="Close navigation menu"
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
            
            <motion.div variants={staggerVariants} initial="hidden" animate="visible">
              <List sx={{ pt: 0 }}>
                {navItems.map((item) => (
                  <motion.div key={item.href} variants={itemVariants}>
                    <ListItem disablePadding>
                      <ListItemButton
                        component={Link}
                        href={item.href}
                        onClick={(e) => {
                          if (item.href.startsWith('#')) {
                            e.preventDefault();
                          }
                          handleNavigation(item.href, item.external);
                        }}
                        onKeyDown={(e) => handleKeyDown(e, item.href, item.external)}
                        sx={{
                          py: 2,
                          px: 3,
                          '&:focus-visible': {
                            outline: `2px solid ${theme.palette.primary.main}`,
                            outlineOffset: -2,
                          },
                        }}
                        aria-label={`Navigate to ${item.label}`}
                      >
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{
                            fontWeight: 500,
                            fontSize: '1.1rem',
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </motion.div>
                ))}
                
                <motion.div variants={itemVariants}>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={onThemeToggle}
                      onKeyDown={(e) => {
                        if (e.key === KEYS.ENTER || e.key === KEYS.SPACE) {
                          e.preventDefault();
                          onThemeToggle?.();
                        }
                      }}
                      sx={{
                        py: 2,
                        px: 3,
                        '&:focus-visible': {
                          outline: `2px solid ${theme.palette.primary.main}`,
                          outlineOffset: -2,
                        },
                      }}
                      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        {isDarkMode ? <LightMode /> : <DarkMode />}
                        <Typography sx={{ fontWeight: 500, fontSize: '1.1rem' }}>
                          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                        </Typography>
                      </Box>
                    </ListItemButton>
                  </ListItem>
                </motion.div>
              </List>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Drawer>
  );

  return (
    <>
      <motion.div
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            backgroundColor: isScrolled
              ? 'rgba(11, 15, 26, 0.95)'
              : 'transparent',
            backdropFilter: isScrolled ? 'blur(20px)' : 'none',
            borderBottom: isScrolled
              ? `1px solid ${theme.palette.divider}`
              : 'none',
            transition: theme.transitions.create(
              ['background-color', 'backdrop-filter', 'border-bottom'],
              {
                duration: shouldReduceMotion ? 0 : theme.transitions.duration.standard,
              }
            ),
          }}
        >
          <Container maxWidth="xl">
            <Toolbar
              sx={{
                justifyContent: 'space-between',
                minHeight: { xs: 64, sm: 72 },
                px: { xs: 2, sm: 3 },
              }}
            >
              {/* Logo */}
              <Box
                component={Link}
                href="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: 'text.primary',
                  '&:focus-visible': {
                    outline: `2px solid ${theme.palette.primary.main}`,
                    outlineOffset: 2,
                    borderRadius: 1,
                  },
                }}
                aria-label="Bitspark Solutions - Home"
              >
                <Image
                  src="/logo.png"
                  alt="Bitspark Logo"
                  width={40}
                  height={40}
                  style={{ marginRight: '12px' }}
                />
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontFamily: 'Sora, sans-serif',
                    fontWeight: 700,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: '1.5rem', sm: '1.75rem' },
                  }}
                >
                  Bitspark
                </Typography>
              </Box>

              {/* Desktop Navigation */}
              <DesktopNav />

              {/* Mobile Menu Button */}
              <IconButton
                color="inherit"
                aria-label="Open navigation menu"
                edge="end"
                onClick={handleDrawerToggle}
                onKeyDown={(e) => {
                  if (e.key === KEYS.ENTER || e.key === KEYS.SPACE) {
                    e.preventDefault();
                    handleDrawerToggle();
                  }
                }}
                sx={{
                  display: { md: 'none' },
                  '&:focus-visible': {
                    outline: `2px solid ${theme.palette.primary.main}`,
                    outlineOffset: 2,
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>

      {/* Mobile Drawer */}
      <MobileDrawer />

      {/* Skip to main content link */}
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: 'absolute',
          top: -40,
          left: 16,
          zIndex: 9999,
          px: 2,
          py: 1,
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          borderRadius: 1,
          textDecoration: 'none',
          fontSize: '0.875rem',
          fontWeight: 500,
          '&:focus': {
            top: 16,
          },
        }}
        onClick={(e) => {
          e.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
          }
        }}
      >
        Skip to main content
      </Box>
    </>
  );
}