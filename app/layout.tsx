import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sakura Pipe Udhyog | HDPE Pipe Manufacturer in Nepal — Butwal",
  description: "Leading manufacturer of premium HDPE & PVC pipes in Nepal. Serving all 77 districts with NS 40 grade water supply, irrigation, and sewerage solutions.",
  keywords: ["HDPE pipe Nepal", "PVC pipe manufacturer", "Sakura Pipe Nepal", "Water supply pipes Butwal"],
  openGraph: {
    title: "Sakura Pipe Udhyog | Premium Pipes in Nepal",
    description: "Leading manufacturer of premium HDPE & PVC pipes for Nepal's infrastructure.",
    url: "https://sakurapipe.vercel.app",
    siteName: "Sakura Pipe Udhyog",
    images: [
      {
        url: "https://sakurapipe.vercel.app/images/about1.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "UmerBYYgJ10fQqgiRV16WY1d3ZvLDOH7eMUVjXdNscc",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any" },
      { url: "/images/logo.png", sizes: "any" },
    ],
    apple: "/images/logo.png",
  },
  alternates: {
    canonical: "https://sakurapipe.vercel.app",
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
        style={{ fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary font-bold top-0 left-0">
          Skip to content
        </a>
        <WhatsAppFloat />
        {children}
      </body>
    </html>
  );
}
