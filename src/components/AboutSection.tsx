import { useInView } from "@/hooks/use-in-view";
import { about } from "@/data/portfolio";

const AboutSection = () => {
  const { ref, inView } = useInView();
  return (
    <section id="about" className="about-section">
      <div ref={ref} className={`section-container about-layout animate-on-scroll ${inView ? "in-view" : ""}`}>
        <div>
          <p className="eyebrow mb-4">01 / <span>About Me</span></p>
          <h2 className="editorial-heading">Good systems.<br /><span className="text-muted-foreground">Great people.</span></h2>
        </div>
        <div>
          <p className="text-muted-foreground leading-relaxed text-lg">{about}</p>
          <div className="about-notes"><span>Go & distributed systems</span><span>Architecture & mentoring</span></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
