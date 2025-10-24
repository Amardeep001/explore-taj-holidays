// src/pages/Itineraries.jsx
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function Itineraries() {
  const tours = [
    {
      title: "Same Day Delhi – Agra – Delhi Tour by Road",
      description:
        "Discover the Taj Mahal, Agra Fort, and local markets on a same-day trip from Delhi by road. Enjoy a guided tour, private car, and a seamless travel experience.",
      schedule: [
        "06:30 AM – Pick up from Delhi (via Yamuna Expressway, approx. 3.5–4 hrs)",
        "10:00 AM – Guided tour of Taj Mahal with licensed guide",
        "12:30 PM – Lunch at local restaurant or hotel",
        "01:30 PM – Explore Agra Fort, a UNESCO World Heritage Site",
        "03:30 PM – Local shopping (optional) – handicraft shops & marble inlay workshops",
        "04:30 PM – Drive back to Delhi",
        "08:00 PM – Arrival in Delhi at hotel or airport",
      ],
    },
    {
      title: "Private Guided Sunrise Visit – Taj Mahal",
      description:
        "Experience the magical beauty of the Taj Mahal at sunrise with a private, government-approved guide. Enjoy a peaceful walk, capture stunning photos, and learn the fascinating history behind this world wonder.",
      schedule: [
        "Early morning hotel pickup",
        "Sunrise at Taj Mahal with licensed guide",
        "Walk through gardens and capture photographs",
        "Optional visits to Agra Fort, Mehtab Bagh, or local handicraft markets",
        "Private AC car and chauffeur",
        "Hassle-free entrance assistance",
        "Flexible itinerary based on your schedule",
      ],
    },
  ];

  const [showCustomForm, setShowCustomForm] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        {/* ✅ JSON-LD Schema (Enhanced for Google Rich Results) */}
        <script type="application/ld+json">{`
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Taj Mahal & Agra Tour Itineraries - Explore Taj Holidays",
    "url": "https://www.exploretajholidays.com/itineraries",
    "description": "Discover curated Taj Mahal, Agra, and Golden Triangle itineraries from Explore Taj Holidays — expert-guided tours for every traveler.",
    "numberOfItems": 5,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "TouristTrip",
          "name": "Same Day Delhi-Agra Tour by Car",
          "url": "https://www.exploretajholidays.com/itineraries/same-day-delhi-agra",
          "description": "Private same-day Delhi-Agra trip with DOT-approved guide, air-conditioned vehicle, and entry tickets included."
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "TouristTrip",
          "name": "Sunrise Taj Mahal Tour",
          "url": "https://www.exploretajholidays.com/itineraries/sunrise-taj-mahal",
          "description": "Witness the breathtaking sunrise over the Taj Mahal and explore Agra Fort and Mehtab Bagh with an expert local guide."
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "TouristTrip",
          "name": "Golden Triangle Tour (Delhi-Agra-Jaipur)",
          "url": "https://www.exploretajholidays.com/itineraries/golden-triangle",
          "description": "A 3-city adventure through Delhi, Agra, and Jaipur featuring guided tours, hotels, and private transfers."
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "TouristTrip",
          "name": "Agra Heritage Walk & Local Experience",
          "url": "https://www.exploretajholidays.com/itineraries/agra-heritage-walk",
          "description": "Walk through Agra’s hidden gems, local markets, and heritage lanes with expert storytelling by DOT-certified guides."
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "TouristTrip",
          "name": "Custom Agra Tour Packages",
          "url": "https://www.exploretajholidays.com/itineraries/custom-tours",
          "description": "Tailor your own North India tour with custom itineraries, car rentals, and private guides from Explore Taj Holidays."
        }
      }
    ]
  }
  `}</script>

        {/* ✅ SEO Meta Tags */}
        <title>
          Agra Tour Itineraries | Taj Mahal & Golden Triangle Packages
        </title>

        <meta
          name="description"
          content="Browse handpicked Taj Mahal and Agra tour itineraries by Explore Taj Holidays. Choose Same Day Agra tours, Sunrise Taj visits, Golden Triangle trips, or custom North India packages with expert guides."
        />

        {/* ✅ Extended Keywords for SEO */}
        <meta
          name="keywords"
          content="
      Agra itineraries,
      Taj Mahal tour packages,
      Explore Taj Holidays itineraries,
      Same Day Delhi Agra tour,
      Sunrise Taj Mahal tour,
      Golden Triangle itinerary,
      Delhi Agra Jaipur trip,
      Agra sightseeing tour,
      Agra private day tour,
      2 day Agra itinerary,
      3 day Golden Triangle package,
      India heritage tours,
      custom India travel packages,
      Agra Fort and Taj tour,
      best Agra travel agency,
      North India cultural tour,
      Taj Mahal sunrise itinerary,
      family tours in Agra,
      private Agra tour guide,
      luxury Agra tours,
      short India trips
    "
        />

        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.exploretajholidays.com/itineraries"
        />

        {/* ✅ Open Graph (Social Sharing) */}
        <meta
          property="og:title"
          content="Agra Tour Itineraries | Taj Mahal & Golden Triangle Packages"
        />
        <meta
          property="og:description"
          content="Plan your perfect Agra trip — Same Day Delhi-Agra, Sunrise Taj Mahal, and Golden Triangle tours with Explore Taj Holidays."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.exploretajholidays.com/itineraries"
        />
        <meta
          property="og:image"
          content="https://exploretajholidays-assets.s3.ap-south-1.amazonaws.com/images/travel_experience.jpeg"
        />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Agra Tour Itineraries | Taj Mahal & Golden Triangle Packages"
        />
        <meta
          name="twitter:description"
          content="Explore curated Agra travel itineraries — Same Day Delhi-Agra, Sunrise Taj Mahal, and Golden Triangle tours by Explore Taj Holidays."
        />
        <meta
          name="twitter:image"
          content="https://exploretajholidays-assets.s3.ap-south-1.amazonaws.com/images/travel_experience.jpeg"
        />
      </Helmet>

      <main className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen py-16 px-6">
        <div className="max-w-full mx-auto">
          <h1 className="text-4xl font-extrabold text-center mt-16 md:mt-12  mb-12 text-gray-900">
            Itineraries
          </h1>

          {/* Predefined Tours */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {tours.map((tour, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-br from-sky-100 via-white to-pink-100 border border-gray-200"
              >
                {/* Subtle decorative gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-200/40 via-pink-200/30 to-purple-200/40 opacity-70 -z-10 blur-lg"></div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {tour.title}
                </h2>
                <p className="text-gray-700 mb-6">{tour.description}</p>
                <ul className="space-y-2 text-left list-disc list-inside text-gray-600">
                  {tour.schedule.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Custom Itinerary Option */}
          <div className="text-center mt-16">
            {!showCustomForm ? (
              <button
                onClick={() => setShowCustomForm(true)}
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium shadow hover:bg-red-700 transition"
              >
                Create Your Custom Itinerary
              </button>
            ) : (
              <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl mx-auto text-left">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Custom Itinerary Request
                </h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                  />
                  <textarea
                    placeholder="Tell us about your preferred destinations, dates, and requirements..."
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium shadow hover:bg-red-700 transition"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
