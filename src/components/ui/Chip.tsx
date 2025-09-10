import React from 'react';
import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material';
import { motion } from 'framer-motion';

interface ChipProps extends MuiChipProps {
  animate?: boolean;
}

export const Chip: React.FC<ChipProps> = ({
  animate = true,
  sx,
  ...props
}) => {
  const chipComponent = (
    <MuiChip
      sx={{
        borderRadius: 3,
        fontWeight: 500,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
        },
        ...sx,
      }}
      {...props}
    />
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        {chipComponent}
      </motion.div>
    );
  }

  return chipComponent;
};
