import { navLinks } from "@/data/nav-links";
import Link from "next/link";
import Button from "./button";

const Navbar = () => {
  return (
    <nav className="w-full max-w-6xl mx-auto h-20 flex items-center justify-end bg-transparent">
      <ul className="flex items-center gap-x-10 h-full w-max">
        {navLinks.map((link, index) => {
          return (
            <li
              className="h-full flex items-center group cursor-pointer"
              key={index}
            >
              <Link
                className={`${
                  !link.unique &&
                  "text-white group-hover:text-primary-100 group-hover:-translate-y-2 transition-all duration-500"
                }`}
                href={link.url}
              >
                {link.unique ? (
                  <Button
                    variant="primary"
                    className="text-sm py-3 px-8 hover:bg-[#b2511c]"
                  >
                    {link.label}
                  </Button>
                ) : (
                  `${link.label}`
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
