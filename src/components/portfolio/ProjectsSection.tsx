import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { ExternalLink, Github, Database, BarChart3, Globe, TrendingDown, ChevronRight, ChevronDown, ChevronUp, X, CheckCircle2, Lightbulb, Target } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "World Bank Forest Area Analysis",
    description:
      "Comprehensive analysis of global forest coverage trends using World Bank open data. Identified key deforestation patterns and provided data-driven recommendations for environmental policy.",
    image: "🌲",
    tags: ["Python", "Pandas", "Data Visualization", "EDA"],
    dataset: "World Bank Open Data",
    problem: "Understanding global deforestation patterns",
    approach: "Applied time-series analysis and geospatial visualization to uncover trends across 200+ countries over 30 years.",
    insights: [
      "30% decrease in forest area in tropical regions",
      "Correlation between GDP and forest preservation",
      "Top 10 countries driving reforestation efforts",
    ],
    metrics: [
      { label: "Countries Analyzed", value: "200+" },
      { label: "Years of Data", value: "30" },
      { label: "Policy Recommendations", value: "12" },
    ],
    icon: Globe,
    featured: true,
    size: "medium",
  },
  {
    id: 2,
    title: "E-commerce Sales Forecasting",
    description:
      "Built predictive models to forecast monthly sales for an e-commerce platform, enabling better inventory management and marketing budget allocation.",
    image: "📈",
    tags: ["Scikit-learn", "Time Series", "Regression", "Python"],
    dataset: "Proprietary E-commerce Data",
    problem: "Optimizing inventory and marketing spend",
    approach: "Implemented ARIMA and Prophet models with ensemble techniques for robust forecasting.",
    insights: [
      "85% accuracy in 30-day sales predictions",
      "Identified seasonal patterns for key products",
      "Reduced overstock costs by 25%",
    ],
    metrics: [
      { label: "Prediction Accuracy", value: "85%" },
      { label: "Cost Reduction", value: "25%" },
      { label: "Forecast Horizon", value: "30 days" },
    ],
    icon: TrendingDown,
    featured: true,
    size: "medium",
  },
  {
    id: 3,
    title: "Customer Segmentation Dashboard",
    description:
      "Interactive Power BI dashboard for customer segmentation analysis, enabling marketing teams to create targeted campaigns based on purchasing behavior.",
    image: "👥",
    tags: ["Power BI", "SQL", "Clustering", "RFM Analysis"],
    dataset: "Customer Transaction Data",
    problem: "Improving marketing campaign effectiveness",
    approach: "Applied K-Means clustering with RFM analysis to identify distinct customer personas.",
    insights: [
      "Identified 5 distinct customer segments",
      "Increased email campaign CTR by 40%",
      "Optimized retention strategies per segment",
    ],
    metrics: [
      { label: "Segments Found", value: "5" },
      { label: "CTR Increase", value: "40%" },
      { label: "Campaigns Optimized", value: "15" },
    ],
    icon: BarChart3,
    featured: true,
    size: "medium",
  },
  {
    id: 4,
    title: "PPC Performance Analyzer",
    description:
      "Automated analysis tool for pay-per-click advertising campaigns, providing actionable insights on keyword performance and budget optimization.",
    image: "🎯",
    tags: ["Python", "APIs", "Automation", "Reporting"],
    dataset: "Google Ads API",
    problem: "Maximizing advertising ROI",
    approach: "Built ETL pipeline with automated reporting and anomaly detection for ad spend.",
    insights: [
      "Automated weekly performance reports",
      "Identified underperforming keywords",
      "15% improvement in ROAS",
    ],
    metrics: [
      { label: "ROAS Improvement", value: "15%" },
      { label: "Hours Saved/Week", value: "8" },
      { label: "Campaigns Managed", value: "25" },
    ],
    icon: Database,
    featured: false,
    size: "medium",
  },
  
];

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  dataset: string;
  problem: string;
  approach: string;
  insights: string[];
  metrics: { label: string; value: string }[];
  icon: React.ElementType;
  featured: boolean;
  size: string;
}

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-card border border-border rounded-2xl sm:rounded-3xl shadow-elevated"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 sm:p-6 bg-card/95 backdrop-blur-sm border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 bg-accent/10 rounded-xl">
              <project.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-primary">{project.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{project.dataset}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-6">
          {/* Metrics */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="text-center p-3 sm:p-4 bg-muted/30 rounded-xl sm:rounded-2xl">
                <p className="text-xl sm:text-2xl font-bold text-accent">{metric.value}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* Problem */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary">
              <Target className="w-4 h-4 text-accent" />
              <span className="font-semibold text-sm sm:text-base">Problem</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground pl-6">{project.problem}</p>
          </div>

          {/* Approach */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary">
              <Lightbulb className="w-4 h-4 text-accent" />
              <span className="font-semibold text-sm sm:text-base">Approach</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground pl-6">{project.approach}</p>
          </div>

          {/* Key Insights */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span className="font-semibold text-sm sm:text-base">Key Insights</span>
            </div>
            <ul className="space-y-2 pl-6">
              {project.insights.map((insight, i) => (
                <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                  {insight}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-accent/10 text-accent rounded-full border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/50">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium text-sm sm:text-base"
            >
              <Github className="w-4 h-4" />
              View Code
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 border border-border hover:border-accent/50 text-primary rounded-xl font-medium text-sm sm:text-base transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index, isInView, onSelect }: { project: Project; index: number; isInView: boolean; onSelect: () => void }) => {
  const isLarge = project.size === "small";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      onClick={onSelect}
      className={`group relative bg-card rounded-2xl sm:rounded-3xl border border-border/50 overflow-hidden hover:border-accent/30 hover:shadow-elevated transition-all duration-500 cursor-pointer ${
        isLarge ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Visual Header */}
      <div className={`relative bg-gradient-to-br from-accent/10 via-secondary/10 to-primary/10 flex items-center justify-center ${
        isLarge ? "h-32 sm:h-40 md:h-48" : "h-24 sm:h-32"
      }`}>
        <span className={`${isLarge ? "text-5xl sm:text-6xl md:text-7xl" : "text-4xl sm:text-5xl"}`}>{project.image}</span>
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 px-2 sm:px-3 py-1 bg-accent/90 text-accent-foreground text-[10px] sm:text-xs font-medium rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`${isLarge ? "p-4 sm:p-6 md:p-8" : "p-4 sm:p-5"}`}>
        <div className="flex items-start gap-3 mb-3">
          <div className={`${isLarge ? "p-2 sm:p-2.5" : "p-1.5 sm:p-2"} bg-accent/10 rounded-lg sm:rounded-xl shrink-0`}>
            <project.icon className={`${isLarge ? "w-4 h-4 sm:w-5 sm:h-5" : "w-4 h-4"} text-accent`} />
          </div>
          <div className="min-w-0">
            <h3 className={`${isLarge ? "text-lg sm:text-xl" : "text-base sm:text-lg"} font-bold text-primary truncate`}>
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground truncate">{project.dataset}</p>
          </div>
        </div>

        <p className={`text-muted-foreground mb-4 ${isLarge ? "line-clamp-3 text-sm sm:text-base" : "line-clamp-2 text-xs sm:text-sm"}`}>
          {project.description}
        </p>

        {/* Metrics Preview - Only on large cards */}
        {isLarge && (
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="text-center p-2 sm:p-3 bg-muted/30 rounded-lg sm:rounded-xl">
                <p className="text-base sm:text-lg font-bold text-accent">{metric.value}</p>
                <p className="text-[9px] sm:text-xs text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {(isLarge ? project.tags : project.tags.slice(0, 3)).map((tag) => (
            <span
              key={tag}
              className={`px-2 sm:px-3 py-0.5 sm:py-1 font-medium bg-muted/50 text-muted-foreground rounded-full ${
                isLarge ? "text-[10px] sm:text-xs" : "text-[9px] sm:text-xs"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-border/50">
          <span className="text-xs sm:text-sm font-medium text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
            View Case Study
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </span>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 sm:p-2 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 sm:p-2 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const INITIAL_VISIBLE = 3;
const INCREMENT = 3;

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const totalProjects = projects.length;
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < totalProjects;
  const canShowLess = visibleCount > INITIAL_VISIBLE;

  const handleShowMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + INCREMENT, totalProjects));
  }, [totalProjects]);

  const handleShowLess = useCallback(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, []);

  const remainingCount = totalProjects - visibleCount;

  return (
    <>
      <section
        id="projects"
        className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background"
      >
        <div ref={ref} className="section-container px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <span className="text-accent font-medium tracking-wider uppercase text-xs sm:text-sm">
              Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 mb-4 sm:mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Real-world data science projects showcasing analytical thinking and
              business impact
            </p>
          </motion.div>

          {/* Bento Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index >= visibleCount - INCREMENT ? (index - (visibleCount - INCREMENT)) * 0.1 : 0,
                    layout: { duration: 0.4 }
                  }}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    isInView={isInView}
                    onSelect={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Show More / Show Less Buttons */}
          {(hasMoreProjects || canShowLess) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center gap-6 mt-8 sm:mt-12"
            >
              {canShowLess && (
                <button
                  onClick={handleShowLess}
                  aria-label="Collapse to show only first 3 projects"
                  className="group flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
                >
                  <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                  <span className="relative">
                    Show Less
                    <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                  </span>
                </button>
              )}
              
              {hasMoreProjects && (
                <button
                  onClick={handleShowMore}
                  aria-label={`Show ${Math.min(INCREMENT, remainingCount)} more project${remainingCount === 1 ? '' : 's'}`}
                  className="group flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
                >
                  <span className="relative">
                    Show More
                    <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                </button>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsSection;