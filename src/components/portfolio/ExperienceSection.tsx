import { mode } from "d3-array";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Timeline dot colors matching the reference design
const dotColors = [
  "bg-emerald-500", // Green
  "bg-orange-500",  // Orange  
  "bg-amber-400",   // Yellow/Gold
];

const experiences = [
  {
    id: 1,
    company: "Digital Commerce Company",
    period: "2022 - 2023",
    mode: "Remote",
    role: "E-commerce Data & Performance Analyst",
    description:
      "Analyzed sales data to identify growth opportunities. Built automated reporting dashboards with 40% time savings. Conducted A/B testing for conversion optimization.",
  },
  {
    id: 2,
    company: "Retail Analytics Firm",
    period: "2021 - 2022",
    mode: "Hybrid",
    role: "Digital Commerce & Analytics Assistant",
    description:
      "Supported customer segmentation analysis. Created weekly performance reports for stakeholders. Assisted in market trend analysis and forecasting.",
  },
  {
    id: 3,
    company: "E-Commerce Projects",
    period: "2020 - 2021",
    mode: "Remote",
    role: "Product Data Assistant",
    description:
      "Managed product data for multiple catalogs. Ensured data accuracy and consistency. Supported pricing analysis initiatives.",
  },
];

interface TimelineItemProps {
  experience: typeof experiences[0];
  index: number;
  isInView: boolean;
  isLast: boolean;
}

const TimelineItem = ({ experience, index, isInView, isLast }: TimelineItemProps) => {
  const dotColor = dotColors[index % dotColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Desktop Layout - 3 column grid */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 lg:gap-12 items-start">
        {/* Left Column - Company & Period */}
        <div className="text-right pr-4 lg:pr-8">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
            className="text-lg lg:text-xl font-bold text-foreground mb-2"
          >
            {experience.company}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
            className="text-sm text-muted-foreground"
          >
            {experience.period}
          </motion.p>
          <motion.h5
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
            className="text-sm text-muted-foreground"
          >
            {experience.mode}
          </motion.h5>
        </div>

        {/* Center Column - Timeline */}
        <div className="flex flex-col items-center relative">
          {/* Timeline dot */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.1, type: "spring", stiffness: 300 }}
            className="relative z-10"
          >
            {/* Outer ring */}
            <div className={`w-5 h-5 lg:w-6 lg:h-6 rounded-full ${dotColor} shadow-lg`}>
              {/* Inner highlight */}
              <div className="absolute top-1 left-1 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white/40 rounded-full" />
            </div>
          </motion.div>

          {/* Connecting line */}
          {!isLast && (
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
              className="w-px h-32 lg:h-40 bg-border origin-top mt-2"
            />
          )}
        </div>

        {/* Right Column - Role & Description */}
        <div className="pl-4 lg:pl-8">
          <motion.h4
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
            className="text-lg lg:text-xl font-bold text-foreground mb-3"
          >
            {experience.role}
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
            className="text-sm lg:text-base text-muted-foreground leading-relaxed"
          >
            {experience.description}
          </motion.p>
        </div>
      </div>

      {/* Mobile Layout - Stacked */}
      <div className="md:hidden">
        <div className="flex gap-4">
          {/* Timeline column */}
          <div className="flex flex-col items-center flex-shrink-0">
            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.15, type: "spring", stiffness: 300 }}
              className="relative z-10"
            >
              <div className={`w-4 h-4 rounded-full ${dotColor} shadow-md`}>
                <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white/40 rounded-full" />
              </div>
            </motion.div>

            {/* Connecting line */}
            {!isLast && (
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                className="w-px flex-1 bg-border origin-top mt-2"
              />
            )}
          </div>

          {/* Content column */}
          <div className="flex-1 pb-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
            >
              <h3 className="text-base font-bold text-foreground mb-0.5">
                {experience.company}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">
                {experience.period}
              </p>
              <h4 className="text-base font-semibold text-foreground mb-2">
                {experience.role}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {experience.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 gradient-mesh-bg opacity-50" />
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 lg:mb-20 text-center lg:text-left"
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 rounded-full text-accent font-medium tracking-wider uppercase text-sm mb-4"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Experience
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
            Building expertise through hands-on experience in data analytics and
            e-commerce optimization
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={exp.id} 
              experience={exp} 
              index={index} 
              isInView={isInView}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;