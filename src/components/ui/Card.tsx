import React from 'react';
import { Card as MuiCard, CardProps as MuiCardProps, CardContent, CardActions } from '@mui/material';
import { motion } from 'framer-motion';

interface CardProps extends MuiCardProps {
  children: React.ReactNode;
  hover?: boolean;
  animate?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  hover = true,
  animate = true,
  sx,
  ...props
}) => {
  const cardComponent = (
    <MuiCard
      sx={{
        borderRadius: 3,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': hover ? {
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)',
          transform: 'translateY(-4px)',
        } : {},
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiCard>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        {cardComponent}
      </motion.div>
    );
  }

  return cardComponent;
};

export { CardContent, CardActions };
