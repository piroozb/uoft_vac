
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Our Team",
};

import OurTeamPageClient from "./OurTeamPageClient";

export default function OurTeamPage() {
    return (<OurTeamPageClient/>)
}
