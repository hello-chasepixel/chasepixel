import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import portfolioReport from "@/assets/portfolio-report.jpg";
import portfolioSlides from "@/assets/portfolio-slides.jpg";
import portfolioBrochure from "@/assets/portfolio-brochure.jpg";
import portfolioInfographic from "@/assets/portfolio-infographic.jpg";

const services = [
  {
    image: portfolioReport,
    title: "Transforming Complex Research into Accessible, Impactful Reports",
    description:
      "Reports don't have to be dull. We transform complex data into clean, accessible, AODA-compliant documents that people actually want to read.",
    bullets: [
      "Accessible & AODA Compliant",
      "Clear Visual Storytelling",
      "Data Made Beautiful",
      "Print & Digital-Ready Formats",
      "Designed with Equity",
    ],
  },
  {
    image: portfolioSlides,
    title: "Designing Slide Decks That Tell a Clear and Impactful Story",
    description:
      "Bring your research, presentations, and pitches to life with clean, compelling design.",
    bullets: [
      "Visual storytelling that guides your audience",
      "Complex ideas simplified through design",
      "Branded templates for consistency and ease",
      "Seamless integration of data and narrative",
      "Ready-to-use formats for in-person or virtual delivery",
    ],
  },
  {
    image: portfolioBrochure,
    title: "Designing Flyers and Brochures with Purpose & Intention",
    description:
      "We create inclusive, high-impact print and digital collateral that supports your message.",
    bullets: [
      "Built for both print distribution and digital sharing",
      "Complex ideas simplified through design",
      "Engaging visuals that support your message",
      "Eye-catching layouts that capture attention fast",
      "Ready-to-use formats for in-person or virtual delivery",
    ],
  },
  {
    image: portfolioInfographic,
    title: "Infographic Design That Makes Data Easy to Digest",
    description:
      "Turn complex stats and research into visual stories people actually understand.",
    bullets: [
      "Clear visual storytelling that highlights key takeaways",
      "Simplifies complex data into digestible formats",
      "Designed for accessibility and AODA compliance",
      "Branded to align seamlessly with your organization",
      "Optimized for use across print, web, and social media",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-6 space-y-12">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="bg-card border border-border rounded-2xl overflow-hidden"
          >
            <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-0`}>
              <div className="md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                <img
                  src={s.image}
                  alt={`Example of ${s.title}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-display font-bold text-xl md:text-2xl mb-3 text-foreground">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {s.description}
                </p>
                <ul className="space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
