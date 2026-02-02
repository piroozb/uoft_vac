"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react"

import { isMobile } from "./IsMobile";
import {
    BARS_EDGES_GREEN,
    BARS_CENTRE_GREEN,
} from "../common/Constants";
import HoverShrink from "../common/HoverShrink";

export default function Navbar() {
    const mobile = isMobile();

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

    // Buttons mapping
    const navbarItems = links.map((link) => {
        const isActive = pathname === link.href;

        return (
            <li key={link.id}>
                <HoverShrink>
                    <Link href={link.href} onClick={() => setOpen(false)}>
                        <Image
                            src={link.img} alt={link.title}
                            className={`h-25 w-auto object-contain
                                ${isActive ? "saturate-150" : ""}`}
                            height={0} width={100}
                        />
                    </Link>
                </HoverShrink>
            </li>
        );
    });

    /* ——————
        DESKTOP VIEW
        —————— */
    if (!mobile) {
        return (
            <nav
                className="p-1 flex justify-center relative z-50"
                style={{ background: `linear-gradient(to right,
                        ${BARS_EDGES_GREEN} 0%,
                        ${BARS_CENTRE_GREEN} 33.3%,
                        ${BARS_CENTRE_GREEN} 66.6%,
                        ${BARS_EDGES_GREEN} 100%
                    )` }}
            >
                <ul className="flex">
                    {navbarItems}
                </ul>
            </nav>
        );
    }

    /* ——————
       MOBILE VIEW
       —————— */
    return (
        <div className="flex flex-col items-start fixed z-100">

            {/* Icon */}
            <HoverShrink>
                <button
                    className="m-5 text-4xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </HoverShrink>

            {/* Dropdown */}
            <ul
                className={`pl-5 gap-5 flex flex-col duration-300 origin-top
                    ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                {navbarItems}
            </ul>
        </div>
    );
}
