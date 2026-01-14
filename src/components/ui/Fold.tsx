import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import {
  useFoldDepth,
  useFoldGlobal,
  useFoldVisibility,
  FoldDepthProvider,
  FoldVisibilityProvider,
} from "./FoldContext";
import styles from "./Fold.module.css";

interface FoldProps {
  children: React.ReactNode;
}

export const Fold = ({ children }: FoldProps) => {
  const depth = useFoldDepth();
  const { globalExpandLevel, registerDepth } = useFoldGlobal();
  const isParentVisible = useFoldVisibility();

  const currentLevel = depth + 1;

  // Always register depth because we are now rendering hidden
  useEffect(() => {
    registerDepth(currentLevel);
  }, [currentLevel, registerDepth]);

  // Determine initial state
  const [isOpen, setIsOpen] = useState(globalExpandLevel >= currentLevel);

  // Sync with Global Control
  useEffect(() => {
    if (globalExpandLevel >= currentLevel) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [globalExpandLevel, currentLevel]);

  // Sync with Parent Visibility (Reset on Collapse)
  // If parent becomes invisible, we must close.
  useEffect(() => {
    if (!isParentVisible && isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsOpen(false);
    }
  }, [isParentVisible, isOpen]);

  const toggle = () => setIsOpen(!isOpen);

  // Determine if this fold is effectively visible to the user
  // It is visible if the parent is visible AND this fold is open.
  const isContentVisible = isParentVisible && isOpen;

  return (
    <div className={styles.wrapper}>
      {/* Collapsed View */}
      <div
        className={styles.collapsedContainer}
        onClick={toggle}
        title="Expand"
        style={{ display: !isOpen ? "flex" : "none" }}
      >
        <div className={styles.collapsedLine} />
        <button className={styles.expandButton} aria-label="Expand">
          <Plus size={14} />
        </button>
      </div>

      {/* Expanded View */}
      <div
        className={styles.expandedContainer}
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <div className={styles.leftRail} onClick={toggle} title="Collapse" />
        <div className={styles.content}>
          <FoldDepthProvider depth={depth + 1}>
            <FoldVisibilityProvider isVisible={isContentVisible}>
              {children}
            </FoldVisibilityProvider>
          </FoldDepthProvider>
        </div>
      </div>
    </div>
  );
};
