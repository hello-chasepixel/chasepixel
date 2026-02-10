import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { LetterP, LetterE } from "./Logo";
import FloatingLetter from "./FloatingLetter";
import portfolioWebsite from "@/assets/portfolio-website.jpg";

const Testimonials = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-card relative overflow-hidden">
      {/* Floating letter decorations */}
      <FloatingLetter className="top-10 right-8 w-24 h-24 text-primary/[0.06]" glow="primary" duration={11} delay={1}>
        <LetterP />
      </FloatingLetter>
      <FloatingLetter className="bottom-12 left-6 w-20 h-20 text-accent/[0.08]" glow="accent" duration={13} delay={4}>
        <LetterE />
      </FloatingLetter>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-2/5 relative"
          >
            <img
              src={portfolioWebsite}
              alt="Accelerate Her Future website design by Chasepixel"
              className="rounded-2xl w-full shadow-xl"
              loading="lazy"
            />
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-accent/30 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-3/5"
          >
            <Quote className="w-12 h-12 text-primary/25 mb-4" />
            <div className="space-y-5 text-muted-foreground leading-relaxed font-serif italic text-base">
              <p>
                Working with Natasha Sidi from Chasepixel on a variety of design projects, including our Accelerate Her Future impact report design, slide deck design, and web design, has been an exceptional experience. Natasha approaches every project with remarkable dedication, self-leadership, and outstanding technical expertise.
              </p>
              <p>
                Natasha's ability to collaborate seamlessly with our team always ensures a smooth design process characterized by clear communication, thoughtful feedback integration, and creativity. Her design work consistently captures our brand's essence while going over and beyond to deliver a quality product.
              </p>
              <p>
                Natasha's creative vision, reliability, and collaborative spirit have made her an indispensable partner on this journey. I highly recommend Chasepixel for anyone seeking a talented, versatile, and results-driven designer to bring their vision to life.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-1 h-12 bg-primary rounded-full" />
              <div>
                <p className="font-display font-extrabold text-foreground">Dr. Golnaz Golnaraghi</p>
                <p className="text-muted-foreground text-sm">Founder, Accelerate Her Future</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
