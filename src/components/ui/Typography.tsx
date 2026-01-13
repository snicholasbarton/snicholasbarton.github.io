import React from 'react';
import { cn } from '../../lib/utils';
import styles from './Typography.module.css';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const Heading = ({ children, className }: TypographyProps) => {
  return (
    <h1 className={cn(styles.heading, className)}>
      {children}
    </h1>
  );
};

export const SubHeading = ({ children, className }: TypographyProps) => {
  return (
    <h2 className={cn(styles.subHeading, className)}>
      {children}
    </h2>
  );
};

export const Paragraph = ({ children, className }: TypographyProps) => {
  return (
    <p className={cn(styles.paragraph, className)}>
      {children}
    </p>
  );
};


export const UnorderedList = ({ children, className }: TypographyProps) => {
  return (
    <ul className={cn(styles.list, className)}>
      {children}
    </ul>
  );
};

export const ListItem = ({ children, className }: TypographyProps) => {
  return (
    <li className={cn(styles.listItem, className)}>
      {children}
    </li>
  );
};

export const Link = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => {
  return (
    <a href={href} className={cn(styles.link, className)}>
      {children}
    </a>
  );
}
