export default function LocationMap() {
  return (
    <section
      id="location"
      className="w-full pt-16 bg-gradient-to-r from-gray-50 via-white to-gray-50"
    >
      <div className=" mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
          Find Us in Agra
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Visit our office or start your journey with us right here in the
          beautiful city of{" "}
          <span className="text-red-600 font-semibold">
            Agra, Uttar Pradesh
          </span>
          .
        </p>

        {/* Google Map Embed with Tajganj Marker */}
        <div className="w-full h-[400px] rounded-2xl shadow-lg overflow-hidden">
          <iframe
            title="Explore Taj Holidays Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3558.933309218672!2d78.0167!3d27.1667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747762b0c6a6e1%3A0xa78d4f1236f94b1b!2sTajganj%2C%20Agra%2C%20Uttar%20Pradesh%20282001!5e0!3m2!1sen!2sin!4v1694000000000!5m2!1sen!2sin"
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
