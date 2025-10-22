import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-sky-50 via-white to-sky-50"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-sky-600 to-teal-500 bg-clip-text text-transparent">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          We’d love to help you plan your perfect journey ✨
        </p>

        {/* Contact Info Cards Section */}
        <section className="w-full py-20 rounded-lg bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Get in Touch
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition border border-white/10">
                <FaMapMarkerAlt className="text-yellow-400 text-3xl mb-3 mx-auto" />
                <p className="font-semibold text-white">Agra, India</p>
                <p className="text-gray-300 text-sm">📍 Uttar Pradesh</p>
              </div>

              <a
                href="https://wa.me/917017149405?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Taj%20Mahal%20tours."
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition border border-white/10">
                  <FaPhoneAlt className="text-green-400 text-3xl mb-3 mx-auto" />
                  <p className="font-semibold text-white">+91-7017149405</p>
                  <p className="text-gray-300 text-sm">📱 Phone / WhatsApp</p>
                </div>
              </a>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition border border-white/10">
                <FaEnvelope className="text-pink-400 text-3xl mb-3 mx-auto" />
                <p className="font-semibold text-white">
                  exploretajholiday@gmail.com
                </p>
                <p className="text-gray-300 text-sm">✉️ Drop us an email</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition border border-white/10">
                <FaClock className="text-sky-400 text-3xl mb-3 mx-auto" />
                <p className="font-semibold text-white">Mon – Sun</p>
                <p className="text-gray-300 text-sm">🕒 8:00 AM – 9:00 PM</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
