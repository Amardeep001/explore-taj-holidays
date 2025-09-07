import React from "react";
import tourismImage from "../assets/agra_tourism.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-20 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100"
    >
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 lg:px-12">
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
            we’ve been curating
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
            to help you explore Agra’s{" "}
            <span className="text-[#b91c1c] font-medium">
              heritage & culture
            </span>
            at your own pace.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            Whether it’s a serene{" "}
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

        {/* Right: Image */}
        <div className="relative group">
          <img
            src={
              tourismImage ||
              "https://images.pexels.com/photos/1796734/pexels-photo-1796734.jpeg?auto=compress&cs=tinysrgb&w=1200"
            }
            alt="Taj Mahal Travel"
            className="rounded-2xl shadow-lg transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/20 rounded-2xl group-hover:bg-black/5 transition"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
