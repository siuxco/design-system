import React, { FC, ComponentProps } from 'react';
import { IIconProperties } from '../Icon/Icon';
import { classNames } from '../../utils/utils';

const types = {
  parent: {
    arrow: <i className="icon-system-arrow-right-s-line font-size-m color-neutral-3" />,
    slash: '/',
    dash: '-',
  },
};

const themes = {
  parent: {
    default: 'color-neutral-7 hover:color-neutral-7 cursor-default',
    primary: 'color-black font-weight-600 hover:color-black cursor-pointer',
  },
};

export interface IBreadcrumbProperties extends ComponentProps<'div'> {
  separator: 'arrow' | 'slash' | 'dash';
  style?: React.CSSProperties;
  className?: string;
}

const Breadcrumb: FC<IBreadcrumbProperties> & {
  Item: typeof Item;
} = ({ separator = 'dash', className, style, children }) => {
  const Separator = (index) => (
    <li key={index} className="padding-left-xxs padding-right-xxs display-flex color-neutral-2 cursor-default">
      {types.parent[separator]}
    </li>
  );
  const cleanChildren = React.Children.toArray(children);
  const finalChildren = cleanChildren.flatMap((item, index) => [
    React.cloneElement(<>{item}</>, { theme: cleanChildren.length - 1 !== index ? 'primary' : 'default' }),
    ...(cleanChildren.length - 1 === index ? [] : [Separator(index)]),
  ]);

  return (
    <ul
      className={classNames('display-flex align-items-center color-grey-10 cursor-pointer', className)}
      style={{ ...style }}>
      {finalChildren}
    </ul>
  );
};

export interface IBreadcrumbItemProperties {
  children?: string | React.ReactNode;
  target?: string;
  href?: string;
  className?: string;
  icon?: IIconProperties['icon'];
  theme?: 'default' | 'primary';
}

const Item: FC<IBreadcrumbItemProperties> = ({ theme, icon, href, target, className, children }) => {
  return (
    <li>
      <a
        href={href}
        target={target}
        className={classNames(
          'hover:background-white active:background-neutral-4 padding-xs padding-top-xxs padding-bottom-xxs border-radius-xs display-flex align-items-center',
          themes.parent[theme],
          className,
        )}>
        {icon && <i className={classNames('margin-right-xs', icon)} />}
        {children}
      </a>
    </li>
  );
};

Breadcrumb.Item = Item;
export { Breadcrumb };
