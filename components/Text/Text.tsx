import React, { FC, ReactNode } from 'react';
import { classNames } from '../../utils/utils';

const sizes = {
  h1: 'font-size-h1',
  h2: 'font-size-h2',
  h3: 'font-size-h3',
  h4: 'font-size-h4',
  h5: 'font-size-h5',
  xxl: 'font-size-xxl',
  xl: 'font-size-xl',
  l: 'font-size-l',
  m: 'font-size-m',
  s: 'font-size-s',
  xs: 'font-size-xs',
  xxs: 'font-size-xxs',
};

export interface IHeadingProperties {
  className?: string;
  children?: Array<ReactNode>;
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';
}

export const Text: FC<IHeadingProperties> = ({ size, children, className }) => {
  return <div className={classNames(sizes[size], className)}>{children}</div>;
};
