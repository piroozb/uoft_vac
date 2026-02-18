"use client";

import Image from "next/image";

const DEFAULT_TITLE_HEIGHT = "5rem";

export default function SectionTitle({
    children,
    src,
    height = DEFAULT_TITLE_HEIGHT,
} : {
    children: React.ReactNode;
    src?: string;
    height?: string;
}) {

    return (
        <div
            className={`w-full flex flex-col items-center`}
            style={src ? { height: height } : undefined}
        >

            {/* If src exists, display image. */}
            {src ? (
                <div
                    className="relative w-full h-full"
                >
                    <Image
                        src={src}
                        alt={typeof children === "string" ? children : "Section title"}
                        className="object-contain"
                        fill
                    />
                </div>
            
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
