import { motion } from "framer-motion";
import {
  Code2, Cloud, Server, Layout, Database, GitBranch,
} from "lucide-react";
import {
  SiGo, SiPython, SiKubernetes, SiGooglecloud, SiTerraform, SiDocker,
  SiSpringboot, SiVuedotjs, SiVuetify, SiHtml5, SiCss,
  SiPostgresql, SiMongodb, SiMysql,
  SiGit, SiJenkins, SiRedhatopenshift,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbApi, TbRefresh } from "react-icons/tb";
import { VscServerProcess } from "react-icons/vsc";
import { skillCategories } from "@/data/portfolio";
import type { IconType } from "react-icons";

const categoryIcons: Record<string, React.ReactNode> = {
  Programming: <Code2 size={16} />,
  "Cloud & Infrastructure": <Cloud size={16} />,
  "Back-end": <Server size={16} />,
  "Front-end": <Layout size={16} />,
  Databases: <Database size={16} />,
  DevOps: <GitBranch size={16} />,
};

const skillIcons: Record<string, IconType> = {
  Go: SiGo,
  Java: FaJava,
  Python: SiPython,
  Kubernetes: SiKubernetes,
  "Google Cloud Platform": SiGooglecloud,
  Terraform: SiTerraform,
  Docker: SiDocker,
  "Spring-Boot": SiSpringboot,
  "REST APIs": TbApi,
  Microservices: VscServerProcess,
  "Vue.js": SiVuedotjs,
  Vuetify: SiVuetify,
  HTML5: SiHtml5,
  CSS: SiCss,
  Postgres: SiPostgresql,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  DB2: Database as unknown as IconType,
  Git: SiGit,
  "CI/CD": TbRefresh,
  Jenkins: SiJenkins,
  "RedHat OpenShift": SiRedhatopenshift,
};

const SkillsSection = () => (
  <section id="skills" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold font-heading mb-2">
        <span className="text-primary font-normal text-lg mr-2">02.</span>Skills
      </h2>
      <div className="h-px w-24 bg-primary/30 mb-10" />
    </motion.div>

    <div>
      <div className="space-y-5">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="grid grid-cols-[180px_1fr] items-center gap-3"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-heading text-primary uppercase tracking-wider">
              {categoryIcons[cat.label] ?? <Code2 size={16} />}
              {cat.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => {
                const Icon = skillIcons[skill];
                return (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground font-body hover:bg-primary/15 hover:text-primary transition-colors cursor-default"
                  >
                    {Icon && <Icon size={13} className="flex-shrink-0" />}
                    {skill}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
