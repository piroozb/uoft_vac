import { EmailLink, DiscordIcon, InstagramIcon } from "../Contacts";

const contactsSize = 50;

export default function Footer() {
  return (
    <footer
      className="p-4 text-black text-center"
      style={{
        background: `linear-gradient(
          to right,
          rgb(0,178,25) 0%,
          rgb(53,228,78) 33.3%,
          rgb(53,228,78) 66.6%,
          rgb(0,178,25) 100%
        )`,
        zIndex: 100,
        position: "relative",
      }}
    >
      <EmailLink size={contactsSize}/>

      <div className="flex justify-center gap-6 mt-4">
        <DiscordIcon size={contactsSize}/>
        <InstagramIcon size={contactsSize}/>
      </div>
    </footer>
  );
}
