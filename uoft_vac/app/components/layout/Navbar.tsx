"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    // Main pages: Home, About Us, Our Team, Join Us, FAQ.
    // Home button will have the VAC logo instead of text.
    const links = [
        { title: "Home", href: "/", id: 1, isLogo: true },
        { title: "About Us", href: "/about", id: 2 },
        { title: "Our Team", href: "/team", id: 3 },
        { title: "Join Us", href: "/join", id: 4 },
        { title: "FAQ", href: "/faq", id: 5 }
    ];

    // Map the buttons in a sequence in the bar.
    // The button corresponding to the page the user is currently viewing will be a darker yellow.
    const navbarItems = links.map((link) => {
        const isActive = pathname === link.href;
        const baseColor = isActive ? "rgb(255,253,111)" : "rgb(255,254,176)";

        return (
            <li key={link.id}>
                <Link href={link.href}>
                    <div
                        style={{ backgroundColor: baseColor }}
                        className="h-14 px-6 rounded-md text-blue-500 flex items-center justify-center"
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
                rgb(0,178,25) 0%,
                rgb(53,228,78) 33.3%,
                rgb(53,228,78) 66.6%,
                rgb(0,178,25) 100%
                )`,
                zIndex: 100,
                position: "relative",
            }}
        >
            <ul className="flex gap-4 items-center">{navbarItems}</ul>
        </nav>
    );
}
