import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import swal from "sweetalert";

export default function TourCard({ title, description, schedule }) {
  const [openForm, setOpenForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = {
      tour: title,
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      pax: formData.get("pax"),
      date: formData.get("date"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/book-tour", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        e.target.reset();
        setOpenForm(false);
        swal({
          title: "THANK YOU FOR BOOKING WITH US.!",
          text:
            "We are really thankful to you for choosing & trusting us.\n" +
            "One of our Travel Experts will contact you within 24 hours.",
          button: {
            text: "Continue to Home page",
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
      {/* Tour Card */}
      <div className="relative bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between p-6 border border-gray-200 cursor-pointer">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-200 via-pink-200 to-purple-200 opacity-30 blur-xl -z-10" />
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>

        {schedule && (
          <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1 mb-4">
            {schedule.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}

        <button
          onClick={() => setOpenForm(true)}
          className="mt-auto inline-block bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:scale-105 transform transition"
        >
          Book Now
        </button>
      </div>

      {/* Loader Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="flex flex-col items-center text-white">
            <Loader2 className="animate-spin w-10 h-10 mb-3" />
            <p className="text-lg font-semibold">Sending your message...</p>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {openForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-h-[90%] overflow-y-auto max-w-md shadow-xl relative">
            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-1 right-1 px-[10px] py-[2px] text-gray-500 hover:text-red-500 text-lg"
            >
              ✖
            </button>

            <h3 className="text-2xl font-semibold mb-5 text-gray-900">
              Book Tour: <span className="text-amber-500">{title}</span>
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-amber-400 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-amber-400 outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Contact Number"
                required
                className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-amber-400 outline-none"
              />
              <input
                type="number"
                name="pax"
                min="1"
                placeholder="No. of Travelers"
                required
                className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-amber-400 outline-none"
              />
              <input
                type="date"
                name="date"
                required
                className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-amber-400 outline-none"
              />
              <textarea
                name="message"
                rows="3"
                placeholder="Write your message..."
                className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-amber-400 outline-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-semibold text-white transition duration-300 ${
                  loading
                    ? "bg-amber-400 cursor-not-allowed"
                    : "bg-amber-500 hover:bg-amber-600"
                }`}
              >
                {loading ? "Sending..." : "Submit Booking"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
