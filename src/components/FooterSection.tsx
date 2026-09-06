import { ArrowUpRight, ArrowUp } from "lucide-react";
import { hero, socials } from "@/data/portfolio";

const FooterSection = () => (
  <footer id="contact" className="contact-section">
    <div className="section-container">
      <p className="eyebrow mb-5">Say hello</p>
      <div className="contact-layout">
        <div>
          <h2 className="editorial-heading">Good things start<br />with a <span className="text-primary">conversation.</span></h2>
          <p className="text-muted-foreground mt-5 max-w-md">Want to talk engineering, exchange ideas, or simply say hello? Drop me a line.</p>
        </div>
        <div className="flex flex-col items-start gap-5">
          {socials.filter(({ type }) => type === "email").map(({ href }) => (
            <a key={href} href={href} className="contact-email">{href.replace("mailto:", "")} <ArrowUpRight size={20} /></a>
          ))}
          <a href={hero.cvPath} download className="text-sm text-muted-foreground hover:text-primary transition-colors">Or take my CV with you ↗</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {hero.firstName} {hero.lastName}</p>
        <a href="#top" className="inline-flex items-center gap-2 hover:text-primary transition-colors">Back to top <ArrowUp size={14} /></a>
      </div>
    </div>
  </footer>
);

export default FooterSection;
