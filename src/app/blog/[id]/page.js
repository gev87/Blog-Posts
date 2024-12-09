import Link from "next/link";
import { API_IMAGE_URL } from "@/Utils/constants";
import { BlogPostAuthorDate, BlogPostImage } from "@/components/Blog";
import { fetchPostById } from "@/lib/api";
import { BackNavigation } from "@/components/common";

export default async function BlogPostPage({ params }) {
  const { id } = await params;
  const post = await fetchPostById(id);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <BackNavigation />
      <Link href="/" className="text-blue-500 hover:underline">
        &larr; Back to Home
      </Link>
      <h1 className="text-3xl font-bold mt-4 mb-2">{post.title}</h1>
      <BlogPostAuthorDate postId={post.id} />
      <BlogPostImage
        src={`${API_IMAGE_URL}/${post.id}/1200/800`}
        alt={post.title}
      />
      <div className="prose mt-4">{post.body}</div>
    </div>
  );
}
