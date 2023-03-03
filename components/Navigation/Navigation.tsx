import React, { FC, ComponentProps } from 'react';
import { IIconProperties } from '../Icon/Icon';
import { classNames } from '../../utils/utils';
import { Badge } from '../Badge/Badge';

export interface INavigationProperties extends ComponentProps<'div'> {
  orientation?: 'horizontal' | 'vertical';
  style?: React.CSSProperties;
  className?: string;
}

const Navigation: FC<INavigationProperties> & {
  Item: typeof Item;
} = ({ orientation = 'horizontal', className, style, children }) => {
  const cleanChildren = React.Children.toArray(children);
  const finalChildren = cleanChildren.flatMap((item, index) => [
    React.cloneElement(<>{item}</>, { key: index, orientation }),
  ]);

  return (
    <ul
      className={classNames(
        'color-grey-10 cursor-pointer',
        {
          'display-flex': orientation === 'horizontal',
        },
        className,
      )}
      style={{ ...style }}>
      {finalChildren}
    </ul>
  );
};

export interface INavigationItemProperties {
  orientation?: 'horizontal' | 'vertical';
  children?: string | React.ReactNode;
  active?: boolean;
  target?: string;
  href?: string;
  className?: string;
  label?: string;
  icon?: IIconProperties['icon'];
}

const Item: FC<INavigationItemProperties> = ({
  orientation,
  icon,
  href,
  target,
  label,
  className,
  children,
  active,
}) => {
  console.log('orientation', orientation);
  return (
    <li className="margin-xxs">
      <a
        href={href}
        target={target}
        className={classNames(
          'position-relative color-neutral-7 hover:color-neutral-10 cursor-pointer hover:background-neutral-1 active:background-neutral-2 color-neutral-7 padding-m padding-top-s padding-bottom-s border-radius-xs display-flex align-items-center',
          {
            'background-neutral-1 color-black hover:color-black': Boolean(active),
          },
          className,
        )}>
        {icon && <i className={classNames('margin-right-xs font-size-m color-neutral-4', icon)} />}
        {children}
        {label && (
          <Badge variant="info" border={true} className="font-size-xs margin-left-xs">
            {label}
          </Badge>
        )}
      </a>
    </li>
  );
};

Navigation.Item = Item;
export { Navigation };
