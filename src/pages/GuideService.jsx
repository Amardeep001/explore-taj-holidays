// src/pages/GuideService.jsx
import React, { useState, useEffect } from "react";
import {
  FaIdBadge,
  FaGlobe,
  FaUserShield,
  FaUserFriends,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Loader2 } from "lucide-react";

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
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const tours = [
    {
      name: "Taj Mahal",
      img: tajmahalImage,
      description: `
        <h3 class="text-2xl font-bold mb-3 text-gray-900">Discover the Timeless Beauty of the Taj Mahal</h3>
        <p class="text-gray-700 mb-3">Step into a world where love is carved in white marble. The Taj Mahal, one of the Seven Wonders of the World, stands proudly on the banks of the Yamuna River in Agra, India — a symbol of eternal love, artistry, and perfection.</p>
        <p class="text-gray-700 mb-3">Commissioned by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this architectural masterpiece blends Persian, Islamic, and Indian styles, glowing with changing hues under the sun and moon.</p>
        <h4 class="text-lg font-semibold mt-4 mb-2 text-gray-900">Why Visit the Taj Mahal?</h4>
        <ul class="list-disc pl-6 text-gray-700 space-y-1 mb-3">
          <li>Witness the breathtaking marble dome that shimmers at sunrise and glows in moonlight.</li>
          <li>Explore the serene Mughal gardens and intricate carvings that tell tales of love and devotion.</li>
          <li>Capture unforgettable photos at one of the most romantic and iconic landmarks in the world.</li>
        </ul>
        <p class="text-gray-700">The Taj Mahal isn’t just a monument — it’s a journey into history, art, and emotion. Come, feel the magic for yourself.</p>
      `,
    },
    {
      name: "Agra Fort",
      img: agrafortImage,
      description: `
        <h3 class="text-2xl font-bold mb-3 text-gray-900">Experience the Majesty of Agra Fort</h3>
        <p class="text-gray-700 mb-3">Step back in time and explore the grandeur of Agra Fort, a UNESCO World Heritage Site that echoes the legacy of India’s glorious Mughal era. Located just 2.5 km from the Taj Mahal, this magnificent red sandstone fortress once served as the royal residence of emperors and a symbol of their power, art, and vision.</p>
        <p class="text-gray-700 mb-3">Built by Emperor Akbar in 1565, the fort is a masterpiece of Mughal architecture, blending Islamic and Hindu design influences. Walk through majestic gates, royal courtyards, and marble palaces that once witnessed the rise and fall of empires.</p>
        <h4 class="text-lg font-semibold mt-4 mb-2 text-gray-900">Highlights You Can’t Miss:</h4>
        <ul class="list-disc pl-6 text-gray-700 space-y-1 mb-3">
          <li><strong>Jahangir Palace:</strong> A fusion of Mughal and Rajput architecture.</li>
          <li><strong>Diwan-i-Aam & Diwan-i-Khas:</strong> Elegant halls where emperors held grand audiences.</li>
          <li><strong>Moti Masjid (Pearl Mosque):</strong> A pristine symbol of purity and devotion.</li>
          <li><strong>Musamman Burj:</strong> The romantic balcony where Shah Jahan spent his last days gazing at the Taj Mahal.</li>
        </ul>
        <p class="text-gray-700">Discover the heart of Mughal power — a fort that tells tales of courage, art, and timeless beauty. Agra Fort isn’t just a monument; it’s a living chapter of India’s royal past.</p>
      `,
    },
    {
      name: "Fatehpur Sikri",
      img: fatehpurImage,
      description: `
        <h3 class="text-2xl font-bold mb-3 text-gray-900">Step into the Timeless Grandeur of Fatehpur Sikri</h3>
        <p class="text-gray-700 mb-3">Discover the charm of Fatehpur Sikri, the “City of Victory,” and a stunning testament to the vision of Emperor Akbar. Just a short drive from Agra, this UNESCO World Heritage Site invites you to walk through an ancient royal city frozen in time — where every arch, courtyard, and palace tells a story of power, faith, and art.</p>
        <p class="text-gray-700 mb-3">Built in the 16th century, Fatehpur Sikri served as the Mughal capital for a brief but brilliant period. Its architecture reflects a harmonious blend of Persian, Islamic, and Indian styles, symbolizing Akbar’s dream of unity and cultural fusion.</p>
        <h4 class="text-lg font-semibold mt-4 mb-2 text-gray-900">Must-See Attractions:</h4>
        <ul class="list-disc pl-6 text-gray-700 space-y-1 mb-3">
          <li><strong>Buland Darwaza:</strong> The grand gateway that celebrates Akbar’s victory — one of the tallest in the world.</li>
          <li><strong>Jama Masjid:</strong> A magnificent mosque that radiates peace and devotion.</li>
          <li><strong>Panch Mahal:</strong> A five-story marvel offering breathtaking views.</li>
          <li><strong>Tomb of Salim Chishti:</strong> A sacred shrine believed to grant blessings and wishes.</li>
        </ul>
        <p class="text-gray-700">Walk through the mystical corridors of Fatehpur Sikri, where history whispers through red sandstone walls and the spirit of the Mughal Empire lives on.</p>
        <p class="text-gray-700">Fatehpur Sikri — where every step is a journey into royal elegance and timeless faith.</p>
      `,
    },
    {
      name: "Mehtab Bagh",
      img: mehtabBaghImage,
      description: `
        <h3 class="text-2xl font-bold mb-3 text-gray-900">Mehtab Bagh – The Moonlit Garden of the Taj Mahal</h3>
        <p class="text-gray-700 mb-3">Experience the romantic charm and serene beauty of Mehtab Bagh, the “Garden of the Moonlight,” located just across the Yamuna River from the Taj Mahal in Agra. Designed as the perfect viewing point for the monument of love, this Mughal-era garden offers breathtaking, symmetrical views of the Taj — especially at sunset and under the soft glow of the moon.</p>
        <p class="text-gray-700 mb-3">Originally laid out by Emperor Babur, the founder of the Mughal dynasty, Mehtab Bagh is the last of the eleven Mughal gardens along the Yamuna. With its lush greenery, tranquil walkways, and stunning riverfront setting, it’s a peaceful escape from the city bustle and a paradise for photographers and nature lovers alike.</p>
        <h4 class="text-lg font-semibold mt-4 mb-2 text-gray-900">Why Visit Mehtab Bagh:</h4>
        <ul class="list-disc pl-6 text-gray-700 space-y-1 mb-3">
          <li>Enjoy the most picturesque view of the Taj Mahal, reflected beautifully in the Yamuna River.</li>
          <li>Relax in perfectly landscaped Mughal gardens, filled with flowers, fountains, and shaded paths.</li>
          <li>Capture magical sunsets and moonlit moments for unforgettable photos.</li>
          <li>Ideal for couples, nature enthusiasts, and history lovers alike.</li>
        </ul>
        <p class="text-gray-700">Escape into the tranquil beauty of Mehtab Bagh, where nature, history, and love meet under the open sky.</p>
        <p class="text-gray-700">Mehtab Bagh — the garden where the Taj Mahal truly shines.</p>
      `,
    },
    {
      name: "Heritage Walks",
      img: heritageImage,
      description: `
        <h3 class="text-2xl font-bold mb-3 text-gray-900">Agra Heritage Walk – Discover the Soul of the City</h3>
        <p class="text-gray-700 mb-3">Go beyond the Taj Mahal and step into the living history of Agra with the Agra Heritage Walk — an unforgettable journey through time, culture, and tradition. Wander through narrow lanes, ancient markets, and vibrant neighborhoods that tell stories of Mughal grandeur and local life.</p>
        <p class="text-gray-700 mb-3">This guided walk takes you through the hidden gems of Agra, from centuries-old temples and mosques to artisan workshops where age-old crafts still thrive. Experience the real Agra — authentic, colorful, and full of life.</p>
        <h4 class="text-lg font-semibold mt-4 mb-2 text-gray-900">Highlights of the Agra Heritage Walk:</h4>
        <ul class="list-disc pl-6 text-gray-700 space-y-1 mb-3">
          <li>Explore the Kinari Bazaar, buzzing with local flavors, handicrafts, and Mughal-era charm.</li>
          <li>Visit ancient havelis, traditional houses showcasing Mughal artistry.</li>
          <li>Witness local artisans at work — bangle makers, marble inlayers, and spice traders.</li>
          <li>Enjoy a glimpse of everyday Agra, where heritage meets modern life.</li>
          <li>Capture stunning views of the Taj Mahal and Agra Fort from unique local vantage points.</li>
        </ul>
        <p class="text-gray-700">The Agra Heritage Walk isn’t just a tour — it’s a journey through stories, smiles, and centuries. Come walk through the lanes of history and see Agra the way locals live it!</p>
      `,
    },
    {
      name: "Local Markets",
      img: localMarketImage,
      description: `
        <h3 class="text-2xl font-bold mb-3 text-gray-900">Shopping in Agra – Take Home a Piece of Mughal Magic</h3>
        <p class="text-gray-700 mb-3">Your journey to Agra isn’t complete without diving into its vibrant markets and artistic heritage. Beyond the Taj Mahal, Agra is a shopper’s paradise — a city where centuries-old craftsmanship meets modern flair. From dazzling marble inlay work to colorful textiles and delicious local sweets, every lane offers something special to take home.</p>
        <h4 class="text-lg font-semibold mt-4 mb-2 text-gray-900">What to Shop For:</h4>
        <ul class="list-disc pl-6 text-gray-700 space-y-1 mb-3">
          <li><strong>Marble Handicrafts:</strong> Beautiful souvenirs inspired by the Taj Mahal’s artistry — inlaid with semi-precious stones.</li>
          <li><strong>Leather Goods:</strong> Agra is famous for high-quality leather shoes, bags, and belts.</li>
          <li><strong>Pietra Dura Work:</strong> Exquisite gemstone inlay art, crafted by descendants of the Taj’s original artisans.</li>
          <li><strong>Textiles & Embroidery:</strong> Handwoven carpets, silk sarees, and Mughal-style fabrics.</li>
          <li><strong>Agra Petha:</strong> The city’s iconic sweet treat — perfect as a gift or souvenir!</li>
        </ul>
        <p class="text-gray-700">Shop, smile, and celebrate Agra’s heritage! From royal artistry to street charm, shopping in Agra is more than retail — it’s a cultural experience you’ll never forget.</p>
      `,
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/book-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("✅ Your guide booking request has been sent successfully!");
        e.target.reset();
        setShowForm(false);
      } else {
        alert("❌ Failed to send booking. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

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
        <section className="bg-gradient-to-r from-gray-50 via-white to-gray-50 py-20 relative">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-12 text-gray-900">
              🗺 Popular Tours We Cover
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {tours.map((tour) => (
                <li
                  key={tour.name}
                  className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
                  onClick={() => setSelectedTour(tour)}
                >
                  <img
                    src={tour.img}
                    alt={tour.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300 flex items-center justify-center">
                    <h4 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
                      {tour.name}
                    </h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Modal */}
          {selectedTour && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
              <div className="bg-white max-w-2xl w-full mx-4 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh] relative animate-fadeIn">
                <button
                  onClick={() => setSelectedTour(null)}
                  className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
                >
                  &times;
                </button>
                <img
                  src={selectedTour.img}
                  alt={selectedTour.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div
                  className="p-6 text-left"
                  dangerouslySetInnerHTML={{ __html: selectedTour.description }}
                />
              </div>
            </div>
          )}
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
            <button
              onClick={() => setShowForm(true)}
              className="inline-block bg-white text-red-700 font-medium py-3 px-8 rounded-lg shadow hover:scale-105 transition"
            >
              Book a Guide
            </button>
            <div className="mt-6">
              <Link
                to="/contact"
                className="text-white underline hover:text-gray-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
        {/* ✅ Booking Popup Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-h-[90%] overflow-y-auto max-w-2xl p-8 relative">
              {loading && (
                <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10">
                  <Loader2 className="animate-spin text-red-600 w-8 h-8" />
                </div>
              )}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-1 right-1 px-[10px] py-[2px] text-gray-600 hover:text-red-600 text-xl"
              >
                ✖
              </button>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Book a DOT Approved Guide
              </h3>

              <form className="space-y-5" onSubmit={handleSubmit}>
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
                  rows="4"
                  placeholder="Your preferred sites or special requirements..."
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  {loading ? "Sending..." : "Submit Booking"}
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
