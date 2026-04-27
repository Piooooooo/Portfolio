import type { Metadata } from "next";
import { JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Affif Chowdhury | CSE Student Portfolio",
  description:
    "Portfolio of a Computer Science and Engineering student focused on full-stack development and internship opportunities.",
  applicationName: "Developer Portfolio",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Affif Chowdhury" }],
  creator: "Affif Chowdhury",
  category: "Technology",
  keywords: [
    "Affif Chowdhury",
    "CSE Student",
    "Software Engineer Portfolio",
    "Next.js Portfolio",
    "Full Stack Developer",
  ],
  openGraph: {
    title: "Affif Chowdhury | CSE Student Portfolio",
    description:
      "Portfolio showcasing projects, skills, and experience for internship and junior developer opportunities.",
    type: "website",
    locale: "en_US",
    siteName: "Affif Chowdhury Portfolio",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affif Chowdhury | CSE Student Portfolio",
    description:
      "Portfolio showcasing projects, skills, and experience for internship and junior developer opportunities.",
  },
  robots: {
    index: true,
    follow: true,
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
      data-theme="dark"
      className={`${sora.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
