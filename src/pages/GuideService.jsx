// src/pages/GuideService.jsx
import {
  FaIdBadge,
  FaGlobe,
  FaUserShield,
  FaUserFriends,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import guideBanner from "../assets/guide/guide_banner.png";
import tajmahalImage from "../assets/guide/tajmahal.jpeg";
import fatehpurImage from "../assets/guide/fatehpur.jpeg";
import agrafortImage from "../assets/guide/agra-fort.jpg";
import mehtabBaghImage from "../assets/guide/mehtab_bagh.png";
import heritageImage from "../assets/guide/heritage_walk.png";
import localMarketImage from "../assets/guide/local_market.png";

export default function GuideServicePage() {
  return (
    <main className="w-full bg-gradient-to-br from-[#fff8f5] via-white to-[#fdfdfd] min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-center"
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
            Explore Agra with expert, licensed guides who bring history to life.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-full mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
          Our Guides – Department of Tourism Approved Experts
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-10">
          At <strong>Explore Taj Holidays</strong>, we believe that a memorable
          journey is built on knowledge, trust, and authentic experiences.
          That’s why we work with <strong>Department of Tourism (DOT)</strong>{" "}
          approved guides – carefully selected, trained, and licensed by the
          Government of India – to offer you the finest tour experience.
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
            ✅ <strong>Multilingual Support –</strong> We cater to both domestic
            and international travelers with guides who speak multiple
            languages.
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
          Our guides ensure your journey is safe, insightful, and unforgettable
          – blending history, culture, and hospitality with expertise.
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
          <li>✔ Recommendations for dining, shopping, and local attractions</li>
          <li>✔ Friendly interaction and customized itineraries</li>
          <li>✔ Emergency support and on-tour assistance</li>
        </ul>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-6">
        <div className="bg-gradient-to-r from-[#9d1c1f] to-[#a11f23] text-white py-12 px-8 rounded-2xl shadow-lg max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">
            📩 Get in Touch with Our DOT Approved Guides
          </h3>
          <p className="mb-6 text-gray-100 text-lg">
            Let us help you create unforgettable memories! Whether you're
            traveling solo, with family, or on a group tour, our guides ensure
            your experience is safe, smooth, and enriching.
          </p>
          <p className="mb-4">📞 Phone: +91-7017149405</p>
          <p className="mb-4">📧 Email: info@exploretajholidays.com</p>
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
  );
}
