import React, { FC, ComponentProps } from 'react';
import { IIconProperties } from '../Icon/Icon';
import { classNames } from '../../utils/utils';

export interface IVerticalNavigationProperties extends ComponentProps<'div'> {
  style?: React.CSSProperties;
  className?: string;
}

const VerticalNavigation: FC<IVerticalNavigationProperties> & {
  Item: typeof Item;
} = ({ className, style, children }) => {
  const cleanChildren = React.Children.toArray(children);
  const finalChildren = cleanChildren.flatMap((item, index) => [
    React.cloneElement(<>{item}</>, { theme: cleanChildren.length - 1 !== index ? 'primary' : 'default' }),
  ]);

  return (
    <ul className={classNames('color-grey-10 cursor-pointer', className)} style={{ ...style }}>
      {finalChildren}
    </ul>
  );
};

export interface IVerticalNavigationItemProperties {
  children?: string | React.ReactNode;
  active?: boolean;
  target?: string;
  href?: string;
  className?: string;
  label?: string;
  icon?: IIconProperties['icon'];
}

const Item: FC<IVerticalNavigationItemProperties> = ({ icon, href, target, label, className, children, active }) => {
  return (
    <li>
      <a
        href={href}
        target={target}
        className={classNames(
          'position-relative color-neutral-7 hover:color-neutral-10 cursor-pointer hover:background-neutral-1 active:background-neutral-2 color-neutral-7 padding-m padding-top-s padding-bottom-s border-radius-xs display-flex align-items-center margin-bottom-xxs',
          {
            'background-neutral-1 color-black hover:color-black': Boolean(active),
          },
          className,
        )}>
        {icon && <i className={classNames('margin-right-xs font-size-m color-neutral-4', icon)} />}
        {children}
        {label && (
          <div
            className={classNames(
              'background-neutral-2 padding-xs padding-top-xxs padding-bottom-xxs font-size-xs border-radius-s margin-left-s',
              {
                'background-white': Boolean(active),
              },
            )}>
            {label}
          </div>
        )}
      </a>
    </li>
  );
};

VerticalNavigation.Item = Item;
export { VerticalNavigation };