import { EmailLink, DiscordIcon, InstagramIcon } from "../common/Contacts";

const contactsSize = 35;

export default function Banner() {
    return (
        <section
            className="relative z-10 w-full flex flex-col justify-end px-8 pb-6 bg-cover bg-center"
            style={{
                height: "calc(100vh - 87px)",
                backgroundImage: "url('/banner-draft.jpg')"
            }}
        >
            <div className="flex flex-row items-center space-x-4">
                <EmailLink size={contactsSize} />
                <DiscordIcon size={contactsSize} />
                <InstagramIcon size={contactsSize} />
            </div>
        </section>
    );
}
