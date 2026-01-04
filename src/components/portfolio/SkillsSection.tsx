import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Code,
  Database,
  TrendingUp,
  PieChart,
  Cpu,
  LineChart,
  ChevronRight,
} from "lucide-react";

const skillCategories = [
  {
    id: "programming",
    icon: Code,
    title: "Programming & Tools",
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
    skills: [
      { name: "KPI Dashboards", usage: "Real-time performance monitoring" },
      { name: "Market Analytics", usage: "Competitive analysis and trends" },
      { name: "Customer Analytics", usage: "Segmentation and behavior analysis" },
      { name: "PPC Analysis", usage: "Ad performance optimization" },
    ],
  },
  {
    id: "visualization",
    icon: PieChart,
    title: "Visualization",
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
    skills: [
      { name: "A/B Testing", usage: "Experiment design and analysis" },
      { name: "Forecasting", usage: "Time series predictions" },
      { name: "ROI Analysis", usage: "Business impact measurement" },
      { name: "Storytelling", usage: "Data-driven narratives" },
    ],
  },
];

// Fixed heights for the card interior - card height stays constant
const CARD_HEIGHT = 350; // Fixed card height in pixels
const HEADER_HEIGHT = 72; // Icon + title section
const SKILL_COLLAPSED_HEIGHT = 44; // Each skill when collapsed
const SKILL_EXPANDED_HEIGHT = 50; // Each skill when expanded (with usage text)

interface SkillItemProps {
  skill: { name: string; usage: string };
  categoryId: string;
  isExpanded: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const SkillItem = ({ skill, isExpanded, onHoverStart, onHoverEnd }: SkillItemProps) => {
  return (
    <motion.div
      layout
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      animate={{
        height: isExpanded ? SKILL_EXPANDED_HEIGHT : SKILL_COLLAPSED_HEIGHT,
      }}
      transition={{
        height: { type: "spring", stiffness: 400, damping: 30 },
        layout: { type: "spring", stiffness: 400, damping: 30 },
      }}
      className="overflow-hidden cursor-pointer"
    >
      <div
        className={`h-full px-3 py-2 rounded-xl border transition-colors duration-200 ${
          isExpanded
            ? "border-primary/40 bg-primary/10"
            : "border-transparent bg-secondary/50 hover:bg-secondary/80"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-medium text-foreground text-sm">
            {skill.name}
          </span>
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className={`w-4 h-4 transition-colors duration-200 ${
              isExpanded ? "text-primary" : "text-muted-foreground"
            }`} />
          </motion.div>
        </div>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="text-xs text-muted-foreground mt-0 mb-0 leading-relaxed"
            >
              {skill.usage}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

interface SkillCardProps {
  category: typeof skillCategories[0];
  index: number;
  isInView: boolean;
}

const SkillCard = ({ category, index, isInView }: SkillCardProps) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="skill-card group"
      style={{ height: CARD_HEIGHT }}
    >
      {/* Category Header */}
      <div className="flex items-center gap-4 mb-5" style={{ height: HEADER_HEIGHT }}>
        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-primary-foreground bg-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">
          {category.title}
        </h3>
      </div>

      {/* Skills List - Using flex with fixed container */}
      <motion.div 
        layout
        className="flex flex-col gap-3"
        style={{ height: CARD_HEIGHT - HEADER_HEIGHT - 48 }} // 48px for padding
      >
        {category.skills.map((skill) => (
          <SkillItem
            key={skill.name}
            skill={skill}
            categoryId={category.id}
            isExpanded={hoveredSkill === skill.name}
            onHoverStart={() => setHoveredSkill(skill.name)}
            onHoverEnd={() => setHoveredSkill(null)}
          />
        ))}
      </motion.div>

      {/* Decorative glow */}
      <div className="absolute -z-10 top-0 right-0 w-32 h-32 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="py-24 md:py-32 gradient-mesh-bg"
    >
      <div ref={ref} className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6 text-foreground">
            Skills & <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for transforming data into actionable
            business intelligence
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.id}
              category={category}
              index={index}
              isInView={isInView}
            />
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
