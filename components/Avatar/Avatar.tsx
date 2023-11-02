import React, { FC, ComponentProps } from 'react';
import { classNames } from '../../utils/utils';

const sizes = {
  container: {
    xs: '32px',
    sm: '48px',
    md: '64px',
    lg: '90px',
    xl: '128px',
    xxl: '256px',
  },
  font: {
    sm: 'font-size-s',
    md: 'font-size-l',
    lg: 'font-size-l',
    xl: 'font-size-xxl',
    xxl: 'font-size-h2',
  },
};

export interface IAvatarProperties extends Pick<ComponentProps<'div'>, 'className'> {
  variant?: 'neutral' | 'primary' | 'secondary' | 'tertiary';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  shape?: 'square' | 'circle';
  image?: string;
  text?: string;
  title?: string;
}

export const Avatar: FC<IAvatarProperties> = ({
  variant = 'neutral',
  shape = 'circle',
  size = 'md',
  title,
  image,
  text,
  className,
}) => {
  return (
    <div
      style={{
        ...(image ? { backgroundImage: `url(${image})` } : {}),
        minWidth: sizes.container[size],
        minHeight: sizes.container[size],
        width: sizes.container[size],
        height: sizes.container[size],
      }}
      title={title}
      className={classNames(
        'position-relative display-flex align-items-center justify-content-center font-weight-600 text-transform-uppercase background-size-cover background-position-center-center',
        {
          'border-radius-m': shape === 'square',
          'border-radius-full': shape === 'circle',
        },
        `background-${variant}-1 color-${variant}-7`,
        sizes.font[size],
        className,
      )}
    >
      {!image && <>{text}</>}
    </div>
  );
};
