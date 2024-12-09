"use client";

import { useState } from "react";
import Image from "next/image";

export default function BlogPostImage({ src, alt }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="relative w-full h-auto" style={{ height: "auto" }}>
      <div
        className={`absolute inset-0 bg-gray-200 rounded transition-opacity duration-500 ease-out
            ${isLoading ? "opacity-100 animate-pulse" : "opacity-0"}`}
      />
      <Image
        priority
        src={src}
        alt={alt}
        width={600}
        height={400}
        className="w-full h-auto object-cover rounded"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
