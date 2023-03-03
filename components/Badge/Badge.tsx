import React, { FC, MouseEventHandler } from 'react';
import { IIconProperties } from '../Icon/Icon';
import { classNames } from '../../utils/utils';

const variants = {
  parent: {
    default: 'background-neutral-1 color-neutral-7',
    primary: 'background-primary-1 color-primary-7',
    secondary: 'background-secondary-1 color-secondary-7',
    tertiary: 'background-tertiary-1 color-tertiary-7',
    success: 'background-success-1 color-success-7',
    error: 'background-error-1 color-error-7',
    warning: 'background-warning-1 color-warning-7',
    info: 'background-info-1 color-info-7',
  },
};

export interface IBadgeProperties {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  variant?: 'default' | 'primary' | 'secondary' | 'tertiary' | 'success' | 'error' | 'warning' | 'info';
  className?: string;
  closedIcon?: boolean;
  border?: boolean;
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
  border,
  variant = 'default',
  className,
  onClickRemove,
}) => {
  return (
    <div
      className={classNames(
        'padding-top-xxs padding-bottom-xxs transition-fast border-radius-xxl display-inline-flex align-items-center',
        variants.parent[variant],
        {
          'border-width-1 border-style-solid': Boolean(border),
          'padding-left-xs': Boolean(iconLeft) || Boolean(!iconLeft),
          'padding-right-xs': Boolean(!iconRight) || Boolean(iconRight),
        },
        className,
      )}
      style={{ ...style }}>
      {iconLeft && <i className={classNames(iconLeft, 'line-height-s font-size-s margin-right-xxs')} />}
      <div className={'line-height-xs'}>{children}</div>
      {iconRight && <i className={classNames(iconRight, 'line-height-s font-size-s margin-left-xxs')} />}
      {closedIcon && (
        <i
          role="presentation"
          className="icon-system-close-line cursor-pointer font-size-s margin-left-xxs"
          onClick={onClickRemove}
        />
      )}
    </div>
  );
};
