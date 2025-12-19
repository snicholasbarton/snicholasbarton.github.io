import { motion } from 'framer-motion';
import { Camera, Music, Mountain } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Heading, SubHeading, Paragraph } from '../components/ui/Typography';
import { cn } from '../lib/utils';
import styles from './Hobbies.module.css';

export const Hobbies = () => {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heading>Hobbies & Interests</Heading>
        <Paragraph className={styles.introText}>
          When I'm not coding, I enjoy exploring the world and expressing creativity through various mediums. Here are a few things that keep me busy.
        </Paragraph>

        <div className={styles.stack}>
          <div className={styles.item}>
            <div className={cn(styles.iconContainer, styles.iconOrange)}>
              <Camera size={48} className={styles.iconCamera} />
            </div>
            <div>
              <SubHeading>Photography</SubHeading>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </Paragraph>
            </div>
          </div>

          <div className={styles.item}>
            <div className={cn(styles.iconContainer, styles.iconPurple)}>
              <Music size={48} className={styles.iconMusic} />
            </div>
            <div>
              <SubHeading>Music Production</SubHeading>
              <Paragraph>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              </Paragraph>
            </div>
          </div>

          <div className={styles.item}>
            <div className={cn(styles.iconContainer, styles.iconTeal)}>
              <Mountain size={48} className={styles.iconMountain} />
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
