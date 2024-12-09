"use client";

export default function ErrorMessage({
  message = "Something went wrong. Please try again later.",
}) {

  return (
    <div
      className="flex flex-col items-center justify-center my-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded dark:bg-red-800 dark:border-red-600 dark:text-red-200"
      role="alert"
    >
      <p aria-live="assertive" className="text-lg">
        {message}
      </p>
    </div>
  );
}
