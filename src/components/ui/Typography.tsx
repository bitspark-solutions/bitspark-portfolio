import React from 'react';
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@mui/material';
import { motion } from 'framer-motion';

interface TypographyProps extends MuiTypographyProps {
  children: React.ReactNode;
  gradient?: boolean;
  animate?: boolean;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  gradient = false,
  animate = false,
  sx,
  ...props
}) => {
  const typographyComponent = (
    <MuiTypography
      sx={{
        ...(gradient && {
          background: 'linear-gradient(45deg, #2196f3 30%, #1976d2 90%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }),
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiTypography>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {typographyComponent}
      </motion.div>
    );
  }

  return typographyComponent;
};
