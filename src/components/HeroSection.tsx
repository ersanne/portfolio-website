import { ArrowUpRight, Download, Mail } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin, FiTwitter as Twitter } from "react-icons/fi";
import type { IconType } from "react-icons";
import portrait from "@/assets/erik-portrait.webp";
import { hero, socials, type SocialType } from "@/data/portfolio";

const iconMap: Record<SocialType, IconType> = {
  github: Github, linkedin: Linkedin, twitter: Twitter, email: Mail,
};

const HeroSection = () => (
  <section className="hero-section" aria-labelledby="hero-title">
    <div className="hero-grid section-container">
      <div className="hero-copy anim-fade-in-up">
        <p className="eyebrow mb-6"><span className="accent-dash" />{hero.title}</p>
        <h1 id="hero-title" className="hero-name">{hero.firstName}<br /><span>{hero.lastName}.</span></h1>
        <p className="hero-intro">{hero.intro}</p>
        <div className="flex flex-wrap gap-3 mt-8">
          <a href="#contact" className="contact-button">Get in touch <ArrowUpRight size={18} /></a>
          <a href={hero.cvPath} download className="cv-button"><Download size={16} /> Download CV</a>
        </div>
        <div className="flex items-center gap-4 mt-8">
          <span className="text-xs text-muted-foreground font-heading">Find me on</span>
          {socials.map(({ type, href, label }) => {
            const Icon = iconMap[type];
            return <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-link"><Icon size={18} /></a>;
          })}
        </div>
      </div>
      <div className="hero-visual anim-fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="portrait-frame">
          <img src={portrait} alt={`${hero.firstName} ${hero.lastName}`} width={480} height={600} fetchPriority="high" className="hero-portrait" />
          <span className="portrait-corner portrait-corner-top" aria-hidden="true" />
          <span className="portrait-corner portrait-corner-bottom" aria-hidden="true" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
