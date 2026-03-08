import { ExternalLink, Github } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { projects } from "@/data/portfolio";

const ProjectsSection = () => {
  const { ref, inView } = useInView();

  if (projects.length === 0) return null;

  return (
    <section id="projects" className="section-container">
      <div ref={ref} className={`animate-on-scroll ${inView ? "in-view" : ""}`}>
        <h2 className="text-3xl font-bold font-heading mb-2">
          <span className="text-primary font-normal text-lg mr-2">06.</span>Projects
        </h2>
        <div className="h-px w-24 bg-primary/30 mb-10" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`bg-card rounded-xl p-6 border border-border/50 hover:border-primary/20 transition-colors flex flex-col animate-on-scroll ${inView ? "in-view" : ""}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-heading font-semibold text-foreground">{project.title}</h3>
              <div className="flex gap-2 flex-shrink-0 ml-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={16} />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live demo" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span key={skill} className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary font-heading">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
