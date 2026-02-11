import { motion } from "framer-motion";
import { LetterA, LetterP } from "./Logo";
import FloatingLetter from "./FloatingLetter";
import natashaPhoto from "@/assets/natasha-photo.png";

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
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-center">
            {/* Photo Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center"
            >
              {/* Animated glow ring behind photo */}
              <motion.div
                className="absolute inset-0 m-auto w-64 h-64 md:w-72 md:h-72 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, hsl(333, 100%, 50%), hsl(271, 75%, 45%), hsl(66, 100%, 67%), hsl(333, 100%, 50%))",
                  filter: "blur(20px)",
                  opacity: 0.4,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
              {/* Photo container */}
              <motion.div
                className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/30"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={natashaPhoto}
                  alt="Natasha, designer behind Chasepixel"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </motion.div>
            </motion.div>

            {/* Text Column */}
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
                  I started Chasepixel because I kept seeing brilliant people doing important work… but they were living in text-heavy documents that nobody wanted to read. Dense research reports. Cluttered slide decks. Websites that didn't reflect the quality of the thinking behind them.
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
      </div>
    </section>
  );
};

export default About;
