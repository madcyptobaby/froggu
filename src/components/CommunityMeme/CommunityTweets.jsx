import { useEffect, useState } from "react";
import { Tweet } from "react-tweet";
import GalleryNavbar from "../Gallery/GalleryNavbar";

export default function CommunityTweetGallery() {
  const [tweetIds, setTweetIds] = useState([]);

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/1cP6UtmSsfpDZHaCfSdZIox7qoJZ3N-dyAw5j_giua-Y/gviz/tq?tqx=out:csv&sheet=Sheet1"
    )
      .then((res) => res.text())
      .then((data) => {
        const rows = data
          .split("\n")
          .map((row) => row.trim())
          .filter(Boolean);

        const ids = rows
          .map((url) => {
            const match = url.split("/status/")[1];
            return match ? match.split("?")[0].replace(/"/g, "").trim() : null;
          })
          .filter(Boolean);

        setTweetIds(ids);
      })
      .catch((err) => console.error("Error fetching tweet data:", err));
  }, []);

  return (
    <div className="flex flex-col">
      {/* Navbar with no margin/padding issues */}
      <div className="w-full border-b border-gray-200">
        <GalleryNavbar />
      </div>

      {/* Tweet Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-6">
        {tweetIds.map((id) => (
          <Tweet key={id} id={id} />
        ))}
      </div>
    </div>
  );
}
