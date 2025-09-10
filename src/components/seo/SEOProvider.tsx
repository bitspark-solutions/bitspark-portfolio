'use client';

import { DefaultSeo } from 'next-seo';
import { defaultSEO } from '@/lib/seo';

export const SEOProvider: React.FC = () => {
  return <DefaultSeo {...defaultSEO} />;
};
