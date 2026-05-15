import { spawnSync } from "child_process";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

let raw = "";
process.stdin.on("data", (chunk) => (raw += chunk));
process.stdin.on("end", () => {
  try {
    const payload = JSON.parse(raw);
    const filePath = ((payload.tool_input || {}).file_path || "").replace(/\\/g, "/");
    if (!filePath.endsWith("CLAUDE.md")) return;

    spawnSync(process.execPath, [join(root, "scripts/update-istruzioni.mjs")], {
      stdio: "inherit",
      cwd: root,
    });
  } catch {
    // hook errors must not block Claude
  }
});
