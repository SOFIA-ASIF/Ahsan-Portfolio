import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Mail, Phone, Linkedin, Send, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Rome, Italy",
      href: null,
    },
    {
      icon: Mail,
      label: "Email",
      value: "ahsanjahangir.eu@gmail.com",
      href: "mailto:ahsanjahangir.eu@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+39) 329 004 7650",
      href: "tel:+393290047650",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ahsan-jahangir-",
      href: "https://www.linkedin.com/in/ahsan-jahangir-/",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-gradient-to-l from-accent/10 to-transparent blur-3xl" />

      <div ref={ref} className="section-container relative px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-accent font-medium tracking-wider uppercase text-xs sm:text-sm">
            Get in Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 mb-4 sm:mb-6">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Interested in collaboration, have a project in mind, or just want to
            connect? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4 sm:space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl sm:rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-soft transition-all duration-300 active:scale-[0.98]"
                  >
                    <div className="p-2.5 sm:p-3 bg-accent/10 rounded-lg sm:rounded-xl group-hover:bg-accent/20 transition-colors shrink-0">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-sm sm:text-base text-primary group-hover:text-accent transition-colors truncate">
                        {item.value}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                  </a>
                ) : (
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl sm:rounded-2xl border border-border/50">
                    <div className="p-2.5 sm:p-3 bg-accent/10 rounded-lg sm:rounded-xl shrink-0">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-sm sm:text-base text-primary truncate">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="p-4 sm:p-6 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-xl sm:rounded-2xl border border-accent/20"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse shrink-0" />
                <span className="font-semibold text-sm sm:text-base text-primary">
                  Available for Opportunities
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Currently seeking Data Science internships and entry-level
                positions. Open to remote and on-site roles in Europe.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-4 sm:p-6 md:p-8 bg-card rounded-2xl sm:rounded-3xl border border-border/50 shadow-soft"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                {/* Name */}
                <div className="relative">
                  <label
                    className={`absolute left-3 sm:left-4 transition-all duration-200 pointer-events-none ${
                      focusedField === "name" || formState.name
                        ? "-top-2 text-xs bg-card px-2 text-accent"
                        : "top-3.5 sm:top-4 text-xs sm:text-sm text-muted-foreground"
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-3 sm:px-4 pt-4 sm:pt-5 pb-2.5 sm:pb-3 bg-transparent border border-border rounded-lg sm:rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm sm:text-base"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label
                    className={`absolute left-3 sm:left-4 transition-all duration-200 pointer-events-none ${
                      focusedField === "email" || formState.email
                        ? "-top-2 text-xs bg-card px-2 text-accent"
                        : "top-3.5 sm:top-4 text-xs sm:text-sm text-muted-foreground"
                    }`}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-3 sm:px-4 pt-4 sm:pt-5 pb-2.5 sm:pb-3 bg-transparent border border-border rounded-lg sm:rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="relative mb-4 sm:mb-6">
                <label
                  className={`absolute left-3 sm:left-4 transition-all duration-200 pointer-events-none ${
                    focusedField === "subject" || formState.subject
                      ? "-top-2 text-xs bg-card px-2 text-accent"
                      : "top-3.5 sm:top-4 text-xs sm:text-sm text-muted-foreground"
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-3 sm:px-4 pt-4 sm:pt-5 pb-2.5 sm:pb-3 bg-transparent border border-border rounded-lg sm:rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm sm:text-base"
                />
              </div>

              {/* Message */}
              <div className="relative mb-6 sm:mb-8">
                <label
                  className={`absolute left-3 sm:left-4 transition-all duration-200 pointer-events-none ${
                    focusedField === "message" || formState.message
                      ? "-top-2 text-xs bg-card px-2 text-accent"
                      : "top-3.5 sm:top-4 text-xs sm:text-sm text-muted-foreground"
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  className="w-full px-3 sm:px-4 pt-4 sm:pt-5 pb-2.5 sm:pb-3 bg-transparent border border-border rounded-lg sm:rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none text-sm sm:text-base"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg sm:rounded-xl font-medium text-sm sm:text-base shadow-elevated hover:shadow-glow transition-all duration-300"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
