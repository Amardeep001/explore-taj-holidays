const bannerImage =
  "https://exploretajholidays-assets.s3.ap-south-1.amazonaws.com/images/banner.png";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Content */}
      <div
        className="relative z-10 text-center text-white px-4 max-w-3xl 
                      pt-24 md:pt-0"
      >
        {" "}
        {/* ⭐ Added mobile padding */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg tracking-wide">
          Explore Incredible India
        </h1>
        <p className="text-lg md:text-2xl mb-6 drop-shadow-md font-light">
          Your Trusted Travel Partner Since 2012
        </p>
        {/* Skip Section */}
        <section id="skip" className="w-full pt-6 rounded-2xl shadow-lg mt-4">
          <div className="px-6 flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 bg-gradient-to-r from-yellow-300 to-red-400 bg-clip-text text-transparent drop-shadow">
              Skip the Line – Taj Mahal Entry
            </h2>

            <p className="text-white/90 max-w-3xl leading-relaxed mb-6 text-base md:text-lg drop-shadow">
              Save time and avoid long queues at the Taj Mahal by booking your
              entry tickets online through the official ASI portal. Get instant
              confirmation, guaranteed entry, and a seamless experience so you
              can focus on exploring this iconic monument without delays.
            </p>

            <a
              href="http://asi.payumoney.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition transform hover:scale-105"
            >
              Book Taj Mahal Tickets Online
            </a>
          </div>
        </section>
      </div>

      {/* Decorative glowing circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-yellow-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-600 opacity-20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
    </section>
  );
}
