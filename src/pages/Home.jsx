import Hero from "../components/Hero";
import TourCard from "../components/TourCard";
import WhyChooseUs from "../components/WhyChooseUs";

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
      <section
        id="about"
        className="w-full py-20 bg-gradient-to-r from-yellow-50 via-pink-50 to-purple-50 flex justify-center"
      >
        <div className="w-full lg:w-4/5 text-center px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            About Us – Explore Taj Holidays
          </h2>

          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
            Welcome to{" "}
            <span className="font-semibold text-pink-600">
              Explore Taj Holidays
            </span>
            , your trusted travel partner in Agra – the city of the Taj Mahal.
            Since <span className="font-semibold text-pink-600">2012</span>,
            we’ve been curating unforgettable journeys for guests from across
            the globe.
          </p>

          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
            We specialize in{" "}
            <span className="text-purple-600 font-medium">
              personalized tours
            </span>
            ,{" "}
            <span className="text-purple-600 font-medium">
              professional guide services
            </span>
            , and{" "}
            <span className="text-purple-600 font-medium">
              reliable transport
            </span>{" "}
            to help you explore the heritage, culture, and charm of Agra at your
            own pace. Our guides are licensed by the Department of Tourism,
            ensuring authentic stories, accurate history, and a truly enriching
            experience.
          </p>

          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Whether you’re planning a serene{" "}
            <span className="font-semibold text-pink-600">
              sunrise view of the Taj Mahal
            </span>
            , a guided walk through{" "}
            <span className="font-semibold text-pink-600">Agra Fort</span>, or a
            cultural trip to{" "}
            <span className="font-semibold text-pink-600">Fatehpur Sikri</span>,
            we take care of every detail—making your journey smooth, memorable,
            and extraordinary.
          </p>
        </div>
      </section>

      {/* Tours Section */}
      <section
        id="tours"
        className="w-full py-20 flex flex-col items-center bg-gradient-to-r from-indigo-50 via-white to-indigo-100"
      >
        <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
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
      <section className="w-full bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <WhyChooseUs />
        </div>
      </section>
    </>
  );
}
