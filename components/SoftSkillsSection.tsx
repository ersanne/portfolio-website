import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { softSkills } from "@/data/portfolio";

const SoftSkillsSection = () => (
  <section className="section-container pt-0">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-sm font-heading text-primary uppercase tracking-wider mb-6">Soft Skills</h3>
    </motion.div>

    <div className="grid sm:grid-cols-2 gap-4">
      {softSkills.map((skill, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border/50"
        >
          <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
          <p className="text-sm text-muted-foreground">{skill}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SoftSkillsSection;
