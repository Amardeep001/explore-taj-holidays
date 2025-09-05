export default function TourCard({ title, description, schedule }) {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition duration-300 flex flex-col justify-between text-white">
      {/* Tour Title */}
      <h3 className="text-2xl font-bold mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-200 mb-4">{description}</p>

      {/* Schedule */}
      {schedule && (
        <ul className="text-gray-300 text-sm list-disc pl-5 space-y-1 mb-4">
          {schedule.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      {/* Call to Action */}
      <button className="mt-auto inline-block bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-medium py-2 px-4 rounded-lg hover:scale-105 transform transition">
        Book Now
      </button>
    </div>
  );
}
