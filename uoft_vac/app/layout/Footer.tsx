
import Image from "next/image";

import {
    BARS_GRADIENT_STYLE,
} from "../common/constants";
import LinksCollection from "../common/LinksCollection";


export default function Footer() {
    return (
        <footer className="z-100 flex flex-col items-center">

            {/* Frodo */}
            <Image
                src="/frodo-footer.png"
                alt="Frodo"
                width={50} height={0}
            />

            {/* Bar */}
            <div
                className="w-full p-5 grid justify-center relative"
                style={BARS_GRADIENT_STYLE}
            >
                {/* Important links */}
                <LinksCollection/>
            </div>
        </footer>
    );
}
