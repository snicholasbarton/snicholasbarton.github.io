import { useEffect, useRef, useState } from 'react';
import { useFoldGlobal } from './FoldContext';
import styles from './FoldController.module.css';
import { cn } from '../../lib/utils';
import { Layers } from 'lucide-react';

export const FoldController = () => {
  const { globalExpandLevel, setGlobalExpandLevel, maxDepthDetected } = useFoldGlobal();
  const [isStuck, setIsStuck] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting);
      },
      { threshold: 1, rootMargin: '-1px 0px 0px 0px' }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const levels = Array.from({ length: Math.min(maxDepthDetected + 1, 5) }, (_, i) => i + 1);

  return (
    <>
      <div ref={sentinelRef} className="absolute h-[1px] w-full -mt-[1px] pointer-events-none opacity-0" />
      <div className={cn(styles.container, isStuck ? styles.stuck : styles.notStuck)}>
        <div className={styles.controls}>
          <div className="flex items-center">
             <Layers className="w-4 h-4 mr-2 text-gray-500" />
             <span className={styles.label}>Fold Depth:</span>
          </div>

          <div className={styles.buttonGroup}>
            <button
              onClick={() => setGlobalExpandLevel(0)}
              className={cn(styles.depthButton, globalExpandLevel === 0 && styles.activeButton)}
              title="Collapse All"
            >
              None
            </button>

            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setGlobalExpandLevel(level)}
                className={cn(styles.depthButton, globalExpandLevel === level && styles.activeButton)}
              >
                L{level}
              </button>
            ))}

            <button
               onClick={() => setGlobalExpandLevel(100)}
               className={cn(styles.depthButton, globalExpandLevel >= 100 && styles.activeButton)}
               title="Expand All"
            >
              All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
