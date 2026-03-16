import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <p className="font-sans text-base font-medium text-black">
            Giusy Di Stasio
          </p>
          <p className="mt-2 max-w-md font-sans text-sm leading-6 text-black/60">
            Professional portfolio focused on accounting, organization, and
            project collaborations.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 md:items-end">
          <Link
            href="mailto:giusy@example.com"
            className="font-mono text-xs uppercase tracking-[0.18em] text-black/55 transition hover:text-black"
          >
            istagram
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs uppercase tracking-[0.18em] text-black/55 transition hover:text-black"
          >
            LinkedIn
          </Link>
          <p className="pt-2 font-sans text-xs text-black/40">
            © {new Date().getFullYear()} Giusy Di Stasio
          </p>
        </div>
      </div>
    </footer>
  );
}