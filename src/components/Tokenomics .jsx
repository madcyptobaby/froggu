import React from "react";

import {
  FaUsers,
  FaWallet,
  FaChartPie,
  FaLock,
  FaRocket,
  FaCoins,
} from "react-icons/fa";

const Tokenomics = () => {
  const data = [
    {
      icon: <FaCoins className="text-green-600 text-3xl" />,
      title: "Total Supply",
      percent: "1 000 000 000",
      description: "1 Billion Fixed supply",
    },
    {
      icon: <FaWallet className="text-green-600 text-3xl" />,
      title: "Team",
      percent: "0%",
      description: "fully community-driven",
    },
    {
      icon: <FaLock className="text-green-600 text-3xl" />,
      title: "Liquidity Pool",
      percent: "100%",
      description: "Locked liquidity to ensure trading stability.",
    },
    // {
    //   icon: <FaRocket className="text-green-600 text-3xl" />,
    //   title: "Marketing & Partnerships",
    //   percent: "10%",
    //   description: "Fuel for partnerships, influencers, and campaigns.",
    // },
    // {
    //   icon: <FaChartPie className="text-green-600 text-3xl" />,
    //   title: "Reserve",
    //   percent: "5%",
    //   description: "Held in reserve for future development and emergencies.",
    // },
  ];

  return (
    <section className="bg-white py-10" id="tokenomics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          📊 FROGGU Tokenomics
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Here's how $FROGGU is distributed to ensure fair and long-term growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-3xl font-bold text-green-600 mb-2">
                {item.percent}
              </p>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
