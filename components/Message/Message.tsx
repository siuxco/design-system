import React, { FC, ReactNode } from 'react';
import { classNames } from '../../utils/utils';

const types = {
  success: {
    icon: 'checkbox-circle-fill color-success-7',
  },
  info: {
    icon: 'information-fill color-info-7',
  },
  warning: {
    icon: 'alert-fill color-warning-7',
  },
  error: {
    icon: 'error-warning-fill color-error-7',
  },
};

export interface IMessageProperties {
  style?: React.CSSProperties;
  children?: Array<ReactNode>;
  className?: string;
  title: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

export const Message: FC<IMessageProperties> = ({
  children,
  className,
  title = 'Message title',
  style,
  type = 'info',
}) => {
  return (
    <div className={classNames('padding-s background-white border-radius-xs box-shadow-s', className)} style={style}>
      <div className="display-flex align-items-center">
        <i className={`icon-system-${types[type].icon} margin-right-xs font-size-m`} />
        <span className="font-primary font-size-s font-weight-600">{title}</span>
      </div>
      {children && <div className="padding-xxs padding-bottom-none color-neutral-7">{children}</div>}
    </div>
  );
};
