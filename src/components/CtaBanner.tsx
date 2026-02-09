import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CtaBanner = () => {
  return (
    <section className="py-4 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto bg-secondary rounded-2xl py-12 md:py-16 px-8 text-center"
      >
        <h2 className="text-2xl md:text-4xl font-display font-bold text-secondary-foreground mb-4">
          Ready to make your work impossible to ignore?
        </h2>
        <p className="text-secondary-foreground/70 mb-8 max-w-md mx-auto">
          No pressure. Just a conversation about your goals.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity text-sm group"
        >
          Book Your Free Consultation
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
};

export default CtaBanner;
