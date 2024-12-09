export default function Spinner({ text }) {
  return (
    <div
      className="flex flex-col items-center justify-center my-8"
      role="status"
      aria-live="polite"
    >
      <div
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin dark:border-blue-300"
        aria-label="Loading..."
      ></div>
      {!!text && (
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">{text}</p>
      )}
    </div>
  );
}
