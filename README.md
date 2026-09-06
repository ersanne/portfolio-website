<h3 align="center">Digital CV / Portfolio for and by Erik Sanne</h3>

<p align="center">
   A simple hobby project to build a dynamic and modern online presence for myself
</p>

---

Built with React, TypeScript, Tailwind CSS, and Vite.

Feel free to use any of my code!

## Node.js

Use Node.js 22 (version 22.13 or newer). The `.node-version` file selects the
22.x release line. With fnm, run this from the repository root:

```bash
fnm install
fnm use
npm ci
```

Run `fnm use` in each new terminal before working on this project.

## LaTeX CV

The Overleaf source lives in `cv/`. Edit `cv/cv.tex` for personal details and
layout, and `cv/cv/skills.tex`, `cv/cv/experience.tex`, and `cv/cv/education.tex`
for the sections currently included. The `resume/` files and `coverletter.tex`
are separate template content and are not built by the website.

The Awesome CV template requires **XeLaTeX** and **latexmk**, plus the
FontAwesome and Source Sans Pro LaTeX packages. On Ubuntu / WSL:

```bash
sudo apt-get update
sudo apt-get install --no-install-recommends latexmk texlive-xetex texlive-fonts-recommended texlive-fonts-extra
```

On other systems, install TeX Live or MacTeX with these tools and packages.
The Ubuntu font package is large; allow sufficient disk space for TeX Live.

From the repository root:

```bash
npm run build:cv  # Compile only the CV (also available as make cv)
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
