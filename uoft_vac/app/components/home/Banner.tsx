import { EmailLink, DiscordIcon, InstagramIcon } from "../Contacts";

export default function Banner() {
    return (
        <section
            className="relative z-10 w-full bg-white flex flex-col justify-end px-8 pb-6"
            style={{ height: "calc(100vh - 87px)" }}
        >
            <div className="flex flex-row items-center space-x-4">
                <EmailLink />
                <DiscordIcon />
                <InstagramIcon />
            </div>
        </section>
    );
}
