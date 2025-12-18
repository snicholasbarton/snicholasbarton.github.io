import React from 'react';
import { cn } from '../../lib/utils';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={cn(styles.card, className)}>
      {children}
    </div>
  );
};
