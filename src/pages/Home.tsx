import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Heading, SubHeading, Paragraph } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  icon: React.ReactNode;
}

const TimelineItem = ({ title, subtitle, date, description, icon }: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 border-l-2 border-gray-200 dark:border-gray-800 last:pb-0"
    >
      <div className="absolute top-0 left-[-9px] bg-background p-1 border-2 border-primary rounded-full text-primary">
        {icon}
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
        <SubHeading className="!mb-0 text-xl">{title}</SubHeading>
        <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">{date}</span>
      </div>
      <div className="text-lg font-medium text-primary mb-2">{subtitle}</div>
      <Paragraph className="text-base">
        {description}
      </Paragraph>
    </motion.div>
  );
};

const SkillPill = ({ skill }: { skill: string }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2"
  >
    {skill}
  </motion.span>
);

export const Home = () => {
  return (
    <Section>
      {/* Hero Section */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading className="text-4xl sm:text-6xl">
            Hi, I'm <span className="text-primary">Nicholas Barton</span>.
          </Heading>
          <Paragraph className="text-xl sm:text-2xl max-w-2xl">
            I'm a professional software engineer passionate about building scalable web applications and exploring new technologies.
          </Paragraph>
          <div className="mt-8 flex space-x-4">
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
      <div id="resume" className="scroll-mt-20">
        <div className="mb-16">
          <SubHeading className="text-3xl mb-8 flex items-center">
            <Briefcase className="mr-3" /> Experience
          </SubHeading>
          <div className="space-y-2">
            <TimelineItem
              title="Senior Software Engineer"
              subtitle="Tech Corp Inc."
              date="2021 - Present"
              description="Led the development of a high-traffic e-commerce platform. Improved site performance by 40% and mentored junior developers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              icon={<Briefcase size={16} />}
            />
            <TimelineItem
              title="Software Engineer"
              subtitle="Startup Solutions"
              date="2018 - 2021"
              description="Full-stack development using React and Node.js. Implemented real-time features using WebSockets. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              icon={<Briefcase size={16} />}
            />
          </div>
        </div>

        <div className="mb-16">
          <SubHeading className="text-3xl mb-8 flex items-center">
            <GraduationCap className="mr-3" /> Education
          </SubHeading>
          <div className="space-y-2">
            <TimelineItem
              title="BS Computer Science"
              subtitle="University of Technology"
              date="2014 - 2018"
              description="Graduated with Honors. Focused on Distributed Systems and Artificial Intelligence."
              icon={<GraduationCap size={16} />}
            />
          </div>
        </div>

        <div className="mb-16">
          <SubHeading className="text-3xl mb-8 flex items-center">
            <Code className="mr-3" /> Skills
          </SubHeading>
          <div className="flex flex-wrap">
            {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "GraphQL", "Tailwind CSS", "PostgreSQL", "Redis"].map(skill => (
              <SkillPill key={skill} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
