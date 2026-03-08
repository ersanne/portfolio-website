import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LanguagesSection from "@/components/LanguagesSection";
import { languages } from "@/data/portfolio";

describe("LanguagesSection", () => {
  it("renders all languages", () => {
    render(<LanguagesSection />);
    languages.forEach((lang) => {
      expect(screen.getByText(lang.name)).toBeInTheDocument();
    });
    // Handle duplicate levels with getAllByText
    const uniqueLevels = [...new Set(languages.map((l) => l.level))];
    uniqueLevels.forEach((level) => {
      const count = languages.filter((l) => l.level === level).length;
      expect(screen.getAllByText(level)).toHaveLength(count);
    });
  });
});
