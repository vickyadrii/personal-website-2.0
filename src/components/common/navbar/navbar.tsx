import Link from "next/link";

import { navbarItems } from "@/constants/constants";

const Navbar = () => {
  return (
    <header className="md:py-8 sticky top-0">
      <nav className="md:flex hidden justify-center items-center">
        <ul className="bg-primary-dark-800/80 px-8 py-3 flex items-center gap-8 border border-primary-dark-600 rounded-3xl backdrop-blur-sm">
          {navbarItems.map(({ href, label }) => (
            <Link href={href} key={href}>
              <li className="text-sm">{label}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
