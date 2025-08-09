// NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-green-200 p-6">
      {/* Frog Emoji / Icon */}
      <div className="text-7xl mb-4 animate-bounce">🐸</div>

      {/* 404 Title */}
      <h1 className="text-6xl font-extrabold text-green-800 drop-shadow-lg">
        404
      </h1>
      <p className="mt-3 text-lg text-green-700 text-center max-w-md">
        Oops! Looks like FROGGU hopped away from this page. Maybe it’s chilling
        in another pond.
      </p>

      {/* Back Home Button */}
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full font-medium shadow-lg transition"
      >
        🏠 Back to Home
      </Link>

      {/* Optional small tip */}
      <p className="mt-4 text-xs text-green-600">
        Tip: Always follow the lily pads — they lead back home.
      </p>
    </div>
  );
}
