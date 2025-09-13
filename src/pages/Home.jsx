import Hero from "../components/Hero";
import TourCard from "../components/TourCard";
import WhyChooseUs from "../components/WhyChooseUs";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import LocationMap from "../components/LocationMap";

export default function Home() {
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
