import { useInView } from "@/hooks/use-in-view";
import { education } from "@/data/portfolio";

const EducationSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="education" className="section-container">
      <div ref={ref} className={`animate-on-scroll ${inView ? "in-view" : ""}`}>
        <h2 className="text-3xl font-bold font-heading mb-2">
          <span className="text-primary font-normal text-lg mr-2">04.</span>Education
        </h2>
        <div className="h-px w-24 bg-primary/30 mb-10" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, i) => (
          <div
            key={i}
            className={`bg-card rounded-xl p-6 border border-border/50 animate-on-scroll ${inView ? "in-view" : ""}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <h3 className="font-heading font-semibold text-foreground mb-1">{edu.degree}</h3>
            {edu.grade && (
              <span className="inline-block px-2 py-0.5 text-xs rounded bg-primary/10 text-primary font-heading mb-2">
                {edu.grade}
              </span>
            )}
            <p className="text-sm text-muted-foreground">{edu.school}</p>
            <p className="text-xs text-primary font-heading mt-2">{edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
