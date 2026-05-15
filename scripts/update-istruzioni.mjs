import { spawnSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "CLAUDE.md");
const dest = join(root, "ISTRUZIONI.md");

const content = readFileSync(source, "utf8");

const prompt =
  `Traduci il seguente file CLAUDE.md in italiano.\n` +
  `Regole ferme:\n` +
  `- Mantieni in inglese: comandi bash, blocchi di codice, percorsi file, nomi di variabili, tag JSX/HTML, nomi tecnici di librerie\n` +
  `- Traduci solo il testo descrittivo, titoli e commenti\n` +
  `- Mantieni identica la struttura e formattazione markdown\n` +
  `- All'inizio del file, subito dopo il titolo # CLAUDE.md, aggiungi questa riga:\n` +
  `  > **Nota:** Questo file è una traduzione italiana di [CLAUDE.md](CLAUDE.md) e viene aggiornato automaticamente ogni volta che il file originale viene modificato. In caso di discrepanze, fa fede la versione inglese.\n` +
  `- Rispondi SOLO con il markdown tradotto, nessun altro testo\n\n` +
  content;

const result = spawnSync("claude", ["-p", prompt], {
  encoding: "utf8",
  maxBuffer: 10 * 1024 * 1024,
  timeout: 60_000,
});

if (result.error) {
  console.error("Errore durante la traduzione:", result.error.message);
  process.exit(1);
}

if (result.status !== 0) {
  console.error("claude CLI ha restituito un errore:", result.stderr);
  process.exit(1);
}

writeFileSync(dest, result.stdout.trim() + "\n");
console.log("ISTRUZIONI.md aggiornato.");
