import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Code,
  Megaphone,
  UserRound,
} from "lucide-react";
import { Section } from "../components/ui/Section";
import {
  SubHeading,
  Paragraph,
  UnorderedList,
  ListItem,
  Link,
} from "../components/ui/Typography";
import styles from "./Resume.module.css";
import { Tooltip } from "../components/ui/Tooltip";

interface TimelineSubItem {
  subtitle: string;
  date: string;
  description: React.ReactNode;
}

interface TimelineItemProps {
  title: string;
  icon: React.ReactNode;
  subItems: TimelineSubItem[];
}

const TimelineItem = ({ title, icon, subItems }: TimelineItemProps) => {
  return (
    <div>
      <div className={styles.timelineIconContainer}>{icon}</div>

      <SubHeading className={`${styles.timelineTitle} mb-4`}>
        {title}
      </SubHeading>

      <div className="mt-3">
        {subItems.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={styles.timelineItem}
          >
            <div key={index}>
              <div className={styles.timelineHeader}>
                <div className={styles.timelineSubtitle}>{item.subtitle}</div>
                <span className={styles.timelineDate}>{item.date}</span>
              </div>
              <Paragraph className={styles.timelineDescription}>
                {item.description}
              </Paragraph>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
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

const sseDescription = (
  <UnorderedList>
    <ListItem>
      <b>Technical Vision:</b> Defined long-term product strategy to grow
      streaming platform usage 100x from 2023-2025
    </ListItem>
    <ListItem>
      <b>High Availability Infrastructure:</b> Architected a no-downtime
      orchestration framework for stateful Flink jobs, enabling infrastructure
      changes, framework updates, and logic deployments without data loss or
      interruption
    </ListItem>
    <ListItem>
      <b>Systems Performance:</b> Spearheaded a performance overhaul by tuning
      configurations, addressing algorithmic bottlenecks and improving API,
      database, and serialisation schemas. Increased system job capacity by 20x,
      reduced DB transaction volume by 40%, and increased max pipeline
      throughput by 50x
    </ListItem>
    <ListItem>
      <b>Cross-functional Leadership:</b> Led stability work with Kafka infra
      team reducing outages caused by manual migrations and optimising client
      libraries, reducing CPU utilisation by 20x; collaborated with
      observability team to build user-defined monitors, in-platform metrics and
      automated health monitoring
    </ListItem>
    <ListItem>
      <b>Engineering Excellence:</b> Led architecture reviews; conducted
      technical interviews for industry hires; acted as the L3 escalation point
      for global streaming outages, resolving 1000+ issues; developed
      engineering talent
    </ListItem>
  </UnorderedList>
);
const tlDescription = (
  <UnorderedList>
    <ListItem>
      <b>Strategic Technical Leadership:</b> Managed technical engagement with
      customers as chief technical contact; led engineering effort for joint
      venture with oil super-major; defined product roadmaps and technical
      strategy
    </ListItem>
    <ListItem>
      <b>Mentorship:</b> Mentored new engineers, developed growth frameworks,
      designed and executed detailed performance reviews; led design and
      architecture reviews
    </ListItem>
  </UnorderedList>
);
const fdeDescription = (
  <UnorderedList>
    <ListItem>
      <b>Full-Stack Engineering:</b> Developed an end-to-end application for
      real-time stream processing in service of a $10M+ contract; built
      multi-tenant orchestration engine managing simulation systems in customer
      networks
    </ListItem>
    <ListItem>
      <b>Data Pipelining:</b> Architected and built data pipelines for
      structured & unstructured data with Spark and Flink
    </ListItem>
  </UnorderedList>
);
const oxfordDescription = (
  <UnorderedList>
    <ListItem>
      Thesis: A Meshless Galerkin Method for Dirichlet Problems using Radial
      Basis Functions
    </ListItem>
  </UnorderedList>
);
const firedrakeTooltip = (
  <span>
    <Link href={"https://firedrakeproject.org/"}>Firedrake</Link> is an
    automated system for the solution of partial differential equations using
    the finite element method (FEM). Firedrake uses sophisticated code
    generation to provide mathematicians, scientists, and engineers with a very
    high productivity way to create sophisticated high performance simulations.
  </span>
);
const imperialDescription = (
  <UnorderedList>
    <ListItem>
      Thesis: An Automatic Finite Element Solver for Complex-Valued PDEs
    </ListItem>
    <ListItem>
      Developed peer-reviewed Python code extending{" "}
      <Tooltip content={firedrakeTooltip}>Firedrake</Tooltip>'s symbolic algebra
      to the complex numbers.
    </ListItem>
  </UnorderedList>
);
const awardTooltip =
  "Awarded annually to that member of the Princeton men's varsity squash team who, through enthusiasm, ability, sportsmanship and leadership has contributed most to the sport and his team.";
const princetonDescription = (
  <UnorderedList>
    <ListItem>
      Thesis: A Bayesian Method to Determine the Distribution of Transiting
      Exoplanets in Binary, Multiplanet Kepler Systems
    </ListItem>
    <ListItem>Elected to Sigma Xi Research Society</ListItem>
    <ListItem>
      Varsity Squash:{" "}
      <Tooltip content={awardTooltip}>2016 George McFarland Award</Tooltip>,
      2013 Most Improved Player, 2014 Sloane Sportsmanship Award. 2014 & 2015
      Ivy League Champions.
    </ListItem>
  </UnorderedList>
);

export const Resume = () => {
  return (
    <Section>
      <div id="resume" className={styles.resumeSection}>
        <div className={styles.sectionBlock}>
          <SubHeading className={styles.experienceHeading}>
            <UserRound className={styles.experienceIcon} /> Summary
          </SubHeading>
          <div className="space-y-2 -mb-8">
            <Paragraph>
              Senior software engineer with 7+ years experience architecting and
              scaling mission-critical distributed systems. Proven track record
              at Palantir leading the growth of Foundry’s streaming platform,
              scaling usage 100x and building stateful, zero-downtime upgrade
              orchestration for 1000+ Flink clusters.{" "}
              <Link href="http://www.rhodes.bm/rhelects.htm#BARTON,_S._Nicholas">
                Rhodes Scholar
              </Link>{" "}
              with graduate degrees in mathematics.
            </Paragraph>
          </div>
        </div>
        <div className={styles.sectionBlock}>
          <SubHeading className={styles.experienceHeading}>
            <Megaphone className={styles.experienceIcon} /> Professional
            References
            {/* Fill in details */}
          </SubHeading>
        </div>
        <div className={styles.sectionBlock}>
          <SubHeading className={styles.experienceHeading}>
            <Briefcase className={styles.experienceIcon} /> Experience
          </SubHeading>
          <div className="space-y-2">
            <TimelineItem
              title="Palantir Technologies"
              icon={<Briefcase size={16} />}
              subItems={[
                {
                  subtitle: "Senior Software Engineer",
                  date: "2022 - 2025",
                  description: sseDescription,
                },
                {
                  subtitle:
                    "Technical Lead, Forward Deployed Software Engineer",
                  date: "2019 - 2022",
                  description: tlDescription,
                },
                {
                  subtitle: "Forward Deployed Software Engineer",
                  date: "2018 - 2019",
                  description: fdeDescription,
                },
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
              title="Rhodes Scholar, University of Oxford"
              icon={<GraduationCap size={16} />}
              subItems={[
                {
                  subtitle:
                    "MSc with Merit, Mathematical Modelling and Scientific Computing",
                  date: "2018",
                  description: oxfordDescription,
                },
              ]}
            />
            <TimelineItem
              title="Imperial College London"
              icon={<GraduationCap size={16} />}
              subItems={[
                {
                  subtitle: "MSc with Distinction, Applied Mathematics",
                  date: "2017",
                  description: imperialDescription,
                },
              ]}
            />
            <TimelineItem
              title="Princeton University"
              icon={<GraduationCap size={16} />}
              subItems={[
                {
                  subtitle: "AB with Honours, Astrophysical Sciences",
                  date: "2016",
                  description: princetonDescription,
                },
              ]}
            />
          </div>
        </div>

        <div className={styles.sectionBlock}>
          <SubHeading className={styles.experienceHeading}>
            <Code className={styles.experienceIcon} /> Skills
          </SubHeading>
          <div className={styles.skillsContainer}>
            {[
              "React",
              "TypeScript",
              "Node.js",
              "Python",
              "AWS",
              "Docker",
              "GraphQL",
              "Tailwind CSS",
              "PostgreSQL",
              "Redis",
            ].map((skill) => (
              <SkillPill key={skill} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
