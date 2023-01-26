import React, { FC, MouseEventHandler } from 'react';
import { IIconProperties } from '../Icon/Icon';

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
  remove?: boolean;
  iconRight?: IIconProperties['icon'];
  iconLeft?: IIconProperties['icon'];
  onClickRemove?: MouseEventHandler<HTMLElement>;
}

export const Badge: FC<IBadgeProperties> = ({
  remove,
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
      className={`${types.parent[type]} ${iconLeft ? 'padding-left-xs' : 'padding-left-s'} ${
        iconRight ? 'padding-right-xs' : 'padding-right-s'
      } padding-top-xxs padding-bottom-xxs transition-fast border-radius-xxl cursor-pointer display-inline-flex align-items-center ${className}`}
      style={{ ...style }}>
      {iconLeft && <i className={`icon-system-${iconLeft} line-height-m font-size-xs margin-right-xxs`} />}
      <div className={'font-size-xs line-height-m font-weight-500'}>{children}</div>
      {iconRight && <i className={`icon-system-${iconRight} line-height-m font-size-xs margin-left-xxs`} />}
      {remove && (
        <i
          role="presentation"
          className={'font-size-s icon-system-close-circle-fill margin-left-xs'}
          onClick={onClickRemove}
        />
      )}
    </div>
  );
};
