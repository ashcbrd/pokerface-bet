import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokerface Bets",
  description:
    "Introducing the $FACE ecosystem that integrates eGaming, casino elements, and cryptocurrency, this project promises to create a diverse and inclusive ecosystem that caters to a wide range of wagering activities and preferences. Emphasizing accessibility, security, and a community-driven approach, the $FACE Token is positioned to redefine engagement with online wagering. It's an invitation to be part of a transformative journey in the world of online betting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className="z-10 relative">{children}</body>
    </html>
  );
}
