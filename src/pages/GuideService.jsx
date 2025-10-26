// src/pages/GuideService.jsx
import React, { useEffect } from "react";
import {
  FaIdBadge,
  FaGlobe,
  FaUserShield,
  FaUserFriends,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const guideBanner =
  "https://exploretajholidays-assets.s3.ap-south-1.amazonaws.com/images/guide/guide_banner.png";
const tajmahalImage =
  "https://exploretajholidays-assets.s3.ap-south-1.amazonaws.com/images/guide/tajmahal.jpeg";
const fatehpurImage =
  "https://exploretajholidays-assets.s3.ap-south-1.amazonaws.com/images/guide/fatehpur.jpeg";
const agrafortImage =
  "https://exploretajholidays-assets.s3.ap-south-1.amazonaws.com/images/guide/agra-fort.jpg";
const mehtabBaghImage =
  "https://exploretajholidays-assets.s3.ap-south-1.amazonaws.com/images/guide/mehtab_bagh.png";
const heritageImage =
  "https://exploretajholidays-assets.s3.ap-south-1.amazonaws.com/images/guide/heritage_walk.png";
const localMarketImage =
  "https://exploretajholidays-assets.s3.ap-south-1.amazonaws.com/images/guide/local_market.jpg";

export default function GuideServicePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        {/* ✅ Combined LocalBusiness + Service Schema for better rich results */}
        <script type="application/ld+json">{`
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Explore Taj Holidays - DOT Approved Tour Guides",
    "image": "https://exploretajholidays-assets.s3.ap-south-1.amazonaws.com/images/guide-banner.jpg",
    "@id": "https://www.exploretajholidays.com/guide-service",
    "url": "https://www.exploretajholidays.com/guide-service",
    "telephone": "+91-7017149405",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1813/1K, Fatehabad Rd, opp. Hotel Trident, near Prerna Apartment",
      "addressLocality": "Agra",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "282006",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "27.1673",
      "longitude": "78.0419"
    },
    "openingHours": "Mo-Su 09:00-19:00",
    "sameAs": [
      "https://www.facebook.com/exploretajholidays",
      "https://www.instagram.com/exploretajholidays",
      "https://www.linkedin.com/company/explore-taj-holidays"
    ],
    "description": "Hire DOT-approved, multilingual tour guides in Agra for Taj Mahal, Agra Fort, and Fatehpur Sikri tours. Trusted professionals with government certification from Explore Taj Holidays.",
    "serviceType": "Tour Guide Service",
    "areaServed": {
      "@type": "Place",
      "name": "Agra, Uttar Pradesh, India"
    }
  }
  `}</script>

        {/* ✅ SEO Title & Description */}
        <title>
          DOT Approved Tour Guides in Agra | Taj Mahal & Heritage Tours
        </title>

        <meta
          name="description"
          content="Hire licensed DOT-approved tour guides in Agra for Taj Mahal, Agra Fort, and heritage city tours. Explore Agra’s history with multilingual, experienced guides from Explore Taj Holidays."
        />

        <meta
          name="keywords"
          content="
      DOT approved tour guides Agra,
      Taj Mahal tour guide booking,
      Explore Taj Holidays guides,
      Agra sightseeing guide,
      government approved guides Taj Mahal,
      licensed tour guide Agra,
      heritage walk Agra,
      multilingual guide Agra,
      private guided tour Agra,
      local guide Agra Fort,
      Fatehpur Sikri guide,
      Delhi Agra Jaipur tour guide,
      Golden Triangle guide package,
      best guide in Agra,
      certified tour guide Agra,
      official Taj Mahal guide,
      professional tour guides India,
      same day Agra tour guide,
      Agra city heritage expert,
      personalized tour guide Agra
    "
        />

        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.exploretajholidays.com/guide-service"
        />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="DOT Approved Tour Guides in Agra | Taj Mahal & Heritage Tours"
        />
        <meta
          property="og:description"
          content="Book DOT-approved multilingual guides in Agra for Taj Mahal, Agra Fort, and heritage tours. Enjoy expert storytelling and safe, personalized experiences with Explore Taj Holidays."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.exploretajholidays.com/guide-service"
        />
        <meta property="og:image" content={guideBanner} />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="DOT Approved Tour Guides in Agra | Taj Mahal & Heritage Tours"
        />
        <meta
          name="twitter:description"
          content="Hire experienced DOT-approved guides in Agra for Taj Mahal and heritage walks. Trusted, multilingual professionals from Explore Taj Holidays."
        />
        <meta name="twitter:image" content={guideBanner} />
      </Helmet>

      <main className="w-full bg-gradient-to-br from-[#fff8f5] via-white to-[#fdfdfd] min-h-screen">
        {/* Hero Section */}
        <section
          className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center text-center"
          style={{
            backgroundImage: `url(${guideBanner})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-white max-w-3xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Department of Tourism (DOT) Approved Tour Guides
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Explore Agra with expert, licensed guides who bring history to
              life.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
            Our Guides – Department of Tourism Approved Experts
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-10">
            At <strong>Explore Taj Holidays</strong>, we believe that a
            memorable journey is built on knowledge, trust, and authentic
            experiences. That’s why we work with{" "}
            <strong>Department of Tourism (DOT)</strong> approved guides –
            carefully selected, trained, and licensed by the Government of India
            – to offer you the finest tour experience.
          </p>

          <div className="text-left max-w-6xl mx-auto space-y-4 text-gray-700">
            <p>
              ✅ <strong>Officially Certified –</strong> All our guides are
              registered and recognized by the Department of Tourism, ensuring
              credibility and trustworthiness.
            </p>
            <p>
              ✅ <strong>Expert Knowledge –</strong> From the architectural
              brilliance of the Taj Mahal to the rich cultural history of Agra
              Fort, our guides share accurate and insightful information.
            </p>
            <p>
              ✅ <strong>Multilingual Support –</strong> We cater to both
              domestic and international travelers with guides who speak
              multiple languages.
            </p>
            <p>
              ✅ <strong>Personalized Experience –</strong> Whether you prefer a
              quick overview or an in-depth exploration, our guides tailor tours
              to your interests and pace.
            </p>
            <p>
              ✅ <strong>Reliable & Safe –</strong> DOT guides follow strict
              protocols and safety guidelines to ensure you enjoy your trip
              without hassles.
            </p>
          </div>
        </section>

        {/* Why Choose Our Guides */}
        <section className="w-full mx-auto px-6 pb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
            Why Choose Our DOT Approved Guides?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-14">
            Our guides ensure your journey is safe, insightful, and
            unforgettable – blending history, culture, and hospitality with
            expertise.
          </p>

          {/* Centered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center place-items-center">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition w-full max-w-sm">
              <FaIdBadge className="text-red-600 text-4xl mb-4 mx-auto" />
              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                Officially Certified
              </h3>
              <p className="text-gray-600 text-sm">
                Registered & recognized by the Department of Tourism, Govt. of
                India.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition w-full max-w-sm">
              <FaGlobe className="text-red-600 text-4xl mb-4 mx-auto" />
              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                Multilingual Support
              </h3>
              <p className="text-gray-600 text-sm">
                Guides fluent in English, Hindi, French, Spanish & more.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition w-full max-w-sm">
              <FaUserShield className="text-red-600 text-4xl mb-4 mx-auto" />
              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                Safe & Reliable
              </h3>
              <p className="text-gray-600 text-sm">
                Trained to follow protocols, ensuring smooth and hassle-free
                travel.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition w-full max-w-sm">
              <FaUserFriends className="text-red-600 text-4xl mb-4 mx-auto" />
              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                Personalized Tours
              </h3>
              <p className="text-gray-600 text-sm">
                Tailor your experience – quick visit or deep exploration.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition w-full max-w-sm">
              <FaCheckCircle className="text-red-600 text-4xl mb-4 mx-auto" />
              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                Expert Knowledge
              </h3>
              <p className="text-gray-600 text-sm">
                Rich insights into history, architecture, and culture of Agra.
              </p>
            </div>
          </div>
        </section>

        {/* Popular Tours */}
        <section className="bg-gradient-to-r from-gray-50 via-white to-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            {/* Section Title */}
            <h3 className="text-3xl md:text-4xl font-extrabold mb-12 text-gray-900">
              🗺 Popular Tours We Cover
            </h3>

            {/* Grid of Tours */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {[
                {
                  name: "Taj Mahal",
                  img: tajmahalImage,
                },
                {
                  name: "Agra Fort",
                  img: agrafortImage,
                },
                {
                  name: "Fatehpur Sikri",
                  img: fatehpurImage,
                },
                {
                  name: "Mehtab Bagh",
                  img: mehtabBaghImage,
                },
                {
                  name: "Heritage Walks",
                  img: heritageImage,
                },
                {
                  name: "Local Markets",
                  img: localMarketImage,
                },
              ].map((tour) => (
                <li
                  key={tour.name}
                  className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                >
                  {/* Image */}
                  <img
                    src={tour.img}
                    alt={tour.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300 flex items-center justify-center">
                    <h4 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
                      {tour.name}
                    </h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What Our Guides Offer */}
        <section className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
            📜 What Our Guides Offer
          </h3>
          <ul className="text-center max-w-3xl mx-auto space-y-3 text-gray-700">
            <li>✔ Detailed historical, architectural, and cultural insights</li>
            <li>✔ Easy navigation through monuments and heritage sites</li>
            <li>
              ✔ Assistance with tickets, parking, and site-specific guidelines
            </li>
            <li>
              ✔ Recommendations for dining, shopping, and local attractions
            </li>
            <li>✔ Friendly interaction and customized itineraries</li>
            <li>✔ Emergency support and on-tour assistance</li>
          </ul>
        </section>

        {/* Contact Info */}
        <section className="py-20 px-6">
          <div className="bg-gradient-to-r from-[#9d1c1f] to-[#a11f23] text-white py-12 px-8 rounded-2xl shadow-lg max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Get in Touch with Our DOT Approved Guides
            </h3>
            <p className="mb-6 text-gray-100 text-lg">
              Let us help you create unforgettable memories! Whether you're
              traveling solo, with family, or on a group tour, our guides ensure
              your experience is safe, smooth, and enriching.
            </p>
            <p className="mb-4">
              📞 Phone:{" "}
              <a
                href="https://wa.me/917017149405?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Taj%20Mahal%20tours."
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100"
              >
                +91-7017149405
              </a>
            </p>
            <p className="mb-4">
              📧 Email:{" "}
              <a
                href="mailto:exploretajholiday@gmail.com"
                className="text-gray-100"
              >
                exploretajholiday@gmail.com
              </a>
            </p>
            <p className="mb-8">📍 Location: Agra, Uttar Pradesh, India</p>
            <Link
              to="/contact"
              className="inline-block bg-white text-red-700 font-medium py-3 px-8 rounded-lg shadow hover:scale-105 transition"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
