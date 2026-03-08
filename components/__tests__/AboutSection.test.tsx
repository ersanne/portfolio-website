import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutSection from "@/components/AboutSection";
import { about } from "@/data/portfolio";

describe("AboutSection", () => {
  it("renders the section heading", () => {
    render(<AboutSection />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("renders the about text from portfolio data", () => {
    render(<AboutSection />);
    expect(screen.getByText(about)).toBeInTheDocument();
  });
});
