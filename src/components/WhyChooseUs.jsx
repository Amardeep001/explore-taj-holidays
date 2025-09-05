export default function WhyChooseUs() {
  const points = [
    "Over a decade of experience (since 2012)",
    "Licensed professional guides",
    "Comfortable, well-maintained transport",
    "Customized itineraries",
    "Transparent pricing – no hidden costs",
    "24/7 assistance during your trip",
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
            <div
              key={idx}
              className="bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-600 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <p className="text-white font-medium text-lg">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
