import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, TrendingUp, Users, Database } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "E-commerce Data & Performance Analyst",
    company: "Digital Commerce Company",
    period: "2022 - 2023",
    location: "Remote",
    icon: TrendingUp,
    highlights: [
      "Analyzed sales data to identify growth opportunities",
      "Built automated reporting dashboards with 40% time savings",
      "Conducted A/B testing for conversion optimization",
      "Collaborated with marketing for data-driven campaigns",
    ],
    metrics: [
      { label: "Data Points Analyzed", value: "1M+" },
      { label: "Reports Automated", value: "15+" },
    ],
  },
  {
    id: 2,
    role: "Digital Commerce & Analytics Assistant",
    company: "Retail Analytics Firm",
    period: "2021 - 2022",
    location: "Hybrid",
    icon: Database,
    highlights: [
      "Supported customer segmentation analysis",
      "Created weekly performance reports for stakeholders",
      "Assisted in market trend analysis and forecasting",
      "Maintained data quality and documentation",
    ],
    metrics: [
      { label: "Customer Segments", value: "12" },
      { label: "Weekly Reports", value: "50+" },
    ],
  },
  {
    id: 3,
    role: "Product Data Assistant",
    company: "E-Commerce Projects",
    period: "2020 - 2021",
    location: "Remote",
    icon: Users,
    highlights: [
      "Managed product data for multiple catalogs",
      "Ensured data accuracy and consistency",
      "Supported pricing analysis initiatives",
      "Coordinated with cross-functional teams",
    ],
    metrics: [
      { label: "Products Managed", value: "5000+" },
      { label: "Data Accuracy", value: "99.5%" },
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div ref={ref} className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Building expertise through hands-on experience in data analytics and
            e-commerce optimization
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-secondary to-accent/20" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-glow z-10" />

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 md:p-8 bg-card rounded-3xl border border-border/50 hover:border-accent/30 hover:shadow-elevated transition-all duration-500"
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-accent/10 rounded-2xl">
                        <exp.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                        <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                          <span className="px-3 py-1 bg-muted/50 rounded-full">
                            {exp.period}
                          </span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.3 + index * 0.2 + i * 0.05 }}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-border/50">
                      {exp.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="px-4 py-2 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-xl"
                        >
                          <p className="text-lg font-bold text-primary">
                            {metric.value}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
