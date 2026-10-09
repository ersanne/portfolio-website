<h3 align="center">Digital CV / Portfolio for and by Erik Sanne</h3>

<p align="center">
   A simple hobby project to build a dynamic and modern online presence for myself
</p>

---

Built with React, TypeScript, Tailwind CSS, and Vite.

Feel free to use any of my code!

## Node.js

Use Node.js 24.20.0 LTS. [mise](https://mise.jdx.dev) pins this release in
`mise.toml`. From the repository root:

```bash
mise trust
mise install
npm ci
```

With mise activated in your shell, the pinned Node.js is selected automatically
when you enter the project directory; otherwise prefix commands with `mise exec --`.

Common workflows are defined as mise tasks in `mise.toml`. Run `mise tasks` to
list them and `mise run <task>` (e.g. `mise run dev`) to run one.
Use npm and commit `package-lock.json` when changing dependencies.

TypeScript is upgraded to 6.0.3, the newest release supported by
`typescript-eslint` (which currently requires TypeScript below 6.1).

## LaTeX CV

The Overleaf source lives in `cv/`. Edit `cv/cv.tex` for personal details and
layout, and `cv/cv/skills.tex`, `cv/cv/experience.tex`, and `cv/cv/education.tex`
for the sections currently included. The `resume/` files and `coverletter.tex`
are separate template content and are not built by the website.

The CV is compiled with [Tectonic](https://tectonic-typesetting.github.io), a
XeTeX-based engine that `mise install` provides. No TeX Live installation is
needed: Tectonic downloads the required LaTeX packages on the first build and
caches them, so that build needs network access.

From the repository root:

```bash
npm run build:cv  # Compile only the CV (also available as mise run cv)
npm run dev       # Serve the website, including the generated PDF
npm run build     # Rebuild the CV, then build the production website
```

The PDF is written to `public/Erik_Sanne_CV.pdf`, matching the existing
Download CV button, and copied into `dist/` by the production build.
Re-run `npm run build:cv` after editing LaTeX while the dev server is running.
Intermediate files go into `cv/.build/`; both these files and the generated
public PDF are ignored by Git. Production build environments need the TeX
dependencies above. `npm run build:dev` builds only the website using any
previously generated PDF.

The source is now maintained here; this setup does not synchronize with Overleaf.
The original template documentation is preserved in `cv/README.md`.
