import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Expand } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const ResizeIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide after 10 seconds automatically
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    const handleResize = () => {
      // If user starts resizing, maybe hide it then too?
      // Or just let it serve its purpose.
      // Let's hide it if the window width changes significantly (user acted on it)
      setIsVisible(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className={styles.indicator}
          onClick={() => setIsVisible(false)}
        >
          <div className={styles.indicatorIcon}>
            <Expand size={24} />
          </div>
          <div className={styles.indicatorTextContainer}>
            <span className={styles.indicatorTitle}>Try resizing!</span>
            <span className={styles.indicatorSubtitle}>
              See the layout adapt to your screen.
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <ResizeIndicator />
      <Footer />
    </div>
  );
};
