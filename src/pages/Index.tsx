import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));

const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const EducationSection = lazy(() => import("@/components/EducationSection"));
const LanguagesSection = lazy(() => import("@/components/LanguagesSection"));
const FooterSection = lazy(() => import("@/components/FooterSection"));

const SectionSkeleton = () => (
  <div className="section-container animate-pulse">
    <div className="h-8 w-48 bg-muted rounded mb-4" />
    <div className="h-px w-24 bg-muted rounded mb-8" />
    <div className="space-y-3">
      <div className="h-4 w-full bg-muted rounded" />
      <div className="h-4 w-3/4 bg-muted rounded" />
    </div>
  </div>
);

const Index = () => (
  <div className="min-h-screen bg-background scroll-smooth">
    <Navbar />
    <HeroSection />
    <Suspense fallback={<SectionSkeleton />}>
      <AboutSection />
      <SkillsSection />

      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <LanguagesSection />
      <FooterSection />
    </Suspense>
  </div>
);

export default Index;
