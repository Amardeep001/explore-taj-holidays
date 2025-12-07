// const bannerImage =
//   "https://exploretajholidays-assets.s3.ap-south-1.amazonaws.com/images/banner.png";

// export default function Hero() {
//   return (
//     <section
//       className="relative h-screen flex items-center justify-center bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${bannerImage})`,
//       }}
//     >
//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

//       {/* Content */}
//       <div
//         className="relative z-10 text-center text-white px-4 max-w-3xl
//                       pt-24 md:pt-0"
//       >
//         {" "}
//         {/* ⭐ Added mobile padding */}
//         <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg tracking-wide">
//           Explore Incredible India
//         </h1>
//         <p className="text-lg md:text-2xl mb-6 drop-shadow-md font-light">
//           Your Trusted Travel Partner Since 2012
//         </p>
//         {/* Skip Section */}
//         <section id="skip" className="w-full pt-6 rounded-2xl shadow-lg mt-4">
//           <div className="px-6 flex flex-col items-center text-center">
//             <h2 className="text-2xl md:text-3xl font-extrabold mb-4 bg-gradient-to-r from-yellow-300 to-red-400 bg-clip-text text-transparent drop-shadow">
//               Skip the Line – Taj Mahal Entry
//             </h2>

//             <p className="text-white/90 max-w-3xl leading-relaxed mb-6 text-base md:text-lg drop-shadow">
//               Save time and avoid long queues at the Taj Mahal by booking your
//               entry tickets online through the official ASI portal. Get instant
//               confirmation, guaranteed entry, and a seamless experience so you
//               can focus on exploring this iconic monument without delays.
//             </p>

//             <a
//               href="http://asi.payumoney.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition transform hover:scale-105"
//             >
//               Book Taj Mahal Tickets Online
//             </a>
//           </div>
//         </section>
//       </div>

//       {/* Decorative glowing circles */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute -top-32 -left-32 w-80 h-80 bg-yellow-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-600 opacity-20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
//       </div>
//     </section>
//   );
// }

export default function Hero() {
  // Replace with your S3 video URL
  // const videoUrl =
  //   "https://exploretajholidays-assets.s3.ap-south-1.amazonaws.com/images/tajmahal/tajmahal_video.mp4";
  const fallbackImage =
    "https://exploretajholidays-assets.s3.ap-south-1.amazonaws.com/images/tajmahal/tajmahal_tourist7.jpg";

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={fallbackImage}
      >
        <source src={videoUrl} type="video/mp4" />
      </video> */}

      {/* Fallback background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${fallbackImage})`,
          // display: "none",
        }}
      ></div>

      {/* Gradient overlay - removed for clearer video */}

      {/* Content */}
      <div className="relative z-10 text-center text-gray-900 px-4 max-w-3xl pt-24 mt-20 md:pt-0">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg tracking-wide">
          Explore Incredible India
        </h1>
        <p className="text-lg md:text-2xl mb-6 drop-shadow-md font-light">
          Your Trusted Travel Partner Since 2012
        </p>

        {/* Skip Section */}
        <section id="skip" className="w-full pt-6 rounded-2xl shadow-lg mt-4">
          <div className="px-6 flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 bg-gradient-to-r from-yellow-600 to-red-800 bg-clip-text text-transparent drop-shadow">
              Skip the Line – Taj Mahal Entry
            </h2>

            <p className="text-gray-900 max-w-3xl leading-relaxed mb-6 text-base md:text-lg drop-shadow">
              Save time and avoid long queues at the Taj Mahal by booking your
              entry tickets online through the official ASI portal. Get instant
              confirmation, guaranteed entry, and a seamless experience so you
              can focus on exploring this iconic monument without delays.
            </p>

            <div className="flex flex-col items-center gap-4">
              <a
                href="http://asi.payumoney.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 text-white font-semibold text-lg rounded-full shadow-2xl hover:bg-green-700 transition transform hover:scale-105"
              >
                Book Taj Mahal Tickets Online
              </a>

              <div
                className="flex items-center gap-2 text-white text-sm md:text-base"
                style={{
                  textShadow:
                    "1px 1px 4px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.6)",
                }}
              >
                <span>Need help?</span>
                <a
                  href="https://wa.me/917017149405?text=Hi%2C%20I%20need%20help%20booking%20Taj%20Mahal%20tickets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16.003 2.003c-7.732 0-14 6.268-14 14 0 2.474.646 4.884 1.872 7.008L2 30l7.187-1.856A13.94 13.94 0 0 0 16.003 30c7.732 0 14-6.268 14-14s-6.268-14-14-14zm0 2c6.627 0 12 5.373 12 12 0 6.628-5.373 12-12 12-2.162 0-4.289-.586-6.15-1.693l-.44-.259-4.266 1.103 1.14-4.162-.286-.452A11.94 11.94 0 0 1 4.003 16c0-6.627 5.373-12 12-12zm6.207 15.342c-.338-.169-2.003-.988-2.314-1.102-.311-.113-.538-.17-.764.17-.226.339-.878 1.101-1.076 1.327-.198.226-.395.254-.733.085-.338-.169-1.428-.527-2.72-1.681-1.005-.898-1.684-2.007-1.882-2.346-.198-.339-.021-.522.148-.69.152-.152.339-.395.508-.592.169-.198.226-.339.339-.565.113-.226.056-.424-.028-.593-.085-.169-.764-1.843-1.047-2.523-.276-.664-.558-.573-.764-.585l-.651-.012c-.226 0-.593.085-.904.424-.311.339-1.187 1.16-1.187 2.828 0 1.668 1.215 3.278 1.385 3.504.169.226 2.392 3.655 5.815 5.118.813.351 1.446.561 1.939.717.815.259 1.558.223 2.146.135.655-.098 2.003-.817 2.287-1.606.282-.789.282-1.466.197-1.606-.085-.141-.31-.226-.648-.395z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
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
