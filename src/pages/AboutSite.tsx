import { motion } from 'framer-motion';
import { Layers, Zap, Server, Globe } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Section } from '../components/ui/Section';
import { Heading, SubHeading, Paragraph } from '../components/ui/Typography';

export const AboutSite = () => {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heading>About This Site</Heading>
        <Paragraph className="mb-12 text-xl">
          This portfolio website serves as both a showcase of my professional journey and a playground for experimenting with modern web technologies. It is designed to be performant, accessible, and easily maintainable.
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <div className="flex items-center mb-4">
              <Zap className="text-yellow-500 mr-3" size={24} />
              <SubHeading className="!mb-0 text-xl">Vite & React</SubHeading>
            </div>
            <Paragraph className="text-base">
              Built with Vite for lightning-fast HMR and bundling, and React for a declarative component-based architecture.
            </Paragraph>
          </Card>

          <Card>
            <div className="flex items-center mb-4">
              <Layers className="text-cyan-500 mr-3" size={24} />
              <SubHeading className="!mb-0 text-xl">Tailwind CSS</SubHeading>
            </div>
            <Paragraph className="text-base">
              Styled using utility-first CSS for rapid development and consistent design tokens.
            </Paragraph>
          </Card>

          <Card>
            <div className="flex items-center mb-4">
              <Server className="text-green-500 mr-3" size={24} />
              <SubHeading className="!mb-0 text-xl">MDX</SubHeading>
            </div>
            <Paragraph className="text-base">
              Blog posts are authored in MDX, allowing seamless embedding of interactive React components within Markdown content.
            </Paragraph>
          </Card>

          <Card>
            <div className="flex items-center mb-4">
              <Globe className="text-blue-500 mr-3" size={24} />
              <SubHeading className="!mb-0 text-xl">GitHub Pages</SubHeading>
            </div>
            <Paragraph className="text-base">
              Hosted statically on GitHub Pages, utilizing Hash Routing to ensure compatibility with static file serving.
            </Paragraph>
          </Card>
        </div>
      </motion.div>
    </Section>
  );
};
