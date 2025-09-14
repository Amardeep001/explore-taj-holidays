// src/pages/About.jsx
import React, { useEffect } from "react";
import travelExperienceImage from "../assets/travel_experience.jpeg";
import { Link } from "react-router-dom";
import aboutImage from "../assets/about.png";

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Banner */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center "
        style={{
          backgroundImage: `url(${aboutImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-4xl md:text-5xl font-extrabold text-white z-10">
          About Us
        </h1>
      </section>

      {/* Intro */}
      <section className="max-w-full mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Welcome to Explore Taj Holidays
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          At Explore Taj Holidays, we believe that travel is more than just
          visiting monuments – it’s about experiencing the soul of a city. Based
          in Agra, the heart of India’s rich history, we specialize in creating
          memorable journeys for travelers from around the world. From the
          timeless Taj Mahal to hidden gems, we ensure your trip is authentic,
          safe, and unforgettable.
        </p>
      </section>

      {/* Values */}
      <section className="bg-white lg:px-10 py-16">
        <div className="max-w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl text-center font-bold mb-4 text-gray-900">
              Our Commitment
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              A memorable journey is built on knowledge, trust, and authentic
              experiences. That’s why we work with{" "}
              <strong>
                Department of Tourism (DOT) approved guides, licensed by the
                Government of India
              </strong>{" "}
              to offer you the finest tour experience.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✅ Officially Certified Guides</li>
              <li>✅ Expert Knowledge of History & Culture</li>
              <li>✅ Multilingual Support</li>
              <li>✅ Personalized Experiences</li>
              <li>✅ Reliable & Safe Travel</li>
            </ul>
          </div>
          <img
            src={travelExperienceImage}
            alt="Agra travel experience"
            className="rounded-2xl shadow-lg w-full "
          />
        </div>
      </section>

      {/* Services */}
      <section className="bg-gradient-to-r from-gray-50 via-white to-gray-50 py-16 text-center">
        <h3 className="text-3xl font-bold mb-10 text-gray-900">
          What We Offer
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <h4 className="font-semibold text-xl mb-2 text-red-600">
              Guided Tours
            </h4>
            <p className="text-gray-600 text-sm">
              Explore the Taj Mahal, Agra Fort, Fatehpur Sikri, and more with
              expert DOT-approved guides.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <h4 className="font-semibold text-xl mb-2 text-red-600">
              Car Rentals
            </h4>
            <p className="text-gray-600 text-sm">
              Comfortable vehicles, professional drivers, and flexible packages
              for local and intercity trips.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <h4 className="font-semibold text-xl mb-2 text-red-600">
              Customized Experiences
            </h4>
            <p className="text-gray-600 text-sm">
              Tailored itineraries, heritage walks, shopping tours, and cultural
              experiences designed just for you.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20 bg-gradient-to-r from-[#9d1c1f] to-[#a11f23] text-center text-white">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Create Memories Together
        </h3>
        <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-100">
          Whether you’re traveling solo, as a couple, or with a group, Explore
          Taj Holidays ensures every moment is filled with discovery, comfort,
          and joy.
        </p>
        <Link
          to="/contact"
          className="bg-white text-red-700 font-medium py-3 px-8 rounded-lg shadow hover:scale-105 transition"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
