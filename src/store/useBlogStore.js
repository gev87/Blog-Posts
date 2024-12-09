'use client';

import { POSTS_LIMIT } from '@/Utils/constants';
import { create } from 'zustand';

const useBlogStore = create((set) => ({
  posts: [],
  searchQuery: '',
  skip: 0,
  limit: POSTS_LIMIT,
  setPosts: (posts) => set({ posts }),
  addPosts: (newPosts) => set((state) => ({ posts: [...state.posts, ...newPosts] })),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setSkip: (skip) => set({ skip }),
  isLoadingMore: false,
  setIsLoadingMore: (value) => set({ isLoadingMore: value }),
  error: null,
  setError: (message) => set({ error: message }),
}));

export default useBlogStore;

