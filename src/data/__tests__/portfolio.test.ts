import { describe, it, expect } from "vitest";
import {
  hero, about, socials, skillCategories, professionalExperience,
  earlyCareer, education, languages, softSkills, projects,
} from "@/data/portfolio";

describe("portfolio data integrity", () => {
  it("hero has required fields", () => {
    expect(hero.firstName).toBeTruthy();
    expect(hero.lastName).toBeTruthy();
    expect(hero.title).toBeTruthy();
    expect(hero.cvPath).toBeTruthy();
  });

  it("about text is non-empty", () => {
    expect(about.length).toBeGreaterThan(0);
  });

  it("socials all have href and label", () => {
    socials.forEach((s) => {
      expect(s.href).toBeTruthy();
      expect(s.label).toBeTruthy();
    });
  });

  it("skill categories all have at least one skill", () => {
    skillCategories.forEach((cat) => {
      expect(cat.skills.length).toBeGreaterThan(0);
    });
  });

  it("all experience entries have required fields", () => {
    [...professionalExperience, ...earlyCareer].forEach((exp) => {
      expect(exp.company).toBeTruthy();
      expect(exp.period).toBeTruthy();
      expect(exp.roles.length).toBeGreaterThan(0);
      exp.roles.forEach((role) => {
        expect(role.title).toBeTruthy();
        expect(role.description).toBeTruthy();
        expect(role.skills.length).toBeGreaterThan(0);
      });
    });
  });

  it("education entries have required fields", () => {
    education.forEach((edu) => {
      expect(edu.degree).toBeTruthy();
      expect(edu.school).toBeTruthy();
      expect(edu.period).toBeTruthy();
    });
  });

  it("languages have name, level, and flag", () => {
    languages.forEach((lang) => {
      expect(lang.name).toBeTruthy();
      expect(lang.level).toBeTruthy();
      expect(lang.flag).toBeTruthy();
    });
  });

  it("soft skills are non-empty strings", () => {
    softSkills.forEach((skill) => {
      expect(skill.length).toBeGreaterThan(0);
    });
  });

  it("projects (if any) have required fields", () => {
    projects.forEach((p) => {
      expect(p.title).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(p.skills.length).toBeGreaterThan(0);
    });
  });
});
