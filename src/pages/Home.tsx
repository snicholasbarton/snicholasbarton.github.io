import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section } from "../components/ui/Section";
import { Heading, Paragraph, SubHeading } from "../components/ui/Typography";
import { Button } from "../components/ui/Button";
import { AutoCycleCarousel } from "../components/ui/AutoCycleCarousel";
import { posts } from "../content/data/posts";
import { references } from "../content/data/references";
import styles from "./Home.module.css";

export const Home = () => {
  const latestPost = posts[0]; // Assuming posts are sorted by date
  const recommendedPosts = posts.filter((post) => post.recommended);

  return (
    <Section>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroGrid}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroContent}
          >
            <Heading className={styles.heroHeading}>
              Hi, I'm <span className={styles.heroName}>Nicholas Barton</span>.
            </Heading>
            <Paragraph className={styles.heroText}>
              I'm a professional software engineer with experience building
              distributed systems and real-time streaming products. Let's talk
              about how technology can make material changes to real-world
              processes and outcomes.
            </Paragraph>
            <div className={styles.heroActions}>
              <Button asChild>
                <Link to="/resume">Resume</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link to="/blog">Read Blog</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.heroImageContainer}
          >
            <div className={styles.heroPlaceholder}>Photo</div>
          </motion.div>
        </div>
      </div>

      {/* Featured Writing Section */}
      <div className={styles.featuredSection}>
        <SubHeading className={styles.sectionHeading}>
          Featured Writing
        </SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
                Latest Post
              </h3>
              <Link
                to={`/blog/${latestPost.slug}`}
                className={styles.latestPostCard}
              >
                <span className={styles.blogDate}>{latestPost.date}</span>
                <h4 className={styles.blogTitle}>{latestPost.title}</h4>
                <p className={styles.blogExcerpt}>{latestPost.excerpt}</p>
                <span className="text-primary font-medium">Read Article →</span>
              </Link>
            </motion.div>
          )}

          {recommendedPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
                Recommended Reading
              </h3>
              <AutoCycleCarousel
                items={recommendedPosts}
                interval={8000}
                showTimer={false}
                renderItem={(post) => (
                  <Link
                    to={`/blog/${post.slug}`}
                    className={styles.latestPostCard}
                  >
                    <span className={styles.blogDate}>{post.date}</span>
                    <h4 className={styles.blogTitle}>{post.title}</h4>
                    <p className={styles.blogExcerpt}>{post.excerpt}</p>
                    <span className="text-primary font-medium">
                      Read Article →
                    </span>
                  </Link>
                )}
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* Recommendations Section */}
      <div className={styles.recommendationsSection}>
        <SubHeading className={styles.sectionHeading}>
          What People Say
        </SubHeading>
        <div className="max-w-3xl mx-auto">
          <AutoCycleCarousel
            items={references}
            interval={10000}
            showTimer={true}
            renderItem={(ref) => (
              <div className={styles.quoteCard}>
                <p className={styles.quoteText}>"{ref.text}"</p>
                <div>
                  <span className={styles.quoteAuthor}>{ref.author}</span>
                  <span className={styles.quoteRole}>{ref.role}</span>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </Section>
  );
};
