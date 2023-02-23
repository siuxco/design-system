import React, { FC, MouseEventHandler, ReactNode, ComponentProps } from 'react';
import { IIconProperties } from '../Icon/Icon';

const types = {
  item: {
    default: 'hover:background-grey-1',
    primary: 'hover:background-primary-8 hover:color-white',
    defaultGhost: 'border-width-1 border-style-solid border-transparent hover:border-grey-3 hover:background-grey-1',
    primaryGhost:
      'border-width-1 border-style-solid border-transparent hover:border-primary-8 hover:background-primary-1',
  },
  active: {
    default: 'background-grey-1',
    primary: 'background-primary-8 color-white hover:color-white',
    defaultGhost: 'border-width-1 border-style-solid border-grey-3 background-grey-1',
    primaryGhost: 'border-width-1 border-style-solid border-primary-8 background-primary-1',
  },
};

const sizes = {
  item: {
    default:
      'display-flex align-items-center justify-content-center border-radius-full width-xl height-xl cursor-pointer transition-fast',
  },
};

export interface IPaginationProperties extends ComponentProps<'div'> {
  className?: string;
  next?: boolean;
  previous?: boolean;
  icon?: IIconProperties['icon'];
  size: 'default';
  style?: React.CSSProperties;
  type: 'default' | 'primary' | 'defaultGhost' | 'primaryGhost';
}

const Pagination: FC<IPaginationProperties> & {
  Item: typeof Item;
} = ({ size = 'default', type = 'default', next = false, previous = false, className, style, children }) => {
  return (
    <div className={`display-flex align-items-center ${className}`} style={{ ...style }}>
      {previous && (
        <div className={`${sizes.item[size]} font-size-m color-grey-1 cursor-default`}>
          <i className="icon-system-arrow-left-s-line" />
        </div>
      )}
      <ul className="font-size-xs display-flex align-items-center">
        {React.Children.map(children, (item, index) => {
          return React.cloneElement(<>{item}</>, { key: `item-${index}`, size, type });
        })}
      </ul>
      {next && (
        <div className={`${sizes.item[size]} ${types.item[type]} font-size-m color-grey-8`}>
          <i className="icon-system-arrow-right-s-line" />
        </div>
      )}
    </div>
  );
};

export interface IPaginationItemProperties {
  children?: string | React.ReactNode;
  target?: string;
  href?: string;
  onClick?: MouseEventHandler;
  className?: string;
  active?: boolean;
  size?: 'default';
  type?: 'default' | 'primary' | 'defaultGhost' | 'primaryGhost';
}

const Item: FC<IPaginationItemProperties> = ({ size, children, type, href, target, onClick, active, className }) => {
  return (
    <li className={`margin-left-xxs margin-right-xxs flex-shrink-0 ${className}`}>
      <a href={href} target={target} onClick={onClick} className="display-block">
        <span className={`${sizes.item[size]} ${types.item[type]} ${active ? types.active[type] : ''}`}>
          {children}
        </span>
      </a>
    </li>
  );
};

Pagination.Item = Item;
export { Pagination };
