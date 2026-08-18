import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Adity Dance CIC — Celebrating Culture & Creativity",
  description: "Adity Dance CIC — celebrating culture and creativity through the joy of dance. Community events, performances, and gallery moments in Dagenham, Essex and across the UK.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${outfit.variable} ${cormorant.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen overflow-x-hidden antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
