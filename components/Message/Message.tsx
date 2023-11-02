import React, { FC, ComponentProps } from 'react';
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

export interface IMessageProperties extends Pick<ComponentProps<'div'>, 'className' | 'children'> {
  state?: 'info' | 'success' | 'warning' | 'error';
  onClose?: ComponentProps<'button'>['onClick'];
  close?: boolean;
  title?: string;
}

export const Message: FC<IMessageProperties> = ({
  title = 'Message title',
  state = 'info',
  className,
  children,
  onClose,
  close,
}) => {
  return (
    <div
      className={classNames(
        'padding-s background-white border-radius-xs box-shadow-s border-style-solid border-width-1 border-neutral-2',
        className,
      )}
    >
      <div
        className={classNames('display-flex align-items-center', {
          'justify-content-space-between': close,
          'justify-content-flex-start': !close,
        })}
      >
        <div className="display-flex align-items-center">
          <i className={classNames('margin-right-xs font-size-l', states[state].icon)} />
          <span className="font-primary font-size-s font-weight-600">{title}</span>
        </div>
        {close && (
          <i
            role="presentation"
            onClick={onClose}
            className="icon-system-close-line font-size-m color-grey-5 hover:color-grey-8 cursor-pointer"
          />
        )}
      </div>
      {children && <div className="padding-xxs color-neutral-7 line-height-m margin-top-xxs">{children}</div>}
    </div>
  );
};
