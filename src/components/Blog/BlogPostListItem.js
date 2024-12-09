import { highlightText } from "@/Utils/helpers";
import Image from "next/image";
import Link from "next/link";

export default function BlogPostListItem({
  id,
  imageUrl,
  title,
  body,
  publicationDate,
  searchQuery,
}) {
  return (
    <li className="border-b pb-4 flex flex-col sm:flex-row">
      <Link href={`/blog/${id}`} className="sm:w-1/3 mb-2 sm:mb-0 sm:mr-4">
        <Image
          priority
          src={imageUrl}
          alt={title}
          width={600}
          height={400}
          className="w-full h-auto object-cover rounded"
        />
      </Link>
      <div className="sm:w-2/3">
        <Link href={`/blog/${id}`} className="block mb-1">
          <span className="text-xl font-semibold hover:underline">
            {highlightText(title, searchQuery)}
          </span>
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          Published on {publicationDate}
        </p>
        <p className="text-gray-800 dark:text-gray-200">
          {highlightText(body.substring(0, 200), searchQuery)}...
        </p>
      </div>
    </li>
  );
}
