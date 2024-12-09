export default function BlogSearchInput({onSearch}) {
  return (
    <input
      type="text"
      placeholder="Search posts..."
      aria-label="Search posts"
      className="border rounded p-2 w-full mr-2 dark:text-white dark:bg-gray-900 mb-4"
      onChange={onSearch}
    />
  );
}
