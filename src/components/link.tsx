import React from 'react';
import { linkStyle } from '@styles';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string
}

export const Link =({ to, children, className }: LinkProps) => {
  return (
    <a className={`${className} ${linkStyle}`}  href={to}>
      {children}
    </a>
  );
}