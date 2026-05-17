"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setVisible(true);
      } else if (currentScrollY > prevScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname.startsWith("/projects/")) return null;

  return (
    <footer
      className={`fixed bottom-0 left-0 right-0 z-50 bg-white h-16 transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl gap-6 px-6 py-5 items-end justify-between md:px-10">
        <div>
          <p className="pt-2 font-sans text-xs text-black/40">
            © {new Date().getFullYear()} All right reserved.
          </p>
        </div>

        <div className="flex gap-2">
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs uppercase tracking-[0.18em] text-black/55 transition hover:text-black"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
