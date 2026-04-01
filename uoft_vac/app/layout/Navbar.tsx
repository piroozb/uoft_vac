"use client";

// Pages
const PAGES = [
    { title: "Home", href: "/", img: "/navbar-home.png" },
    { title: "About Us", href: "/about-us", img: "/navbar-about-us.png" },
    { title: "Our Team", href: "/our-team", img: "/navbar-our-team.png" },
    { title: "Join Us", href: "/join-us", img: "/navbar-join-us.png" },
    { title: "Contact Us", href: "/contact-us", img: "/navbar-contact-us.png" },
    { title: "FAQ", href: "/faq", img: "/navbar-faq.png" },
];


import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
    BARS_EDGES_GREEN,
    BARS_GRADIENT_STYLE,
} from "../common/constants";
import LinksCollection from "../common/LinksCollection";
import { useIsMobile } from "./useIsMobile";
import { useScrollDirection } from "./useScrollDirection";
import DynamicButton from "../common/DynamicButton";

const CONTACTS_SIZE = 30;
const NAVBAR_HEIGHT_DESKTOP = "h-30";
const NAVBAR_HEIGHT_MOBILE = "h-10";
const TRANSF_DURATIONS = "duration-400";


export default function Navbar() {

    const isMobile = useIsMobile();
    const { direction } = useScrollDirection();

    const pathname = usePathname();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Get page buttons mapping
    const pageButtonsMapping = PageButtonsMapping(
        pathname,
        isMobile,
        isDropdownOpen,
        setIsDropdownOpen,
    );

    // Desktop scroll collapse/expand condition
    const isShrunk = !isMobile && direction === "down";

    const navbarHeight = !isMobile && !isShrunk
        ? NAVBAR_HEIGHT_DESKTOP
        : NAVBAR_HEIGHT_MOBILE;

    return (
        <div className="relative z-100">

            {/* Navbar spacer */}
            <div
                className={`${navbarHeight} ${TRANSF_DURATIONS}`}
                style={BARS_GRADIENT_STYLE}
            />

            {/* Fixed components container */}
            <header className="z-100 w-full top-0 fixed">

                {/* DESKTOP VIEW */}
                {!isMobile ? (<>

                    {/* Bar */}
                    <nav
                        className={`${navbarHeight} ${TRANSF_DURATIONS} flex justify-center items-center`}
                        style={BARS_GRADIENT_STYLE}
                    >

                        {/* Page buttons row */}
                        <div  className={`${isShrunk ? "max-h-0" : "max-h-full"} ${TRANSF_DURATIONS} overflow-hidden`}>
                            <ol className="flex">
                                {pageButtonsMapping}
                            </ol>
                        </div>
                    </nav>

                    {/* Links */}
                    <div className={`translate-y-[115%] mr-1 bottom-0 right-0 grid absolute ${TRANSF_DURATIONS}`}>
                        <LinksCollection
                            size={CONTACTS_SIZE}
                            justify="justify-end"
                        />
                    </div>
                
                {/* MOBILE VIEW */}
                </>) : (<>
                    {isDropdownOpen && (
                        <div
                            className="z-10 inset-0 fixed"
                            onClick={() => setIsDropdownOpen(false)}
                        />
                    )}

                    {/* Bar */}
                    <div
                        className={`${NAVBAR_HEIGHT_MOBILE} text-[1.5rem] w-full flex justify-center cursor-pointer`}
                        style={BARS_GRADIENT_STYLE}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        ☰
                    </div>

                    {/* Page buttons */}
                    <ol
                        className={`z-20 mt-2 pl-5 gap-[min(1rem,2cqh)] grid fixed
                        ${!isDropdownOpen && "-translate-x-full"}
                        ${TRANSF_DURATIONS}`}
                    >
                        {pageButtonsMapping}
                    </ol>

                    {/* Links */}
                    <div
                        className={`z-30 mt-2 mr-1 right-0 grid absolute
                        ${!isDropdownOpen && "translate-x-60"}
                        ${TRANSF_DURATIONS}`}
                    >
                        <LinksCollection
                            size={CONTACTS_SIZE}
                            justify="justify-end"
                        />
                    </div>
                </>)}
            </header>
        </div>
    );
}


function PageButtonsMapping(
    pathname: string,
    isMobile: boolean,
    isDropdownOpen: boolean,
    setIsDropdownOpen: (value: boolean) => void
) {
    return PAGES.map((link) => {

        const isActive = pathname === link.href;

        return (
            <li key={link.href} className="relative">

                {/* Mobile green shroud */}
                {isMobile && (
                    <div
                        className={`w-40 rounded-4xl blur-2xl inset-0 absolute
                        ${isDropdownOpen ? "opacity-100" : "opacity-0"} ${TRANSF_DURATIONS}`}
                        style={{ background: BARS_EDGES_GREEN }}
                    />
                )}

                {/* Page buttons */}
                <DynamicButton>
                    <Link
                        href={link.href}
                        onClick={() => setIsDropdownOpen(false)}
                    >
                        <Image
                            src={link.img}
                            alt={link.title}
                            className={`h-[min(6rem,11cqh)] w-auto
                            ${isActive && "saturate-150"}`}
                            width={100} height={0}
                        />
                    </Link>
                </DynamicButton>
            </li>
        );
    });
}
