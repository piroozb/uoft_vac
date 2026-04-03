
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Join Us",
};

import JoinUsPageClient from "./JoinUsPageClient";
export default function JoinUsPage() {
    return (<JoinUsPageClient/>)
}
