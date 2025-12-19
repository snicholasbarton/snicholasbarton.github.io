import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import styles from './Tooltip.module.css';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

export function Tooltip({ children, content, className }: TooltipProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const isOpen = isHovered || isClicked;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsClicked(false);
      }
    }

    if (isClicked) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isClicked]);

  const handleMouseEnter = () => {
    // On desktop, hover opens it.
    // If it's already clicked open, hovering doesn't change state but logically it is "hovered" too.
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    // Prevent bubbling if nested
    e.stopPropagation();

    // Toggle stickiness
    setIsClicked((prev) => !prev);
  };

  return (
    <span
      ref={containerRef}
      className={cn(styles.trigger, className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.tooltip}
            initial={{ opacity: 0, y: -5, scale: 0.95, x: "-20%" }}
            animate={{ opacity: 1, y: 10, scale: 1, x: "-20%" }}
            exit={{ opacity: 0, y: -5, scale: 0.95, x: "-20%" }}
            transition={{ duration: 0.1 }}
            onClick={(e) => e.stopPropagation()} // Clicking content shouldn't toggle
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
