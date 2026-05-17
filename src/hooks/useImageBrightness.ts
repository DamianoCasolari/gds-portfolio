"use client";

import { useState, useEffect } from "react";

export function useImageBrightness(src: string): "dark" | "light" {
  const [scheme, setScheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const size = 40;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(img, 0, 0, size, size);
        const { data } = ctx.getImageData(0, 0, size, size);
        let sum = 0;
        for (let i = 0; i < data.length; i += 4) {
          sum += 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
        }
        const avg = sum / (data.length / 4);
        // bright image → bg is light → use dark text ("light")
        // dark image → bg is dark → use white text ("dark")
        setScheme(avg > 140 ? "light" : "dark");
      } catch {
        // CORS or canvas failure — keep default
      }
    };
    img.src = src;
  }, [src]);

  return scheme;
}
