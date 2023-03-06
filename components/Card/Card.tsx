import React, { FC, ReactNode } from 'react';
import { classNames } from '../../utils/utils';

export interface ICardProperties {
  className?: string;
  variant?: 'default' | 'custom';
  children?: Array<ReactNode>;
}

const cards = {
  variants: {
    default:
      'background-white box-shadow-m border-width-1 border-style-solid border-neutral-2 border-radius-s padding-l',
    custom: '',
  },
};

export const Card: FC<ICardProperties> = ({ variant = 'default', children, className }) => {
  return <div className={classNames(cards.variants[variant], className)}>{children}</div>;
};
