import React, { FC, ComponentProps } from 'react';
import { classNames } from '../../utils/utils';

export interface INavigationProperties extends ComponentProps<'div'> {
  orientation?: 'horizontal' | 'vertical';
  style?: React.CSSProperties;
  className?: string;
}

const Navigation: FC<INavigationProperties> = ({ orientation = 'horizontal', className, style, children }) => {
  return (
    <ul
      className={classNames(
        'display-flex',
        {
          'flex-direction-column': orientation === 'vertical',
        },
        className,
      )}
      style={{ ...style }}>
      {children}
    </ul>
  );
};

export { Navigation };
