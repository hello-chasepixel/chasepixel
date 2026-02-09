import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-6"
          >
            Design Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight mb-8"
          >
            Designs that
            <br />
            <span className="text-gradient">speak louder</span>
            <br />
            than words.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            From accessible reports to scroll-stopping social media — Chasepixel crafts
            visuals that are beautiful, functional, and inclusive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-medium px-8 py-3.5 rounded-md hover:opacity-90 transition-opacity text-sm"
            >
              View My Work
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border border-border text-foreground font-medium px-8 py-3.5 rounded-md hover:bg-secondary transition-colors text-sm"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
