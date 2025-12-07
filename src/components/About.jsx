import React from "react";

const videoUrl =
  "https://exploretajholidays-assets.s3.ap-south-1.amazonaws.com/images/tajmahal/tajmahal_video.mp4";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-20 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100"
    >
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 lg:px-12">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl text-center font-extrabold mb-6 bg-gradient-to-r from-[#d97706] to-[#b91c1c] bg-clip-text text-transparent">
            About Us – Explore Taj Holidays
          </h2>

          <p className="text-base md:text-lg leading-relaxed mb-5 text-gray-700">
            Welcome to{" "}
            <span className="font-semibold text-[#d97706]">
              Explore Taj Holidays
            </span>
            , your trusted travel partner in Agra – the city of the{" "}
            <span className="font-semibold text-[#b91c1c]">Taj Mahal</span>.
            Since <span className="font-semibold text-[#d97706]">2012</span>,
            we've been curating
            <span className="font-semibold text-[#b91c1c]">
              {" "}
              unforgettable journeys
            </span>
            for guests from across the globe.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-5 text-gray-700">
            We specialize in{" "}
            <span className="text-[#d97706] font-medium">
              personalized tours
            </span>
            ,{" "}
            <span className="text-[#d97706] font-medium">
              professional guide services
            </span>
            , and{" "}
            <span className="text-[#d97706] font-medium">
              reliable transport
            </span>
            to help you explore Agra's{" "}
            <span className="text-[#b91c1c] font-medium">
              heritage & culture
            </span>
            at your own pace.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            Whether it's a serene{" "}
            <span className="font-semibold text-[#d97706]">
              sunrise view at the Taj
            </span>
            , a walk through{" "}
            <span className="font-semibold text-[#b91c1c]">Agra Fort</span>, or
            a cultural trip to{" "}
            <span className="font-semibold text-[#d97706]">Fatehpur Sikri</span>{" "}
            – we take care of every detail, making your journey{" "}
            <span className="text-[#b91c1c] font-medium">
              smooth, memorable, and extraordinary
            </span>
            .
          </p>
        </div>

        {/* Right: Video */}
        <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          {/* <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition"></div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
