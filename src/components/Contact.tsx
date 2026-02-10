import { useEffect } from "react";
import { motion } from "framer-motion";
import { LetterA, LetterX } from "./Logo";
import FloatingLetter from "./FloatingLetter";

const Contact = () => {
  useEffect(() => {
    const d = document;
    const w = "https://tally.so/widgets/embed.js";
    const v = function () {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      } else {
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e: any) => {
          e.src = e.dataset.tallySrc;
        });
      }
    };
    if (typeof (window as any).Tally !== "undefined") {
      v();
    } else if (d.querySelector('script[src="' + w + '"]') == null) {
      const s = d.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = v;
      d.body.appendChild(s);
    }
  }, []);

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
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
            data-tally-src="https://tally.so/embed/QK5Bep?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
            loading="lazy"
            width="100%"
            height={313}
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Contact Us"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
