const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display font-extrabold text-sm tracking-wide text-foreground">
          chase<span className="text-primary">pixel</span>
        </p>
        <p className="text-muted-foreground text-xs">
          Design that brings your ideas to life
        </p>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Chasepixel
        </p>
      </div>
    </footer>
  );
};

export default Footer;
