import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "MAS Logistics | Premium Global Freight Forwarding",
  description: "MAS Logistics is India's leading provider of freight forwarding and supply chain management services. Specializing in sea, sky, and land container shipments globally.",
  keywords: ["Logistics", "Freight Forwarding", "Container Shipment", "Sea Freight", "Air Freight", "Land Freight", "India Logistics"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
