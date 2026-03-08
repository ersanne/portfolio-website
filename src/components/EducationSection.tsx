import { motion } from "framer-motion";
import { education } from "@/data/portfolio";

const EducationSection = () => (
  <section id="education" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold font-heading mb-2">
        <span className="text-primary font-normal text-lg mr-2">04.</span>Education
      </h2>
      <div className="h-px w-24 bg-primary/30 mb-10" />
    </motion.div>

    <div className="grid md:grid-cols-2 gap-6">
      {education.map((edu, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="bg-card rounded-xl p-6 border border-border/50"
        >
          <h3 className="font-heading font-semibold text-foreground mb-1">{edu.degree}</h3>
          {edu.grade && (
            <span className="inline-block px-2 py-0.5 text-xs rounded bg-primary/10 text-primary font-heading mb-2">
              {edu.grade}
            </span>
          )}
          <p className="text-sm text-muted-foreground">{edu.school}</p>
          <p className="text-xs text-primary font-heading mt-2">{edu.period}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default EducationSection;
