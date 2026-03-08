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
  "Backend Tech Lead with over five years of experience building scalable, efficient backend systems, primarily in Go. My career spans fintech, banking, and cybersecurity, where I've honed a well-rounded approach to solving complex technical challenges while delivering secure and high-performing solutions. I'm passionate about driving innovation, refining system architecture, and creating reliable software that aligns with business objectives and technical excellence.";

export const socials = [
  { type: "github" as const, href: "https://github.com/ersanne", label: "GitHub" },
  { type: "linkedin" as const, href: "https://www.linkedin.com/in/eriksanne", label: "LinkedIn" },
  { type: "twitter" as const, href: "https://twitter.com/ErikKonradSanne", label: "Twitter" },
  { type: "email" as const, href: "mailto:erik@eriksanne.com", label: "Email" },
];

export type SocialType = (typeof socials)[number]["type"];

export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  { label: "Programming", skills: ["Go", "Java", "Python", "SQL"] },
  { label: "Cloud & Infrastructure", skills: ["Kubernetes", "Google Cloud Platform", "Terraform", "Docker"] },
  { label: "Back-end", skills: ["Spring-Boot", "REST APIs", "Microservices"] },
  { label: "Front-end", skills: ["Vue.js", "Vuetify", "HTML5", "CSS"] },
  { label: "Databases", skills: ["Postgres", "MongoDB", "MySQL", "DB2"] },
  { label: "DevOps", skills: ["Git", "CI/CD", "Jenkins", "RedHat OpenShift"] },
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
        description: "Leading backend development for threat detection and incident response tooling. Driving architecture decisions, mentoring engineers, and ensuring delivery of scalable, secure backend services.",
        skills: ["Go", "Kubernetes", "GCP", "Docker"],
      },
      {
        title: "Senior Software Engineer",
        period: "Jun 2024 — Jul 2025",
        description: "Designed and implemented scalable backend services for cybersecurity tooling. Improved CI/CD pipelines for faster delivery cycles and contributed to threat detection infrastructure.",
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
        skills: ["Go", "Spring-Boot", "Postgres", "Docker", "SQL"],
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
        skills: ["Java", "AWS Lambda", "OpenShift", "Azure", "SQL"],
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

export const softSkills: string[] = [
  "Able to work independently or as part of a wider team",
  "Flexible and quick to adapt to any new environment",
  "Experience with both Agile and Waterfall methodologies",
  "Excellent problem solver",
];

export interface Project {
  title: string;
  description: string;
  skills: string[];
  github?: string;
  live?: string;
}

// Add your projects here. The section only shows when this array is non-empty.
export const projects: Project[] = [
  {
    title: "Threat Intelligence Dashboard",
    description: "Real-time dashboard for visualising and correlating threat intelligence feeds. Features automated alert triage and customisable detection rules.",
    skills: ["Go", "Python", "Postgres", "Docker"],
    github: "https://github.com/ersanne",
  },
  {
    title: "ESG Data Pipeline",
    description: "High-throughput data pipeline for ingesting and normalising ESG metrics from multiple financial data providers.",
    skills: ["Go", "Python", "Terraform", "CI/CD"],
  },
  {
    title: "Personal Portfolio",
    description: "This website — a modern, responsive developer portfolio built with React and Tailwind CSS.",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/ersanne",
    live: "https://eriksanne.com",
  },
];

export interface Certification {
  name: string;
  detail?: string;
}

export const certifications: Certification[] = [
  { name: "IELTS Academic", detail: "Score: 8" },
];
