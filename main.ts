// GTA 6 meme entry — program for make.fun bounty gta6-meme-x-01.
// Copies POST.json (the X post address) to the output directory.
// Stdlib only, no network. Node 22.
import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const src = join(here, "POST.json");

if (!existsSync(src)) {
  throw new Error("POST.json not found next to main.ts");
}
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "POST.json"));
console.log(`copied POST.json -> ${join(outDir, "POST.json")}`);
