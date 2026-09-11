"use client";

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-[90%] sm:w-[75%] md:w-[60%] lg:w-[40%] mx-auto">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center border rounded-xl overflow-hidden p-1 w-full">
          <input
            type="text"
            placeholder="Search articles ..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-3 bg-transparent outline-none text-sm placeholder-gray-500"
          />
        </div>
      </div>

      <p>{query}</p>
    </div>
  );
}