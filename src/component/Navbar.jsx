import logo from "../assets/logo.png";
import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const navLinks = [
  { title: "Home", href: "#" },
  { title: "Products", href: "#" },
  { title: "Support", href: "#" },
  { title: "About", href: "#" },
  { title: "Contact", href: "#" },
];

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
  return (
    <nav className="bg-[#1A0B2E] text-white">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-6 px-6 md:px-4">
        <div>
          <img src={logo} alt="Nav Logo" className="w-8 md:w-12" />
        </div>
        <ul className="hidden md:flex gap-x-10 font-roboto">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="hover:text-purple-300 transition-colors"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
            {isMobileNavOpen ? (
              <IoMdClose className="text-3xl text-white" />
            ) : (
              <IoIosMenu className="text-3xl text-white" />
            )}
          </button>
          <ul
            className={`z-50 bg-[#1A0B2E]/90 backdrop-blur-2xl absolute origin-top duration-200 ${
              isMobileNavOpen ? "scale-y-100" : "scale-y-0"
            } top-16 right-4 w-48 p-5 flex flex-col gap-5 font-semibold rounded-lg shadow-lg font-roboto`}
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="block text-white hover:text-purple-300 transition-colors"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;