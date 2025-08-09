import React from "react";
import {
  FaFlagCheckered,
  FaBullhorn,
  FaUsers,
  FaRocket,
  FaGlobe,
} from "react-icons/fa";

const roadmapData = [
  {
    icon: <FaFlagCheckered className="text-white text-xl" />,
    title: "Phase 1: Launch ",
    date: "Q3 2025",
    description: "Launch on pump.fun, Website live, Twitter/X ",
    color: "bg-green-500",
  },
  {
    icon: <FaBullhorn className="text-white text-xl" />,
    title: "Phase 2: Contest",
    date: "Q4 2025",
    description: "Community memes contest, 1,000+ holders",
    color: "bg-yellow-500",
  },
  {
    icon: <FaUsers className="text-white text-xl" />,
    title: "Phase 3: Dex Listing",
    date: "Q1 2026",
    description: "DEX listing , CoinGecko & CoinMarketCap",
    color: "bg-blue-500",
  },
  {
    icon: <FaRocket className="text-white text-xl" />,
    title: "Phase 4: Liquidity Expansion",
    date: "Q2 2026",
    description: "Strengthen DEX liquidity, explore strategic partnerships..",
    color: "bg-purple-500",
  },
  // {
  //   icon: <FaGlobe className="text-white text-xl" />,
  //   title: "Phase 5: Global Expansion",
  //   date: "Q3 2026",
  //   description: "Multilingual support, global events, and MemeCoin merch.",
  //   color: "bg-red-500",
  // },
];
// bg-gray-50
// bg-gradient-to-b from-white to-yellow-50
const Roadmap = () => {
  return (
    <section
      className=" rounded-full bg-[radial-gradient(circle,_white,_#fefce8)] py-20"
      id="roadmap"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 Roadmap</h2>
        <p className="text-lg text-gray-600 mb-12">
          Here's what’s ahead for FROGGU. Join us on this moon mission!
        </p>

        <div className="relative border-l-4 border-green-400 pl-6 space-y-12">
          {roadmapData.map((step, index) => (
            <div key={index} className="relative">
              {/* Icon */}
              <div
                className={`absolute -left-7 top-1 w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${step.color}`}
              >
                {step.icon}
              </div>

              {/* Content */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                {/* <span className="text-sm text-gray-500 mb-2 block">
                  {step.date}
                </span> */}
                <p className="text-gray-700 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
