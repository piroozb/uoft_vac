import { Email, Discord, Instagram } from "../Contacts";

export default function Banner() {
    return (
        <section className="relative z-10 h-screen w-full bg-white flex flex-col justify-end px-8 pb-6">
            <div className="flex flex-row items-center space-x-4">
                <Email />
                <Discord />
                <Instagram />
            </div>
        </section>
    );
}
