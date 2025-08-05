import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { StorageProvider } from "@/components/providers/storage-provider";
import { LoadingProvider } from "@/components/providers/loading-provider";

// Optimized font loading
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Asante - African-Centered Learning Platform",
  description: "An African-centered transformational learning platform that connects you with your heritage, wisdom traditions, and community for personal and collective growth.",
  keywords: ["African", "learning", "heritage", "wisdom", "community", "ubuntu", "transformation"],
  authors: [{ name: "Asante Platform" }],
  creator: "Asante Platform",
  publisher: "Asante Platform",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://asante-platform.com"),
  openGraph: {
    title: "Asante - African-Centered Learning Platform",
    description: "An African-centered transformational learning platform that connects you with your heritage, wisdom traditions, and community for personal and collective growth.",
    url: "https://asante-platform.com",
    siteName: "Asante Platform",
    images: [
      {
        url: "/images/paths/asante-logo.png",
        width: 1200,
        height: 630,
        alt: "Asante Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asante - African-Centered Learning Platform",
    description: "An African-centered transformational learning platform that connects you with your heritage, wisdom traditions, and community for personal and collective growth.",
    images: ["/images/paths/asante-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ubuntu.className} suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/images/paths/asante-logo.png" />
        
        {/* Performance optimizations */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#d4af37" />
        <meta name="color-scheme" content="light dark" />
        
        {/* Resource hints */}
        <link rel="prefetch" href="/signup" />
        <link rel="prefetch" href="/about" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          defaultTheme="system"
        >
          <StorageProvider>
            <LoadingProvider>
              {children}
            </LoadingProvider>
          </StorageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
