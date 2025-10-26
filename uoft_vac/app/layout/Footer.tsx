import { EmailLink, DiscordIcon, InstagramIcon } from "../common/Contacts";

import {
  BARS_EDGES_DARK_GREEN,
  BARS_CENTRE_GREEN,
} from "../common/Constants";

const contactsSize = 50;

export default function Footer() {
  return (
    <footer
      className="p-5 text-black text-center"
      style={{
        background: `linear-gradient(
          to right,
          ${BARS_EDGES_DARK_GREEN} 0%,
          ${BARS_CENTRE_GREEN} 33.3%,
          ${BARS_CENTRE_GREEN} 66.6%,
          ${BARS_EDGES_DARK_GREEN} 100%
          )`,
          zIndex: 100,
          position: "relative",
      }}
    >
      <EmailLink size={contactsSize}/>

      <div className="flex justify-center gap-5 mt-5">
        <DiscordIcon size={contactsSize}/>
        <InstagramIcon size={contactsSize}/>
      </div>
    </footer>
  );
}
