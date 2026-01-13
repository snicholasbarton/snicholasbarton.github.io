import React, { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
  backContent?: React.ReactNode;
}

interface DogEarProps {
  isFlipped: boolean;
  onFlip: () => void;
  visible: boolean;
}

const DogEar = ({ isFlipped, onFlip, visible }: DogEarProps) => (
  <button
    className={cn(styles.dogEar, !visible && "opacity-0 pointer-events-none")}
    onClick={(e) => {
      e.stopPropagation(); // Prevent triggering other click handlers on the card
      onFlip();
    }}
    aria-label={isFlipped ? "Flip back to front" : "Flip card to back"}
    type="button"
    tabIndex={visible ? 0 : -1}
  />
);

export const Card = ({ children, className, backContent }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Only enable flip functionality if animated is requested AND backContent is provided
  const isFlippable = !!backContent;

  const handleFlip = () => {
    if (isAnimating) return; // Prevent double clicks during animation
    setIsAnimating(true);
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 700); // Matches CSS duration
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  if (isFlippable) {
    return (
      <div className={cn(styles.perspectiveContainer, className)}>
        <div className={cn(styles.flipInner, isFlipped && styles.flipped)}>
          {/* Front Face */}
          <div className={styles.face}>
            <DogEar isFlipped={isFlipped} onFlip={handleFlip} visible={!isAnimating} />
            {children}
          </div>

          {/* Back Face */}
          <div className={cn(styles.face, styles.faceBack)}>
            <DogEar isFlipped={isFlipped} onFlip={handleFlip} visible={!isAnimating} />
            {backContent}
          </div>
        </div>
      </div>
    );
  }

  // Standard static card
  return (
    <div className={cn(styles.card, className)}>
      {children}
    </div>
  );
};
