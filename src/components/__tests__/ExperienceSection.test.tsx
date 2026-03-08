import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ExperienceSection from "@/components/ExperienceSection";
import { professionalExperience, earlyCareer } from "@/data/portfolio";

describe("ExperienceSection", () => {
  it("renders the section heading", () => {
    render(<ExperienceSection />);
    expect(screen.getByText("Experience")).toBeInTheDocument();
  });

  it("renders all company names", () => {
    render(<ExperienceSection />);
    [...professionalExperience, ...earlyCareer].forEach((exp) => {
      expect(screen.getByText(exp.company)).toBeInTheDocument();
    });
  });

  it("expands a card on click to show role details", () => {
    render(<ExperienceSection />);
    const firstExp = professionalExperience[0];
    const card = screen.getByText(firstExp.company).closest("[class*=bg-card]")!;
    fireEvent.click(card);
    expect(screen.getByText(firstExp.roles[0].description)).toBeInTheDocument();
  });

  it("renders sub-headings for professional and early career", () => {
    render(<ExperienceSection />);
    expect(screen.getByText("Professional")).toBeInTheDocument();
    expect(screen.getByText(/Internships/)).toBeInTheDocument();
  });
});
