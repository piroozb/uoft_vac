
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "UofT Visual Art Club",
    description: "Official website for the Visual Art Club at UofT St. George.",
};


import "./globals.css";
import { Fredoka } from "next/font/google";

import {
    BG_GREEN,
    BARS_GRADIENT_STYLE,
} from "./common/constants";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import ClientSideDecor from "./layout/ClientSideDecor";
import ContentPanel from "./layout/ContentPanel";
import { WindowOffsetProvider } from "./layout/WindowOffsetContext";

const fredoka = Fredoka({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-fredoka",
});


export default function RootLayout({ children } : { children: React.ReactNode }) {
    return (
        <html lang="en" className={fredoka.variable}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>

            <body className="antialiased relative overflow-x-hidden">

                {/* Overscroll gradient */}
                <div
                    className="z-[-10] w-full h-full fixed"
                    style={BARS_GRADIENT_STYLE}
                />
                
                <WindowOffsetProvider>

                    {/* Background */}
                    <div
                        className="antialiased main-content"
                        style={{ background: BG_GREEN }}
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
