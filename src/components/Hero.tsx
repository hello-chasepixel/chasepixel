import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-16 bg-background">
      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tight mb-8 text-foreground"
          >
            Elevate your Content with{" "}
            <span className="text-primary">Impactful Graphic Design</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Need a partner to design your reports, slide decks, brochures, and more? You're in the right place!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-foreground text-background font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity text-sm"
            >
              Book a Free Consultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
