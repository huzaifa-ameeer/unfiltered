import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <h2 className="relative inline-block text-2xl font-bold">
        <span className="relative z-10">Unfiltered</span>
        <span className="absolute -inset-x-1.5 bottom-1 z-0 h-2 -rotate-1 rounded-sm bg-yellow-400"></span>
      </h2>
    </Link>
  );
}
