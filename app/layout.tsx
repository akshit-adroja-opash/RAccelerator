import type { Metadata } from "next";
import { Noto_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/data/content";

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

const poppins = Poppins({
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  metadataBase: new URL(siteContent.meta.url),
  openGraph: {
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    url: siteContent.meta.url,
    siteName: "RAccelerator MedTech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#071018" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className={`${notoSans.variable} ${poppins.variable} antialiased min-h-screen selection:bg-[#065F4A]/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
