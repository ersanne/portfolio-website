import { Code2 } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { skillCategories } from "@/data/portfolio";

const SkillsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="section-container">
      <div ref={ref} className={`animate-on-scroll ${inView ? "in-view" : ""}`}>
        <h2 className="text-3xl font-bold font-heading mb-2">
          <span className="text-primary font-normal text-lg mr-2">02.</span>Skills
        </h2>
        <div className="h-px w-24 bg-primary/30 mb-10" />
      </div>

      <div>
        <div className="space-y-5">
          {skillCategories.map((cat, i) => {
            const CatIcon = cat.icon ?? Code2;
            return (
              <div
                key={cat.label}
                className={`grid grid-cols-[180px_1fr] items-center gap-3 animate-on-scroll ${inView ? "in-view" : ""}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-heading text-primary uppercase tracking-wider">
                  <CatIcon size={16} />
                  {cat.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground font-body hover:bg-primary/15 hover:text-primary transition-colors cursor-default"
                      >
                        {Icon && <Icon size={13} className="flex-shrink-0" />}
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
