// MemeGallery.jsx
import React from "react";
import GalleryNavbar from "./GalleryNavbar";

export default function MemeGallery({ images = [] }) {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <GalleryNavbar />
      {/* <h2 className="text-2xl font-bold mb-6 text-center">
        FROGGU 🐸 Meme Gallery
      </h2> */}
      {images.length === 0 ? (
        <p className="text-center text-gray-500">No memes added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 flex flex-col"
            >
              <img
                src={img}
                alt={`Meme ${index + 1}`}
                className="object-cover w-full h-56"
              />
              <div className="p-4 flex justify-center">
                <a
                  href={img}
                  download
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  ⬇ Download
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
