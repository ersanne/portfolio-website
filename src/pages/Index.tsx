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
    <div className="h-8 w-48 bg-muted rounded-[0.25rem] mb-4" />
    <div className="h-px w-24 bg-muted rounded-[0.25rem] mb-8" />
    <div className="space-y-3">
      <div className="h-4 w-full bg-muted rounded-[0.25rem]" />
      <div className="h-4 w-3/4 bg-muted rounded-[0.25rem]" />
    </div>
  </div>
);

const Index = () => (
  <div id="top" className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
        <SkillsSection />

        <ExperienceSection />
        <ProjectsSection />
        <div className="section-container background-details">
          <EducationSection />
          <LanguagesSection />
        </div>
      </Suspense>
    </main>
    <Suspense fallback={null}><FooterSection /></Suspense>
  </div>
);

export default Index;
