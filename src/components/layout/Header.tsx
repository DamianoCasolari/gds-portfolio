import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-sans text-lg font-medium tracking-tight text-black">
            Giusy Di Stasio
          </span>
          <span className="font-mono mt-1 text-[11px] uppercase tracking-[0.2em] text-black/45">
            Accounting & Organization
          </span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-black/65 transition hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
           <nav className="flex items-center gap-8 sm:hidden w-full justify-evenly py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-black/65 transition hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>
    </header>
  );
}