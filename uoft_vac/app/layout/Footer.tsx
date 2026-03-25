
import Image from "next/image";

import {
    BARS_GRADIENT_STYLE,
} from "../common/Constants";
import LinksCollection from "../common/LinksCollection";

const CONTACTS_SIZE = 50;

export default function Footer() {
    return (
        <footer className="flex flex-col items-center">

            {/* Frodo */}
            <Image
                src="/frodo-footer.png"
                alt="Frodo"
                width={50} height={0}
            />

            {/* Bar */}
            <div
                className="w-full p-5 grid justify-center relative z-100"
                style={BARS_GRADIENT_STYLE}
            >

                {/* Important links */}
                <LinksCollection/>
            </div>
        </footer>
    );
}
