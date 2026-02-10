import { motion } from "framer-motion";
import { LetterA, LetterX } from "./Logo";
import FloatingLetter from "./FloatingLetter";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Floating letter decorations */}
      <FloatingLetter className="top-12 left-[6%] w-24 h-24 text-primary/[0.06]" glow="primary" duration={10} delay={2}>
        <LetterA />
      </FloatingLetter>
      <FloatingLetter className="bottom-16 right-[8%] w-20 h-20 text-accent/[0.08]" glow="accent" duration={12} delay={0}>
        <LetterX />
      </FloatingLetter>

      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold tracking-widest uppercase text-accent mb-3">Get in touch</p>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mb-6 text-foreground">
              Let's make your brilliant work
              <br />
              <span className="text-primary">visually compelling.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
              Got a project in mind? Whether it's a quick question or a big idea, we'd love to chat.
            </p>
          </motion.div>
        </div>
        <div className="max-w-2xl mx-auto">
          <iframe
            data-tally-src="https://tally.so/embed/QK5Bep?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="500"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Contact Form"
            style={{ border: 'none' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
