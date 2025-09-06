export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920')`,
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg tracking-wide">
          Explore Incredible India
        </h1>
        <p className="text-lg md:text-2xl mb-6 drop-shadow-md font-light">
          Your Trusted Travel Partner Since 2012
        </p>
        <a
          href="#tours"
          className="inline-block bg-gradient-to-r from-yellow-500 to-red-600 px-8 py-4 rounded-xl text-lg font-semibold text-white shadow-lg hover:scale-105 transform transition duration-300"
        >
          View Tours
        </a>
      </div>

      {/* Decorative glowing circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-yellow-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-600 opacity-20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
    </section>
  );
}
