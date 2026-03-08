import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SoftSkillsSection from "@/components/SoftSkillsSection";
import { softSkills } from "@/data/portfolio";

describe("SoftSkillsSection", () => {
  it("renders all soft skills", () => {
    render(<SoftSkillsSection />);
    softSkills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });
});
