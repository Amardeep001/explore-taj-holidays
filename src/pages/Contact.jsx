import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Loader2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const contactImage =
  "https://exploretajholidays-assets.s3.ap-south-1.amazonaws.com/images/contact.png";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("✅ Message sent successfully!");
        e.target.reset();
      } else {
        alert("❌ Failed to send message. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        {/* ✅ JSON-LD Schema (Organization + LocalBusiness for Agra Office) */}
        <script type="application/ld+json">{`
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Explore Taj Holidays",
    "url": "https://www.exploretajholidays.com",
    "image": "https://exploretajholidays-assets.s3.ap-south-1.amazonaws.com/images/logo.png",
    "telephone": "+91-7017149405",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office Number: 1813/1K, Fatehabad Rd, opp. Hotel Trident, near Prerna Apartment",
      "addressLocality": "Agra",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "282006",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "27.1667",
      "longitude": "78.0167"
    },
    "openingHours": "Mo-Su 09:00-20:00",
    "sameAs": [
      "https://www.facebook.com/exploretajholidays",
      "https://www.instagram.com/exploretajholidays",
      "https://www.linkedin.com/company/explore-taj-holidays"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7017149405",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    }
  }
  `}</script>

        {/* ✅ Meta Information */}
        <title>
          Contact Explore Taj Holidays | Book Tours & Travel Packages in Agra
        </title>

        <meta
          name="description"
          content="Contact Explore Taj Holidays to book Taj Mahal tours, Agra sightseeing, Golden Triangle packages, or private car rentals. Reach our travel experts and DOT-approved guides for personalized India travel planning."
        />

        <meta
          name="keywords"
          content="
      Explore Taj Holidays contact,
      contact Explore Taj Holidays,
      Agra tour operator contact,
      Agra travel agency contact,
      Taj Mahal tour booking,
      Golden Triangle trip inquiry,
      India tour package contact,
      DOT-approved guides Agra,
      Agra tourism office,
      private car hire Agra,
      same day Agra tour booking,
      custom India travel itinerary,
      holiday planner Agra,
      North India tour booking,
      Agra sightseeing contact,
      best travel agency in Agra,
      professional tour operator Agra,
      Taj Mahal tour support,
      explore taj holidays phone,
      explore taj holidays email
    "
        />

        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.exploretajholidays.com/contact"
        />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="Contact Explore Taj Holidays | Book Tours & Travel Packages in Agra"
        />
        <meta
          property="og:description"
          content="Reach out to Explore Taj Holidays for tour bookings, car rentals, and custom itineraries in Agra. DOT-approved guides and expert travel support available daily."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.exploretajholidays.com/contact"
        />
        <meta property="og:image" content={contactImage} />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Explore Taj Holidays | Book Tours & Travel Packages in Agra"
        />
        <meta
          name="twitter:description"
          content="Message or call Explore Taj Holidays to plan your Agra and Golden Triangle trip. Personalized assistance from expert travel planners and licensed guides."
        />
        <meta name="twitter:image" content={contactImage} />
      </Helmet>

      {/* Loader Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="flex flex-col items-center text-white">
            <Loader2 className="animate-spin w-10 h-10 mb-3" />
            <p className="text-lg font-semibold">Sending your message...</p>
          </div>
        </div>
      )}

      <div className="bg-gray-50 min-h-screen pb-16">
        {/* Banner */}
        <section
          className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${contactImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <h1 className="relative text-4xl md:text-5xl font-extrabold text-white z-10">
            Contact Us
          </h1>
        </section>

        {/* Contact Section */}
        <section className="w-full mx-auto px-6 lg:px-10 mt-12 grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <p className="text-gray-600">
              Have questions, suggestions, or need help planning your trip?
              Reach out to us anytime. We’d love to hear from you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="text-yellow-500" />
                <span className="text-gray-800 text-lg font-medium">
                  <a
                    href="https://wa.me/917017149405?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Taj%20Mahal%20tours."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800"
                  >
                    +91-7017149405
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-yellow-500" />
                <span className="text-gray-800 text-lg font-medium">
                  <a
                    href="mailto:exploretajholiday@gmail.com"
                    className="text-gray-800"
                  >
                    exploretajholiday@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-yellow-500" />
                <span className="text-gray-800 text-lg font-medium">
                  Agra, Uttar Pradesh, India
                </span>
              </div>
              <div className="flex items-center gap-4">
                <MessageCircle className="text-yellow-500" />
                <a
                  href="https://wa.me/917017149405?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Taj%20Mahal%20tours."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 text-lg font-medium hover:text-green-600 transition"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Send Us a Message
            </h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
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
                  name="email"
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
                  name="message"
                  rows="4"
                  placeholder="Write your query or suggestion..."
                  className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-semibold text-white transition duration-300 ${
                  loading
                    ? "bg-yellow-400 cursor-not-allowed"
                    : "bg-yellow-500 hover:bg-yellow-600"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
