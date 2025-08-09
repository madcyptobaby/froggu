import React from "react";
import ftwo from "../assets/f5.jpeg";
import "./Float.css";

const AboutUs = () => {
  return (
    <section className="bg-white py-20" id="aboutus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2 ">
          <img
            src={ftwo} // Replace with your own image/mascot/logo
            alt="About MemeCoin"
            className=" w-full max-w-md mx-auto md:mx-0 rounded-full  animate-float shadow-2xl"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About FROGGU 🐸
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            FROGGU was born when a frog saw a chart go up and said, “ribbit.”
            That ribbit echoed through the blockchain, summoned the meme gods,
            and now here we are.
          </p>
          <p className="text-md text-gray-600 mb-6">
            We don’t promise lambos — only endless frog pics, chaotic vibes, and
            the occasional moon jump.
          </p>
          <p className="text-md text-gray-600 mb-6 font-bold">
            Buy FROGGU. Hold FROGGU. Become FROGGU. 🐸🚀 In frog we trust.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition"
          >
            Join the Movement 🚀
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
