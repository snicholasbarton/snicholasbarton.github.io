import React from 'react';
import classNames from 'classnames';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section id={id} className={classNames("max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12", className)}>
      {children}
    </section>
  );
};
