"use client";

import { useEffect, useMemo } from "react";
import useBlogStore from "@/store/useBlogStore";
import { debounce } from "lodash";
import { fetchPosts } from "@/lib/api";
import BlogPostListItem from "./BlogPostListItem";
import ErrorMessage from "@/app/error";
import { LoadMoreButton } from "../common";
import BlogSearchInput from "./BlogSearchInput";

export default function BlogPostList({ initialPosts }) {
  const {
    posts,
    setPosts,
    addPosts,
    searchQuery,
    setSearchQuery,
    skip,
    setSkip,
    limit,
    isLoadingMore,
    setIsLoadingMore,
    error,
    setError,
  } = useBlogStore();

  const handleSearch = debounce((event) => {
    setSearchQuery(event.target.value);
  }, 300);

  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.body.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [posts, searchQuery]);

  const loadMore = async () => {
    setIsLoadingMore(true);
    setError(null);
    try {
      const newSkip = skip + limit;
      const morePosts = await fetchPosts({ limit, skip: newSkip });
      addPosts(morePosts);
      setSkip(newSkip);
    } catch (err) {
      setError("Failed to load more posts. Please try again later.");
    } finally {
      setIsLoadingMore(false);
    }
  };

  useEffect(() => {
    return () => {
      setSearchQuery("");
    };
  }, [setSearchQuery]);

  useEffect(() => {
    setError(null);
    setPosts(initialPosts);
  }, [initialPosts, setError, setPosts]);

  return (
    <div>
      <BlogSearchInput onSearch={handleSearch}/>
      {error && <ErrorMessage message={error} />}
      {filteredPosts.length ? (
        <ul className="space-y-4" role="list" aria-label="Blog posts">
          {filteredPosts.map((post) => (
            <BlogPostListItem
              {...post}
              key={post.id}
              searchQuery={searchQuery}
            />
          ))}
        </ul>
      ) : (
        searchQuery && (
          <div
            className="text-center text-gray-600 dark:text-gray-300 mt-8"
            aria-live="polite"
          >
            No posts found for your search.
          </div>
        )
      )}
      <LoadMoreButton onLoadMore={loadMore} isLoading={isLoadingMore} />
    </div>
  );
}
