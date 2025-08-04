import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asante - African-Centered Transformational Learning",
  description: "An Ubuntu-inspired learning platform connecting African heritage with modern wisdom for personal and community transformation.",
  keywords: "African learning, Ubuntu philosophy, transformational education, heritage, wisdom, community",
  authors: [{ name: "Asante Platform" }],
  viewport: "width=device-width, initial-scale=1",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
          {children}
        </div>
      </body>
    </html>
  );
}
