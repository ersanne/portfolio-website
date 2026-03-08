import { motion } from "framer-motion";
import { Download } from "lucide-react";
import portrait from "@/assets/erik-portrait.jpg";
import { Github, Linkedin, Twitter, Mail, type LucideIcon } from "lucide-react";
import { hero, socials, type SocialType } from "@/data/portfolio";

const iconMap: Record<SocialType, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
};

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
      backgroundSize: '60px 60px',
    }} />

    <div className="section-container text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8"
      >
        <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-2 border-primary/30 glow-md">
          <img src={portrait} alt={`${hero.firstName} ${hero.lastName}`} className="w-full h-full object-cover" />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-5xl md:text-7xl font-bold font-heading mb-4"
      >
        {hero.firstName} <span className="text-gradient">{hero.lastName}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="text-lg md:text-xl text-muted-foreground font-body mb-8"
      >
        {hero.title}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex gap-4 justify-center"
      >
        {socials.map(({ type, href, label }) => {
          const Icon = iconMap[type];
          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </motion.div>

      <motion.a
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.5 }}
        href={hero.cvPath}
        download
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading text-sm font-semibold hover:opacity-90 transition-opacity glow-sm"
      >
        <Download size={16} />
        Download CV
      </motion.a>
    </div>
  </section>
);

export default HeroSection;
