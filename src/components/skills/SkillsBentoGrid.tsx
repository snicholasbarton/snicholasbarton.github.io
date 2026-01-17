import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { SKILLS, Skill, CATEGORY_COLORS } from '../../data/skills';
import { cn } from '../../lib/utils';
import styles from './SkillsBentoGrid.module.css';

const SkillTile = ({
  skill,
  isExpanded,
  onClick,
  onClose
}: {
  skill: Skill;
  isExpanded: boolean;
  onClick: () => void;
  onClose: (e: React.MouseEvent) => void;
}) => {
  const colorClass = CATEGORY_COLORS[skill.category];

  // Dynamic grid configuration
  const gridStyle = isExpanded
    ? {
        gridColumn: '1 / -1', // Full width
        gridRow: 'span 2',    // Double height
        zIndex: 10
      }
    : {
        // If not expanded, we assume the parent handles the layout or we fallback to default
        // But the parent will pass the style. We'll handle spans via classes or parent props.
        // Actually, let's keep the style inline here if passed, or manage it in the parent.
      };

  return (
    <motion.div
      layout
      layoutId={`skill-${skill.id}`}
      className={cn(styles.tile, colorClass, isExpanded && styles.expandedTile)}
      onClick={onClick}
      whileHover={{ scale: isExpanded ? 1 : 1.02 }}
      whileTap={{ scale: isExpanded ? 1 : 0.98 }}
    >
       {/* Close Button for Expanded State */}
       {isExpanded && (
        <button
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Close"
        >
          <X size={20} />
        </button>
      )}

      <div className={styles.tileContent}>
        <div>
          <motion.div layoutId={`category-${skill.id}`} className={styles.tileCategory}>
            {skill.category}
          </motion.div>
          <motion.h3 layoutId={`title-${skill.id}`} className={isExpanded ? styles.expandedTitle : styles.tileTitle}>
            {skill.title}
          </motion.h3>
        </div>

        {/* Content for Default State (Hero only) or Expanded State */}
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            (skill.gridConfig.colSpan > 1 || skill.gridConfig.rowSpan > 1) && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm opacity-80 mt-2 line-clamp-3"
              >
                {skill.description}
              </motion.p>
            )
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4 h-full flex flex-col justify-between"
            >
              <p className="text-base opacity-90 mb-4">{skill.description}</p>

              <div className={styles.expandedDetails}>
                <div className={styles.detailSection}>
                  <h4 className={styles.detailLabel}>Experience</h4>
                  <p className="text-lg font-semibold">{skill.yearsOfExperience} Years</p>
                </div>

                <div className={styles.detailSection}>
                  <h4 className={styles.detailLabel}>Subskills</h4>
                  <div className="flex flex-wrap mt-1">
                    {skill.subSkills.map((sub, idx) => (
                      <span key={idx} className={styles.subSkillTag}>
                        {sub.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export const SkillsBentoGrid = () => {
  const [expandedSkillId, setExpandedSkillId] = useState<string | null>(null);

  return (
    <div className={styles.gridWrapper}>
      <motion.div layout className={styles.gridContainer}>
        {SKILLS.map((skill) => {
          const isExpanded = skill.id === expandedSkillId;
          const anyExpanded = expandedSkillId !== null;

          // If ANY skill is expanded, we disable explicit positioning to allow reflow.
          // If NO skill is expanded, we use the manual config.
          const gridStyle = anyExpanded
            ? {
                // When expanded, the expanded item takes full width
                gridColumn: isExpanded ? '1 / -1' : 'auto',
                gridRow: isExpanded ? 'span 2' : 'span 1',
              }
            : {
                gridColumnStart: skill.gridConfig.colStart,
                gridRowStart: skill.gridConfig.rowStart,
                gridColumnEnd: `span ${skill.gridConfig.colSpan}`,
                gridRowEnd: `span ${skill.gridConfig.rowSpan}`,
              };

          return (
            <motion.div
              key={skill.id}
              layout
              style={gridStyle}
              className={isExpanded ? 'z-10' : 'z-0'}
            >
              <SkillTile
                skill={skill}
                isExpanded={isExpanded}
                onClick={() => setExpandedSkillId(skill.id)}
                onClose={(e) => {
                  e.stopPropagation();
                  setExpandedSkillId(null);
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
