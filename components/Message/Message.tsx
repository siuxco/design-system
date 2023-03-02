import React, { FC, ReactNode } from 'react';
import { classNames } from '../../utils/utils';

const states = {
  success: {
    icon: 'icon-system-checkbox-circle-line color-success-7',
  },
  info: {
    icon: 'icon-system-information-line color-info-7',
  },
  warning: {
    icon: 'icon-system-alert-line color-warning-7',
  },
  error: {
    icon: 'icon-system-error-warning-line color-error-7',
  },
};

export interface IMessageProperties {
  style?: React.CSSProperties;
  children?: Array<ReactNode>;
  className?: string;
  title: string;
  state: 'info' | 'success' | 'warning' | 'error';
}

export const Message: FC<IMessageProperties> = ({
  children,
  className,
  title = 'Message title',
  style,
  state = 'info',
}) => {
  return (
    <div
      className={classNames(
        'padding-s background-white border-radius-xs box-shadow-s border-style-solid border-width-1 border-neutral-2',
        className,
      )}
      style={style}>
      <div className="display-flex align-items-center">
        <i className={classNames('margin-right-xs font-size-l', states[state].icon)} />
        <span className="font-primary font-size-s font-weight-600">{title}</span>
      </div>
      {children && <div className="padding-xxs color-neutral-7 line-height-m margin-top-xxs">{children}</div>}
    </div>
  );
};
