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
      // rootMargin top needs to account for the offset.
      // The sentinel is placed just above the element.
      // If element is sticky at top: 5rem, the sentinel hits top of viewport when element hits top of viewport?
      // No, sentinel scrolls with content. Element sticks.
      // When sentinel scrolls past the sticky point, it's "stuck".
      // The sticky point is 80px (5rem).
      // So we want to trigger when sentinel hits 80px from top.
      { threshold: 1, rootMargin: '-81px 0px 0px 0px' }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Fix: Show exactly maxDepthDetected levels.
  // If maxDepthDetected is 3, we want [1, 2, 3]. Length = 3.
  const levels = Array.from({ length: Math.min(maxDepthDetected, 5) }, (_, i) => i + 1);

  // If no folds are detected yet (or just 0), showing "None" and "All" is enough?
  // Or at least "L1"?
  // If maxDepthDetected is 0, levels is empty.
  // But usually we have at least L1 if there are folds.
  // Let's assume maxDepthDetected updates to at least 1 if there is a fold.

  return (
    <>
      <div ref={sentinelRef} className="absolute h-[1px] w-full -mt-[1px] pointer-events-none opacity-0" />
      <div className={cn(styles.container, isStuck ? styles.stuck : styles.notStuck)}>
        <div className={styles.controls}>
          <div className="flex items-center">
             <Layers className="w-3.5 h-3.5 mr-1.5 text-gray-500" />
             <span className={styles.label}>Depth:</span>
          </div>

          <div className={styles.buttonGroup}>
            <button
              onClick={() => setGlobalExpandLevel(0)}
              className={cn(styles.depthButton)}
              title="Collapse All"
            >
              None
            </button>

            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setGlobalExpandLevel(level)}
                className={cn(styles.depthButton)}
              >
                L{level}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
