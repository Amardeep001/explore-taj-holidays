// src/pages/About.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// https://exploretajholidays-assets.s3.ap-south-1.amazonaws.com/images/about.png
const travelExperienceImage =
  "https://exploretajholidays-assets.s3.ap-south-1.amazonaws.com/images/travel_experience.jpeg";
const aboutImage =
  "https://exploretajholidays-assets.s3.ap-south-1.amazonaws.com/images/tajmahal/tajmahal_tourist2.jpg";

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        {/* ✅ Title: Focus on Trust and Authority */}
        <title>
          Trusted Agra Tour Operator & Government Recognized Travel Agency |
          Explore Taj Holidays
        </title>

        {/* ✅ Description: Highlight Years of Experience and Authority */}
        <meta
          name="description"
          content="Since 2012, Explore Taj Holidays has been a government-recognized, trusted travel agency in Agra. We provide DOT-approved guides, private Taj Mahal tours, Golden Triangle packages, and exceptional service across North India."
        />

        {/* Keywords are still good, no major change needed here, though Google relies less on this tag now. */}
        <meta
          name="keywords"
          content="
      Explore Taj Holidays,
      About Explore Taj Holidays,
      Agra tour operator,
      Agra travel agency,
      DOT approved guides,
      licensed tour guides India,
      Taj Mahal tour company,
      Golden Triangle tour operator,
      Delhi Agra Jaipur tours,
      same day Agra tour,
      private guided tours in Agra,
      local Agra guides,
      government approved guide Agra,
      professional tour operator India,
      Agra sightseeing packages,
      cultural heritage tours India,
      best Agra travel agency,
      Taj Mahal day trip from Delhi,
      sunrise Taj Mahal guide service,
      Agra fort guided tour,
      Fatehpur Sikri guide,
      Agra tourism company,
      private car hire Agra,
      North India travel packages,
      Explore Taj Holidays reviews,
      trusted travel agency in Agra
    "
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.exploretajholidays.com/about" />

        {/* Open Graph (OG) is good, just updated the title/description to match */}
        <meta
          property="og:title"
          content="Trusted Agra Tour Operator & Government Recognized Travel Agency | Explore Taj Holidays"
        />
        <meta
          property="og:description"
          content="Explore Taj Holidays — your trusted Agra travel partner since 2012. Specializing in Taj Mahal tours, Golden Triangle trips, licensed guides, and private car rentals across North India."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.exploretajholidays.com/about"
        />
        <meta property="og:image" content={aboutImage} />

        {/* Twitter Card is good, updated the title/description to match */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Trusted Agra Tour Operator & Government Recognized Travel Agency | Explore Taj Holidays"
        />
        <meta
          name="twitter:description"
          content="Explore Taj Holidays offers DOT-approved guides, private tours, and customized Golden Triangle travel packages. Based in Agra, we deliver memorable India experiences since 2012."
        />
        <meta name="twitter:image" content={aboutImage} />

        {/* ---------------------------------------------------------------- */}
        {/* ✅ Structured Data (Schema.org) - Add to your <Helmet> or just before </body> */}
        {/* This confirms to Google that this page is your 'About' page. */}
        {/* NOTE: You may need to adjust how you inject this JSON-LD based on your React framework. */}
        <script type="application/ld+json">
          {`
            {
                "@context": "https://schema.org",
                "@type": "AboutPage",
                "mainEntityOfPage": "https://www.exploretajholidays.com/about",
                "name": "About Explore Taj Holidays - Trusted Agra Tour Operator",
                "description": "Information about Explore Taj Holidays, a government-recognized travel agency in Agra specializing in Taj Mahal and Golden Triangle tours since 2012.",
                "url": "https://www.exploretajholidays.com/about",
                "about": {
                    "@type": "Organization",
                    "name": "Explore Taj Holidays",
                    "url": "https://www.exploretajholidays.com",
                    "logo": "https://www.exploretajholidays.com/logo.jpg",
                    "foundingDate": "2012",
                    "areaServed": "IN",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91-7017149405",
                        "contactType": "Customer Service"
                    },
                    "sameAs": [
                        "https://www.facebook.com/exploretajholidays",
                        "https://www.instagram.com/exploretajholidays",
                        "https://www.linkedin.com/company/explore-taj-holidays"
                    ]
                }
            }
        `}
        </script>
      </Helmet>

      <main className="bg-gray-50 min-h-screen">
        {/* Banner */}
        <section
          className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${aboutImage})`,
          }}
        >
          {/* <div className="absolute inset-0 bg-black/50"></div> */}
          <h1
            className="relative text-4xl md:text-5xl font-extrabold text-white z-10"
            style={{
              textShadow:
                "2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)",
            }}
          >
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
            visiting monuments – it’s about experiencing the soul of a city.
            Based in Agra, the heart of India’s rich history, we specialize in
            creating memorable journeys for travelers from around the world.
            From the timeless Taj Mahal to hidden gems, we ensure your trip is
            authentic, safe, and unforgettable.
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
                Comfortable vehicles, professional drivers, and flexible
                packages for local and intercity trips.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
              <h4 className="font-semibold text-xl mb-2 text-red-600">
                Customized Experiences
              </h4>
              <p className="text-gray-600 text-sm">
                Tailored itineraries, heritage walks, shopping tours, and
                cultural experiences designed just for you.
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
