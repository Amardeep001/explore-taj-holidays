import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          Explore Taj Holidays
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-200 font-medium text-sm uppercase">
          <li>
            <a
              href="#about"
              className="hover:text-yellow-400 transition duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#tours"
              className="hover:text-yellow-400 transition duration-200"
            >
              Tours
            </a>
          </li>
          <li>
            <a
              href="#why"
              className="hover:text-yellow-400 transition duration-200"
            >
              Why Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-yellow-400 transition duration-200"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-black">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="bg-gray-900 md:hidden shadow-md border-t border-gray-700">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-200 font-medium text-sm uppercase">
            <li>
              <a
                href="#about"
                className="hover:text-yellow-400 transition duration-200"
                onClick={() => setOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#tours"
                className="hover:text-yellow-400 transition duration-200"
                onClick={() => setOpen(false)}
              >
                Tours
              </a>
            </li>
            <li>
              <a
                href="#why"
                className="hover:text-yellow-400 transition duration-200"
                onClick={() => setOpen(false)}
              >
                Why Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-400 transition duration-200"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
