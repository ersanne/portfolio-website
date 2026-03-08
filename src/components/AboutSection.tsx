import { motion } from "framer-motion";
import { about } from "@/data/portfolio";

const AboutSection = () => (
  <section id="about" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold font-heading mb-2">
        <span className="text-primary font-normal text-lg mr-2">01.</span>About Me
      </h2>
      <div className="h-px w-24 bg-primary/30 mb-8" />
      <p className="text-muted-foreground leading-relaxed max-w-2xl text-lg">
        {about}
      </p>
    </motion.div>
  </section>
);

export default AboutSection;
