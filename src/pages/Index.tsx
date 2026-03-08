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

const Index = () => (
  <div className="min-h-screen bg-background scroll-smooth">
    <Navbar />
    <HeroSection />
    <Suspense fallback={null}>
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
