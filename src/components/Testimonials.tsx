import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { LetterP, LetterE } from "./Logo";
import FloatingLetter from "./FloatingLetter";

const testimonials = [
  {
    quote: "Working with Natasha Sidi from Chasepixel on a variety of design projects, including our Accelerate Her Future impact report design, slide deck design, and web design, has been an exceptional experience. Natasha approaches every project with remarkable dedication, self-leadership, and outstanding technical expertise. Natasha's ability to collaborate seamlessly with our team always ensures a smooth design process characterized by clear communication, thoughtful feedback integration, and creativity. Her design work consistently captures our brand's essence while going over and beyond to deliver a quality product. Natasha's creative vision, reliability, and collaborative spirit have made her an indispensable partner on this journey. I highly recommend Chasepixel for anyone seeking a talented, versatile, and results-driven designer to bring their vision to life.",
    name: "Dr. Golnaz Golnaraghi",
    role: "Founder, Accelerate Her Future",
  },
  {
    quote: "I'm thrilled to share my experience working with Natasha at Chasepixel on the web design and refresh project for Campfire Kinship website. From the outset, Natasha proved to be an exceptional partner, consistently going above and beyond. She developed a detailed work plan that kept us organized and clearly outlined each phase of the project. Her commitment to understanding my brand was evident as she researched competitors and industry standards to ensure our design was not only visually appealing but also user-centric. Natasha's creative approach resulted in a design that resonated immediately with me. Her perseverance and meticulous attention to detail shone through as she refined the design through several iterations, always proactively addressing any technical issues by coordinating with tech support and exploring solutions independently when necessary. Our meetings were always a highlight thanks to her positive attitude and steadfast commitment to overcoming any challenge. I highly recommend Natasha for her joyous collaboration spirit and exceptional professionalism. She isn't just a web designer; she's a strategic partner who will elevate your brand.",
    name: "Gayathri Shukla",
    role: "Founder, Campfire Kinship",
  },
  {
    quote: "I couldn't be happier with the website that was built for me by Natasha at Chasepixel. From the very beginning, she understood my vision perfectly and brought it to life exactly as I had imagined. The attention to detail was impeccable, and the result was stunning. What impressed me the most was not just her dedication to ensuring my satisfaction, but also her interpersonal skills which make her a delight to work with. Her expertise, responsiveness, and commitment to excellence make her stand out. I highly recommend her services to anyone looking for a brilliant website designer.",
    name: "Shelmina Abji",
    role: "Founder & Author, Show Your Worth",
  },
  {
    quote: "Working with Natasha has allowed us to grow our Purple Sector brand in ways that have exceeded our expectations. Natasha takes care to understand the essence of what it is we are trying to achieve and then makes it a reality with her keen illustration, composition, and branding skills. To add to all her talents, she's an incredibly warm and fun-spirited person who is truly a joy to work with! We would wholeheartedly recommend Natasha!",
    name: "Meredith and Carlos Perez",
    role: "Co-Founders, Purple Sector",
  },
  {
    quote: "I had the pleasure of working with Natasha on several projects, and I am beyond impressed with the results. She designed reports that were not only visually stunning but also accessible and AODA compliant. Her attention to detail and dedication to perfection were evident in every aspect of her work. Additionally, she communicated effectively throughout the entire process and always delivered her work in a timely manner. I highly recommend Natasha for your design needs!",
    name: "Anonymous",
    role: "",
  },
  {
    quote: "Natasha is one of the best in the game. From quality, to creativeness, to delivering work ahead of timelines - she processed our content efficiently and produced results with very few iterations. I cannot recommend her company enough. I'm always happy to be a referral for anyone who is considering hiring her on a project, or recurring basis.",
    name: "Anonymous",
    role: "",
  },
];

const Testimonials = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-card relative overflow-hidden">
      <FloatingLetter className="top-10 right-8 w-24 h-24 text-primary/[0.06]" glow="primary" duration={11} delay={1}>
        <LetterP />
      </FloatingLetter>
      <FloatingLetter className="bottom-12 left-6 w-20 h-20 text-accent/[0.08]" glow="accent" duration={13} delay={4}>
        <LetterE />
      </FloatingLetter>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-acid mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground mb-4">
            What our clients
            <span className="text-primary"> say about us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-background border border-border rounded-2xl p-6 md:p-8 flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/25 mb-4 shrink-0" />
              <p className="text-muted-foreground leading-relaxed font-serif italic text-sm flex-1">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-1 h-10 bg-primary rounded-full" />
                <div>
                  <p className="font-display font-extrabold text-foreground text-sm">{t.name}</p>
                  {t.role && <p className="text-muted-foreground text-xs">{t.role}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
