"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react"

import {
    BARS_EDGES_GREEN,
    BARS_CENTRE_GREEN,
} from "../common/Constants";
import { isMobile } from "./IsMobile";
import HoverShrink from "../common/HoverShrink";

const MOBILE_TRANSF_DURATION = "duration-400";

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
            <li key={link.id} className="relative">

                {/* (Mobile) green shroud background */}
                {mobile && (
                    <div
                        className={`absolute inset-0 rounded-4xl blur-2xl
                            ${open ? "opacity-100" : "opacity-0"} ${MOBILE_TRANSF_DURATION}`}
                        style={{ backgroundColor: BARS_EDGES_GREEN }}
                    />
                )}

                {/* Buttons */}
                <HoverShrink>
                    <Link href={link.href} onClick={() => setOpen(false)}>
                        <Image
                            src={link.img}
                            alt={link.title}
                            className={`h-25 w-auto object-contain
                                ${isActive ? "saturate-150" : ""}`}
                            height={0}
                            width={100}
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

            // Bar
            <nav
                className="p-1 flex justify-center relative z-100"
                style={{ background: `linear-gradient(to right,
                        ${BARS_EDGES_GREEN} 0%,
                        ${BARS_CENTRE_GREEN} 33.3%,
                        ${BARS_CENTRE_GREEN} 66.6%,
                        ${BARS_EDGES_GREEN} 100%
                    )` }}
            >

                {/* Buttons row */}
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
        <>

            {/* Clickable zone (whole screen) to hide dropdown */}
            {open && (
                <div
                    className="fixed inset-0 pointer-events-auto z-90"
                    onClick={() => setOpen(false)}
                />
            )}

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
                    className={`pl-5 gap-5 flex flex-col
                        ${open ? "translate-x-0" : "-translate-x-full"} ${MOBILE_TRANSF_DURATION}`}
                >
                    {navbarItems}
                </ul>
            </div>
        </>
    );
}
