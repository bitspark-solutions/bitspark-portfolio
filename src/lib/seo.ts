import { NextSeoProps } from 'next-seo';

export const defaultSEO: NextSeoProps = {
  title: 'Bitspark Solutions - Fintech Software Development Company',
  description: 'Leading fintech software development company in Bangladesh. We build secure, scalable payment platforms, lending systems, and neobank applications with PCI DSS compliance.',
  canonical: 'https://bitsparksolutions.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bitsparksolutions.com',
    siteName: 'Bitspark Solutions',
    title: 'Bitspark Solutions - Fintech Software Development Company',
    description: 'Leading fintech software development company in Bangladesh. We build secure, scalable payment platforms, lending systems, and neobank applications with PCI DSS compliance.',
    images: [
      {
        url: 'https://bitsparksolutions.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bitspark Solutions - Fintech Software Development',
      },
    ],
  },
  twitter: {
    handle: '@bitsparksol',
    site: '@bitsparksol',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'fintech software development, payment platform, lending system, neobank, fintech Bangladesh, PCI DSS compliance, fintech solutions, financial technology, payment processing, digital banking',
    },
    {
      name: 'author',
      content: 'Bitspark Solutions',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#2196f3',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
};

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Bitspark Solutions',
  url: 'https://bitsparksolutions.com',
  logo: 'https://bitsparksolutions.com/logo.png',
  description: 'Leading fintech software development company in Bangladesh specializing in secure, scalable financial technology solutions.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dhaka',
    addressCountry: 'Bangladesh',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+880-1234-567890',
    contactType: 'customer service',
    email: 'hello@bitsparksolutions.com',
  },
  sameAs: [
    'https://linkedin.com/company/bitsparksolutions',
    'https://twitter.com/bitsparksol',
    'https://github.com/bitsparksolutions',
  ],
  service: [
    {
      '@type': 'Service',
      name: 'Payment Platform Development',
      description: 'Secure, PCI DSS compliant payment processing solutions',
    },
    {
      '@type': 'Service',
      name: 'Lending System Development',
      description: 'Digital lending platforms with automated underwriting',
    },
    {
      '@type': 'Service',
      name: 'Neobank Application Development',
      description: 'Modern digital banking solutions and mobile apps',
    },
  ],
};
