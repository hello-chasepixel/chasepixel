const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display font-bold text-sm text-foreground">
          chase<span className="text-primary">pixel</span> ✦
        </p>
        <p className="text-muted-foreground text-sm">
          Made with care © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
