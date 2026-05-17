"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollRestorer() {
  const pathname = usePathname();

  useEffect(() => {
    // Se c'è un hash nell'URL lascia che il browser scrolli all'elemento
    if (window.location.hash) return;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = "";
    });
  }, [pathname]);

  return null;
}
