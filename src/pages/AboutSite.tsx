import { motion } from "framer-motion";
import { Layers, Zap, Server, Globe } from "lucide-react";
import { Card } from "../components/ui/Card";
import { Section } from "../components/ui/Section";
import { Heading, SubHeading, Paragraph } from "../components/ui/Typography";
import styles from "./AboutSite.module.css";

export const AboutSite = () => {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heading>About This Site</Heading>
        <Paragraph className={styles.aboutText}>
          This portfolio website serves as both a showcase of my professional
          journey and a playground for experimenting with modern web
          technologies. It is designed to be performant, accessible, and easily
          maintainable.
        </Paragraph>

        <div className={styles.grid}>
          <Card>
            <div className={styles.cardHeader}>
              <Zap className={styles.cardIconZap} size={24} />
              <SubHeading className={styles.cardTitle}>Vite & React</SubHeading>
            </div>
            <Paragraph className={styles.cardText}>
              Built with Vite for lightning-fast HMR and bundling, and React for
              a declarative component-based architecture.
            </Paragraph>
          </Card>

          <Card>
            <div className={styles.cardHeader}>
              <Layers className={styles.cardIconLayers} size={24} />
              <SubHeading className={styles.cardTitle}>Tailwind CSS</SubHeading>
            </div>
            <Paragraph className={styles.cardText}>
              Styled using utility-first CSS for rapid development and
              consistent design tokens.
            </Paragraph>
          </Card>

          <Card>
            <div className={styles.cardHeader}>
              <Server className={styles.cardIconServer} size={24} />
              <SubHeading className={styles.cardTitle}>MDX</SubHeading>
            </div>
            <Paragraph className={styles.cardText}>
              Blog posts are authored in MDX, allowing seamless embedding of
              interactive React components within Markdown content.
            </Paragraph>
          </Card>

          <Card>
            <div className={styles.cardHeader}>
              <Globe className={styles.cardIconGlobe} size={24} />
              <SubHeading className={styles.cardTitle}>GitHub Pages</SubHeading>
            </div>
            <Paragraph className={styles.cardText}>
              Hosted statically on GitHub Pages, utilizing Hash Routing to
              ensure compatibility with static file serving.
            </Paragraph>
          </Card>
        </div>
      </motion.div>
    </Section>
  );
};
