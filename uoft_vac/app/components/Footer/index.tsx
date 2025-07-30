import Image from "next/image";

export default function Footer() {
  return (
    // Footer background is the same as the navbar.
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
      }}
    >
      {/* Club's email with link to default mailing . */}
      <a
        href="mailto:utvisualartclub@gmail.com"
        className="text-lg no-underline hover:underline transition"
      >
        utvisualartclub@gmail.com
      </a>
      <div className="flex justify-center gap-6 mt-4">
        {/* Discord icon with invite link. */}
        <a
          href="https://discord.gg/YOUR_INVITE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
            D
          </div>
        </a>

        {/* Instagram icon with profile link. */}
        <a
          href="https://www.instagram.com/uoft_vac?utm_source=ig_web_button_share_sheet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
            I
          </div>
        </a>
      </div>
    </footer>
  );
}
