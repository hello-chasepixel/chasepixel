import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-16 left-[8%] w-20 h-20 border-2 border-primary/15 rounded-full" />
      <div className="absolute bottom-20 right-[10%] w-10 h-10 bg-accent/10 rotate-45" />

      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold tracking-widest uppercase text-accent mb-3">Get in touch</p>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mb-6 text-foreground">
              Let's make your work
              <br />
              <span className="text-primary">impossible to ignore.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto leading-relaxed">
              Got a project in mind? Whether it's a quick question or a big idea, we'd love to chat.
            </p>
            <a
              href="mailto:hello@chasepixel.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all text-sm group"
            >
              <Mail className="w-4 h-4" />
              Book Your Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
