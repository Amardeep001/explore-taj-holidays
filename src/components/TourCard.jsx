import React from "react";
import { Link } from "react-router-dom";

export default function TourCard({ title, description, schedule }) {
  return (
    <Link to={`/itineraries`} className="block">
      <div className="relative bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between p-6 border border-gray-200 cursor-pointer">
        {/* Decorative Gradient Border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-200 via-pink-200 to-purple-200 opacity-30 blur-xl -z-10" />

        {/* Tour Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>

        {/* Description */}
        <p className="text-gray-700 mb-4">{description}</p>

        {/* Schedule */}
        {schedule && (
          <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1 mb-4">
            {schedule.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}

        {/* Call to Action */}
        <button className="mt-auto inline-block bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:scale-105 transform transition">
          Book Now
        </button>
      </div>
    </Link>
  );
}
