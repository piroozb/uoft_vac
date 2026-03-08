"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react"

import {
    BARS_EDGES_GREEN,
    BARS_STYLE_GRADIENT,
} from "../common/Constants";
import {
    EmailLink,
    DiscordIcon,
    InstagramIcon,
} from "../common/Contacts";
import { useIsMobile } from "./UseIsMobile";
import HoverShrink from "../common/HoverShrink";

const DROPDOWN_TRANSF_DURATION = "duration-400";
const CONTACTS_SIZE = 30;

export default function Navbar() {
    const isMobile = useIsMobile();

    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

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
                {isMobile && (
                    <div
                        className={`w-40 rounded-4xl blur-2xl absolute inset-0
                            ${isOpen ? "opacity-100" : "opacity-0"} ${DROPDOWN_TRANSF_DURATION}`}
                        style={{ backgroundColor: BARS_EDGES_GREEN }}
                    />
                )}

                {/* Buttons */}
                <HoverShrink>
                    <Link href={link.href} onClick={() => setIsOpen(false)}>
                        <Image
                            src={link.img}
                            alt={link.title}
                            className={`h-[min(6rem,11cqh)] w-auto object-contain
                                ${isActive && "saturate-150"}`}
                            height={0}
                            width={100}
                        />
                    </Link>
                </HoverShrink>
            </li>
        );
    });

    // DESKTOP VIEW
    if (!isMobile) {
        return (
            <div className="grid relative z-100">

                {/* Bar */}
                <nav
                    className="p-1 flex justify-center"
                    style={BARS_STYLE_GRADIENT}
                >

                    {/* Buttons row */}
                    <ul className="flex">
                        {navbarItems}
                    </ul>
                </nav>

                {/* Contacts */}
                <div className="translate-y-[115%] mr-1 gap-2 grid absolute bottom-0 right-0">
                    <EmailLink size={CONTACTS_SIZE} />
                    <div className="mr-2 gap-3 flex justify-end">
                        <DiscordIcon size={CONTACTS_SIZE} />
                        <InstagramIcon size={CONTACTS_SIZE} />
                    </div>
                </div>
            </div>
        );
    }

    // MOBILE VIEW
    return (
        <>

            {/* Clickable zone (whole screen) to hide dropdown */}
            {isOpen && (
                <div
                    className="fixed inset-0 pointer-events-auto z-90"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div className="grid fixed z-105">

                <div className="flex">

                    {/* Dropdown button */}
                    <HoverShrink>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <Image
                                src="/navbar-dropdown-button.png"
                                alt="Dropdown"
                                className="m-5 object-contain cursor-pointer z-110"
                                width={50} height={0}
                            />
                        </button>
                    </HoverShrink>

                    {/* Contacts */}
                    <div className={`pt-5 ml-[max(5rem,15cqw)] grid fixed
                        ${!isOpen && "-translate-y-full"}
                        ${DROPDOWN_TRANSF_DURATION}
                        z-110`}
                    >
                        <EmailLink size={CONTACTS_SIZE} />
                        <div className="gap-5 flex">
                            <DiscordIcon size={CONTACTS_SIZE} />
                            <InstagramIcon size={CONTACTS_SIZE} />
                        </div>
                    </div>
                </div>

                {/* Page buttons column */}
                <ul className={`mt-20 pl-5 gap-5 grid fixed
                    ${!isOpen && "-translate-x-full"}
                    ${DROPDOWN_TRANSF_DURATION}`}
                >
                    {navbarItems}
                </ul>
            </div>
        </>
    );
}
