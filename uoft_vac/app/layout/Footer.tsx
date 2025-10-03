import { EmailLink, DiscordIcon, InstagramIcon } from "../common/Contacts";

import {
  barsEdgesDarkGreen,
  barsCentreGreen,
} from "../common/Constants";

const contactsSize = 50;

export default function Footer() {
  return (
    <footer
      className="p-5 text-black text-center"
      style={{
        background: `linear-gradient(
          to right,
          ${barsEdgesDarkGreen} 0%,
          ${barsCentreGreen} 33.3%,
          ${barsCentreGreen} 66.6%,
          ${barsEdgesDarkGreen} 100%
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
