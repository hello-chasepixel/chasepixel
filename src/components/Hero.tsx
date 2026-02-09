import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-display font-semibold tracking-wide text-sm mb-6"
          >
            Hey there! I'm glad you're here ✨
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tight mb-8 text-foreground"
          >
            Design that feels
            <br />
            <span className="text-primary">warm, clear,</span>
            <br />
            & inclusive.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            I'm Chasepixel — a designer who believes great visuals should be
            accessible to everyone. From AODA-compliant reports to scroll-stopping
            social content, I make things that connect.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity text-sm"
            >
              See My Work ✦
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border-2 border-border text-foreground font-semibold px-8 py-3.5 rounded-full hover:bg-card transition-colors text-sm"
            >
              What I Offer
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
