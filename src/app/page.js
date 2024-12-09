import { BlogPostList } from "@/components/Blog";
import { fetchPosts } from "@/lib/api";
import { POSTS_LIMIT } from "../Utils/constants";

export default async function Page() {
  const posts = await fetchPosts({ limit: POSTS_LIMIT, skip: 0 });
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recent Blog Posts</h1>
      <BlogPostList initialPosts={posts} />
    </div>
  );
}
