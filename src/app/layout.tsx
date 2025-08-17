import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LayoutWrapper } from "@/components/layout/layout-wrapper";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bitspark Solutions - Enterprise Systems & Integrations",
  description: "ERP, CRM, e-commerce, and banking solutions with deep payments integrations for garments, logistics, and fintech industries.",
  keywords: "ERP, CRM, e-commerce, banking, payments, Adyen, Stripe, Unit.co, SSLCommerz, garments, logistics, fintech",
  authors: [{ name: "Bitspark Solutions" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${sora.variable}`}>
        <ThemeProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
