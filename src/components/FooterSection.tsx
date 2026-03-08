const FooterSection = () => (
  <footer className="section-container pt-10 pb-10 text-center">
    <div className="h-px w-full bg-border/50 mb-8" />
    <p className="text-sm text-muted-foreground font-body">
      © {new Date().getFullYear()} Erik Sanne. Built with ☕ and code.
    </p>
  </footer>
);

export default FooterSection;
