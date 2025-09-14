import React, { useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import contactImage from "../assets/contact.png";

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Banner */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${contactImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-4xl md:text-5xl font-extrabold text-white z-10">
          Contact Us
        </h1>
      </section>

      {/* Contact Details + Form */}
      <section className="max-w-full mx-auto px-6 lg:px-10 mt-12 grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions, suggestions, or need help planning your trip? Reach
            out to us anytime. We’d love to hear from you!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Phone className="text-yellow-500" />
              <span className="text-gray-800 text-lg font-medium">
                +91-7017149405
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-yellow-500" />
              <span className="text-gray-800 text-lg font-medium">
                info@exploretajholidays.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-yellow-500" />
              <span className="text-gray-800 text-lg font-medium">
                Agra, Uttar Pradesh, India
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">
            Send Us a Message
          </h3>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your query or suggestion..."
                className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
