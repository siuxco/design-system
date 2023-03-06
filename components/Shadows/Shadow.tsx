import React, { FC, ReactNode } from 'react';
import { classNames } from '../../utils/utils';

const shadows = {
  default: {
    xs: 'box-shadow-xs',
    sm: 'box-shadow-s',
    md: 'box-shadow-m',
    lg: 'box-shadow-l',
    xl: 'box-shadow-xl',
  },
  hover: {
    xs: 'hover:box-shadow-xs',
    sm: 'hover:box-shadow-s',
    md: 'hover:box-shadow-m',
    lg: 'hover:box-shadow-l',
    xl: 'hover:box-shadow-xl',
  },
};

export interface IShadowProperties {
  className?: string;
  children?: Array<ReactNode>;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;
  hover: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;
}

export const Shadow: FC<IShadowProperties> = ({ size, hover, children, className }) => {
  return <div className={classNames(shadows.default[size], shadows.hover[hover], className)}>{children}</div>;
};
