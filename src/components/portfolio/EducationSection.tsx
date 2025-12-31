import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "International Master's in Data Science",
    institution: "Rome Business School",
    location: "Rome, Italy",
    period: "2023 - 2024",
    status: "current",
    description:
      "Advanced studies in machine learning, big data analytics, and business intelligence with a focus on practical applications in the corporate world.",
    highlights: [
      "Machine Learning & AI",
      "Big Data Analytics",
      "Business Intelligence",
      "Statistical Modeling",
    ],
  },
  {
    id: 2,
    degree: "Bachelor of Engineering in Chemical Engineering",
    institution: "University of Engineering",
    location: "Pakistan",
    period: "2016 - 2020",
    status: "completed",
    description:
      "Strong foundation in analytical thinking, process optimization, and quantitative problem-solving that translates directly to data science applications.",
    highlights: [
      "Process Optimization",
      "Statistical Analysis",
      "Research Methodology",
      "Technical Documentation",
    ],
  },
];

const certifications = [
  { name: "Python for Data Analysis", provider: "DataCamp", year: "2023" },
  { name: "Machine Learning Fundamentals", provider: "Coursera", year: "2023" },
  { name: "Power BI Desktop", provider: "Microsoft", year: "2022" },
  { name: "Advanced Excel for Analytics", provider: "LinkedIn Learning", year: "2022" },
  { name: "SQL for Data Science", provider: "DataCamp", year: "2022" },
  { name: "Statistical Analysis with Python", provider: "Udemy", year: "2023" },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 md:py-32">
      <div ref={ref} className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Background
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A strong academic foundation combined with continuous professional
            development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Education Timeline */}
          <div className="lg:col-span-3">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold text-primary mb-8 flex items-center gap-3"
            >
              <GraduationCap className="w-6 h-6 text-accent" />
              Academic Journey
            </motion.h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="relative pl-8 border-l-2 border-accent/30"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-background ${
                      edu.status === "current"
                        ? "bg-accent animate-pulse"
                        : "bg-secondary"
                    }`}
                  />

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="p-6 bg-card rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-soft transition-all duration-300"
                  >
                    {/* Status Badge */}
                    {edu.status === "current" && (
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-4">
                        Currently Pursuing
                      </span>
                    )}

                    <h4 className="text-lg font-bold text-primary mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-accent font-medium mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span>{edu.location}</span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      {edu.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 text-xs bg-muted/50 text-muted-foreground rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold text-primary mb-8 flex items-center gap-3"
            >
              <Award className="w-6 h-6 text-accent" />
              Certifications
            </motion.h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="group p-4 bg-card rounded-xl border border-border/50 hover:border-accent/30 hover:shadow-soft transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <BookOpen className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-medium text-primary text-sm truncate">
                        {cert.name}
                      </h5>
                      <p className="text-xs text-muted-foreground">
                        {cert.provider} • {cert.year}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-8 p-6 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl border border-border/50"
            >
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">6+</p>
                  <p className="text-xs text-muted-foreground">Certifications</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">2024</p>
                  <p className="text-xs text-muted-foreground">Master's Grad</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
