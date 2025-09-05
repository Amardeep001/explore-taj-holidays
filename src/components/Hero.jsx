export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1563941408531-6a5d7a17f6fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGFqIG1haGFsfHx8fHx8MTY5MzkzODIyNw&ixlib=rb-4.0.3&q=80&w=1920')",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Discover the Taj Mahal with Us
        </h1>
        <p className="text-lg md:text-2xl mb-6 drop-shadow-md">
          Your trusted travel partner in Agra since 2012
        </p>
        <a
          href="#tours"
          className="inline-block bg-white px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transform transition duration-300 shadow-lg"
        >
          Explore Tours
        </a>
      </div>

      {/* Optional animated gradient circles for modern effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500 opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-400 opacity-20 rounded-full animate-pulse animation-delay-2000"></div>
      </div>
    </section>
  );
}
