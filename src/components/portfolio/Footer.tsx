import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Listen to scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-gradient mb-2">AJ</p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ahsan Jahangir. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/Ahsan-Jahanagir", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/ahsan-jahangir-", label: "LinkedIn" },
              { icon: Mail, href: "mailto:ahsanjahangir.eu@gmail.com", label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-card border border-border/50 rounded-xl text-muted-foreground hover:text-primary hover:border-accent/30 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
  className="fixed bottom-6 right-6 flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors z-50"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            Built with passion for data and design. Crafted to showcase the
            intersection of analytics and creativity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
