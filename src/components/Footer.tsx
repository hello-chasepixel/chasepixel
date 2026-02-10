import { Link } from "react-router-dom";
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
        <div className="flex items-center gap-4">
          <Link to="/privacy-policy" className="text-muted-foreground text-xs hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Chasepixel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
