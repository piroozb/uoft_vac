"use client";

import {
    createContext,
    ReactNode,
    useState,
    useContext,
} from "react";

const WindowOffsetContext = createContext<{
    offset: number;
    setOffset: (v: number) => void;
} | undefined>(undefined);

export function WindowOffsetProvider({ children }: { children: ReactNode }) {
    const [offset, setOffset] = useState(0);

    return (
        <WindowOffsetContext.Provider value={{ offset, setOffset }}>
            {children}
        </WindowOffsetContext.Provider>
    );
}

export function useWindowOffset() {
    const ctx = useContext(WindowOffsetContext);
    if (!ctx) {
        throw new Error("useWindowOffset must be used inside WindowOffsetProvider.");
    }
    return ctx;
}
