# CLAUDE.md

Questo file fornisce indicazioni a Claude Code (claude.ai/code) per lavorare con il codice in questo repository.

> **Nota:** Questo file è una traduzione italiana di [CLAUDE.md](CLAUDE.md) e viene aggiornato automaticamente ogni volta che il file originale viene modificato. In caso di discrepanze, fa fede la versione inglese.

## Comandi

```bash
npm run dev      # Avvia il server di sviluppo su http://localhost:3000
npm run build    # Build con export statico (output in /out)
npm run lint     # Controllo ESLint
npm start        # Serve il build di produzione
```

Nessun test runner è configurato — non ci sono test in questo codebase.

## Architettura

Questo è un **sito portfolio statico** per Giusy Di Stasio (professionista della contabilità), costruito con Next.js App Router ed esportato come sito completamente statico (`output: "export"` in [next.config.ts](next.config.ts)). La lingua del sito è l'italiano.

**Stack**: Next.js 16 · React 19 · TypeScript 5 (strict) · Tailwind CSS v4 · PostCSS

### Routing

Routing basato su file sotto [src/app/](src/app/):
- `/` — home page (implementata)
- `/about`, `/projects`, `/contact` — pagine stub, non ancora implementate

Il [layout.tsx](src/app/layout.tsx) radice avvolge tutte le pagine con `<Header>` e `<Footer>` condivisi da [src/components/layout/](src/components/layout/).

### Layer Dati

Tutto il contenuto si trova in file TypeScript statici sotto [src/data/](src/data/):
- `profile.ts` — oggetto `Profile` tipizzato con le informazioni personali/professionali
- `projects.ts` — array `Project[]` tipizzato con i progetti del portfolio

Questi sono i **soli** posti dove modificare i contenuti del sito — non è coinvolto nessun CMS o API. I campi sono attualmente vuoti; vanno compilati prima di implementare le pagine stub.

### Stili

Tailwind CSS v4, configurato via PostCSS (`@tailwindcss/postcss`) — **non esiste nessun file `tailwind.config`**. I token del tema personalizzati (famiglie di font, colori) sono definiti nel blocco `@theme {}` dentro [src/app/globals.css](src/app/globals.css). Nuovi token di design vanno aggiunti lì.

Linguaggio visivo: sfondo color crema (`#f7f4ee`), testo nero, varianti di opacità (`text-black/65`, `border-black/10`).

Font caricati tramite `next/font/google`: Space Grotesk (`--font-space`, sans-serif) e JetBrains Mono (`--font-mono`, monospace). Entrambi sono registrati come variabili CSS in [layout.tsx](src/app/layout.tsx) e mappati in Tailwind tramite il blocco `@theme`.

### Utility

[src/lib/utils.ts](src/lib/utils.ts) esporta un helper `cn(...inputs: Array<string | false | null | undefined>)` scritto a mano — filtra i valori falsy e unisce le stringhe di classi. **Non** è clsx; non gestisce oggetti.

### Path Alias

`@/*` si risolve nella **radice del progetto** (non `src/`), configurato in [tsconfig.json](tsconfig.json). Il percorso di import corretto è quindi `@/src/components/layout/Header`.

## Regole di Sviluppo

- Usare sempre TypeScript in modo strict (niente `any`)
- Preferire componenti funzionali con hook
- Usare solo Tailwind (niente stili inline o file CSS aggiuntivi)
- Riutilizzare componenti esistenti prima di crearne di nuovi
- Seguire la struttura di cartelle esistente sotto `src/`
- Non introdurre nuove dipendenze se non strettamente necessario
- Mantenere la UI minimale e coerente con il design attuale
- Usare HTML semantico e best practice di accessibilità
- Mantenere i componenti sotto 200 righe. Dividere se necessario.
- Tenere separato l'accesso ai dati dal rendering UI quando pratico
- Usare componenti client solo quando è richiesta l'interattività
- Non aggiungere funzionalità server-only, route API, database o dipendenze server a runtime
- Mantenere il sito compatibile con l'export statico e l'hosting gratuito su Netlify

## Regole di Modifica Dati

- Tutti i contenuti devono essere modificati SOLO in `src/data/`
- Non hardcodare contenuti dentro i componenti
- Rispettare i tipi definiti in `profile.ts` e `projects.ts`
