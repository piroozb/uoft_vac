
import {
  BARS_STYLE_GRADIENT,
} from "../common/Constants";
import {
  EmailLink,
  DiscordIcon,
  InstagramIcon
} from "../common/Contacts";

const CONTACTS_SIZE = 50;

export default function Footer() {
  return (
    <footer className="flex flex-col items-center">

      {/* Frodo */}
      <img
        src="/frodo-footer.png"
        alt="Frodo"
        className="w-10"
      />

      {/* Bar */}
      <div
        className="w-full p-5 grid justify-center relative z-100"
        style={BARS_STYLE_GRADIENT}
      >

        {/* Email */}
        <EmailLink size={CONTACTS_SIZE} />

        {/* Discord & Instagram */}
        <div className="mt-5 gap-5 flex justify-center">
          <DiscordIcon size={CONTACTS_SIZE} />
          <InstagramIcon size={CONTACTS_SIZE} />
        </div>
      </div>
    </footer>
  );
}
