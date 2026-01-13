import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Heading, Paragraph} from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import styles from './Home.module.css';

export const Home = () => {
  
  return (
    <Section>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading className={styles.heroHeading}>
            Hi, I'm <span className={styles.heroName}>Nicholas Barton</span>.
          </Heading>
          <Paragraph className={styles.heroText}>
            I'm a devoted husband, professional software engineer, and avid outdoorsman. Let's talk about how software and technology can drive real-world outcomes and positive change.
          </Paragraph>
          <div className={styles.heroActions}>
            <Button>
              <Link to="/resume">
                Resume
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/blog">
                Read Blog
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
