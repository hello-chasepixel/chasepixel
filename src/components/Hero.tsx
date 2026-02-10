import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 bg-background overflow-hidden">
      {/* Bold geometric decorations */}
      <div className="absolute top-24 right-[8%] w-40 h-40 bg-primary/15 rounded-full blur-2xl" />
      <div className="absolute top-[15%] left-[5%] w-24 h-24 border-4 border-accent/30 rounded-full" />
      <div className="absolute bottom-[20%] right-[12%] w-16 h-16 bg-accent/20 rotate-45" />
      <div className="absolute bottom-32 left-[10%] w-64 h-64 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute top-[40%] right-[3%] w-3 h-3 bg-primary rounded-full" />
      <div className="absolute top-[30%] left-[15%] w-2 h-2 bg-accent rounded-full" />
      <div className="absolute bottom-[35%] right-[20%] w-4 h-4 border-2 border-primary/40 rounded-full" />

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold text-sm tracking-wide uppercase px-5 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Design that drives impact
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1] tracking-tight mb-8 text-foreground"
          >
            Your research
            <br />
            deserves to be{" "}
            <span className="relative inline-block">
              <span className="text-primary">understood</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -bottom-1 left-0 w-full h-1.5 bg-accent/60 origin-left rounded-full"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed"
          >
            We transform complex data, research, and ideas into clear, accessible, and beautifully designed documents that drive impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all text-sm group"
            >
              Book Your Free Strategy Session
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 text-foreground font-semibold px-8 py-4 rounded-full border-2 border-border hover:border-accent hover:text-accent transition-colors text-sm"
            >
              See Our Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default Hero;
