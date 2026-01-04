import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Languages, Brain } from "lucide-react";

const softSkills = [
  { name: "Analytical Thinking", connected: ["Problem Solving", "Critical Thinking"] },
  { name: "Problem Solving", connected: ["Analytical Thinking", "Decision Making"] },
  { name: "Communication", connected: ["Team Collaboration", "Presentation"] },
  { name: "Team Collaboration", connected: ["Communication", "Leadership"] },
  { name: "Critical Thinking", connected: ["Analytical Thinking", "Decision Making"] },
  { name: "Decision Making", connected: ["Problem Solving", "Critical Thinking"] },
  { name: "Presentation", connected: ["Communication", "Storytelling"] },
  { name: "Storytelling", connected: ["Presentation", "Communication"] },
  { name: "Leadership", connected: ["Team Collaboration", "Decision Making"] },
  { name: "Adaptability", connected: ["Problem Solving", "Learning Agility"] },
  { name: "Learning Agility", connected: ["Adaptability", "Critical Thinking"] },
  { name: "Attention to Detail", connected: ["Analytical Thinking", "Quality Focus"] },
];

const languages = [
  { name: "English", level: "Professional", flag: "🇬🇧" },
  { name: "Urdu", level: "Native", flag: "🇵🇰" },
  // { name: "Italian", level: "Intermediate", flag: "🇮🇹" },
  { name: "Hindi", level: "Conversational", flag: "🇮🇳" },
];

const SoftSkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div ref={ref} className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Personal Strengths
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Soft Skills & <span className="text-gradient">Languages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond technical expertise, these interpersonal skills drive effective
            collaboration and communication
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Soft Skills Node Network */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <Brain className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold text-primary">Core Competencies</h3>
            </motion.div>

            {/* Skills as Interactive Tags */}
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="group relative"
                >
                  <div className="px-5 py-3 bg-card border border-border/50 rounded-2xl hover:border-accent/50 hover:shadow-glow transition-all duration-300 cursor-pointer">
                    <span className="font-medium text-primary text-sm">
                      {skill.name}
                    </span>
                  </div>

                  {/* Connection Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-primary text-primary-foreground text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"
                  >
                    Connects with: {skill.connected.join(", ")}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-primary" />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Visual Network (Decorative) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-8 p-6 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-3xl border border-border/30"
            >
              <p className="text-sm text-muted-foreground text-center">
                💡 <span className="font-medium">Interconnected Skills:</span> Each
                competency enhances others, creating a synergistic professional
                profile optimized for data-driven roles.
              </p>
            </motion.div>
          </div>

          {/* Languages */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <Languages className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold text-primary">Languages</h3>
            </motion.div>

            <div className="space-y-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-soft transition-all duration-300"
                >
                  <span className="text-3xl">{lang.flag}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-primary">{lang.name}</p>
                    <p className="text-sm text-muted-foreground">{lang.level}</p>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      lang.level === "Native"
                        ? "bg-accent/20 text-accent"
                        : lang.level === "Professional"
                        ? "bg-secondary/20 text-secondary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {lang.level}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Global Mindset */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="mt-8 p-6 bg-card rounded-2xl border border-border/50 text-center"
            >
              <p className="text-4xl mb-3">🌍</p>
              <p className="font-semibold text-primary mb-1">Global Mindset</p>
              <p className="text-sm text-muted-foreground">
                Comfortable working with international teams across time zones and
                cultures
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftSkillsSection;
