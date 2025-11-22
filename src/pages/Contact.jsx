import React, { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Calendar,
  Users,
  Loader2,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import swal from "sweetalert";

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
      phone: formData.get("phone"),
      pax: formData.get("pax"),
      date: formData.get("date"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        e.target.reset();
        swal({
          title: "THANK YOU FOR BOOKING WITH US.!",
          text:
            "We are really thankful to you for choosing & trusting us.\n" +
            "One of our Travel Experts will contact you within 24 hours.",
          button: {
            text: "Continue to Contact Page",
            className: "swal-button--confirm",
          },
        });
      } else {
        swal("Failed!", "❌ Failed to send booking. Try again later.", "error");
      }
    } catch (err) {
      console.error(err);
      swal("Error!", "⚠️ Something went wrong!", "warning");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* SEO Helmet */}
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

      {/* Page Layout */}
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
              Reach out to us anytime — we’d love to hear from you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="text-yellow-500" />
                <a
                  href="https://wa.me/917017149405?text=Hello%2C%20I%20want%20to%20plan%20a%20trip%20to%20Agra."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 text-lg font-medium"
                >
                  +91-7017149405
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-yellow-500" />
                <a
                  href="mailto:exploretajholiday@gmail.com"
                  className="text-gray-800 text-lg font-medium"
                >
                  exploretajholiday@gmail.com
                </a>
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
                  href="https://wa.me/917017149405?text=Hello%2C%20I%20want%20to%20book%20a%20Taj%20Mahal%20tour."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 text-lg font-medium hover:text-green-600 transition"
                >
                  Chat on WhatsApp
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
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none"
                  required
                />
              </div>

              {/* Contact No */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none"
                  required
                />
              </div>

              {/* No. of Pax */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Number of Pax
                </label>
                <input
                  type="number"
                  name="pax"
                  min="1"
                  placeholder="Number of travelers"
                  className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none"
                  required
                />
              </div>

              {/* Travel Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Travel Date
                </label>
                <input
                  type="date"
                  name="date"
                  className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Write your query or travel requirements..."
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
      <a
        href="https://wa.me/917017149405"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-3 left-3 z-50 bg-green-500 rounded-full shadow-xl p-4 hover:bg-green-600 transition transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8 text-white fill-white"
        >
          <path d="M16.003 2.003c-7.732 0-14 6.268-14 14 0 2.474.646 4.884 1.872 7.008L2 30l7.187-1.856A13.94 13.94 0 0 0 16.003 30c7.732 0 14-6.268 14-14s-6.268-14-14-14zm0 2c6.627 0 12 5.373 12 12 0 6.628-5.373 12-12 12-2.162 0-4.289-.586-6.15-1.693l-.44-.259-4.266 1.103 1.14-4.162-.286-.452A11.94 11.94 0 0 1 4.003 16c0-6.627 5.373-12 12-12zm6.207 15.342c-.338-.169-2.003-.988-2.314-1.102-.311-.113-.538-.17-.764.17-.226.339-.878 1.101-1.076 1.327-.198.226-.395.254-.733.085-.338-.169-1.428-.527-2.72-1.681-1.005-.898-1.684-2.007-1.882-2.346-.198-.339-.021-.522.148-.69.152-.152.339-.395.508-.592.169-.198.226-.339.339-.565.113-.226.056-.424-.028-.593-.085-.169-.764-1.843-1.047-2.523-.276-.664-.558-.573-.764-.585l-.651-.012c-.226 0-.593.085-.904.424-.311.339-1.187 1.16-1.187 2.828 0 1.668 1.215 3.278 1.385 3.504.169.226 2.392 3.655 5.815 5.118.813.351 1.446.561 1.939.717.815.259 1.558.223 2.146.135.655-.098 2.003-.817 2.287-1.606.282-.789.282-1.466.197-1.606-.085-.141-.31-.226-.648-.395z" />
        </svg>
      </a>
    </>
  );
}
