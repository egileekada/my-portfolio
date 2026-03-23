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
  title: "Egile Ekada | Frontend Developer",
  description: "Frontend developer building modern web and mobile applications.",

  openGraph: {
    title: "Egile Ekada | Frontend Developer",
    description: "Frontend developer building modern web and mobile applications.",
    url: "https://yourdomain.com",
    siteName: "Egile Portfolio",
    images: [
      {
        url: "/images/me.jpg", // 👈 your image path
        width: 1200,
        height: 630,
        alt: "Egile Ekada Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Egile Ekada | Frontend Developer",
    description: "Frontend developer building modern web and mobile applications.",
    images: ["/images/me.jpg"], // 👈 same image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
