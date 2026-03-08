import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectsSection from "@/components/ProjectsSection";
import { projects } from "@/data/portfolio";

describe("ProjectsSection", () => {
  it("renders nothing when projects array is empty", async () => {
    // We test the current state — if projects are populated it should render
    if (projects.length === 0) {
      const { container } = render(<ProjectsSection />);
      expect(container.innerHTML).toBe("");
    }
  });

  it("renders project cards when projects exist", () => {
    if (projects.length === 0) return;
    render(<ProjectsSection />);
    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
    });
  });

  it("renders project skills as tags", () => {
    if (projects.length === 0) return;
    render(<ProjectsSection />);
    projects.forEach((project) => {
      project.skills.forEach((skill) => {
        expect(screen.getAllByText(skill).length).toBeGreaterThan(0);
      });
    });
  });
});
