import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="block">
          <Logo className="h-4 w-auto" />
        </a>
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
