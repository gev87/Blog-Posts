"use client";

import { BackNavigation } from "@/components/common";
import { useRouter } from "next/navigation";

export default function BlogPostError() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div
      className="flex flex-col items-center justify-center my-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded dark:bg-red-800 dark:border-red-600 dark:text-red-200"
      role="alert"
    >
      <p className="text-lg mb-4">
        Failed to load the blog post. Please try again later.
      </p>
       <BackNavigation/>
      <button
        onClick={handleBack}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800 transition-colors"
      >
        Go Back
      </button>
    </div>
  );
}
