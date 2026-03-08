import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SkillsSection from "@/components/SkillsSection";
import { skillCategories } from "@/data/portfolio";

describe("SkillsSection", () => {
  it("renders the section heading", () => {
    render(<SkillsSection />);
    expect(screen.getByText("Skills")).toBeInTheDocument();
  });

  it("renders all skill categories", () => {
    render(<SkillsSection />);
    skillCategories.forEach((cat) => {
      expect(screen.getByText(cat.label)).toBeInTheDocument();
    });
  });

  it("renders all individual skills", () => {
    render(<SkillsSection />);
    skillCategories.forEach((cat) => {
      cat.skills.forEach((skill) => {
        expect(screen.getByText(skill.name)).toBeInTheDocument();
      });
    });
  });
});
