import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { cn } from "../../lib/utils";
import styles from "./TableOfContents.module.css";

interface TableOfContentsProps {
  sections: { id: string; label: string }[];
  isExpanded: boolean;
  onToggle: (expanded: boolean) => void;
}

export const TableOfContents = ({ sections, isExpanded, onToggle }: TableOfContentsProps) => {
  const [activeSection, setActiveSection] = useState<string>("");

  // Intersection Observer to track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-10% 0px -80% 0px", // Trigger when section is near top
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        // Offset for sticky header (h-16 = 64px) + padding
        const y = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
        // Update active manually for instant feedback
        setActiveSection(id);
    }
  };

  return (
    <div className={styles.tocContainer}>
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="expanded"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={styles.tocWrapper}
          >
            <div className={styles.tocContent}>
              <div className={styles.tocHeader}>
                <span className={styles.tocTitle}>Contents</span>
                <button
                  onClick={() => onToggle(false)}
                  className={styles.collapseButton}
                  aria-label="Collapse Table of Contents"
                >
                  <PanelLeftClose size={18} />
                </button>
              </div>
              <nav className={styles.tocList}>
                {sections.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => handleScrollTo(e, id)}
                    className={cn(
                      styles.tocLink,
                      activeSection === id && styles.tocLinkActive
                    )}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="collapsed"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.edgeContainer}
            onClick={() => onToggle(true)}
            role="button"
            aria-label="Expand Table of Contents"
          >
            <PanelLeftOpen size={20} className={styles.edgeIcon} />
            <span className={styles.edgeText}>Contents</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
