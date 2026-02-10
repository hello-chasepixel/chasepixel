import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LetterC, LetterX, LetterP, LetterA } from "./Logo";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 bg-background overflow-hidden">
      {/* Letter-shaped decorative elements */}
      <div className="absolute top-24 right-[6%] w-28 h-28 text-primary/[0.06] rotate-12">
        <LetterX />
      </div>
      <div className="absolute bottom-[18%] left-[4%] w-36 h-36 text-primary/[0.05] -rotate-12">
        <LetterC />
      </div>
      <div className="absolute top-[35%] left-[12%] w-20 h-20 text-accent/[0.08] rotate-6">
        <LetterA />
      </div>
      <div className="absolute bottom-32 right-[15%] w-24 h-24 text-accent/[0.06] -rotate-6">
        <LetterP />
      </div>

      {/* Soft color blurs */}
      <div className="absolute top-20 right-[-5%] w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-[-5%] w-56 h-56 bg-accent/8 rounded-full blur-3xl" />

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

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default Hero;
