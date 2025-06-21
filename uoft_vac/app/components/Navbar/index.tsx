import Link from 'next/link';
import Image from "next/image";

export default function Navbar() {
    const links = [
        {title:'Home', href:'/', id:1},
        {title:'About', href:'/about', id:2},
        {title:'Join Us', href:'/join', id:3},
        {title:'Our Team', href:'/team', id:4},
        {title:'FAQ', href:'/faq', id:5},
        {title:'Contact Us', href:'/contact', id:6}
    ];

    const navbarItems = links.map(link =>
        <li key={link.id}>
            <Link href={link.href}>
            <div className="px-6 py-4 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition-colors">
                {link.title}
            </div>
            </Link>
        </li>
    )

    return (
    <nav className="bg-gray-800 p-4 text-white flex justify-center">
      <ul className="flex gap-4">
        <li>
            <div className="relative w-[4em] h-[4em]">
                <Image           
                    className="object-contain gap-4"
                    src='/assets/vac-logo.avif'
                    alt="VAC"
                    fill
                    priority/>
            </div>
        </li>
        {navbarItems}
      </ul>
    </nav>
    );
}