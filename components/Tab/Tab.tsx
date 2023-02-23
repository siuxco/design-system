import React, { FC, MouseEventHandler } from 'react';
import { IIconProperties } from '../Icon/Icon';

const types = {
  parent: {
    default: '',
    primary: 'background-primary-8',
  },
  child: {
    default: 'hover:border-primary-8 border-transparent hover:color-primary-8 color-grey-6',
    primary: 'hover:border-white border-transparent hover:color-white color-white',
  },
  // The active classes are not working, because the logic is wrong with the border color
  active: {
    default: 'border-primary-8 color-primary-8 hover:color-primary-8',
    primary: 'border-white color-white hover:color-white',
  },
};

const sizes = {
  parent: {
    md: 'font-size-xs padding-top-xs padding-bottom-xs padding-left-l padding-right-l',
    lg: 'font-size-s padding-top-s padding-bottom-s padding-left-xxl padding-right-xxl',
  },
  icon: {
    md: 'font-size-s',
    lg: 'font-size-m',
  },
};
export interface ITabProperties {
  className?: string;
  size: 'md' | 'lg';
  style?: React.CSSProperties;
  type: 'default' | 'primary';
  children: any;
}

const Tab: FC<ITabProperties> & {
  Item: typeof Item;
} = ({ size = 'md', type = 'default', className = '', style, children }) => {
  return (
    <ul
      className={`${types.parent[type]} display-flex align-items-center justify-content-center ${className}`}
      style={{ ...style }}>
      {children.map((item, index) => React.cloneElement(item, { size, type, key: `tab-${index}` }))}
    </ul>
  );
};

export interface ITabItemProperties {
  active?: boolean;
  icon?: IIconProperties['icon'];
  onClick?: MouseEventHandler;
  className?: string;
  size?: ITabProperties['size'];
  type?: ITabProperties['type'];
  children: any;
}

const Item: FC<ITabItemProperties> = ({
  icon = '',
  children,
  size,
  type,
  onClick,
  active = 'false',
  className = '',
}) => {
  return (
    <li
      onClick={onClick}
      role="presentation"
      className={`${active && types.active[type]} ${types.child[type]} ${
        sizes.parent[size]
      } display-flex align-items-center text-transform-uppercase cursor-pointer border-style-solid border-width-2 border-left-none border-right-none border-top-none transition-fast ${className}`}>
      {icon && <i className={`${sizes.icon[size]} ${icon} margin-right-xs`} />}
      {children}
    </li>
  );
};

Tab.Item = Item;

export { Tab };
