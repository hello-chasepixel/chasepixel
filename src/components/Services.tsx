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
      "Brand identities, marketing materials, and visual assets that capture attention and communicate your message.",
  },
  {
    icon: FileText,
    title: "Report Design",
    description:
      "Polished, AODA-compliant reports and documents — rigorously checked against accessibility standards.",
  },
  {
    icon: BarChart3,
    title: "Infographic Design",
    description:
      "Complex data transformed into clear, compelling visuals that tell a story at a glance.",
  },
  {
    icon: Layout,
    title: "UI Design",
    description:
      "User-centered interfaces that are intuitive, accessible, and beautifully crafted for web and mobile.",
  },
  {
    icon: Share2,
    title: "Social Media Design",
    description:
      "Scroll-stopping content for every platform — posts, stories, carousels, and campaign graphics.",
  },
  {
    icon: Globe,
    title: "Website Design",
    description:
      "Modern, responsive website designs that balance aesthetics with performance and usability.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
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
          className="mb-16"
        >
          <p className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            What I do best.
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
              className="group bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-3">
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
