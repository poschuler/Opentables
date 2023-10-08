"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
    <div className="text-left py-3 m-auto flex justify-center">
      <input
        className="rounded text-lg mr-3 p-2 w-[450px]"
        placeholder="State, City or Town"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="rounded bg-red-600 px-9 text-white"
        onClick={() => {
          if (location === "") {
            return;
          }
          router.push(`/search?city=${location}`);
          setLocation("");
        }}
      >
        Let&apos;s go
      </button>
    </div>
  );
}
