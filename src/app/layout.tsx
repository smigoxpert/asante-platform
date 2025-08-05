import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { LoadingProvider } from "@/components/providers/loading-provider";
import { GlobalLoading } from "@/components/ui/global-loading";
import { PageTransition } from "@/components/ui/page-transition";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asante - African-Centered Transformational Learning",
  description: "An Ubuntu-inspired learning platform connecting African heritage with modern wisdom for personal and community transformation.",
  keywords: "African learning, Ubuntu philosophy, transformational education, heritage, wisdom, community",
  authors: [{ name: "Asante Platform" }],
  robots: "index, follow",
  openGraph: {
    title: "Asante - African-Centered Transformational Learning",
    description: "An Ubuntu-inspired learning platform connecting African heritage with modern wisdom for personal and community transformation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asante - African-Centered Transformational Learning",
    description: "An Ubuntu-inspired learning platform connecting African heritage with modern wisdom for personal and community transformation.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

function LoadingStateManager() {
  return (
    <>
      <GlobalLoading />
      <PageTransition />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.className} antialiased`}>
        <LoadingProvider>
          <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
            {children}
          </div>
          <LoadingStateManager />
        </LoadingProvider>
      </body>
    </html>
  );
}
