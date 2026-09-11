"use client";
import Link from "next/link";
import { useState } from "react";

const tabs = ["All", "Technology", "Startup", "Lifestyle", "Finance"];

const posts = [
  {
    title: "Building a Fullstack Blog with Next.js",
    category: "Technology",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  },
  {
    title: "How to Validate Your Startup Idea",
    category: "Startup",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
  },
  {
    title: "Work-Life Balance for Developers",
    category: "Lifestyle",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
  },
  {
    title: "Smart Budgeting Tips for Freelancers",
    category: "Finance",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    title: "The Rise of AI in Everyday Apps",
    category: "Technology",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    title: "Raising Your First Seed Round",
    category: "Startup",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80",
  },
];

export default function BlogSection() {
  const [active, setActive] = useState("All");
  const filteredPosts =
    active === "All" ? posts : posts.filter((post) => post.category === active);

  return (
    <div className="max-w-6xl mx-auto mt-16 pb-20">
      <div className="flex gap-2 flex-wrap justify-center mb-10">
        {tabs.map((tab) => (
          <button
            className={`px-4 py-2 rounded-full bg-white text-black cursor-pointer text-sm font-semibold transition-all duration-100 border shadow-[4px_4px_0px_#c2410c] hover:text-black active:translate-x-1 active:translate-y-1 active:shadow-none ${active === tab ? "bg-white text-black" : "text-gray-600 hover:text-black"}`}
            key={tab}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Link
            href="/post/post"
            key={post.title}
            className="block rounded-xl border overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#c2410c]"
          >
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                {post.category}
              </span>
              <h3 className="text-lg font-bold leading-snug">{post.title}</h3>
              <p className="text-sm text-gray-400">{post.readTime}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
