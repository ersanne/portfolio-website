import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
    </motion.nav>
  );
};

export default Navbar;
