import { useEffect, useRef, useState } from "react";
import { useFoldGlobal } from "./FoldContext";
import styles from "./FoldController.module.css";
import { cn } from "../../lib/utils";
import { Layers } from "lucide-react";

export const FoldController = () => {
  const { globalExpandLevel, setGlobalExpandLevel, maxDepthDetected } =
    useFoldGlobal();
  const [isStuck, setIsStuck] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting);
      },
      // rootMargin top needs to account for the offset.
      // When sentinel scrolls past the sticky point, it's "stuck".
      // The sticky point is 80px (5rem)
      { threshold: 1, rootMargin: "-81px 0px 0px 0px" }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const levels = Array.from(
    { length: Math.min(maxDepthDetected, 5) },
    (_, i) => i + 1
  );

  return (
    <>
      <div
        ref={sentinelRef}
        className="absolute h-[1px] w-full -mt-[1px] pointer-events-none opacity-0"
      />
      <div
        className={cn(
          styles.container,
          isStuck ? styles.stuck : styles.notStuck
        )}
      >
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
