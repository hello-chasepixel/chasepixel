import { motion } from "framer-motion";
import {
  Palette,
  FileText,
  BarChart3,
  Layout,
  Share2,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Logos, brand materials, and visual goodies that make your brand feel like you.",
  },
  {
    icon: FileText,
    title: "Report Design",
    description:
      "Beautiful, AODA-compliant reports checked against a thorough accessibility checklist. Everyone deserves to read your work.",
  },
  {
    icon: BarChart3,
    title: "Infographic Design",
    description:
      "Complex data turned into friendly, digestible visuals — because numbers deserve a glow-up.",
  },
  {
    icon: Layout,
    title: "UI Design",
    description:
      "Intuitive, accessible interfaces designed with real people in mind. No confusing menus, promise.",
  },
  {
    icon: Share2,
    title: "Social Media Design",
    description:
      "Thumb-stopping posts, stories, and carousels that make people pause mid-scroll.",
  },
  {
    icon: Globe,
    title: "Website Design",
    description:
      "Websites that look great, load fast, and actually make visitors want to stick around.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-display font-semibold tracking-wide text-sm mb-4">
            What I Do ✦
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-foreground">
            A little bit of everything,
            <br />
            done with a lot of care.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={itemVariants}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-3 text-foreground">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
