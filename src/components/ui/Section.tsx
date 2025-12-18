import React from 'react';
import { cn } from '../../lib/utils';
import styles from './Section.module.css';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section id={id} className={cn(styles.section, className)}>
      {children}
    </section>
  );
};
