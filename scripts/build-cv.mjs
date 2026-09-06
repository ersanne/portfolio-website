import { spawnSync } from "node:child_process";
import { copyFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const cvDirectory = fileURLToPath(new URL("../cv/", import.meta.url));
const outputDirectory = fileURLToPath(new URL("../cv/.build/", import.meta.url));
const publicDirectory = fileURLToPath(new URL("../public/", import.meta.url));
const pdfPath = fileURLToPath(new URL("../public/Erik_Sanne_CV.pdf", import.meta.url));

mkdirSync(outputDirectory, { recursive: true });

const result = spawnSync(
  "latexmk",
  [
    "-xelatex",
    "-interaction=nonstopmode",
    "-halt-on-error",
    "-file-line-error",
    "-outdir=.build",
    "cv.tex",
  ],
  { cwd: cvDirectory, stdio: "inherit" },
);

if (result.error) {
  console.error(
    ["ENOENT", "EACCES"].includes(result.error.code)
      ? "Could not execute latexmk. Install latexmk and XeLaTeX and ensure they are accessible on PATH. See README.md for installation instructions."
      : `Could not start latexmk: ${result.error.message}`,
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
