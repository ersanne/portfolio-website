import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import EducationSection from "@/components/EducationSection";
import { education } from "@/data/portfolio";

describe("EducationSection", () => {
  it("renders the section heading", () => {
    render(<EducationSection />);
    expect(screen.getByText("Education")).toBeInTheDocument();
  });

  it("renders all education entries", () => {
    render(<EducationSection />);
    education.forEach((edu) => {
      expect(screen.getByText(edu.degree)).toBeInTheDocument();
      expect(screen.getByText(edu.school)).toBeInTheDocument();
    });
  });

  it("renders grade when provided", () => {
    render(<EducationSection />);
    const withGrade = education.filter((e) => e.grade);
    withGrade.forEach((edu) => {
      expect(screen.getByText(edu.grade!)).toBeInTheDocument();
    });
  });
});
