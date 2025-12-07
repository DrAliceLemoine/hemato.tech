import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HematoTech - Predictive Hematology Intelligence",
  description: "Advanced AI-driven hematological analytics for healthcare professionals",
  keywords: ["hematology", "AI", "predictive analytics", "healthcare", "blood analysis"],
  authors: [{ name: "HematoTech" }],
  openGraph: {
    title: "HematoTech - Predictive Hematology Intelligence",
    description: "Advanced AI-driven hematological analytics for healthcare professionals",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
