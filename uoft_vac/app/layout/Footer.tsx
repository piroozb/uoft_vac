import { EmailLink, DiscordIcon, InstagramIcon } from "../common/Contacts";

import {
  BARS_EDGES_DARK_GREEN,
  BARS_CENTRE_GREEN,
} from "../common/Constants";

const contactsSize = 50;

export default function Footer() {
  return (
    <footer
      className="p-5 flex flex-col items-center"
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

      <div className="mt-5 gap-5 flex justify-center">
        <DiscordIcon size={contactsSize}/>
        <InstagramIcon size={contactsSize}/>
      </div>
    </footer>
  );
}
