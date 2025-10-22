import React, { useEffect } from "react";
import Hero from "../components/Hero";
import TourCard from "../components/TourCard";
import WhyChooseUs from "../components/WhyChooseUs";
import About from "../components/About";
import Contact from "../components/Contact";
import LocationMap from "../components/LocationMap";
import { Helmet } from "react-helmet-async";

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
          Explore Taj Holidays | Taj Mahal Tours & Agra Travel Packages
        </title>

        <meta
          name="description"
          content="Plan your Agra trip with Explore Taj Holidays. Book Taj Mahal tours, Golden Triangle packages, private guided tours, car rentals, and custom itineraries across India for an unforgettable travel experience."
        />

        <meta
          name="keywords"
          content="
      Explore Taj Holidays, 
      Explore Taj Travels
      Agra tours, 
      Taj Mahal tours, 
      Agra sightseeing, 
      Golden Triangle tour, 
      Delhi Agra Jaipur tour, 
      private guided tours, 
      India travel packages, 
      same day Agra tour, 
      sunrise Taj Mahal tour, 
      Agra tour by car, 
      Agra car rental, 
      Taj Mahal day trip, 
      Jaipur Agra tour, 
      Delhi Agra tour, 
      Agra fort tour, 
      Fatehpur Sikri tour, 
      North India tour packages, 
      cultural heritage tours, 
      custom itineraries, 
      local Agra guide, 
      best Taj Mahal tour operator, 
      holiday packages India, 
      Golden Triangle travel agency, 
      private driver Agra, 
      Explore Taj Holidays reviews
    "
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.exploretajholidays.com/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Explore Taj Holidays | Taj Mahal Tours & Agra Travel Packages"
        />
        <meta
          property="og:description"
          content="Book private Taj Mahal and Agra tours with Explore Taj Holidays. Enjoy guided sightseeing, car rentals, and custom Golden Triangle travel packages."
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
          content="Explore Taj Holidays | Taj Mahal Tours & Agra Travel Packages"
        />
        <meta
          name="twitter:description"
          content="Plan your perfect Agra getaway. Explore the Taj Mahal, Agra Fort, and Fatehpur Sikri with private guides and custom itineraries from Explore Taj Holidays."
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
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-gradient-to-br from-white via-sky-50 to-white pt-10 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <WhyChooseUs />
        </div>
      </section>
      <Contact />
      <LocationMap />
    </>
  );
}
