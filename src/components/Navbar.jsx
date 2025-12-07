import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: "/", label: "Home" },
    { id: "/about", label: "About" },
    { id: "/contact", label: "Contact" },
    { id: "/guides", label: "Guide" },
    { id: "/car-rental", label: "Car Rental" },
    { id: "/itineraries", label: "Itineraries" },
  ];

  const isActive = (id) => {
    if (id.startsWith("/")) {
      return location.pathname === id;
    }
    return location.hash === id;
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full shadow-lg z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-black"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-4">
          {/* Logo Image */}
          <img
            src="/logo.jpg"
            alt="Explore Taj Holidays Logo"
            className="h-14 w-14 object-contain bg-transparent rounded-full"
          />
          <h1
            className={`text-2xl font-extrabold tracking-wide transition-colors duration-300 ${
              scrolled ? "text-white" : "text-white"
            }`}
            style={{
              textShadow: scrolled
                ? "none"
                : "2px 2px 8px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.7)",
            }}
          >
            Explore Taj Holidays
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-200 font-medium text-sm uppercase">
          {menuItems.map((item) => (
            <li key={item.id}>
              {item.id.startsWith("/") ? (
                <Link
                  to={item.id}
                  className={`transition duration-200 ${
                    isActive(item.id)
                      ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
                      : "hover:text-yellow-400"
                  } focus:outline-none focus:text-yellow-400`}
                  style={{
                    textShadow: scrolled
                      ? "none"
                      : "1px 1px 4px rgba(0,0,0,0.9)",
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.id}
                  className={`transition duration-200 ${
                    isActive(item.id)
                      ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
                      : "hover:text-yellow-400"
                  } focus:outline-none focus:text-yellow-400`}
                  style={{
                    textShadow: scrolled
                      ? "none"
                      : "1px 1px 4px rgba(0,0,0,0.9)",
                  }}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          style={{
            textShadow: scrolled ? "none" : "1px 1px 4px rgba(0,0,0,0.9)",
          }}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="bg-gray-900 md:hidden shadow-md border-t border-gray-700">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-200 font-medium text-sm uppercase">
            {menuItems.map((item) => (
              <li key={item.id}>
                {item.id.startsWith("/") ? (
                  <Link
                    to={item.id}
                    onClick={() => setOpen(false)}
                    className={`transition duration-200 ${
                      isActive(item.id)
                        ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
                        : "hover:text-yellow-400"
                    } focus:outline-none focus:text-yellow-400`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.id}
                    onClick={() => setOpen(false)}
                    className={`transition duration-200 ${
                      isActive(item.id)
                        ? "text-yellow-400 font-semibold border-b-2 border-yellow-400"
                        : "hover:text-yellow-400"
                    } focus:outline-none focus:text-yellow-400`}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
