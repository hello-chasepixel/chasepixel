import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Chasepixel transformed our annual report into something our stakeholders actually enjoy reading. The AODA compliance was flawless.",
    name: "Sarah M.",
    role: "Communications Director",
  },
  {
    quote:
      "The infographics were exactly what we needed — complex data made beautifully simple. Turnaround was impressively fast.",
    name: "James K.",
    role: "Marketing Manager",
  },
  {
    quote:
      "Our social media engagement doubled after the redesign. The consistency across all platforms made a huge difference.",
    name: "Priya D.",
    role: "Brand Strategist",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            Kind words.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-8 flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/40 mb-6" />
              <p className="text-foreground leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>
              <div>
                <p className="font-display font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
