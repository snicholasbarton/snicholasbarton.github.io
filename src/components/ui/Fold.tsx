import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { useFoldDepth, useFoldGlobal, FoldDepthProvider } from './FoldContext';
import styles from './Fold.module.css';

interface FoldProps {
  children: React.ReactNode;
  // title prop is unused in strict mode, removed to pass build
}

export const Fold = ({ children }: FoldProps) => {
  const depth = useFoldDepth();
  const { globalExpandLevel, registerDepth } = useFoldGlobal();

  const currentLevel = depth + 1;

  useEffect(() => {
    registerDepth(currentLevel);
  }, [currentLevel, registerDepth]);

  const [isOpen, setIsOpen] = useState(globalExpandLevel >= currentLevel);

  useEffect(() => {
    if (globalExpandLevel >= currentLevel) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [globalExpandLevel, currentLevel]);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.wrapper}>
      {!isOpen ? (
        <div className={styles.collapsedContainer} onClick={toggle} title="Expand">
          <div className={styles.collapsedLine} />
          <button className={styles.expandButton} aria-label="Expand">
            <Plus size={14} />
          </button>
        </div>
      ) : (
        <div className={styles.expandedContainer}>
          <div
            className={styles.leftRail}
            onClick={toggle}
            title="Collapse"
          />
          <div className={styles.content}>
             <FoldDepthProvider depth={depth + 1}>
                {children}
             </FoldDepthProvider>
          </div>
        </div>
      )}
    </div>
  );
};
