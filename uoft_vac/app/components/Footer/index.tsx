import Image from "next/image";

export default function Footer() {

    return (
    <nav className="bg-gray-800 p-4 text-white flex justify-center">
      <ul className="flex gap-4">
        <li>
            <a href="mailto:utvisualartclub@gmail.com">utvisualartclub@gmail.com</a>
        </li>
        <li>
            <a href="https://www.instagram.com/uoft_vac?utm_source=ig_web_button_share_sheet">Instagram</a>
        </li>
        <li>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfD8HV_l2tkImNUXoKPv3BniSb_wV-HsOEOmmjLtA-H5T3jWQ/viewform">Discord</a>
        </li>
      </ul>
    </nav>
    );
}