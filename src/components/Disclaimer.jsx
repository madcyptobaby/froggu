// Disclaimer.jsx
import React from "react";

// Disclaimer Component
function Disclaimer({ children }) {
  return (
    <div className="w-full bg-yellow-50 border-t border-b border-yellow-200">
      <div className="max-w-screen-lg mx-auto px-4 py-3 flex items-start gap-3">
        {/* Icon */}
        <div className="flex-shrink-0">
          <svg
            className="h-6 w-6 text-yellow-700"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 7h2v6h-2V7zm0 8h2v2h-2v-2z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Text */}
        <div className="text-sm text-yellow-900 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

// NoteDisclaimer Component
export default function NoteDisclaimer() {
  return (
    <Disclaimer>
      FROGGU is all about community vibes and shared experiences, not financial
      guarantees. The crypto world can be exciting but also unpredictable — so
      always do your own research, understand the risks, and only invest what
      you’re prepared to play with.
    </Disclaimer>
  );
}
