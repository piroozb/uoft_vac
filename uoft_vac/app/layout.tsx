
import "./globals.css";
import type { Metadata } from "next";
import { Fredoka } from "next/font/google";

import {
    BG_GREEN,
    BARS_STYLE_GRADIENT,
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

export default function RootLayout({ children } : { children: React.ReactNode }) {
    return (
        <html lang="en" className={fredoka.variable}>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>

        <body className="antialiased relative overflow-x-hidden">

            {/* Overscroll gradient */}
            <div
            className="w-full h-full fixed -z-10"
            style={BARS_STYLE_GRADIENT}
            />

            <WindowOffsetProvider>

            {/* Background */}
            <div
                className="antialiased main-content"
                style={{ backgroundColor: BG_GREEN }}
            >

                {/* Layout */}
                <Navbar/>
                <ContentPanel>{children}</ContentPanel>
                <Footer/>
                <ClientSideDecor/>
            </div>
            </WindowOffsetProvider>
        </body>
        </html>
    );
}
