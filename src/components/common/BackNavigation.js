"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BackNavigation() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Backspace") {
        event.preventDefault(); 
        router.back(); 
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  return null;
}
