import React, { useEffect } from "react";
import Hero from "../components/Hero";
import TourCard from "../components/TourCard";
import WhyChooseUs from "../components/WhyChooseUs";
import About from "../components/About";
import Contact from "../components/Contact";
import LocationMap from "../components/LocationMap";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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

  return (
    <>
      <Helmet>
        <title>
          Explore Taj Holidays | Taj Mahal Tours, Same Day Agra Trips & Golden
          Triangle Packages
        </title>

        <meta
          name="description"
          content="Book private Taj Mahal and Agra tours with Explore Taj Holidays — experts in same-day Delhi to Agra trips, Golden Triangle packages, and sunrise photography tours. Experience guided sightseeing, car rentals, and custom travel itineraries across North India."
        />

        <meta
          name="keywords"
          content="
      Explore Taj Holidays,
      Explore Taj Travels,
      Agra tours,
      Taj Mahal tours,
      Delhi to Agra tour,
      same day Agra tour by car,
      Taj Mahal tour from Delhi airport,
      private guided tours India,
      Agra local sightseeing package,
      Golden Triangle tour India,
      Delhi Agra Jaipur tour package,
      sunrise Taj Mahal photography tour,
      Agra car rental,
      India travel packages from USA,
      India travel packages from UK,
      Fatehpur Sikri tour,
      Agra fort tour,
      best Taj Mahal tour operator,
      North India tour packages,
      Agra day trips,
      cultural heritage tours,
      licensed tour guides Agra,
      private driver Agra,
      Agra sightseeing car hire,
      holiday packages India,
      Golden Triangle travel agency,
      Explore Taj Holidays reviews
    "
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.exploretajholidays.com/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Explore Taj Holidays | Taj Mahal Tours, Same Day Agra Trips & Golden Triangle Packages"
        />
        <meta
          property="og:description"
          content="Explore Taj Holidays offers private Taj Mahal and Agra tours, same-day Delhi to Agra trips, Golden Triangle packages, and sunrise photography experiences with licensed guides."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.exploretajholidays.com/" />
        <meta
          property="og:image"
          content="https://exploretajholidays-assets.s3.ap-south-1.amazonaws.com/images/travel_experience.jpeg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Explore Taj Holidays | Taj Mahal Tours, Same Day Agra Trips & Golden Triangle Packages"
        />
        <meta
          name="twitter:description"
          content="Plan your Delhi to Agra or Golden Triangle journey with Explore Taj Holidays. Private guided tours, car rentals, and custom itineraries for unforgettable India travel experiences."
        />
        <meta
          name="twitter:image"
          content="https://exploretajholidays-assets.s3.ap-south-1.amazonaws.com/images/travel_experience.jpeg"
        />
      </Helmet>

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Tours Section */}
      <section
        id="tours"
        className="w-full py-10 flex flex-col items-center bg-gradient-to-r from-[#fff8f5] via-white to-[#fff8f5]"
      >
        <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-[#9d1c1f] to-[#a11f23] bg-clip-text text-transparent">
          Popular Tours
        </h2>

        <div className="flex flex-wrap justify-center gap-10 px-4 lg:px-0">
          {tours.map((t, idx) => (
            <div key={idx} className="w-full sm:w-80 md:w-96">
              <TourCard {...t} />
            </div>
          ))}
        </div>

        {/* ⭐ View Tours Button */}
        <Link
          to="/itineraries"
          className="mt-12 px-10 py-4 bg-gradient-to-r from-[#a02023] to-[#c92d31] text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition transform duration-300"
        >
          View All Tours
        </Link>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-gradient-to-br from-white via-sky-50 to-white pt-10 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <WhyChooseUs />
        </div>
      </section>
      <Contact />
      <LocationMap />
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
