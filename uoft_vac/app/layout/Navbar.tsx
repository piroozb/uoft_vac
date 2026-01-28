"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react"

import {
    BARS_EDGES_DARK_GREEN,
    BARS_CENTRE_GREEN,
} from "../common/Constants";
import HoverShrink from "../common/HoverShrink";

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    // Pages
    const links = [
        { id: 1, title: "Home", href: "/", img: "/navbar-home.png" }, // Home
        { id: 2, title: "About Us", href: "/about-us", img: "/navbar-about-us.png" }, // About Us
        { id: 3, title: "Our Team", href: "/our-team", img: "/navbar-our-team.png" }, // Our Team
        { id: 4, title: "Join Us", href: "/join-us", img: "/navbar-join-us.png" }, // Join Us
        { id: 5, title: "Contact Us", href: "/contact-us", img: "/navbar-contact-us.png" }, // Contact Us
        { id: 6, title: "FAQ", href: "/faq", img: "/navbar-faq.png" }, // FAQ
    ];

    // Buttons
    const navbarItems = links.map((link) => {
        const isActive = pathname === link.href;

        return (
            <li key={link.id}>
                <HoverShrink>
                    <Link href={link.href} onClick={() => setOpen(false)}>
                        <Image
                            src={link.img} alt={link.title}
                            className={`h-25 w-auto object-contain transition-opacity
                                ${isActive ? "opacity-100" : "opacity-80 hover:opacity-100"}`}
                            height={0} width={100}
                        />
                    </Link>
                </HoverShrink>
            </li>
        );
    });

    // Navbar
    return (
        <nav
            className="p-1 flex justify-center"
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
            {/* Desktop view */}
            <ul className="hidden lg:flex">
                {navbarItems}
            </ul>

            {/* Mobile view */}
            <button className="lg:hidden text-3xl" onClick={() => setOpen(!open)}>☰</button>

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
                style={{ zIndex: 100 }}
            >
                {navbarItems}
            </ul>
        </nav>
    );
}
