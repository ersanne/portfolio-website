import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import { professionalExperience, earlyCareer, education } from "@/data/portfolio";

// The CV (cv/cv/*.tex) is written by hand so it can be condensed to one page.
// These tests keep the facts both sources share in sync: organisation,
// location, titles and dates. Descriptions and which entries the CV includes
// are free to differ.

const cvDir = path.resolve(import.meta.dirname, "../../../cv/cv");

interface CvEntry {
  titles: string[];
  organisation: string;
  location: string;
  periods: string[];
}

function parseCvEntries(file: string): CvEntry[] {
  const source = readFileSync(path.join(cvDir, file), "utf8")
    .split("\n")
    .filter((line) => !line.trimStart().startsWith("%"))
    .join("\n");
  const group = String.raw`\s*\{([^{}]*)\}`;
  const pattern = new RegExp(String.raw`\\cventry` + group.repeat(4), "g");
  const splitLines = (s: string) => s.split(String.raw`\newline`).map((p) => p.trim());
  return [...source.matchAll(pattern)].map(([, title, organisation, location, period]) => ({
    titles: splitLines(title),
    organisation: organisation.trim(),
    location: location.trim(),
    periods: splitLines(period),
  }));
}

const countryAliases: Record<string, string> = { UK: "United Kingdom" };

/** Reduces a location to "city, country" so regional detail may differ between sources. */
function normalizeLocation(location: string): string {
  const parts = location.split(",").map((p) => p.trim());
  const city = parts[0].replace(/ am Main$/, "");
  const country = parts[parts.length - 1];
  return `${city}, ${countryAliases[country] ?? country}`;
}

function normalizeOrganisation(name: string): string {
  return name.replace(/\s+(AG|GmbH|Ltd|Inc)\.?$/, "");
}

function normalizePeriod(period: string): string {
  return period.replace(/\s*[-–—]+\s*/g, " - ");
}

describe("CV matches portfolio data", () => {
  const experiences = [...professionalExperience, ...earlyCareer];

  describe.each(parseCvEntries("experience.tex"))("experience: $organisation", (entry) => {
    const experience = experiences.find(
      (e) => normalizeOrganisation(e.company) === normalizeOrganisation(entry.organisation),
    );

    it("exists in portfolio data", () => {
      expect(experience).toBeDefined();
    });

    it("has the same location", () => {
      expect(normalizeLocation(entry.location)).toBe(normalizeLocation(experience!.location));
    });

    it("has the same titles and periods", () => {
      expect(entry.titles).toEqual(experience!.roles.map((r) => r.title));
      expect(entry.periods.map(normalizePeriod)).toEqual(
        experience!.roles.map((r) => normalizePeriod(r.period)),
      );
    });
  });

  describe.each(parseCvEntries("education.tex"))("education: $organisation", (entry) => {
    const [degree, grade] = entry.titles[0].split(/\s+---\s+/);
    const match = education.find((e) => e.school.startsWith(entry.organisation));

    it("exists in portfolio data", () => {
      expect(match).toBeDefined();
    });

    it("has the same degree, grade, location and period", () => {
      const schoolLocation = match!.school.slice(entry.organisation.length).replace(/^,\s*/, "");
      expect(degree).toBe(match!.degree);
      expect(grade?.replace(/-/g, " ")).toBe(match!.grade?.replace(/-/g, " "));
      expect(normalizeLocation(entry.location)).toBe(normalizeLocation(schoolLocation));
      expect(normalizePeriod(entry.periods[0])).toBe(normalizePeriod(match!.period));
    });
  });
});
