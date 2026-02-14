"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export const DEFAULT_TITLE_SIZE = "5rem";

export default function SectionTitle({
    children,
    src,
    size = DEFAULT_TITLE_SIZE,
}: {
    children: React.ReactNode;
    src?: string;
    size?: string;
}) {
    const [aspectRatio, setAspectRatio] = useState<number | null>(null);

    useEffect(() => {
        if (!src) return;

        const img = new window.Image();
        img.src = src;
        img.onload = () => {
            setAspectRatio(img.width / img.height);
        };
    }, [src]);

    return (
        <div className="flex flex-col items-center">
            {src ? (
                <div
                    className="relative"
                    style={{
                        height: size,
                        width: aspectRatio
                            ? `calc(${size} * ${aspectRatio})`
                            : "auto",
                    }}
                >
                    <Image
                        src={src}
                        alt={typeof children === "string" ? children : "Section title"}
                        className="object-contain"
                        fill
                    />
                </div>
            ) : (
                <h2
                    className="font-bold text-center"
                    style={{ fontSize: size }}
                >
                    {children}
                </h2>
            )}
        </div>
    );
}
