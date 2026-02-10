import { motion } from "framer-motion";
import { LetterA, LetterP } from "./Logo";
import FloatingLetter from "./FloatingLetter";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      <FloatingLetter className="top-16 right-[8%] w-20 h-20 text-primary/[0.07]" glow="primary" duration={11} delay={1}>
        <LetterA />
      </FloatingLetter>
      <FloatingLetter className="bottom-12 left-[5%] w-24 h-24 text-accent/[0.08]" glow="accent" duration={13} delay={3}>
        <LetterP />
      </FloatingLetter>

      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold tracking-widest uppercase text-accent mb-3">About</p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight mb-8 text-foreground">
              Hi, I'm Natasha, the designer behind{" "}
              <span className="text-primary">Chasepixel.</span>
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                I started Chasepixel because I kept seeing brilliant people doing important work… and then burying it in documents that nobody wanted to read. Dense research reports. Cluttered slide decks. Websites that didn't reflect the quality of the thinking behind them.
              </p>
              <p className="text-foreground font-semibold text-xl">
                I believe your expertise deserves design that matches it.
              </p>
              <p>
                Whether you're a researcher presenting groundbreaking findings, a nonprofit sharing your impact, or a company communicating with stakeholders — I bring the same energy to every project: genuine excitement about making complex ideas clear, accessible, and visually compelling.
              </p>
              <p>
                When I'm not designing? I'm mixing tracks (amateur DJ in training), hitting hiking trails, or deep in a thriller.
              </p>
              <p className="text-foreground font-display font-bold text-xl">
                Let's make your work visually brilliant.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
