"use client";

import Image from "next/image";
import {
    useState,
} from "react";

export default function SectionTitle({
    children,
    src,
    height = "min(5rem,10cqw)",
} : {
    children: React.ReactNode;
    src?: string;
    height?: string;
}) {
    const [imgError, setImgError] = useState(false);
    const canShowImg = src && !imgError;

    return (
        <div
            className="w-full flex flex-col items-center"
            style={canShowImg ? { height: height } : undefined}
        >

            {/* Display image if src exists and loaded successfully. */}
            {canShowImg ? (
                <h1
                    className="relative w-full h-full"
                >
                    <Image
                        src={src}
                        alt={typeof children === "string" ? children : "Section title"}
                        className="object-contain"
                        fill
                        onError={() => setImgError(true)}
                    />
                </h1>
            
            // Otherwise, display text.
            ) : (
                <h1
                    className="font-bold text-center"
                    style={{ fontSize: height }}
                >
                    {children}
                </h1>
            )}
        </div>
    );
}
