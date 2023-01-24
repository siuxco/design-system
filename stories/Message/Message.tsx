import React, { FC, ReactNode } from 'react';

const types = {
  success: {
    icon: 'checkbox-circle-line',
    container: 'background-opacity-success-7 border-success-5',
  },
  info: {
    icon: 'information-line',
    container: 'background-opacity-info-7 border-info-5',
  },
  warning: {
    icon: 'alert-line',
    container: 'background-opacity-warning-7 border-warning-5',
  },
  error: {
    icon: 'error-warning-line',
    container: 'background-opacity-error-7 border-error-5',
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
    <div className={`padding-s border-radius-xxs ${types[type].container} ${className} color-white`} style={style}>
      <div className="display-flex align-items-center">
        <i className={`icon-system-${types[type].icon} margin-right-xxs`} style={{ fontSize: '14px' }} />
        <small className="font-primary font-weight-600">{title}</small>
      </div>
      {children !== null && <div className="padding-xxs padding-bottom-none">{children}</div>}
    </div>
  );
};
