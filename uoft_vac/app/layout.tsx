import type { Metadata } from "next";
import "./globals.css";
import { Fredoka } from "next/font/google";

import { bgLightGreen } from "./common/Constants";

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
      {/* Light green bg */}
      <body
        className="antialiased"
        style={{ backgroundColor: bgLightGreen }}
      >
        <Navbar />
        {children}
        <Footer />
        <SideDecor />
      </body>
    </html>
  );
}
