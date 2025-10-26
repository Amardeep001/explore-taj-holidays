import { Link } from "react-router-dom";

export default function WhyChooseUs() {
  const points = [
    { text: "Over a decade of experience (since 2012)", link: "/about" },
    { text: "Licensed professional guides", link: "/guides" },
    { text: "Comfortable, well-maintained transport", link: "/car-rental" },
    { text: "Customized itineraries", link: "/itineraries" },
    { text: "Transparent pricing – no hidden costs", link: "/contact" },
    { text: "24/7 assistance during your trip", link: "/guides" },
  ];

  return (
    <section
      id="why"
      className="py-20 px-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-900">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((p, idx) => (
            <Link
              key={idx}
              to={p.link}
              className="block bg-gradient-to-tr from-gray-900 via-gray-700 to-gray-500 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <p className="text-white font-medium text-lg">{p.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
