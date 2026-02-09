import { motion } from "framer-motion";

const projects = [
  { title: "Annual Report Design", category: "Report Design" },
  { title: "Brand Identity System", category: "Graphic Design" },
  { title: "Data Dashboard UI", category: "UI Design" },
  { title: "Social Media Campaign", category: "Social Media" },
  { title: "Healthcare Infographic", category: "Infographic" },
  { title: "E-Commerce Redesign", category: "Website Design" },
];

const Portfolio = () => {
  return (
    <section id="work" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-display font-semibold tracking-wide text-sm mb-4">
            My Work ✦
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-foreground">
            Projects I'm proud of.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Here's a peek at what I've been up to. Upload your own screenshots to make this gallery yours!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative aspect-[4/3] bg-secondary rounded-2xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
            >
              {/* Friendly placeholder pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-4 gap-3 w-2/3 opacity-[0.08]">
                  {Array.from({ length: 12 }).map((_, j) => (
                    <div
                      key={j}
                      className="aspect-square bg-foreground rounded-xl"
                    />
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-card/95 via-card/60 to-transparent">
                <span className="inline-block text-xs font-display font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">
                  {p.category}
                </span>
                <h3 className="font-display font-bold text-foreground">
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
