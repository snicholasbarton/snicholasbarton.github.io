import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Heading, ListItem, Paragraph, SubHeading, UnorderedList } from '../components/ui/Typography';
import styles from './Hobbies.module.css';

export const AiStatement = () => {
    return (
        <Section>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
            <Heading>Statement on the use of AI</Heading>
            <Paragraph className={styles.introText}>
                This website was partially developed with the use of AI coding tools including, but not limited to, Google Gemini, Google Jules, and ChatGPT. Read more below to understand where AI-generated content might appear.
            </Paragraph>
            <SubHeading>Use of AI in the development of this website</SubHeading>
            <Paragraph className={styles.body}>
                While there is value in AI tools for accelerating technological development and developer productivity, I am a firm believer in the inherent human value of non-AI-generated artistic and intellectual content. To that end, I will strive to uphold the following with regards to this website:
                 <UnorderedList>
                    <ListItem>
                        Any written content of my own invention will be neither generated nor edited with AI. To the best of my abilities, I will not include any written content created or altered by AI except where the fact that it is AI-generated is relevant to the point of the work.
                    </ListItem>
                    <ListItem>
                        I will not use AI to generate or alter any images or videos of my own production. To the best of my abilities, I will not use, source, or include any images or videos created or altered by AI except where the fact that they are AI-generated is relevant to the point.
                    </ListItem>
                    <ListItem>
                        Any other written content, code, images, videos, etc. from elsewhere will include original attribution details, and will be labelled as AI-generated if it I am able to identify it as such.
                    </ListItem>
                    <ListItem>
                        I may use AI tools such as coding assitants to write the code for this website. This will be primarily limited to generating React components, non-functional refactors, or boilerplate code for e.g. the build system. Any code used or described in technical blog posts or supporting demonstrations will not be AI generated. Any referenced code that is AI generated will be clearly marked as such.
                    </ListItem>
                    <ListItem>
                        I may use AI tools such as coding assistants in the design and styling of this website. This will be primarily limited to CSS styling elements or boilerplate for CSS frameworks.
                    </ListItem>
                 </UnorderedList>
            </Paragraph>
            <br />
            <SubHeading>AI use of this website's content</SubHeading>
            <Paragraph className={styles.body}>
                It is forbidden to use any of the content of this website to train, build, deploy, or otherwise operate any form of AI, generative or otherwise, without the express permission of the author.
            </Paragraph>
        </motion.div>
        </Section>
    )
};
