"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react"

import {
    BARS_EDGES_DARK_GREEN,
    BARS_CENTRE_GREEN,
    PAGE_BUTTONS_LIGHT_YELLOW,
    PAGE_BUTTONS_ACTIVE_YELLOW,
} from "../common/Constants";

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    // Main pages: Home, About Us, Our Team, Join Us, Contact Us, FAQ.
    // Home button will have the VAC logo instead of text.
    const links = [
        { title: "Home", href: "/", id: 1, isLogo: true },
        { title: "About Us", href: "/about-us", id: 2 },
        { title: "Our Team", href: "/our-team", id: 3 },
        { title: "Join Us", href: "/join-us", id: 4 },
        {title: "Contact Us", href: "/contact-us", id: 5},
        { title: "FAQ", href: "/faq", id: 6 },
    ];

    // Map the buttons in a sequence in the bar.
    // The button corresponding to the page the user is currently viewing will be a darker yellow.
    const navbarItems = links.map((link) => {
        const isActive = pathname === link.href;
        const baseColor = isActive ? `${PAGE_BUTTONS_ACTIVE_YELLOW}` : `${PAGE_BUTTONS_LIGHT_YELLOW}`;

        return (
            <li key={link.id} className="w-full lg:w-auto">
                <Link href={link.href} onClick={() => setOpen(false)}>
                    <div
                        style={{ backgroundColor: baseColor }}
                        className="h-16 lg:h-20 px-8 lg:px-10 rounded-md text-blue-500 flex items-center justify-center"
                    >
                        {link.isLogo ? (
                            <div className="h-full w-auto aspect-square">
                                <Image
                                    src="/vac-logo.avif"
                                    alt="VAC"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        ) : (
                            <span className="text-center text-base">{link.title}</span>
                        )}
                    </div>
                </Link>
            </li>
        );
    });

    // Navbar background is green with a gradient of darker green coming inward from the sides.
    return (
        <nav
            className="p-4 text-white flex justify-between items-center lg:justify-center relative"
            style={{
                background: `linear-gradient(
                to right,
                ${BARS_EDGES_DARK_GREEN} 0%,
                ${BARS_CENTRE_GREEN} 33.3%,
                ${BARS_CENTRE_GREEN} 66.6%,
                ${BARS_EDGES_DARK_GREEN} 100%
                )`,
                zIndex: 100,
                position: "relative",
            }}
        >
            {/* Hamburger for mobile */}
            <button className="lg:hidden text-3xl" onClick={() =>setOpen(!open)}>☰</button>
            
            {/* Desktop menu */}
            <ul className="hidden lg:flex gap-4 items-center">{navbarItems}</ul>

            {/* Mobile dropdown */}
            <ul
            className={`
                absolute top-full left-0 right-0 flex flex-col gap-4 p-4 
                bg-[#0b3311cc] backdrop-blur-md lg:hidden
                transition-all duration-300 origin-top
                ${open 
                ? "opacity-100 scale-y-100 pointer-events-auto"
                : "opacity-0 scale-y-0 pointer-events-none"
                }
            `}
            style={{ zIndex: 200 }}
            >
            {navbarItems}
            </ul>
        </nav>
    );
}
