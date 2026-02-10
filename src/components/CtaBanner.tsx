import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CtaBanner = () => {
  return (
    <section className="py-4 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto bg-secondary rounded-2xl py-14 md:py-20 px-8 text-center relative overflow-hidden"
      >
        {/* Geometric decorations on dark bg */}
        <div className="absolute top-6 left-8 w-12 h-12 border-2 border-primary/20 rounded-full" />
        <div className="absolute bottom-8 right-12 w-8 h-8 bg-accent/15 rotate-45" />
        <div className="absolute top-1/2 left-[5%] w-3 h-3 bg-primary/30 rounded-full" />
        <div className="absolute top-[30%] right-[8%] w-2 h-2 bg-accent/40 rounded-full" />

        <h2 className="text-2xl md:text-4xl font-display font-extrabold text-secondary-foreground mb-4 relative z-10">
          Ready to make your work
          <br />
          <span className="text-primary">impossible to ignore?</span>
        </h2>
        <p className="text-secondary-foreground/60 mb-8 max-w-md mx-auto relative z-10">
          No pressure. Just a conversation about your goals.
        </p>
        <a
          href="#contact"
          className="relative z-10 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all text-sm group"
        >
          Book Your Free Consultation
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
};

export default CtaBanner;
