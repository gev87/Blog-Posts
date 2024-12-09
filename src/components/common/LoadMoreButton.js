export default function LoadMoreButton({ onLoadMore, isLoading }) {
  return (
    <button
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 w-full"
      onClick={onLoadMore}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : "Load More"}
    </button>
  );
}
