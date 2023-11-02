import React, { FC, ComponentProps } from 'react';
import { classNames } from '../../utils/utils';

const loaders = {
  type: {
    1: 'icon-system-loader-line',
    2: 'icon-system-loader-2-line',
    3: 'icon-system-loader-3-line',
    4: 'icon-system-loader-4-line',
    5: 'icon-system-loader-5-line',
  },
  sizes: {
    sm: 'font-size-s',
    md: 'font-size-l',
    lg: 'font-size-xxl',
  },
  animation: {
    slower: 'animation-slower',
    slow: 'animation-slow',
    default: 'animation-animated',
    fast: 'animation-fast',
    faster: 'animation-faster',
  },
};

export interface ILoaderProperties extends Pick<ComponentProps<'div'>, 'className'> {
  velocity?: 'slower' | 'slow' | 'default' | 'fast' | 'faster';
  variant?: 'neutral' | 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'square' | 'circle';
  loader?: 1 | 2 | 3 | 4 | 5;
}

export const Loader: FC<ILoaderProperties> = ({
  loader = 1,
  velocity = 'default',
  variant = 'neutral',
  size = 'md',
  shape,
  className,
}) => {
  return (
    <div
      className={classNames({
        'background-white box-shadow-s padding-xs border-width-1 border-style-solid border-neutral-2': Boolean(shape),
        'border-radius-s': shape === 'square',
        'border-radius-full': shape === 'circle',
      })}
    >
      <div
        className={classNames(
          'animation-rotate-right animation-infinite',
          `color-${variant}-7`,
          loaders.animation[velocity],
          loaders.type[loader],
          loaders.sizes[size],
          className,
        )}
      />
    </div>
  );
};
