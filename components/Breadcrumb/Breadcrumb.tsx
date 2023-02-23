import React, { FC, ReactNode, ComponentProps } from 'react';
import { IIconProperties } from '../Icon/Icon';

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
    <li key={index} className="padding-left-xs padding-right-xs display-flex color-neutral-2 cursor-default">
      {types.parent[separator]}
    </li>
  );
  const cleanChildren = React.Children.toArray(children);
  const finalChildren = cleanChildren.flatMap((item, index) => [
    React.cloneElement(<>{item}</>, { theme: cleanChildren.length - 1 !== index ? 'primary' : 'default' }),
    ...(cleanChildren.length - 1 === index ? [] : [Separator(index)]),
  ]);

  return (
    <ul className={`display-flex align-items-center color-grey-10 cursor-pointer ${className}`} style={{ ...style }}>
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
        className={`${themes.parent[theme]} text-transform-lowercase display-flex align-items-center ${className}`}>
        {icon && <i className={`icon-system-${icon} margin-right-xxs`} />}
        {children}
      </a>
    </li>
  );
};

Breadcrumb.Item = Item;
export { Breadcrumb };
