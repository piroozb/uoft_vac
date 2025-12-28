"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface SectionTitleProps {
    children: React.ReactNode;
    graphic?: string;
    size?: string; // Pixel height
    margin?: string;
}

export default function SectionTitle({
    children,
    graphic = "",
    size = "95px",
    margin = "mb-10",
}: SectionTitleProps) {
    const hasGraphic = graphic !== "";
    const [aspectRatio, setAspectRatio] = useState<number | null>(null);

    useEffect(() => {
        if (hasGraphic) {
            const img = new window.Image();
            img.src = graphic;
            img.onload = () => {
                setAspectRatio(img.width / img.height);
            };
        }
    }, [graphic, hasGraphic]);

    return (
        <div className={`flex flex-col items-center ${margin}`}>
            {hasGraphic ? (
                <div
                    className="relative"
                    style={{
                        height: size,
                        width: aspectRatio ? `calc(${size} * ${aspectRatio})` : "auto",
                    }}
                >
                    <Image
                        src={graphic}
                        alt={`${children}`}
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            ) : (
                <h2 className="font-bold text-center" style={{ fontSize: size }}>
                    {children}
                </h2>
            )}
        </div>
    );
}
