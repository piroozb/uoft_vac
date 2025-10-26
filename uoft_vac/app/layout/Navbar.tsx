"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
    BARS_EDGES_DARK_GREEN,
    BARS_CENTRE_GREEN,
    PAGE_BUTTONS_LIGHT_YELLOW,
    PAGE_BUTTONS_ACTIVE_YELLOW,
} from "../common/Constants";

export default function Navbar() {
    const pathname = usePathname();

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
            <li key={link.id}>
                <Link href={link.href}>
                    <div
                        style={{ backgroundColor: baseColor }}
                        className="h-20 px-10 rounded-md text-blue-500 flex items-center justify-center"
                    >
                        {link.isLogo ? (
                            <div className="h-full w-auto aspect-square relative">
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
            className="p-4 text-white flex justify-center"
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
            <ul className="flex gap-4 items-center">{navbarItems}</ul>
        </nav>
    );
}
