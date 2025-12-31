import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Database, BarChart3, Globe, TrendingDown } from "lucide-react";

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
    insights: [
      "30% decrease in forest area in tropical regions",
      "Correlation between GDP and forest preservation",
      "Top 10 countries driving reforestation efforts",
    ],
    icon: Globe,
    featured: true,
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
    insights: [
      "85% accuracy in 30-day sales predictions",
      "Identified seasonal patterns for key products",
      "Reduced overstock costs by 25%",
    ],
    icon: TrendingDown,
    featured: true,
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
    insights: [
      "Identified 5 distinct customer segments",
      "Increased email campaign CTR by 40%",
      "Optimized retention strategies per segment",
    ],
    icon: BarChart3,
    featured: false,
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
    insights: [
      "Automated weekly performance reports",
      "Identified underperforming keywords",
      "15% improvement in ROAS",
    ],
    icon: Database,
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background"
    >
      <div ref={ref} className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world data science projects showcasing analytical thinking and
            business impact
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-card rounded-3xl border border-border/50 overflow-hidden hover:border-accent/30 hover:shadow-elevated transition-all duration-500"
              >
                {/* Project Visual */}
                <div className="relative h-48 bg-gradient-to-br from-accent/10 via-secondary/10 to-primary/10 flex items-center justify-center">
                  <span className="text-7xl">{project.image}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-accent/10 rounded-xl">
                      <project.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Dataset: {project.dataset}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Insights Preview */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedProject === project.id ? "auto" : 0,
                      opacity: expandedProject === project.id ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-sm font-medium text-primary mb-3">
                        Key Insights:
                      </p>
                      <ul className="space-y-2">
                        {project.insights.map((insight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1 h-1 bg-accent rounded-full mt-2" />
                            {insight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4">
                    <button
                      onClick={() =>
                        setExpandedProject(
                          expandedProject === project.id ? null : project.id
                        )
                      }
                      className="text-sm font-medium text-accent hover:text-primary transition-colors"
                    >
                      {expandedProject === project.id
                        ? "Show Less"
                        : "View Insights →"}
                    </button>
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-card rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-soft transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{project.image}</span>
                  <div className="flex-1">
                    <h4 className="font-bold text-primary mb-2">{project.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs bg-muted/50 text-muted-foreground rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
