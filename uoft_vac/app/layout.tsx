import type { Metadata } from "next";
import "./globals.css";
import { Fredoka } from "next/font/google";

import {
  BG_LIGHT_GREEN,
  BARS_EDGES_DARK_GREEN,
  BARS_CENTRE_GREEN
} from "./common/Constants";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import ClientSideDecor from "./layout/ClientSideDecor";
import ContentPanel from "./layout/ContentPanel";
import { WindowOffsetProvider } from "./layout/WindowOffsetContext";

export const metadata: Metadata = {
  title: "Visual Art Club",
  description: "Official UofT Visual Art Club website",
};

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fredoka.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className="antialiased relative overflow-x-hidden">

        {/* Top Navbar overscroll gradient */}
        <div
          className="fixed top-0 left-0 w-full h-[40vh] -z-10"
          style={{
            background: `linear-gradient(
              to right,
              ${BARS_EDGES_DARK_GREEN} 0%,
              ${BARS_CENTRE_GREEN} 33.3%,
              ${BARS_CENTRE_GREEN} 66.6%,
              ${BARS_EDGES_DARK_GREEN} 100%
            )`,
          }}
        />

        {/* Bottom Footer overscroll gradient */}
        <div
          className="fixed bottom-0 left-0 w-full h-[40vh] -z-10"
          style={{
            background: `linear-gradient(
              to right,
              ${BARS_EDGES_DARK_GREEN} 0%,
              ${BARS_CENTRE_GREEN} 33.3%,
              ${BARS_CENTRE_GREEN} 66.6%,
              ${BARS_EDGES_DARK_GREEN} 100%
            )`,
          }}
        />

        <WindowOffsetProvider>
          {/* Light green main background */}
          <div
            className="antialiased main-content"
            style={{ backgroundColor: BG_LIGHT_GREEN }}
          >
            <Navbar />

            {/* Content automatically expands or shrinks with side decor */}
            <ContentPanel>
              {children}
            </ContentPanel>

            <Footer />

            {/* Side decor now reads the same offset as ContentPanel */}
            <ClientSideDecor />
          </div>
        </WindowOffsetProvider>

      </body>
    </html>
  );
}
