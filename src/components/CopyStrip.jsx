import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

const CopyStrip = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = "0x9370aAd26c59676a4b1De9099371A34bfb1231a0";

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2s
    });
  };

  return (
    <div className="bg-yellow-100 border-t border-yellow-300 w-full py-4 px-6 flex flex-col sm:flex-row justify-center items-center gap-x-5 text-center sm:text-left my-2">
      <span className="text-2xl font-bold">CA Address :</span>
      <span className="text-gray-800 text-lg font-medium">{textToCopy}</span>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        <FaRegCopy />
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default CopyStrip;
