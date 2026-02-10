import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { LetterE, LetterA } from "./Logo";
import FloatingLetter from "./FloatingLetter";
import reportMockup from "@/assets/report-mockup.png";

const services = [
  {
    title: "Research reports that people actually want to read",
    description:
      "Your 50-page report took months to research. We make sure your stakeholders don't just skim the executive summary — they engage with every finding.",
    bullets: [
      "AODA-compliant & accessible to all readers",
      "Clear visual hierarchy that guides through complex findings",
      "Data visualizations that make statistics instantly clear",
      "Branded templates you can reuse for future reports",
    ],
    accent: "primary" as const,
    image: reportMockup,
  },
  {
    title: "Slide decks that tell stories, not just list facts",
    description:
      "You've got 20 minutes to convince funders or stakeholders. We design presentations that guide your audience through a clear, persuasive narrative.",
    bullets: [
      "One key idea per slide — no more walls of text",
      "Data visualizations that support your story",
      "Consistent branding that looks polished and professional",
      "Both presentation and handout versions included",
    ],
    accent: "accent" as const,
  },
  {
    title: "Flyers and brochures designed with purpose",
    description:
      "We create inclusive, high-impact print and digital collateral that ensures your message gets the attention it deserves.",
    bullets: [
      "Built for both print distribution and digital sharing",
      "Eye-catching layouts that capture attention fast",
      "Engaging visuals that support your message",
      "Accessible and inclusive by design",
    ],
    accent: "primary" as const,
  },
  {
    title: "Complex data, instantly understood",
    description:
      "Turn dense research and statistics into visual stories that any audience can grasp at a glance.",
    bullets: [
      "Clear visual storytelling that highlights key takeaways",
      "Simplifies complex data into digestible formats",
      "Designed for accessibility and AODA compliance",
      "Optimized for use across print, web, and social media",
    ],
    accent: "accent" as const,
  },
];

const accentStyles = {
  primary: {
    border: "hover:border-primary/40",
    glow: "hover:shadow-primary/10",
    strip: "bg-primary",
    check: "text-primary",
  },
  accent: {
    border: "hover:border-accent/40",
    glow: "hover:shadow-accent/10",
    strip: "bg-accent",
    check: "text-accent",
  },
};

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      {/* Floating letter decorations */}
      <FloatingLetter className="top-16 left-[-2%] w-32 h-32 text-primary/[0.05]" glow="primary" duration={14} delay={1}>
        <LetterE />
      </FloatingLetter>
      <FloatingLetter className="bottom-24 right-[-1%] w-28 h-28 text-accent/[0.07]" glow="accent" duration={12} delay={3}>
        <LetterA />
      </FloatingLetter>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-acid mb-3">What we do</p>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground mb-4">
            Design that makes complexity
            <br className="hidden md:block" />
            <span className="text-primary"> feel effortless</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            We partner with researchers, nonprofits, and mission-driven organizations to create documents that get read, shared, and acted upon.
          </p>
        </motion.div>

        <div className="space-y-8">
          {services.map((s, i) => {
            const styles = accentStyles[s.accent];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${styles.border} ${styles.glow}`}
              >
                <div className={`h-1 w-full ${styles.strip}`} />
                <div className={`flex flex-col ${'image' in s ? 'md:flex-row' : ''}`}>
                  <div className={`p-8 md:p-12 flex flex-col justify-center ${'image' in s ? 'md:w-1/2' : ''}`}>
                    <h3 className="font-display font-extrabold text-xl md:text-2xl mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {s.description}
                    </p>
                    <ul className="space-y-3">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm text-foreground/90">
                          <CheckCircle2 className={`w-4 h-4 ${styles.check} mt-0.5 shrink-0`} />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <a
                        href="#contact"
                        className={`inline-flex items-center gap-2 text-sm font-semibold ${styles.check} group/link`}
                      >
                        Get started
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                  {'image' in s && (
                    <div className="md:w-1/2 flex items-center justify-center p-6 md:p-8">
                      <motion.img
                        src={(s as any).image}
                        alt="Report design mockup showcasing multiple report pages"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full rounded-lg"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
