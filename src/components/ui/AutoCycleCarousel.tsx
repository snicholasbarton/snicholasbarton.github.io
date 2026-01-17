import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

interface AutoCycleCarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  interval?: number;
  className?: string;
  showTimer?: boolean;
}

export const AutoCycleCarousel = <T,>({
  items,
  renderItem,
  interval = 10000,
  className,
  showTimer = true,
}: AutoCycleCarouselProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  if (!items.length) return null;

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {renderItem(items[currentIndex])}
          </motion.div>
        </AnimatePresence>
      </div>

      {showTimer && items.length > 1 && (
        <div className="absolute top-0 right-0 w-24 h-1 mt-2 mr-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
          <motion.div
            key={currentIndex}
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: interval / 1000, ease: "linear" }}
            className="h-full bg-gray-400 dark:bg-gray-500"
          />
        </div>
      )}
    </div>
  );
};
