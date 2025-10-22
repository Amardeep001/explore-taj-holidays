export default function LocationMap() {
  return (
    <section
      id="location"
      className="w-full pt-16 bg-gradient-to-r from-gray-50 via-white to-gray-50"
    >
      <div className="mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
          Find Us in Agra
        </h2>

        {/* Address */}
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          <span className="block text-lg font-semibold text-red-600">
            Explore Taj Holidays
          </span>
          Office No: 1813/1K, Fatehabad Rd,
          <br />
          Opp. Hotel Trident, near Prerna Apartment,
          <br />
          Agra, Uttar Pradesh 282006
        </p>

        {/* Google Map Embed — Updated for exact location */}
        <div className="w-full h-[400px] rounded-2xl shadow-lg overflow-hidden">
          <iframe
            title="Explore Taj Holidays Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.8708975695864!2d78.03725897517275!3d27.158566076519863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477775e1d0a77%3A0x4ec47af08b5f183d!2sExplore%20Taj%20Holidays!5e0!3m2!1sen!2sin!4v1731439920000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
