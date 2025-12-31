import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Database, TrendingUp, PieChart, Cpu, LineChart } from "lucide-react";

const skillCategories = [
  {
    id: "programming",
    icon: Code,
    title: "Programming & Tools",
    color: "from-accent to-secondary",
    skills: [
      { name: "Python", usage: "Data manipulation, ML models, automation" },
      { name: "Pandas & NumPy", usage: "Data cleaning and numerical analysis" },
      { name: "Scikit-learn", usage: "Machine learning model development" },
      { name: "SQL", usage: "Database queries and data extraction" },
    ],
  },
  {
    id: "analytics",
    icon: TrendingUp,
    title: "Business Analytics",
    color: "from-secondary to-primary",
    skills: [
      { name: "KPI Dashboards", usage: "Real-time performance monitoring" },
      { name: "Market Analytics", usage: "Competitive analysis and trends" },
      { name: "Customer Analytics", usage: "Segmentation and behavior analysis" },
      { name: "PPC Analysis", usage: "Ad performance optimization" },
    ],
  },
  {
    id: "data",
    icon: Database,
    title: "Data Engineering",
    color: "from-primary to-accent",
    skills: [
      { name: "Data Cleaning", usage: "Preprocessing and quality assurance" },
      { name: "ETL Pipelines", usage: "Data extraction and transformation" },
      { name: "EDA", usage: "Exploratory data analysis and insights" },
      { name: "Data Modeling", usage: "Schema design and optimization" },
    ],
  },
  {
    id: "visualization",
    icon: PieChart,
    title: "Visualization",
    color: "from-accent to-primary",
    skills: [
      { name: "Power BI", usage: "Interactive business dashboards" },
      { name: "Matplotlib & Seaborn", usage: "Statistical visualizations" },
      { name: "Plotly", usage: "Interactive web-based charts" },
      { name: "Excel Advanced", usage: "Pivot tables and data analysis" },
    ],
  },
  {
    id: "ml",
    icon: Cpu,
    title: "Machine Learning",
    color: "from-secondary to-accent",
    skills: [
      { name: "Regression Models", usage: "Predictive analytics" },
      { name: "Classification", usage: "Customer segmentation" },
      { name: "Clustering", usage: "Pattern discovery" },
      { name: "Model Evaluation", usage: "Accuracy and performance metrics" },
    ],
  },
  {
    id: "reporting",
    icon: LineChart,
    title: "Reporting & Insights",
    color: "from-primary to-secondary",
    skills: [
      { name: "A/B Testing", usage: "Experiment design and analysis" },
      { name: "Forecasting", usage: "Time series predictions" },
      { name: "ROI Analysis", usage: "Business impact measurement" },
      { name: "Storytelling", usage: "Data-driven narratives" },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/30 to-background">
      <div ref={ref} className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Skills & <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for transforming data into actionable business intelligence
          </p>
        </motion.div>

        {/* Skills Grid - Creative Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-card group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-primary">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    onHoverStart={() => setHoveredSkill(`${category.id}-${skill.name}`)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    className="relative"
                  >
                    <div
                      className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                        hoveredSkill === `${category.id}-${skill.name}`
                          ? "border-accent/50 bg-accent/5"
                          : "border-transparent bg-muted/30"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-primary text-sm">
                          {skill.name}
                        </span>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{
                            width:
                              hoveredSkill === `${category.id}-${skill.name}`
                                ? "auto"
                                : 0,
                          }}
                          className="overflow-hidden"
                        >
                          <span className="text-xs text-accent whitespace-nowrap pl-2">
                            →
                          </span>
                        </motion.div>
                      </div>
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height:
                            hoveredSkill === `${category.id}-${skill.name}`
                              ? "auto"
                              : 0,
                          opacity:
                            hoveredSkill === `${category.id}-${skill.name}` ? 1 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        className="text-xs text-muted-foreground mt-2 overflow-hidden"
                      >
                        {skill.usage}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Element */}
              <div
                className={`absolute -z-10 top-4 right-4 w-24 h-24 rounded-full bg-gradient-to-br ${category.color} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { value: "24+", label: "Technical Skills" },
            { value: "6", label: "Core Domains" },
            { value: "∞", label: "Learning Mindset" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-gradient">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
