export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 md:px-10 py-8">

      {/* Layout: mobile = stack, desktop = flex row */}
      <div className="flex flex-col gap-px bg-black/[0.07] sm:flex-row">

        {/* Contenuto principale — cresce per riempire */}
        <div className="flex flex-col gap-10 bg-[#f7f4ee] p-8 sm:flex-1">

          {/* About me */}
          <span className="font-mono text-[16px] md:text-[22px] uppercase tracking-[0.22em] text-black/35">
            About me
          </span>

          {/* Chi sono */}
          <div className="flex flex-col gap-3">
            <span className="font-mono font-bold text-[10px] uppercase tracking-[0.22em] text-black/35">
              Chi sono
            </span>
            <p className="max-w-[52ch] font-sans text-sm leading-relaxed text-black/60">
              Professionista con esperienza in marketing e comunicazione, specializzata nella gestione di progetti integrati online e offline. Mi occupo di project management, coordinamento operativo e gestione di fornitori e stakeholder, supportando aziende nella realizzazione di iniziative promozionali, eventi, campagne e contenuti digitali.
            </p>
            <p className="max-w-[52ch] font-sans text-sm leading-relaxed text-black/40">
              Garantendo coerenza del brand, qualità dei deliverable e rispetto delle tempistiche in ogni fase del progetto.
            </p>
          </div>

          {/* What I Do */}
          <div className="flex flex-col gap-3">
            <span className="font-mono font-bold text-[10px] uppercase tracking-[0.22em] text-black/35">
              Il mio lavoro
            </span>
            <p className="max-w-[40ch] font-sans text-sm leading-relaxed text-black/60">
              Supporto aziende e brand nella gestione di progetti di marketing e comunicazione, coordinando attività operative, contenuti, fornitori ed eventi.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-8">
            {[
              { label: "Anni",    value: "5+" },
              { label: "Settore", value: "Events" },
              { label: "Focus",   value: "Account" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-black/35">{label}</p>
                <p className="font-sans text-lg font-medium tracking-tight">{value}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Colonna destra — foto + info, larghezza fissa su desktop */}
        <div className="flex flex-col gap-px bg-black/[0.07] sm:w-64 md:w-72">

          {/* Foto portrait — mantiene aspect ratio su tutti i breakpoint */}
          <div className="relative overflow-hidden bg-black/5 aspect-[3/4]">
            {/* Sostituire con: <img src="..." className="absolute inset-0 w-full h-full object-cover object-top" /> */}
            <div className="absolute inset-0 flex items-end p-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/20">Foto</span>
            </div>
          </div>

          {/* Info sotto la foto */}
          <div className="flex flex-col justify-between gap-6 bg-[#f7f4ee] p-6 sm:flex-1">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/35 font-bold">
                Il mio approccio
              </span>
              <p className="mt-3 font-sans text-sm leading-relaxed text-black/40">
                Lavoro con un approccio strutturato e orientato agli obiettivi, seguendo le attività dalla pianificazione al follow-up.
              </p>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/25">
              Disponibile per nuove collaborazioni e nuovi progetti
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
