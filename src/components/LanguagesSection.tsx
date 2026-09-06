import { useInView } from "@/hooks/use-in-view";
import { languages } from "@/data/portfolio";

const LanguagesSection = () => {
  const { ref, inView } = useInView();

  return (
    <section className="min-w-0">
      <div ref={ref} className={`animate-on-scroll ${inView ? "in-view" : ""}`}>
        <h2 className="text-xl font-bold font-heading mb-2">
          <span className="text-primary font-normal text-lg mr-2">05.</span>Languages
        </h2>
        <div className="h-px w-24 bg-primary/30 mb-10" />
      </div>

      <div className="flex flex-col gap-5">
        {languages.map((lang, i) => (
          <div
            key={lang.name}
            className={` flex items-center gap-4 animate-on-scroll ${inView ? "in-view" : ""}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <span className="text-3xl">{lang.flag}</span>
            <div>
              <h3 className="font-heading font-semibold text-foreground">{lang.name}</h3>
              <p className="text-sm text-muted-foreground">{lang.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguagesSection;
