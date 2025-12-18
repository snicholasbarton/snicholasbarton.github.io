import React from 'react';
import { cn } from '../../lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const Heading = ({ children, className }: TypographyProps) => {
  return (
    <h1 className={cn("text-4xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-gray-100", className)}>
      {children}
    </h1>
  );
};

export const SubHeading = ({ children, className }: TypographyProps) => {
  return (
    <h2 className={cn("text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200", className)}>
      {children}
    </h2>
  );
};

export const Paragraph = ({ children, className }: TypographyProps) => {
  return (
    <p className={cn("text-lg text-gray-700 dark:text-gray-300 leading-relaxed", className)}>
      {children}
    </p>
  );
};
