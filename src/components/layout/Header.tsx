"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function NavLink({
  href,
  label,
  isActive,
  pillId,
  onClick,
}: {
  href: string;
  label: string;
  isActive: boolean;
  pillId: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative px-3 py-1.5 font-mono text-sm transition-colors duration-200 ${
        isActive ? "text-black" : "text-black/45 hover:text-black/70"
      }`}
    >
      <AnimatePresence>
        {isActive && (
          <motion.span
            layoutId={pillId}
            className="absolute inset-0"
            style={{ border: "1px solid rgba(0,0,0,0.15)", borderRadius: "9999px" }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [homeSection, setHomeSection] = useState<"hero" | "projects">("hero");

  useEffect(() => {
    if (pathname !== "/") return;

    const update = () => {
      const el = document.getElementById("projects");
      if (!el) return;
      setHomeSection(el.getBoundingClientRect().top <= 160 ? "projects" : "hero");
    };

    const rafId = requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", update);
    };
  }, [pathname]);

  const activeHref = (() => {
    if (pathname === "/about") return "/about";
    if (pathname === "/contact") return "/contact";
    if (pathname === "/") return homeSection === "projects" ? "/#projects" : "/";
    return null;
  })();

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <Link href="/" onClick={handleHomeClick} className="flex flex-col leading-none">
          <span className="font-sans text-lg font-medium tracking-tight text-black">
            Giusy Di Stasio
          </span>
          <span className="font-mono mt-1 text-[11px] uppercase tracking-[0.2em] text-black/45">
            Account &amp; Event Manager
          </span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          <LayoutGroup id="nav-desktop">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={activeHref === link.href}
                pillId="nav-pill"
                onClick={link.href === "/" ? handleHomeClick : link.href === "/#projects" ? handleProjectsClick : undefined}
              />
            ))}
          </LayoutGroup>
        </nav>
      </div>

      <nav className="flex items-center gap-1 sm:hidden w-full justify-evenly py-2">
        <LayoutGroup id="nav-mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={activeHref === link.href}
              pillId="nav-pill-mobile"
              onClick={link.href === "/" ? handleHomeClick : link.href === "/#projects" ? handleProjectsClick : undefined}
            />
          ))}
        </LayoutGroup>
      </nav>
    </header>
  );
}
