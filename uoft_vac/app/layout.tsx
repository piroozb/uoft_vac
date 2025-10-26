import type { Metadata } from "next";
import "./globals.css";
import { Fredoka } from "next/font/google";

import { BG_LIGHT_GREEN } from "./common/Constants";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import SideDecor from "./layout/SideDecor";

export const metadata: Metadata = {
  title: "Visual Art Club",
  description: "Official UofT Visual Art Club website",
};

// Round font.
const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fredoka.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      {/* Light green bg */}
      <body
        className="antialiased"
        style={{ backgroundColor: BG_LIGHT_GREEN }}
      >
        <Navbar />
        {children}
        <Footer />
        <SideDecor />
      </body>
    </html>
  );
}
