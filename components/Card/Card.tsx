import React, { ComponentProps, FC } from 'react';
import { classNames } from '../../utils/utils';

export interface ICardProperties extends Pick<ComponentProps<'div'>, 'children' | 'className'> {
  variant?: 'default' | 'custom';
}

const cards = {
  variants: {
    default:
      'background-white box-shadow-m border-width-1 border-style-solid border-neutral-2 border-radius-s padding-l',
  },
};

export const Card: FC<ICardProperties> = ({ variant = 'default', children, className }) => {
  return <div className={classNames(cards.variants[variant], className)}>{children}</div>;
};
