import React from "react";
import { FaXTwitter } from "react-icons/fa6"; // X (Twitter) icon
// w-[100px] h-[100px]
const SocialStrip = () => {
  return (
    <div className="w-full mb-5 flex justify-center items-center rounded-full ">
      <a
        href="https://twitter.com/froggu_xyz" // Replace with your Twitter link
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-yellow-400 transition text-2xl flex items-center gap-2"
      >
        <FaXTwitter className="text-6xl" />
        {/* <span className="text-base hidden sm:inline">Follow us on X</span> */}
      </a>
    </div>
  );
};

export default SocialStrip;
