"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    useState,
} from "react"

import {
    BARS_EDGES_GREEN,
    BARS_GRADIENT_STYLE,
} from "../common/constants";
import LinksCollection from "../common/LinksCollection";
import { useIsMobile } from "./useIsMobile";
import DynamicButton from "../common/DynamicButton";

const DROPDOWN_TRANSF_DURATION = "duration-400";
const CONTACTS_SIZE = 30;

export default function Navbar() {
    const isMobile = useIsMobile();

    const pathname = usePathname();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
                            ${isDropdownOpen ? "opacity-100" : "opacity-0"} ${DROPDOWN_TRANSF_DURATION}`}
                        style={{ background: BARS_EDGES_GREEN }}
                    />
                )}

                {/* Buttons */}
                <DynamicButton>
                    <Link href={link.href} onClick={() => setIsDropdownOpen(false)}>
                        <Image
                            src={link.img}
                            alt={link.title}
                            className={`h-[min(6rem,11cqh)] w-auto object-contain
                                ${isActive && "saturate-150"}`}
                            height={0}
                            width={100}
                        />
                    </Link>
                </DynamicButton>
            </li>
        );
    });

    // DESKTOP VIEW
    if (!isMobile) {
        return (
            <header className="grid relative z-100">

                {/* Bar */}
                <nav
                    className="p-1 flex justify-center"
                    style={BARS_GRADIENT_STYLE}
                >

                    {/* Buttons row */}
                    <ol className="flex">
                        {navbarItems}
                    </ol>
                </nav>

                {/* Important links */}
                <div className="translate-y-[115%] mr-1 gap-2 grid absolute bottom-0 right-0">
                    <LinksCollection
                        size={CONTACTS_SIZE}
                        justify="justify-end"
                    />
                </div>
            </header>
        );
    }

    // MOBILE VIEW
    return (
        <header>

            {/* Clickable zone (whole screen) to hide dropdown */}
            {isDropdownOpen && (
                <div
                    className="fixed inset-0 z-90"
                    onClick={() => setIsDropdownOpen(false)}
                />
            )}

            <div className="grid fixed z-105">
                <div className="flex">

                    {/* Dropdown button */}
                    <DynamicButton>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <Image
                                src="/navbar-dropdown-button.png"
                                alt="Dropdown"
                                className="m-5 object-contain cursor-pointer z-110"
                                width={50} height={0}
                            />
                        </button>
                    </DynamicButton>

                    {/* Contacts */}
                    <div className={`pt-5 ml-[max(5rem,15cqw)] gap-2 grid fixed
                        ${!isDropdownOpen && "-translate-y-full"}
                        ${DROPDOWN_TRANSF_DURATION}
                        z-110`}
                    >
                        
                        {/* Important links */}
                        <LinksCollection
                            size={CONTACTS_SIZE}
                            justify=""
                        />
                    </div>
                </div>

                {/* Page buttons column */}
                <ol className={`mt-20 pl-5 gap-[min(1rem,2cqh)] grid fixed
                    ${!isDropdownOpen && "-translate-x-full"}
                    ${DROPDOWN_TRANSF_DURATION}`}
                >
                    {navbarItems}
                </ol>
            </div>
        </header>
    );
}
