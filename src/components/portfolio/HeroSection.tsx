import { motion } from "framer-motion";
import { Suspense, lazy, useEffect, useState } from "react";
import {
  Database,
  Brain,
  TrendingUp,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const DataSphere = lazy(() => import("./DataSphere"));

const HeroSection = () => {
  const headlineWords = [
    "Transforming",
    "Business",
    "Data",
    "into",
    "Actionable",
    "Insights",
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-background pt-20 flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background motion shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-secondary/10 to-transparent rounded-3xl blur-2xl"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute -top-3 -right-3 w-6 h-6 bg-accent rounded-full shadow-lg"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-2 -left-2 w-4 h-4 bg-secondary rounded-full shadow-md"
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </div>

      {/* 3D Data Sphere */}
      <Suspense fallback={null}>
        <DataSphere />
      </Suspense>

      {/* Main content container */}
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-accent">
                Data Science & Machine Learning
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6"
            >
              Transforming Business Data into{" "}
              <span className="text-accent">Actionable Insights</span>
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Data Science student specializing in machine learning and business
              analytics. I turn complex datasets into strategic decisions that
              drive growth and innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all duration-300"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card border-2 border-border text-primary font-semibold rounded-xl hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative background elements */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-secondary/10 to-transparent rounded-3xl blur-2xl"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Photo container */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-elevated border border-border/50">
                <img
                  src={profilePhoto}
                  alt="Ahsan Jahangir - Data Science Professional"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
              </div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-3 -right-3 w-6 h-6 bg-accent rounded-full shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-4 h-4 bg-secondary rounded-full shadow-md"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className=" bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-wider uppercase">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
