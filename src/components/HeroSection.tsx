import { Download } from "lucide-react";
import portrait from "@/assets/erik-portrait.webp";
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
      <div className="mb-8 anim-fade-in-scale">
        <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-2 border-primary/30 glow-md">
          <img src={portrait} alt={`${hero.firstName} ${hero.lastName}`} className="w-full h-full object-cover" width={144} height={144} />
        </div>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold font-heading mb-4 anim-fade-in-up" style={{ animationDelay: "0.2s" }}>
        {hero.firstName} <span className="text-gradient">{hero.lastName}</span>
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground font-body mb-8 anim-fade-in-up" style={{ animationDelay: "0.35s" }}>
        {hero.title}
      </p>

      <div className="flex gap-4 justify-center anim-fade-in" style={{ animationDelay: "0.5s" }}>
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
      </div>

      <a
        href={hero.cvPath}
        download
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading text-sm font-semibold hover:opacity-90 transition-opacity glow-sm anim-fade-in-up"
        style={{ animationDelay: "0.65s" }}
      >
        <Download size={16} />
        Download CV
      </a>
    </div>
  </section>
);

export default HeroSection;
