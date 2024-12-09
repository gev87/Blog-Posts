import {
  API_BASE_URL,
  POSTS_ENDPOINT,
  POSTS_LIMIT,
  API_IMAGE_URL,
} from "@/Utils/constants";
import { assignDatesAndAuthorsToPosts } from "@/Utils/helpers";
import axios from "axios";

// export async function fetchPosts({ limit = POSTS_LIMIT, skip = 0 } = {}) {
//   const url = `${API_BASE_URL}${POSTS_ENDPOINT}?limit=${limit}&skip=${skip}`;
//   const res = await axios.get(url);
//   console.log("test")
//   const rawPosts = res.data.posts.map((post) => ({
//     ...post,
//     imageUrl: `${API_IMAGE_URL}/${post.id}/600/400`,
//   }));

//   const postsWithDates = assignDatesToPosts(rawPosts, limit + skip - 1);
//   return postsWithDates;
// }

export async function fetchPosts({ limit = POSTS_LIMIT, skip = 0 } = {}) {
  const url = `${API_BASE_URL}${POSTS_ENDPOINT}?limit=${limit}&skip=${skip}`;

  const res = await fetch(url, {
    cache: "force-cache",
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await res.json();
  const rawPosts = data.posts.map((post) => ({
    ...post,
    imageUrl: `${API_IMAGE_URL}/${post.id}/600/400`,
  }));
  const postsWithDates = assignDatesAndAuthorsToPosts(
    rawPosts,
    limit + skip - 1
  );
  return postsWithDates;
}

export async function fetchPostById(id) {
  const res = await axios.get(`${API_BASE_URL}${POSTS_ENDPOINT}/${id}`);
  const post = res.data;
  return post;
}
