import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LetterX, LetterC } from "./Logo";

const CtaBanner = () => {
  return (
    <section className="py-4 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto bg-secondary rounded-2xl py-14 md:py-20 px-8 text-center relative overflow-hidden"
      >
        {/* Letter-shaped decorations on dark bg */}
        <div className="absolute top-4 left-6 w-16 h-16 text-primary/[0.08] rotate-12">
          <LetterX />
        </div>
        <div className="absolute bottom-6 right-10 w-20 h-20 text-accent/[0.1] -rotate-6">
          <LetterC />
        </div>

        <h2 className="text-2xl md:text-4xl font-display font-extrabold text-secondary-foreground mb-4 relative z-10">
          Ready to make your work
          <br />
          <span className="text-acid">impossible to ignore?</span>
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
