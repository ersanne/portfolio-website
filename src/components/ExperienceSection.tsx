import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { professionalExperience, earlyCareer, type Experience, type Role } from "@/data/portfolio";

const RoleDetail = ({ role }: { role: Role }) => (
  <div className="py-4 first:pt-0">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
      <h4 className="font-heading font-medium text-foreground text-sm">{role.title}</h4>
      <span className="text-xs font-heading text-primary whitespace-nowrap">{role.period}</span>
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed">{role.description}</p>
    <div className="flex flex-wrap gap-2 mt-3">
      {role.skills.map((skill) => (
        <span
          key={skill}
          className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary font-heading"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const ExperienceCard = ({ exp, index, isLast }: { exp: Experience; index: number; isLast: boolean }) => {
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView("0px");

  return (
    <div
      ref={ref}
      className={`relative md:pl-8 animate-on-scroll ${inView ? "in-view" : ""}`}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      {/* Dot */}
      <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background hidden md:block z-10" />
      {/* Connector line to next card (skip on last item) */}
      {!isLast && (
        <div className="absolute left-[7px] top-[17px] bottom-[-24px] w-px bg-border hidden md:block" />
      )}
      <div
        className="bg-card rounded-xl border border-border/50 hover:border-primary/20 transition-colors cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="p-5 flex items-center gap-3">
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
              <h3 className="font-heading font-semibold text-foreground">{exp.company}</h3>
              <span className="text-xs font-heading text-primary whitespace-nowrap">{exp.period}</span>
            </div>
            <div className="text-sm text-muted-foreground space-y-1 mt-1">
              {exp.roles.map((role, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <div>
                    <span className="text-foreground font-medium">{role.title}</span>
                    <span className="text-muted-foreground text-xs ml-2">{role.period}</span>
                  </div>
                </div>
              ))}
              <p className="text-xs text-muted-foreground pl-3.5">{exp.location}</p>
            </div>
          </div>
          <div className={`chevron-icon text-muted-foreground flex-shrink-0 ${open ? "open" : ""}`}>
            <ChevronDown size={16} />
          </div>
        </div>

        <div className={`collapsible-panel ${open ? "open" : ""}`}>
          <div>
            <div className="px-5 pb-5 pt-0 border-t border-border/30 mt-0">
              <div className="divide-y divide-border/30 mt-4">
                {exp.roles.map((role, i) => (
                  <RoleDetail key={i} role={role} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Timeline = ({ items, offset = 0 }: { items: Experience[]; offset?: number }) => (
  <div className="relative">
    <div className="space-y-6">
      {items.map((exp, i) => (
        <ExperienceCard key={i} exp={exp} index={i + offset} isLast={i === items.length - 1} />
      ))}
    </div>
  </div>
);

const ExperienceSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="section-container">
      <div ref={ref} className={`animate-on-scroll ${inView ? "in-view" : ""}`}>
        <h2 className="text-3xl font-bold font-heading mb-2">
          <span className="text-primary font-normal text-lg mr-2">03.</span>Experience
        </h2>
        <div className="h-px w-24 bg-primary/30 mb-10" />
      </div>

      <h3 className="text-sm font-heading text-primary uppercase tracking-wider mb-6">Professional</h3>
      <Timeline items={professionalExperience} />

      <h3 className="text-sm font-heading text-primary uppercase tracking-wider mb-6 mt-14">Internships & Early Career</h3>
      <Timeline items={earlyCareer} offset={professionalExperience.length} />
    </section>
  );
};

export default ExperienceSection;
