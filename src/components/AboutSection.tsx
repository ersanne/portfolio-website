import { useInView } from "@/hooks/use-in-view";
import { about } from "@/data/portfolio";

const AboutSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="section-container">
      <div ref={ref} className={`animate-on-scroll ${inView ? "in-view" : ""}`}>
        <h2 className="text-3xl font-bold font-heading mb-2">
          <span className="text-primary font-normal text-lg mr-2">01.</span>About Me
        </h2>
        <div className="h-px w-24 bg-primary/30 mb-8" />
        <p className="text-muted-foreground leading-relaxed max-w-2xl text-lg">
          {about}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
