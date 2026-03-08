import { motion } from "framer-motion";
import { languages } from "@/data/portfolio";

const LanguagesSection = () => (
  <section className="section-container pt-0">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold font-heading mb-2">
        <span className="text-primary font-normal text-lg mr-2">05.</span>Languages
      </h2>
      <div className="h-px w-24 bg-primary/30 mb-10" />
    </motion.div>

    <div className="flex gap-6">
      {languages.map((lang, i) => (
        <motion.div
          key={lang.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="bg-card rounded-xl p-6 border border-border/50 flex items-center gap-4"
        >
          <span className="text-3xl">{lang.flag}</span>
          <div>
            <h3 className="font-heading font-semibold text-foreground">{lang.name}</h3>
            <p className="text-sm text-muted-foreground">{lang.level}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default LanguagesSection;
