import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, BarChart3, Zap } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const storyBlocks = [
    {
      icon: Target,
      title: "The Mission",
      content:
        "Bridging the gap between raw data and strategic decision-making, I transform complex datasets into clear, actionable insights that drive business growth.",
    },
    {
      icon: Lightbulb,
      title: "The Approach",
      content:
        "Combining analytical rigor with business acumen, I don't just analyze data—I translate it into stories that stakeholders understand and act upon.",
    },
    {
      icon: BarChart3,
      title: "The Expertise",
      content:
        "From predictive modeling to dashboard creation, my toolkit spans the full data science spectrum, always with a focus on practical, implementable solutions.",
    },
    {
      icon: Zap,
      title: "The Drive",
      content:
        "Constantly learning and evolving, I stay at the forefront of data science trends to deliver innovative solutions that give businesses a competitive edge.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />

      <div ref={ref} className="section-container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Data Scientist with a{" "}
            <span className="text-gradient">Business Mindset</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I'm Ahsan Jahangir, a Data Science student at Rome Business School,
            passionate about leveraging data to solve real-world business challenges.
          </p>
        </motion.div>

        {/* Story Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {storyBlocks.map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 bg-card rounded-3xl border border-border/50 hover:border-accent/30 hover:shadow-elevated transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center bg-accent/10 rounded-2xl mb-6 group-hover:bg-accent/20 transition-colors">
                <block.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary mb-3">{block.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{block.content}</p>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-3xl">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent/5 rotate-45 group-hover:bg-accent/10 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-3xl border border-border/50"
        >
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { value: "Rome, Italy", label: "Currently Based" },
              { value: "E-Commerce", label: "Industry Focus" },
              { value: "Open to Work", label: "Status" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <p className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {item.value}
                </p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
