import { motion } from "framer-motion";

const CtaBanner = () => {
  return (
    <section className="py-4 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto bg-primary rounded-2xl py-12 md:py-16 px-8 text-center"
      >
        <h2 className="text-2xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
          Take Your Content to the Next Level with Powerful Designs
        </h2>
        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-foreground text-background font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity text-sm"
        >
          Contact Us
        </a>
      </motion.div>
    </section>
  );
};

export default CtaBanner;
