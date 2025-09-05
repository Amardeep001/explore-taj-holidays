import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-700">
          Explore Taj Holidays
        </h1>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#tours" className="hover:text-blue-600">
              Tours
            </a>
          </li>
          <li>
            <a href="#why" className="hover:text-blue-600">
              Why Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <Menu size={28} />
        </button>
      </div>
      {open && (
        <div className="bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700">
            <li>
              <a href="#about" onClick={() => setOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#tours" onClick={() => setOpen(false)}>
                Tours
              </a>
            </li>
            <li>
              <a href="#why" onClick={() => setOpen(false)}>
                Why Us
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
