import React from "react";
import { FaRocket } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-yellow-100 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            The Future of Fun <br />{" "}
            <span className="text-green-600">is MemeCoin 🐸</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Not just another coin. It’s a revolution of memes, community, and
            good vibes.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded shadow transition"
          >
            <FaRocket />
            Buy Now
          </a>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://i.imgur.com/1X6cD1t.png" // Replace this with your meme coin mascot or image URL
            alt="MemeCoin Mascot"
            className="w-80 sm:w-96 lg:w-[28rem] rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
