import React, { FC } from 'react';
import { classNames } from '../../utils/utils';

const Kbds = {
  sizes: {
    sm: 'font-size-s',
    md: 'font-size-l',
    lg: 'font-size-xxl',
  },
  container: {
    sm: 'height-l width-l border-radius-xxs',
    md: 'height-xl width-xl border-radius-xs',
    lg: 'height-xxl width-xxl border-radius-xs',
  },
  animation: {
    slower: 'animation-slower',
    slow: 'animation-slow',
    default: 'animation-animated',
    fast: 'animation-fast',
    faster: 'animation-faster',
  },
};

export interface IKbdProperties {
  size?: 'sm' | 'md' | 'lg';
  value: string | number;
  className?: string;
}

export const Kbd: FC<IKbdProperties> = ({ value, size = 'md', className }) => {
  return (
    <kbd
      className={classNames(
        'background-white box-shadow-xs box-shadow-s padding-xxs border-width-1 border-style-solid border-neutral-2',
        'display-flex align-items-center justify-content-center color-neutral-7 font-weight-600 text-transform-uppercase',
        Kbds.container[size],
        Kbds.sizes[size],
        className,
      )}
      style={{
        borderBottom: '2px solid var(--color-neutral-2)',
      }}>
      {value}
    </kbd>
  );
};
