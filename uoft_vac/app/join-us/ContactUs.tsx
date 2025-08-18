"use client";

import { subsectionSize, subsectionMargin } from "../common/Constants";
import SectionTitle from "../common/SectionTitle";

export default function ContactUs() {
    return (
        <div
            className="w-full h-[750px] rounded-md shadow-lg flex flex-col items-center justify-start p-6"
            style={{ backgroundColor: "rgb(0,150,255)" }}
        >
            <SectionTitle size={subsectionSize} margin={subsectionMargin}>
                Contact Us!
            </SectionTitle>
        </div>
    );
}
