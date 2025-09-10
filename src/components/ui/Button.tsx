import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { motion } from 'framer-motion';

interface ButtonProps extends MuiButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  animate?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  size = 'medium',
  children,
  animate = true,
  sx,
  ...props
}) => {
  const buttonComponent = (
    <MuiButton
      variant={variant}
      size={size}
      sx={{
        borderRadius: 2,
        textTransform: 'none',
        fontWeight: 600,
        px: size === 'large' ? 4 : size === 'small' ? 2 : 3,
        py: size === 'large' ? 2 : size === 'small' ? 1 : 1.5,
        fontSize: size === 'large' ? '1.1rem' : size === 'small' ? '0.875rem' : '1rem',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );

  if (animate) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {buttonComponent}
      </motion.div>
    );
  }

  return buttonComponent;
};
