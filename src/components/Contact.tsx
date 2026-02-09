import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <Heart className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 text-foreground">
              Let's make something
              <br />
              <span className="text-primary">you'll love.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto leading-relaxed">
              Got a project brewing? Whether it's a quick question or a big idea,
              I'd love to chat. No pressure, just good vibes.
            </p>
            <a
              href="mailto:hello@chasepixel.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity text-sm group"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
