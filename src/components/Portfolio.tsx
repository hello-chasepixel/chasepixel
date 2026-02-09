import { motion } from "framer-motion";

const projects = [
  {
    title: "Annual Report Design",
    category: "Report Design",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Brand Identity System",
    category: "Graphic Design",
    color: "from-accent/20 to-accent/5",
  },
  {
    title: "Data Dashboard UI",
    category: "UI Design",
    color: "from-primary/15 to-primary/5",
  },
  {
    title: "Social Media Campaign",
    category: "Social Media",
    color: "from-accent/15 to-accent/5",
  },
  {
    title: "Healthcare Infographic",
    category: "Infographic",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "E-Commerce Redesign",
    category: "Website Design",
    color: "from-accent/20 to-accent/5",
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            Selected work.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg">
            A curated selection of projects across various disciplines. Upload your own screenshots to showcase here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative aspect-[4/3] bg-gradient-to-br rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-colors cursor-pointer"
              style={{}}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.color}`}
              />
              {/* Placeholder pattern */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="grid grid-cols-6 gap-2 w-3/4">
                  {Array.from({ length: 24 }).map((_, j) => (
                    <div
                      key={j}
                      className="aspect-square bg-foreground rounded-sm"
                    />
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                <span className="text-xs text-primary font-display font-medium tracking-wider uppercase">
                  {p.category}
                </span>
                <h3 className="font-display font-semibold text-lg mt-1">
                  {p.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
