import { navbarItems } from "@/constants/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="my-8 md:block hidden">
      <nav className="flex justify-center items-center">
        <ul className="bg-primary-dark-800 px-8 py-3 flex items-center gap-8 border border-primary-dark-600 rounded-3xl">
          {navbarItems.map(({ href, label }) => (
            <Link href={href} key={href}>
              <li className="md:text-sm text-xs">{label}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
