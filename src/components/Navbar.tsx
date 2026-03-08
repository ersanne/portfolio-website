import { useState, useEffect, useRef } from "react";
import { Sun, Moon } from "lucide-react";
import { hero } from "@/data/portfolio";
import { useTheme } from "@/hooks/use-theme";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking.current = false;
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 anim-slide-down ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-heading font-bold text-sm text-foreground hover:text-primary transition-colors">
          {hero.firstName}<span className="text-primary">.</span>
        </a>
        <div className="flex items-center gap-6">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-body hidden sm:block"
            >
              {label}
            </a>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-1.5 rounded-md text-muted-foreground hover:text-primary transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
