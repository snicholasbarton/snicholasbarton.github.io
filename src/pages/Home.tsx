import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Heading, SubHeading, Paragraph } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import styles from './Home.module.css';

interface TimelineSubItem {
  subtitle: string;
  date: string;
  description: string;
}

interface TimelineItemProps {
  title: string;
  icon: React.ReactNode;
  items: TimelineSubItem[];
}

const TimelineItem = ({ title, icon, items }: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={styles.timelineItem}
    >
      <div className={styles.timelineIconContainer}>
        {icon}
      </div>

      <SubHeading className={`${styles.timelineTitle} mb-4`}>{title}</SubHeading>

      <div className="space-y-6 mt-4">
        {items.map((item, index) => (
          <div key={index}>
            <div className={styles.timelineHeader}>
              <div className={styles.timelineSubtitle}>{item.subtitle}</div>
              <span className={styles.timelineDate}>{item.date}</span>
            </div>
            <Paragraph className={styles.timelineDescription}>
              {item.description}
            </Paragraph>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const SkillPill = ({ skill }: { skill: string }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    className={styles.skillPill}
  >
    {skill}
  </motion.span>
);

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
            I'm a professional software engineer passionate about building scalable web applications and exploring new technologies.
          </Paragraph>
          <div className={styles.heroActions}>
            <Button
              onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Resume
            </Button>
            <Button asChild variant="secondary">
              <Link to="/blog">
                Read Blog
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Resume Section */}
      <div id="resume" className={styles.resumeSection}>
        <div className={styles.sectionBlock}>
          <SubHeading className={styles.experienceHeading}>
            <Briefcase className={styles.experienceIcon} /> Experience
          </SubHeading>
          <div className="space-y-2">
            <TimelineItem
              title="Tech Corp Inc."
              icon={<Briefcase size={16} />}
              items={[
                {
                  subtitle: "Senior Software Engineer",
                  date: "2021 - Present",
                  description: "Led the development of a high-traffic e-commerce platform. Improved site performance by 40% and mentored junior developers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                  subtitle: "Software Engineer",
                  date: "2019 - 2021",
                  description: "Collaborated with cross-functional teams to design and implement new features. Optimized database queries and improved application response times."
                }
              ]}
            />
            <TimelineItem
              title="Startup Solutions"
              icon={<Briefcase size={16} />}
              items={[
                {
                  subtitle: "Software Engineer",
                  date: "2018 - 2019",
                  description: "Full-stack development using React and Node.js. Implemented real-time features using WebSockets. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }
              ]}
            />
          </div>
        </div>

        <div className={styles.sectionBlock}>
          <SubHeading className={styles.experienceHeading}>
            <GraduationCap className={styles.experienceIcon} /> Education
          </SubHeading>
          <div className="space-y-2">
            <TimelineItem
              title="University of Technology"
              icon={<GraduationCap size={16} />}
              items={[
                {
                  subtitle: "BS Computer Science",
                  date: "2014 - 2018",
                  description: "Graduated with Honors. Focused on Distributed Systems and Artificial Intelligence."
                }
              ]}
            />
          </div>
        </div>

        <div className={styles.sectionBlock}>
          <SubHeading className={styles.experienceHeading}>
            <Code className={styles.experienceIcon} /> Skills
          </SubHeading>
          <div className={styles.skillsContainer}>
            {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "GraphQL", "Tailwind CSS", "PostgreSQL", "Redis"].map(skill => (
              <SkillPill key={skill} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
