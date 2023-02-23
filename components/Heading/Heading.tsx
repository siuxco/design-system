import React, { FC, ReactNode } from 'react';

const sizes = {
  h1: 'font-size-h1',
  h2: 'font-size-h2',
  h3: 'font-size-h3',
  h4: 'font-size-l',
  h5: 'font-size-m',
  h6: 'font-size-s',
};

export interface IHeadingProperties {
  className?: string;
  children?: Array<ReactNode>;
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading: FC<IHeadingProperties> = ({ size, children, className }) => {
  return <div className={`${sizes[size]} ${className}`}>{children}</div>;
};
