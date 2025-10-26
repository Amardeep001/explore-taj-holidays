// src/pages/CarRental.jsx
import React, { useState, useEffect } from "react";
import {
  FaCar,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Loader2 } from "lucide-react";

const carRentalImage =
  "https://exploretajholidays-assets.s3.ap-south-1.amazonaws.com/images/car_rental.png";

export default function CarRentalPage() {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/book-car", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("✅ Your car booking request has been sent successfully!");
        e.target.reset();
        setShowForm(false);
      } else {
        alert("❌ Failed to send booking request. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Car Rental in Agra | Taxi & Chauffeur Services for Taj Mahal & Golden
          Triangle Tours
        </title>

        <meta
          name="description"
          content="Book affordable and reliable car rental services in Agra with Explore Taj Holidays. Choose from sedans, SUVs, tempo travellers, and luxury cars for Taj Mahal tours, Delhi–Agra–Jaipur trips, airport transfers, and outstation travel across North India."
        />

        <meta
          name="keywords"
          content="
      car rental Agra,
      Agra car hire,
      Explore Taj Holidays car rental,
      Taj Mahal taxi service,
      Agra sightseeing cab,
      Golden Triangle car rental,
      Delhi Agra Jaipur taxi,
      Delhi Agra Jaipur car hire,
      sedan rental Agra,
      SUV rental Agra,
      tempo traveller Agra,
      luxury car rental Agra,
      airport transfer Agra,
      Agra to Delhi taxi,
      Agra to Jaipur cab,
      outstation car rental Agra,
      chauffeur driven cars Agra,
      private driver Agra,
      best car rental in Agra,
      affordable cab service Agra,
      Taj Mahal tour by car,
      same day Agra tour by taxi,
      Agra day trip car hire,
      sightseeing car service Agra,
      North India road trip packages
    "
        />

        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.exploretajholidays.com/car-rental"
        />

        {/* Open Graph for social sharing */}
        <meta
          property="og:title"
          content="Car Rental in Agra | Taxi & Chauffeur Services for Taj Mahal & Golden Triangle Tours"
        />
        <meta
          property="og:description"
          content="Travel comfortably with Explore Taj Holidays — offering reliable cars, professional drivers, and affordable packages for Taj Mahal tours, airport transfers, and Delhi–Jaipur–Agra trips."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.exploretajholidays.com/car-rental"
        />
        <meta property="og:image" content={carRentalImage} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Car Rental in Agra | Taxi & Chauffeur Services for Taj Mahal & Golden Triangle Tours"
        />
        <meta
          name="twitter:description"
          content="Book reliable, affordable car rentals in Agra with Explore Taj Holidays. Enjoy safe rides with professional drivers for Taj Mahal tours and intercity travel."
        />
        <meta name="twitter:image" content={carRentalImage} />
      </Helmet>

      <main className="w-full bg-gradient-to-br from-[#fff8f5] via-white to-[#fdfdfd] min-h-screen">
        {/* Hero Section */}
        <section
          className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center text-center"
          style={{
            backgroundImage: `url(${carRentalImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-white max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Car Rental Services – Explore Agra
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Comfortable, safe, and affordable rides with professional drivers
              – your journey, your way!
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
          <div className="w-full mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-900">
              🚙 Vehicle Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:mx-10 ">
              {[
                {
                  type: "Sedan",
                  desc: "Perfect for couples & small families.",
                },
                { type: "SUV", desc: "Ideal for groups & off-road trips." },
                {
                  type: "Luxury Cars",
                  desc: "Premium experience for your trip.",
                },
                {
                  type: "Minivans",
                  desc: "Spacious option for larger groups.",
                },
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
          <div className="w-full mx-auto px-6 text-center">
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
          <div className="w-full mx-auto px-6 text-center">
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
            <button
              onClick={() => setShowForm(true)}
              className="inline-block bg-white text-red-700 font-medium py-3 px-8 rounded-lg shadow hover:scale-105 transition"
            >
              Book a Car
            </button>

            <div className="mt-6">
              <Link
                to="/contact"
                className="text-white underline hover:text-gray-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
        {/* ✅ Car Booking Popup Form */}
        {showForm && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-8 relative">
              {loading && (
                <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10">
                  <Loader2 className="animate-spin text-red-600 w-8 h-8" />
                </div>
              )}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-3 right-4 text-gray-600 hover:text-red-600 text-xl"
              >
                ✖
              </button>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                🚗 Book Your Car Rental
              </h3>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Contact Number"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                  />
                  <input
                    type="number"
                    name="pax"
                    placeholder="No. of Pax"
                    min="1"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                  />
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <select
                    name="vehicleType"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                  >
                    <option value="">Select Vehicle Type</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Urbania">Urbania</option>
                  </select>

                  <select
                    name="package"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                  >
                    <option value="">Select Package</option>
                    <option value="Half Day 4hrs/40km">
                      Half Day 4hrs/40km
                    </option>
                    <option value="Full Day 8hrs/80km">
                      Full Day 8hrs/80km
                    </option>
                    <option value="Agra Airport Pickup/Drop">
                      Agra Airport Pickup/Drop
                    </option>
                    <option value="Railway Station Pickup/Drop">
                      Railway Station Pickup/Drop
                    </option>
                    <option value="Delhi Airport/Hotel Pickup/Drop">
                      Delhi Airport/Hotel Pickup/Drop
                    </option>
                    <option value="Jaipur Hotel/Airport Pickup/Drop">
                      Jaipur Hotel/Airport Pickup/Drop
                    </option>
                  </select>
                </div>

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Additional details or special requests..."
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  {loading ? "Sending..." : "Submit Booking"}
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
