import { EmailLink, DiscordIcon, InstagramIcon } from "../common/Contacts";

import {
  barsEdgesDarkGreen,
  barsCentreGreen,
} from "../common/Constants";

const contactsSize = 50;

export default function Footer() {
  return (
    <footer
      className="p-4 text-black text-center"
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

      <div className="flex justify-center gap-6 mt-4">
        <DiscordIcon size={contactsSize}/>
        <InstagramIcon size={contactsSize}/>
      </div>
    </footer>
  );
}
