import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { SKILLS, Skill, CATEGORY_COLORS } from '../../data/skills';
import { cn } from '../../lib/utils';
import styles from './SkillsBentoGrid.module.css';

const SkillTile = ({ skill, onClick }: { skill: Skill; onClick: () => void }) => {
  const colorClass = CATEGORY_COLORS[skill.category];

  return (
    <motion.div
      layoutId={`skill-${skill.id}`}
      className={cn(styles.tile, colorClass)}
      style={{
        gridColumnStart: skill.gridConfig.colStart,
        gridRowStart: skill.gridConfig.rowStart,
        gridColumnEnd: `span ${skill.gridConfig.colSpan}`,
        gridRowEnd: `span ${skill.gridConfig.rowSpan}`,
      }}
      onClick={onClick}
      whileHover={{ scale: 1.02, zIndex: 1 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={styles.tileContent}>
        <div>
          <motion.div layoutId={`category-${skill.id}`} className={styles.tileCategory}>
            {skill.category}
          </motion.div>
          <motion.h3 layoutId={`title-${skill.id}`} className={styles.tileTitle}>
            {skill.title}
          </motion.h3>
        </div>
        {(skill.gridConfig.colSpan > 1 || skill.gridConfig.rowSpan > 1) && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm opacity-80 mt-2 line-clamp-3"
          >
            {skill.description}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export const SkillsBentoGrid = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <div className={styles.gridWrapper}>
      <div className={styles.gridContainer}>
        {SKILLS.map((skill) => (
          <SkillTile
            key={skill.id}
            skill={skill}
            onClick={() => setSelectedSkill(skill)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className={styles.overlayBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => { e.stopPropagation(); setSelectedSkill(null); }}
          >
            <motion.div
              layoutId={`skill-${selectedSkill.id}`}
              className={cn(styles.expandedCard, CATEGORY_COLORS[selectedSkill.category])}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedSkill(null)}
                className={styles.closeButton}
                aria-label="Close"
              >
                <X size={24} />
              </button>

              <div className={styles.expandedHeader}>
                <motion.div layoutId={`category-${selectedSkill.id}`} className={styles.expandedCategory}>
                  {selectedSkill.category}
                </motion.div>
                <motion.h2 layoutId={`title-${selectedSkill.id}`} className={styles.expandedTitle}>
                  {selectedSkill.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg opacity-90"
                >
                  {selectedSkill.description}
                </motion.p>
              </div>

              <motion.div
                className={styles.expandedDetails}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className={styles.detailSection}>
                  <h4 className={styles.detailLabel}>Experience</h4>
                  <p className="text-xl font-semibold">{selectedSkill.yearsOfExperience} Years</p>
                </div>

                <div className={styles.detailSection}>
                  <h4 className={styles.detailLabel}>Subskills & Specializations</h4>
                  <div className="flex flex-wrap mt-2">
                    {selectedSkill.subSkills.map((sub, idx) => (
                      <span key={idx} className={styles.subSkillTag}>
                        {sub.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
