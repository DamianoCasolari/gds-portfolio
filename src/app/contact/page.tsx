import Link from "next/link";

const contacts = [
  { label: "Email",    value: "giusy@example.com",  href: "mailto:giusy@example.com", external: false },
  { label: "LinkedIn", value: "Giusy Di Stasio",     href: "https://www.linkedin.com", external: true  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 md:px-10 py-8">

      <div className="flex flex-col gap-px bg-black/[0.07] sm:flex-row">

        {/* Intro — cresce per riempire */}
        <div className="flex flex-col justify-between gap-10 bg-[#f7f4ee] p-8 sm:flex-1">
          <span className="font-mono text-[16px] md:text-[22px] uppercase tracking-[0.22em] text-black/35">
            Contact
          </span>
          <div className="flex flex-col gap-3">
            <p className="max-w-[28ch] font-sans text-sm leading-relaxed text-black/50">
              Per eventi, account management o nuove collaborazioni — scrivimi direttamente.
            </p>
          </div>
          <div>
            <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-black/35 font-bold">
              Tempo di risposta
            </p>
            <p className="font-sans text-sm text-black/55">24–48 ore</p>
          </div>
        </div>

        {/* Links — larghezza fissa su desktop */}
        <div className="flex flex-col gap-px bg-black/[0.07] sm:w-64 md:w-72">

          {/* Voci contatto */}
          <div className="flex flex-col bg-[#f7f4ee]">
            {contacts.map(({ label, value, href, external }) => (
              <Link
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="group flex items-center gap-6 border-b border-black/[0.07] px-6 py-7 transition-colors hover:bg-black/[0.015]"
              >
                <span className="w-16 font-mono text-[10px] uppercase tracking-[0.2em] text-black/35">
                  {label}
                </span>
                <span className="flex-1 font-sans text-base font-medium tracking-tight">
                  {value}
                </span>
                <svg
                  width="11" height="11" viewBox="0 0 10 10" fill="none"
                  className="shrink-0 text-black/20 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ))}
          </div>

          {/* Nota in fondo */}
          <div className="flex-1 flex items-end bg-[#f7f4ee] px-6 py-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/25">
              Mettitiamoci in contatto
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
