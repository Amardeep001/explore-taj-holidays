import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Explore Taj Holidays
          </h2>
          <p className="text-sm leading-relaxed">
            Discover the magic of India with our curated tours and travel
            experiences. From the Taj Mahal to hidden gems, we make your journey
            memorable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-yellow-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/guide" className="hover:text-yellow-400 transition">
                Guide
              </Link>
            </li>
            <li>
              <Link
                to="/car-rental"
                className="hover:text-yellow-400 transition"
              >
                Car Rental
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Agra, Uttar Pradesh, India</li>
            <li>📞 +91 7017149405</li>
            <li>✉️ info@exploretajholidays.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Explore Taj Holidays. All rights reserved.
      </div>
    </footer>
  );
}
