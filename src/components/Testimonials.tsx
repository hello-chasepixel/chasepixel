import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import portfolioWebsite from "@/assets/portfolio-website.jpg";

const Testimonials = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border-2 border-accent/15 rounded-full" />
      <div className="absolute bottom-16 left-8 w-6 h-6 bg-primary/10 rotate-45" />

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
            {/* Accent frame */}
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
