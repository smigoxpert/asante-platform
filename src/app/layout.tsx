import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LoadingProvider } from "@/components/providers/loading-provider";
import { StorageProvider } from "@/components/providers/storage-provider";
import { AuthProvider } from "@/hooks/useAuth";
import { AuthGuard } from "@/components/auth/auth-guard";
import "./globals.css";
import { GlobalLoading } from "@/components/ui/global-loading";
import { PageTransition } from "@/components/ui/page-transition";
import { StorageMonitor } from "@/components/ui/storage-monitor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asante - African Heritage Discovery Platform",
  description: "Discover your African roots through advanced heritage analysis, cultural connections, and ancestral wisdom. Join the Asante community to explore your heritage journey.",
  keywords: "African heritage, ancestry, cultural discovery, heritage analysis, African roots, cultural identity",
  authors: [{ name: "Asante Team" }],
  creator: "Asante Platform",
  publisher: "Asante",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://asante-platform.com'),
  openGraph: {
    title: "Asante - African Heritage Discovery Platform",
    description: "Discover your African roots through advanced heritage analysis and cultural connections.",
    url: 'https://asante-platform.com',
    siteName: 'Asante',
    images: [
      {
        url: '/images/paths/asante-logo.png',
        width: 1200,
        height: 630,
        alt: 'Asante Heritage Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Asante - African Heritage Discovery Platform",
    description: "Discover your African roots through advanced heritage analysis and cultural connections.",
    images: ['/images/paths/asante-logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>
          <StorageProvider>
            <LoadingProvider>
              <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
                <AuthGuard>
                  {children}
                </AuthGuard>
              </div>
              <GlobalLoading />
              <PageTransition />
              <StorageMonitor />
            </LoadingProvider>
          </StorageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
