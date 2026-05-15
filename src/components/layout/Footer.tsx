import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white h-16">
      <div className="mx-auto flex w-full max-w-7xl gap-6 px-6 py-5 items-end justify-between md:px-10">
        <div>
       
         <p className="pt-2 font-sans text-xs text-black/40">
            © {new Date().getFullYear()} All right reserved.
          </p>
        </div>

        <div className="flex gap-2 ">
          <Link
            href="mailto:giusy@example.com"
            className="font-mono text-xs uppercase tracking-[0.18em] text-black/55 transition hover:text-black"
          >
            Instagram
          </Link>
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