// GalleryNavbar.jsx
import { Link } from "react-router-dom";

export default function GalleryNavbar() {
  return (
    <nav className="w-full bg-green-600 shadow-md mb-5">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Title */}
        <span className="text-white font-bold text-lg">FROGGU 🐸 Gallery</span>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="bg-white text-green-700 px-4 py-2 rounded-lg font-medium hover:bg-green-100 transition"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </nav>
  );
}
