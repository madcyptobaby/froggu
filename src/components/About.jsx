import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://i.imgur.com/1X6cD1t.png" // Replace with your own image/mascot/logo
            alt="About MemeCoin"
            className="rounded-lg shadow-lg w-full max-w-md mx-auto md:mx-0"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About MemeCoin 🐸
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            MemeCoin isn’t just another meme token — it’s a movement. Born from
            the spirit of the internet, MemeCoin is powered by community, driven
            by laughter, and aimed at redefining the future of fun finance.
          </p>
          <p className="text-md text-gray-600 mb-6">
            Our mission is to combine the energy of meme culture with the
            transparency and innovation of decentralized finance. We believe
            that crypto should be accessible, community-driven, and — most
            importantly — fun.
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
