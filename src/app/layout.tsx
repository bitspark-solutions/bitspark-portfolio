import type { Metadata } from "next";
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import "./globals.css";

export const metadata: Metadata = {
  title: "Bitspark Solutions - Fintech Software Development Company",
  description: "Leading fintech software development company in Bangladesh. We build secure, scalable payment platforms, lending systems, and neobank applications with PCI DSS compliance.",
  keywords: "fintech software development, payment platform, lending system, neobank, fintech Bangladesh, PCI DSS compliance, fintech solutions, financial technology, payment processing, digital banking",
  authors: [{ name: "Bitspark Solutions" }],
  creator: "Bitspark Solutions",
  publisher: "Bitspark Solutions",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bitsparksolutions.com",
    siteName: "Bitspark Solutions",
    title: "Bitspark Solutions - Fintech Software Development Company",
    description: "Leading fintech software development company in Bangladesh. We build secure, scalable payment platforms, lending systems, and neobank applications with PCI DSS compliance.",
    images: [
      {
        url: "https://bitsparksolutions.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bitspark Solutions - Fintech Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bitsparksol",
    creator: "@bitsparksol",
    title: "Bitspark Solutions - Fintech Software Development Company",
    description: "Leading fintech software development company in Bangladesh. We build secure, scalable payment platforms, lending systems, and neobank applications with PCI DSS compliance.",
    images: ["https://bitsparksolutions.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}