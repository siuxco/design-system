import React, { FC, MouseEventHandler } from 'react';
import { IIconProperties } from '../Icon/Icon';
import { classNames } from '../../utils/utils';

const types = {
  parent: {
    default: 'background-neutral-1 hover:background-neutral-2 color-neutral-7',
    primary: 'background-primary-1 hover:background-primary-2 color-primary-7',
    secondary: 'background-secondary-1 hover:background-secondary-2 color-secondary-7',
    tertiary: 'background-tertiary-1 hover:background-tertiary-2 color-tertiary-7',
  },
};

export interface IBadgeProperties {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  type?: 'default' | 'primary' | 'secondary' | 'tertiary';
  className?: string;
  closedIcon?: boolean;
  iconRight?: IIconProperties['icon'];
  iconLeft?: IIconProperties['icon'];
  onClickRemove?: MouseEventHandler<HTMLElement>;
}

export const Badge: FC<IBadgeProperties> = ({
  closedIcon,
  children,
  style,
  iconRight,
  iconLeft,
  type = 'default',
  className,
  onClickRemove,
}) => {
  return (
    <div
      className={classNames(
        'padding-top-xxs padding-bottom-xxs transition-fast border-radius-xxl cursor-pointer display-inline-flex align-items-center',
        types.parent[type],
        {
          'padding-left-xs': iconLeft,
          'padding-left-s': !iconLeft,
          'padding-right-xs': iconRight,
          'padding-right-s': !iconRight,
        },
        className,
      )}
      style={{ ...style }}>
      {iconLeft && <i className={classNames(iconLeft, 'line-height-m font-size-s margin-right-xxs')} />}
      <div className={'line-height-m font-weight-500'}>{children}</div>
      {iconRight && <i className={classNames(iconRight, 'line-height-m font-size-s margin-left-xxs')} />}
      {closedIcon && (
        <i role="presentation" className="icon-system-close-line font-size-s margin-left-xxs" onClick={onClickRemove} />
      )}
    </div>
  );
};
