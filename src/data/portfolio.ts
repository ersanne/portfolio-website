// ============================================================
// portfolio.ts — Single source of truth for all site content.
// Edit this file to update your portfolio. No need to touch
// any component files.
// ============================================================

export const hero = {
  firstName: "Erik",
  lastName: "Sanne",
  title: "Backend Tech Lead",
  cvPath: "/Erik_Sanne_CV.pdf",
};

export const about =
  "Backend Tech Lead with over six years of experience designing and building scalable backend systems, primarily in Go. My career spans fintech, banking, and cybersecurity, where I've developed a strong foundation in distributed systems, cloud-native architecture, and technical leadership. I'm passionate about mentoring engineers, driving architectural decisions, and delivering reliable, high-performing software.";

export const socials = [
  { type: "github" as const, href: "https://github.com/ersanne", label: "GitHub" },
  { type: "linkedin" as const, href: "https://www.linkedin.com/in/eriksanne", label: "LinkedIn" },
  { type: "twitter" as const, href: "https://twitter.com/ErikKonradSanne", label: "Twitter" },
  { type: "email" as const, href: "mailto:erik@eriksanne.com", label: "Email" },
];

export type SocialType = (typeof socials)[number]["type"];

// ── Icon imports (co-located with skill data for single-source-of-truth) ──
import type { IconType } from "react-icons";
import {
  Code2, Cloud, Server, Layout, Database, GitBranch, Blocks, BrainCircuit,
} from "lucide-react";
import {
  SiGo, SiPython, SiKubernetes, SiGooglecloud, SiTerraform, SiDocker,
  SiOpenapiinitiative, SiHtml5, SiCss, SiJavascript, SiTypescript,
  SiPostgresql, SiMongodb, SiMysql,
  SiGit, SiGitlab, SiArgo, SiHelm, SiOpenai,
} from "react-icons/si";
import { TbApi, TbSql, TbNetwork, TbSitemap, TbSparkles, TbRobot } from "react-icons/tb";
import { VscServerProcess } from "react-icons/vsc";

export interface Skill {
  name: string;
  icon?: IconType;
}

export interface SkillCategory {
  label: string;
  icon: IconType;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  { label: "Programming", icon: Code2, skills: [
    { name: "Go", icon: SiGo },
    { name: "Python", icon: SiPython },
    { name: "SQL", icon: TbSql },
  ]},
  { label: "Cloud & Infrastructure", icon: Cloud, skills: [
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "Google Cloud Platform", icon: SiGooglecloud },
    { name: "Terraform", icon: SiTerraform },
    { name: "Docker", icon: SiDocker },
  ]},
  { label: "Back-end", icon: Server, skills: [
    { name: "gRPC/Protobuf", icon: TbApi },
    { name: "REST APIs", icon: TbApi },
    { name: "OpenAPI", icon: SiOpenapiinitiative },
    { name: "Microservices", icon: VscServerProcess },
    { name: "Distributed Systems", icon: TbNetwork },
  ]},
  { label: "Architecture", icon: Blocks as unknown as IconType, skills: [
    { name: "System Design", icon: TbSitemap },
    { name: "API Design", icon: TbApi },
    { name: "Clean Architecture", icon: Blocks as unknown as IconType },
    { name: "Event-Driven Architecture", icon: TbSparkles },
  ]},
  { label: "Front-end", icon: Layout, skills: [
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
  ]},
  { label: "Databases", icon: Database, skills: [
    { name: "Postgres", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
  ]},
  { label: "AI", icon: BrainCircuit, skills: [
    { name: "LLM Integration", icon: SiOpenai },
    { name: "Prompt Engineering", icon: TbRobot },
    { name: "AI-Assisted Development", icon: TbSparkles },
  ]},
  { label: "DevOps", icon: GitBranch, skills: [
    { name: "Git", icon: SiGit },
    { name: "GitLab CI/CD", icon: SiGitlab },
    { name: "ArgoCD", icon: SiArgo },
    { name: "Helm", icon: SiHelm },
  ]},
];

export interface Role {
  title: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Experience {
  company: string;
  location: string;
  period: string;
  roles: Role[];
}

export const professionalExperience: Experience[] = [
  {
    company: "Nextron Systems",
    location: "Frankfurt, Hesse, Germany",
    period: "Jun 2024 — Present",
    roles: [
      {
        title: "Tech Lead Backend Development",
        period: "Jul 2025 — Present",
        description: "Leading backend development for ASGARD Management Center and Analysis Cockpit — Nextron's incident response and threat analysis platform, supporting scanning and response orchestration across up to one million endpoints. Driving architecture and technical design decisions, shaping SDLC processes, and contributing to product design. Mentoring engineers and facilitating cross-team collaboration.",
        skills: ["Go", "Kubernetes", "GCP", "Docker"],
      },
      {
        title: "Senior Software Engineer",
        period: "Jun 2024 — Jul 2025",
        description: "Built and improved backend services for ASGARD's endpoint scanning infrastructure and log analysis platform. Introduced architectural improvements, established testing standards, and drove code quality practices across the backend codebase.",
        skills: ["Go", "Python", "Docker", "CI/CD"],
      },
    ],
  },
  {
    company: "ESG Book",
    location: "Frankfurt, Hesse, Germany",
    period: "May 2022 — Jun 2024",
    roles: [
      {
        title: "Software Engineer III",
        period: "Apr 2023 — Jun 2024",
        description: "Implemented ESG scoring methodologies using Golang and Python. Developed core infrastructure including database wrappers, CI/CD pipelines, data delivery mechanisms, and Terraform-based IaC components. Advocated for improved testing practices, significantly enhancing test coverage and code quality.",
        skills: ["Go", "Python", "Terraform", "CI/CD"],
      },
      {
        title: "Software Engineer II",
        period: "May 2022 — Mar 2023",
        description: "Built and maintained data-driven microservices powering ESG analytics. Developed RESTful APIs and contributed to data pipeline architecture for processing large financial datasets.",
        skills: ["Go", "Postgres", "Docker", "SQL"],
      },
    ],
  },
  {
    company: "Senacor Technologies",
    location: "Frankfurt, Hesse, Germany",
    period: "Feb 2021 — Apr 2022",
    roles: [
      {
        title: "Software Engineer",
        period: "Feb 2021 — Apr 2022",
        description: "Designed software solutions for Banking & Finance clients. Led the design of a company-wide webhook system using AWS Lambda. Designed and implemented a JSON data store with custom data ingestion, and built supporting infrastructure in RedHat OpenShift with Azure.",
        skills: ["Java", "Spring-Boot", "AWS Lambda", "OpenShift", "Azure", "SQL"],
      },
    ],
  },
];

export const earlyCareer: Experience[] = [
  {
    company: "Edinburgh Napier University",
    location: "Edinburgh, UK",
    period: "Sep 2020 — Dec 2020",
    roles: [{
      title: "Lab Demonstrator",
      period: "Sep 2020 — Dec 2020",
      description: "Assisted in practical sessions for the Software Engineering 3 module, guiding students through C# development tasks and providing individualised support to enhance understanding of software engineering principles.",
      skills: ["C#", "Teaching", "Software Engineering"],
    }],
  },
  {
    company: "Skyscanner",
    location: "Remote",
    period: "Jul 2020",
    roles: [{
      title: "Intern — Insight Week",
      period: "Jul 2020",
      description: "Participated in a virtual insight week for interns, engaging in engineering talks, technical discussions, and personal development sessions to gain insights into Skyscanner's engineering practices.",
      skills: ["Python", "Agile"],
    }],
  },
  {
    company: "MarketAxess",
    location: "London, UK",
    period: "Jun 2019 — Aug 2019",
    roles: [{
      title: "Business Analyst Intern",
      period: "Jun 2019 — Aug 2019",
      description: "Supported the trading technology team with data analysis and process improvement initiatives in electronic fixed-income trading.",
      skills: ["SQL", "Python", "Data Analysis"],
    }],
  },
  {
    company: "Morgan Stanley",
    location: "Glasgow, UK",
    period: "Jun 2018 — May 2019",
    roles: [{
      title: "Industrial Placement — Application Development",
      period: "Jun 2018 — May 2019",
      description: "Completed a 12-month placement split between Equity Swaps Trading and Development Environment teams. Performance-tuned a trading system component achieving 70-80x performance increase. Led migration from Perl to Java Spring Boot, driving increased revenue and client retention. Built a RESTful API with Freemarker templating to streamline project setup for developers across the firm.",
      skills: ["Java", "Spring-Boot", "REST APIs", "Perl"],
    }],
  },
  {
    company: "Sykes Enterprises",
    location: "Edinburgh, UK",
    period: "May 2017 — May 2018",
    roles: [{
      title: "Product Specialist — Online Fraud Prevention",
      period: "May 2017 — May 2018",
      description: "Monitored customer transactions to identify suspicious activity. Analysed historical data to uncover inefficiencies, providing actionable insights to stakeholders and enabling the team to focus on complex transactions.",
      skills: ["Data Analysis", "Problem Solving"],
    }],
  },
];

export interface Education {
  degree: string;
  grade?: string;
  school: string;
  period: string;
}

export const education: Education[] = [
  {
    degree: "BEng (Hons) Software Engineering",
    grade: "First-Class",
    school: "Edinburgh Napier University, Edinburgh, UK",
    period: "Sep 2016 — Dec 2020",
  },
];

export interface Language {
  name: string;
  level: string;
  flag: string;
}

export const languages: Language[] = [
  { name: "English", level: "Native / Bilingual", flag: "🇬🇧" },
  { name: "German", level: "Native / Bilingual", flag: "🇩🇪" },
];

export interface Project {
  title: string;
  description: string;
  skills: string[];
  github?: string;
  live?: string;
}

// Add your projects here. The section only shows when this array is non-empty.
export const projects: Project[] = [];

export interface Certification {
  name: string;
  detail?: string;
}

export const certifications: Certification[] = [];
