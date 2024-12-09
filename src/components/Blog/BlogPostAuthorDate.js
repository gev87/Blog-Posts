"use client";

import useBlogStore from "@/store/useBlogStore";

export default function BlogPostAuthorDate({ postId }) {
  const { posts } = useBlogStore();

  const foundPost = posts.find((p) => p.id === Number(postId));

  if (!foundPost) {
    return (
      <p className="text-sm text-gray-600 mb-4">By Unknown on Unknown date</p>
    );
  }

  return (
    <div className="text-sm text-gray-600 mb-4 flex justify-between dark:text-white">
      <div>Author: <strong>{foundPost.author}</strong> </div><div> Date:{" "}
      <i>{foundPost.publicationDate}</i> </div>
    </div>
  );
}
