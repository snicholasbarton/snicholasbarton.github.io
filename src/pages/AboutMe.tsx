import { motion } from "framer-motion";
import { Fish, Bird, ChefHat, Activity } from "lucide-react";
import { Section } from "../components/ui/Section";
import {
  Heading,
  SubHeading,
  Paragraph,
  Link,
} from "../components/ui/Typography";
import { cn } from "../lib/utils";
import styles from "./AboutMe.module.css";

export const AboutMe = () => {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heading>Hobbies & Interests</Heading>
        <Paragraph className={styles.introText}>
          Outside of my professional life, I enjoy deeply immersing myself in my
          hobbies. I most enjoy hobbies that bring me closer to nature, get me
          outside, and fill my life with new and rich experiences.
        </Paragraph>

        <div className={styles.stack}>
          <div className={styles.item}>
            <div className={cn(styles.iconContainer, styles.iconGreen)}>
              <Bird size={48} className={styles.iconBird} />
            </div>
            <div>
              <SubHeading>Birding</SubHeading>
              <Paragraph>
                I have been an avid birder since I was 6, inspired by a school
                unit on the local biology and geography of Bermuda, where I was
                born and raised. Birding helps me connect with the environment
                around me, and imparts a wonderful sense of time, place, and
                seasonality to life, not to mention the diversity and beauty of
                the birds themselves. Spring Migration in Brooklyn's Prospect
                Park is one of my favourite experiences every year. Check out my{" "}
                <Link href={"https://ebird.org/profile/NjU2Nzg0Mw"}>eBird</Link>{" "}
                profile!
              </Paragraph>
            </div>
          </div>

          <div className={styles.item}>
            <div className={cn(styles.iconContainer, styles.iconPurple)}>
              <Activity size={48} className={styles.iconActivity} />
            </div>
            <div>
              <SubHeading>Sports and Fitness</SubHeading>
              <Paragraph>
                Keeping fit and active is one of the most important parts of my
                day-to-day life. The sense of embodiment and empowerment I get
                from winning a squash match, scoring a goal, or crushing a tough
                workout can't be beat. Squash in particular has been an integral
                component of my life, and it was an honour to be a member of
                both Bermuda's Junior National Team as well as Princeton's
                Varsity Squash Team.
              </Paragraph>
            </div>
          </div>

          <div className={styles.item}>
            <div className={cn(styles.iconContainer, styles.iconBlue)}>
              <Fish size={48} className={styles.iconFish} />
            </div>
            <div>
              <SubHeading>Diving</SubHeading>
              <Paragraph>
                Growing up on an island, surrounded by the azure Sargasso Sea, I
                found myself in and under the water just as often as I was on
                land. I especially love the vibrant colours and spectacular
                structures of healthy corals. I am a certified Rescue Diver with
                multiple advanced specialties, and have been lucky enough to
                dive in some of the most pristine waters in the world. Diving
                Fiji's Rainbow Reef in particular is something I will never
                forget.
              </Paragraph>
            </div>
          </div>

          <div className={styles.item}>
            <div className={cn(styles.iconContainer, styles.iconOrange)}>
              <ChefHat size={48} className={styles.iconChefHat} />
            </div>
            <div>
              <SubHeading>Cooking and Baking</SubHeading>
              <Paragraph>
                When I'm not outside, you're likely to find me experimenting in
                the kitchen. From warming curries made from scratch and
                Bermudian classics like fish cakes and peas 'n' rice to fanciful
                ice cream flavours and delicate macarons, I enjoy the meditative
                act of working with my hands as much as the creative culinary
                process. A delicious end result is an added bonus!
              </Paragraph>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
