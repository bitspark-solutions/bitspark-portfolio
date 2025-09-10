import React, { useState, useEffect } from 'react';
import { Fab, Tooltip } from '@mui/material';
import { ArrowUpward, Chat } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { colors } from '@/theme/theme';

export const FloatingActionButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleChatClick = () => {
    setShowChat(!showChat);
    // Here you would integrate with your chat system
    console.log('Chat clicked');
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              bottom: 24,
              right: 24,
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            {/* Chat Button */}
            <Tooltip title="Start a conversation" placement="left">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Fab
                  color="primary"
                  onClick={handleChatClick}
                  sx={{
                    background: colors.gradient.buttonPrimary,
                    '&:hover': {
                      background: colors.gradient.buttonSecondary,
                    },
                    boxShadow: '0 8px 32px rgba(33, 150, 243, 0.3)',
                  }}
                >
                  <Chat />
                </Fab>
              </motion.div>
            </Tooltip>

            {/* Back to Top Button */}
            <Tooltip title="Back to top" placement="left">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Fab
                  color="secondary"
                  onClick={scrollToTop}
                  sx={{
                    background: colors.gradient.hero,
                    color: 'white',
                    '&:hover': {
                      background: colors.gradient.buttonSecondary,
                    },
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <ArrowUpward />
                </Fab>
              </motion.div>
            </Tooltip>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Panel (placeholder) */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              bottom: 100,
              right: 24,
              zIndex: 999,
              background: 'white',
              borderRadius: 12,
              padding: 16,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
              border: '1px solid rgba(33, 150, 243, 0.1)',
              minWidth: 300,
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: 12 }}>
              <h4 style={{ margin: 0, color: colors.primary[700] }}>
                Let&apos;s talk about your project
              </h4>
              <p style={{ margin: '8px 0 0 0', color: colors.secondary[600], fontSize: '14px' }}>
                We&apos;re here to help you build your fintech solution
              </p>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                style={{
                  flex: 1,
                  padding: '8px 16px',
                  background: colors.gradient.buttonPrimary,
                  color: 'white',
                  border: 'none',
                  borderRadius: 6,
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
                onClick={() => window.location.href = 'mailto:hello@bitsparksolutions.com'}
              >
                Email Us
              </button>
              <button
                style={{
                  flex: 1,
                  padding: '8px 16px',
                  background: 'transparent',
                  color: colors.primary[700],
                  border: `1px solid ${colors.primary[300]}`,
                  borderRadius: 6,
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
                onClick={() => setShowChat(false)}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
