import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import portfolioReport from "@/assets/portfolio-report.jpg";
import portfolioSlides from "@/assets/portfolio-slides.jpg";
import portfolioBrochure from "@/assets/portfolio-brochure.jpg";
import portfolioInfographic from "@/assets/portfolio-infographic.jpg";

const services = [
  {
    image: portfolioReport,
    title: "Research reports that people actually want to read",
    description:
      "Your 50-page report took months to research. We make sure your stakeholders don't just skim the executive summary — they engage with every finding.",
    bullets: [
      "AODA-compliant & accessible to all readers",
      "Clear visual hierarchy that guides through complex findings",
      "Data visualizations that make statistics instantly clear",
      "Branded templates you can reuse for future reports",
    ],
  },
  {
    image: portfolioSlides,
    title: "Slide decks that tell stories, not just list facts",
    description:
      "You've got 20 minutes to convince funders or stakeholders. We design presentations that guide your audience through a clear, persuasive narrative.",
    bullets: [
      "One key idea per slide — no more walls of text",
      "Data visualizations that support your story",
      "Consistent branding that looks polished and professional",
      "Both presentation and handout versions included",
    ],
  },
  {
    image: portfolioBrochure,
    title: "Flyers and brochures designed with purpose",
    description:
      "We create inclusive, high-impact print and digital collateral that ensures your message gets the attention it deserves.",
    bullets: [
      "Built for both print distribution and digital sharing",
      "Eye-catching layouts that capture attention fast",
      "Engaging visuals that support your message",
      "Accessible and inclusive by design",
    ],
  },
  {
    image: portfolioInfographic,
    title: "Complex data, instantly understood",
    description:
      "Turn dense research and statistics into visual stories that any audience can grasp at a glance.",
    bullets: [
      "Clear visual storytelling that highlights key takeaways",
      "Simplifies complex data into digestible formats",
      "Designed for accessibility and AODA compliance",
      "Optimized for use across print, web, and social media",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">What we do</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Design that makes complexity<br className="hidden md:block" /> feel effortless
          </h2>
        </motion.div>

        <div className="space-y-10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
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
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
