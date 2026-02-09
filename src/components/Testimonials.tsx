import { motion } from "framer-motion";
import portfolioWebsite from "@/assets/portfolio-website.jpg";

const Testimonials = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-2/5"
          >
            <img
              src={portfolioWebsite}
              alt="Portfolio showcase - Accelerate Her Future website design"
              className="rounded-2xl w-full shadow-lg"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-3/5"
          >
            <div className="space-y-5 text-muted-foreground text-sm leading-relaxed">
              <p>
                Working with Natasha Sidi from Chasepixel on a variety of design projects, including our Accelerate Her Future impact report design, slide deck design, and web design, has been an exceptional experience. Natasha approaches every project with remarkable dedication, self-leadership, and outstanding technical expertise.
              </p>
              <p>
                Natasha's ability to collaborate seamlessly with our team always ensures a smooth design process characterized by clear communication, thoughtful feedback integration, and creativity. Her design work consistently captures our brand's essence while going over and beyond to deliver a quality product. The new website and other design deliverables have received glowing feedback from our community, highlighting her ability to translate complex ideas into visually compelling and impactful designs.
              </p>
              <p>
                Natasha's creative vision, reliability, and collaborative spirit have made her an indispensable partner on this journey. I highly recommend Natasha at Chasepixel for anyone seeking a talented, versatile, and results-driven designer to bring their vision to life.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-display font-bold text-foreground">Dr. Golnaz Golnaraghi</p>
              <p className="text-muted-foreground text-sm">Founder, Accelerate Her Future</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
