import { spawnSync } from "node:child_process";
import { copyFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const cvDirectory = fileURLToPath(new URL("../cv/", import.meta.url));
const outputDirectory = fileURLToPath(new URL("../cv/.build/", import.meta.url));
const publicDirectory = fileURLToPath(new URL("../public/", import.meta.url));
const pdfPath = fileURLToPath(new URL("../public/Erik_Sanne_CV.pdf", import.meta.url));

mkdirSync(outputDirectory, { recursive: true });

const result = spawnSync(
  "tectonic",
  ["-X", "compile", "--keep-logs", "--outdir", ".build", "cv.tex"],
  { cwd: cvDirectory, stdio: "inherit" },
);

if (result.error) {
  console.error(
    ["ENOENT", "EACCES"].includes(result.error.code)
      ? "Could not execute tectonic. Run `mise install` and ensure mise is activated or use `mise exec --`. See README.md for details."
      : `Could not start tectonic: ${result.error.message}`,
  );
  process.exit(1);
}

if (result.status !== 0) {
  console.error("CV compilation failed. See cv/.build/cv.log for details.");
  process.exit(result.status ?? 1);
}

mkdirSync(publicDirectory, { recursive: true });
copyFileSync(new URL("../cv/.build/cv.pdf", import.meta.url), pdfPath);
console.log(`CV built: ${pdfPath}`);
