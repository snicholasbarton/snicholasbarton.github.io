import { motion } from 'framer-motion';
import { Camera, Music, Mountain } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Heading, SubHeading, Paragraph } from '../components/ui/Typography';

export const Hobbies = () => {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heading>Hobbies & Interests</Heading>
        <Paragraph className="mb-12 text-xl">
          When I'm not coding, I enjoy exploring the world and expressing creativity through various mediums. Here are a few things that keep me busy.
        </Paragraph>

        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-lg">
              <Camera size={48} className="text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <SubHeading>Photography</SubHeading>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </Paragraph>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg">
              <Music size={48} className="text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <SubHeading>Music Production</SubHeading>
              <Paragraph>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              </Paragraph>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-teal-100 dark:bg-teal-900/30 p-4 rounded-lg">
              <Mountain size={48} className="text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <SubHeading>Hiking & Outdoors</SubHeading>
              <Paragraph>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </Paragraph>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
