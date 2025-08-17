import React from 'react';
import { Box } from '@mui/material';
import Hero from '@/components/sections/hero';
import Integrations from '@/components/sections/integrations';

export default function Home() {
  return (
    <Box component="div" role="document">
      {/* Hero Section */}
      <section aria-labelledby="hero-heading">
        <Hero />
      </section>
      
      {/* Integrations Section */}
      <section aria-labelledby="integrations-heading">
        <Integrations />
      </section>
    </Box>
  );
}
