// src/pages/Itineraries.jsx
import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Loader2 } from "lucide-react";
import swal from "sweetalert";

export default function Itineraries() {
  const bookingRef = useRef(null);

  const handleBookNow = (tourName) => {
    setShowCustomForm({ visible: true, tourName });
    setTimeout(() => {
      bookingRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100); // 👈 slight delay ensures form renders before scroll
  };

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
    {
      title: "Golden Triangle Tour: Delhi – Agra – Jaipur (5N / 6D)",
      description:
        "Explore India’s most iconic destinations — Delhi, Agra, and Jaipur — on this 6-day Golden Triangle Tour. Experience royal palaces, Mughal marvels, and the vibrant culture of North India with expert guides and comfortable travel.",
      schedule: [
        "Day 1: Arrival in Delhi – Meet our representative and check in at your hotel. Optional evening sightseeing: India Gate, President’s House, Connaught Place.",
        "Day 2: Delhi Sightseeing – Visit Red Fort (outside view), Jama Masjid, Chandni Chowk, Raj Ghat, Humayun’s Tomb, Qutub Minar, and Lotus Temple. Overnight in Delhi.",
        "Day 3: Delhi → Agra (Approx. 4 hrs) – Visit Agra Fort, Mehtab Bagh (sunset view of Taj Mahal), and local markets. Overnight in Agra.",
        "Day 4: Agra → Jaipur (Approx. 5 hrs) – Early morning Taj Mahal visit, then drive to Jaipur via Fatehpur Sikri. Check in and rest. Overnight in Jaipur.",
        "Day 5: Jaipur Sightseeing – Visit Amber Fort, City Palace, Jantar Mantar, and Hawa Mahal. Optional visit to Chokhi Dhani for Rajasthani dinner and cultural show. Overnight in Jaipur.",
        "Day 6: Jaipur → Delhi (Approx. 5 hrs) – Drive back to Delhi and drop at airport or railway station for onward journey.",
        "Tour Highlights: Explore Delhi’s heritage, witness the Taj Mahal’s beauty, experience royal Jaipur, enjoy comfortable travel & expert-guided sightseeing.",
      ],
    },
    {
      title: "Delhi – Agra – Delhi Overnight Tour (1N / 2D)",
      description:
        "A perfect short getaway from Delhi to experience the Taj Mahal, Agra Fort, and Mehtab Bagh. Enjoy a comfortable overnight stay in Agra and personalized guided sightseeing before returning to Delhi.",
      schedule: [
        "Day 1: Delhi → Agra (Approx. 4 hrs) – Early morning pick-up from Delhi and drive via Yamuna Expressway. Visit Agra Fort, Mehtab Bagh, and explore Agra’s markets. Overnight in Agra.",
        "Day 2: Agra → Delhi (Approx. 4 hrs) – Early morning Taj Mahal visit at sunrise. Breakfast and check out. Drive back to Delhi and drop at hotel or airport.",
        "Tour Highlights: Visit Taj Mahal, explore Agra Fort, enjoy Yamuna River views from Mehtab Bagh, comfortable AC transfers, and guided heritage sightseeing.",
      ],
    },
    {
      title: "Ayodhya Luxury City Tour – For Foreign, NRI & VIP Guests",
      description:
        "Experience the spiritual soul of India with an exclusive Ayodhya city tour designed for foreign travelers, NRIs, diplomats, and VIP guests. Enjoy premium comfort, private guided visits, and seamless assistance to explore Ayodhya’s sacred temples and heritage sites.",
      schedule: [
        "Pickup from hotel/airport/railway station in a premium air-conditioned vehicle",
        "Visit Shri Ram Janmabhoomi Temple with guided cultural briefing and entry assistance (as per regulations)",
        "Explore Hanuman Garhi temple with panoramic city views",
        "Visit Kanak Bhawan – temple of Lord Ram and Goddess Sita",
        "Visit Dashrath Mahal – royal palace of the Ikshvaku dynasty",
        "Walk along Saryu River & Ghats – optional evening Aarti experience",
        "Visit Tulsi Smarak Bhawan for cultural insight into Goswami Tulsidas’ life",
        "Optional traditional vegetarian lunch at a premium local restaurant",
        "Drop back at hotel after sightseeing",
        "Tour Duration Options: Half Day (4–5 hours) or Full Day (7–8 hours)",
        "Best Time: October to March, early morning visits preferred for smooth darshan",
      ],
    },

    {
      title: "Varanasi City Tour – 3 Days / 2 Nights",
      description:
        "Discover the spiritual capital of India with this 3-day Varanasi tour. Experience sacred temples, sunrise boat ride on the Ganges, Sarnath excursion, and the mesmerizing Ganga Aarti, with comfortable stays and guided sightseeing.",
      schedule: [
        "Day 1: Arrival in Varanasi – Transfer to hotel and check-in",
        "Visit Kashi Vishwanath Temple, Annapurna Temple & Kal Bhairav Temple",
        "Evening Ganga Aarti at Dashashwamedh Ghat (VIP seating/boat view optional)",
        "Overnight stay in Varanasi",
        "Day 2: Early morning sunrise boat ride on River Ganges",
        "Breakfast at hotel",
        "Visit Banaras Hindu University (BHU) & New Vishwanath Temple",
        "Excursion to Sarnath – Dhamek Stupa, Mulagandha Kuti Vihar & Museum",
        "Evening at leisure or optional cultural program",
        "Overnight stay in Varanasi",
        "Day 3: Breakfast and check-out",
        "Transfer for departure",
        "Option A: Train by Vande Bharat Express to Delhi (meals onboard)",
        "Option B: Flight to Delhi (approx. 1.5 hrs)",
      ],
    },

    {
      title: "Taj Mahal Sunrise Private Guided Tour with Photography",
      description:
        "Experience the Taj Mahal at sunrise with a private guided tour focused on photography. Enjoy fewer crowds, perfect morning light, and personalized assistance for capturing stunning memories of this world wonder.",
      schedule: [
        "05:30 AM – Hotel pickup in Agra in a private air-conditioned vehicle",
        "Meet government-approved professional guide and complete entry formalities",
        "06:00 AM – Sunrise visit of Taj Mahal with photography session",
        "Photography highlights: Main entrance arch framing, reflection pool symmetry, Mughal gardens, Diana Bench portraits, marble inlay details, Yamuna river angle views",
        "Free time to explore and capture photos at your own pace",
        "Approx. 2–2.5 hours inside Taj Mahal",
        "Note: Photography not permitted inside the main mausoleum",
        "08:30 AM – Drop back at hotel in Agra",
        "Tour ends with Explore Taj Holidays – A Comfort World",
      ],
    },
  ];

  const [showCustomForm, setShowCustomForm] = useState({
    visible: false,
    tourName: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleCustomSubmit = async (e) => {
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
      tourName: formData.get("tourName"),
    };

    try {
      const res = await fetch("/api/custom-itinerary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        e.target.reset();
        setShowCustomForm(false);
        swal({
          title: "THANK YOU FOR BOOKING WITH US.!",
          text:
            "We are really thankful to you for choosing & trusting us.\n" +
            "One of our Travel Experts will contact you within 24 hours.",
          button: {
            text: "Continue to Iteneraries Page",
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
          <h1 className="text-4xl font-extrabold text-center mt-16 md:mt-12 mb-12 text-gray-900">
            Itineraries
          </h1>

          {/* Predefined Tours */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {tours.map((tour, idx) => (
              <div
                key={idx}
                className="relative flex flex-col justify-between rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-br from-sky-100 via-white to-pink-100 border border-gray-200"
              >
                <div>
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

                {/* ✅ Book Now Button pinned at bottom */}
                <div className="text-center mt-6">
                  <button
                    onClick={() => handleBookNow(tour.title)} // 👈 scroll trigger
                    className="bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:scale-105 transform transition"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Booking / Custom Form */}
          <div ref={bookingRef} className="text-center mt-16">
            {" "}
            {/* 👈 scroll target */}
            {!showCustomForm.visible ? (
              <button
                onClick={() => handleBookNow("")}
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium shadow hover:bg-red-700 transition"
              >
                Create Your Custom Itinerary
              </button>
            ) : (
              <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl mx-auto text-left relative">
                {loading && (
                  <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10">
                    <Loader2 className="w-8 h-8 animate-spin text-red-500" />
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  {showCustomForm.tourName
                    ? `Book: ${showCustomForm.tourName}`
                    : "Custom Itinerary Request"}
                </h3>

                <form className="space-y-5" onSubmit={handleCustomSubmit}>
                  <input
                    type="hidden"
                    name="tourName"
                    value={showCustomForm.tourName || "Custom Itinerary"}
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Contact Number"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                    />
                    <input
                      type="number"
                      name="pax"
                      placeholder="No. of Pax"
                      min="1"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                    />
                    <input
                      type="date"
                      name="date"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                    />
                  </div>

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your travel preferences or special requests..."
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                  ></textarea>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium shadow hover:bg-red-700 transition w-full"
                  >
                    {loading ? "Sending..." : "Submit Booking"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
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
