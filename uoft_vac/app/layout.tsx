import type { Metadata } from "next";
import "./globals.css";
import { Fredoka } from "next/font/google";

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
      {/* Light green bg. */}
      <body
        className={`antialiased bg-[rgb(198,255,206)]`}
      >
        <Navbar />
        {children}
        <Footer />
        <SideDecor />
      </body>
    </html>
  );
}
