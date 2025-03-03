// /app/hooks/useScrollToSection.ts

'use client'

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export function useScrollToSection() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [searchParams]);
}
