// src/pages/CarRental.jsx
import {
  FaCar,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CarRentalPage() {
  return (
    <main className="w-full bg-gradient-to-br from-[#fff8f5] via-white to-[#fdfdfd] min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Car Rental Services – Explore Agra & Beyond
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Comfortable, safe, and affordable rides with professional drivers –
            your journey, your way!
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
          Why Choose Our Car Rental Service?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-10  ">
          {[
            {
              icon: <FaCheckCircle />,
              title: "Well-Maintained Vehicles",
              desc: "Regularly serviced, clean, and comfortable rides.",
            },
            {
              icon: <FaClock />,
              title: "Flexible Packages",
              desc: "Choose half-day, full-day, or custom tour rentals.",
            },
            {
              icon: <FaUsers />,
              title: "Experienced Drivers",
              desc: "Local experts who know the best routes & attractions.",
            },
            {
              icon: <FaShieldAlt />,
              title: "Safe & Reliable",
              desc: "Travel stress-free with trusted professionals.",
            },
            {
              icon: <FaCar />,
              title: "Affordable Pricing",
              desc: "Transparent rates with no hidden charges.",
            },
            {
              icon: <FaMapMarkerAlt />,
              title: "Convenient Pickup",
              desc: "From airports, stations, hotels, and city areas.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center"
            >
              <div className="text-red-600 text-4xl mb-4 mx-auto">
                {item.icon}
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vehicle Options */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-full mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-900">
            🚙 Vehicle Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:mx-10 ">
            {[
              { type: "Sedan", desc: "Perfect for couples & small families." },
              { type: "SUV", desc: "Ideal for groups & off-road trips." },
              {
                type: "Luxury Cars",
                desc: "Premium experience for your trip.",
              },
              { type: "Minivans", desc: "Spacious option for larger groups." },
            ].map((car, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
              >
                <FaCar className="text-red-600 text-3xl mb-3 mx-auto" />
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  {car.type}
                </h3>
                <p className="text-gray-600 text-sm">{car.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="max-w-full mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-900">
            📅 Rental Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:mx-10 ">
            {[
              {
                title: "Half-Day Rentals",
                desc: "Explore Agra’s attractions at your own pace.",
              },
              {
                title: "Full-Day Rentals",
                desc: "Visit Taj Mahal, Agra Fort, Mehtab Bagh, and more.",
              },
              {
                title: "Intercity Transfers",
                desc: "Travel comfortably between Agra, Delhi, Jaipur, etc.",
              },
              {
                title: "Custom Tours",
                desc: "Personalized itineraries based on your needs.",
              },
            ].map((pkg, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
              >
                <FaClock className="text-red-600 text-3xl mb-3 mx-auto" />
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 text-sm">{pkg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-full mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-900">
            📍 Popular Destinations
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-lg place-items-center">
            {[
              "Taj Mahal",
              "Agra Fort",
              "Fatehpur Sikri",
              "Mehtab Bagh",
              "Mathura & Vrindavan",
              "Day trips to Delhi & Jaipur",
            ].map((dest) => (
              <li
                key={dest}
                className="p-5 bg-white rounded-xl shadow hover:shadow-lg w-full max-w-sm"
              >
                {dest}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="bg-gradient-to-r from-[#9d1c1f] to-[#a11f23] text-white py-12 px-8 rounded-2xl shadow-lg max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Book Your Car Today!</h3>
          <p className="mb-6 text-gray-100 text-lg">
            Enjoy stress-free travel with door-to-door service from major
            locations. Our team is ready to assist you 24/7.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-red-700 font-medium py-3 px-8 rounded-lg shadow hover:scale-105 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
