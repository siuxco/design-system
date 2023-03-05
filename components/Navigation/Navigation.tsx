import React, { FC, ComponentProps } from 'react';
import { classNames } from '../../utils/utils';

export interface INavigationProperties extends ComponentProps<'div'> {
  orientation?: 'horizontal' | 'vertical';
  style?: React.CSSProperties;
  className?: string;
}

const Navigation: FC<INavigationProperties> = ({ orientation = 'horizontal', className, style, children }) => {
  const cleanChildren = React.Children.toArray(children);
  const finalChildren = cleanChildren.flatMap((item, index) => [
    React.cloneElement(<>{item}</>, { key: index, orientation }),
  ]);

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
      {finalChildren}
    </ul>
  );
};

export { Navigation };
