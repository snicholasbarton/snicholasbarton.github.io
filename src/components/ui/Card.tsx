import React, { useState } from 'react';
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
}

const DogEar = ({ isFlipped, onFlip }: DogEarProps) => (
  <button
    className={styles.dogEar}
    onClick={(e) => {
      e.stopPropagation(); // Prevent triggering other click handlers on the card
      onFlip();
    }}
    aria-label={isFlipped ? "Flip back to front" : "Flip card to back"}
    type="button"
  />
);

export const Card = ({ children, className, animated = false, backContent }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Only enable flip functionality if animated is requested AND backContent is provided
  const isFlippable = animated && backContent;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  if (isFlippable) {
    return (
      <div className={cn(styles.perspectiveContainer, className)}>
        <div className={cn(styles.flipInner, isFlipped && styles.flipped)}>
          {/* Front Face */}
          <div className={styles.face}>
            <DogEar isFlipped={isFlipped} onFlip={handleFlip} />
            {children}
          </div>

          {/* Back Face */}
          <div className={cn(styles.face, styles.faceBack)}>
            <DogEar isFlipped={isFlipped} onFlip={handleFlip} />
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
