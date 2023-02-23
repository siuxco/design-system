import React, { FC, MouseEventHandler } from 'react';
import { IIconProperties } from '../Icon/Icon';

const states = {
  parent: {
    info: 'border-info-8 ',
    success: 'border-success-5',
    warning: 'border-warning-5',
    error: 'border-error-5',
  },
  icon: {
    info: 'color-info-8 icon-system-question-fill',
    success: 'color-success-5 icon-system-checkbox-circle-fill',
    warning: 'color-warning-5 icon-system-error-warning-fill',
    error: 'color-error-5 icon-system-close-circle-fill',
  },
};

export interface IToastProperties {
  state: 'info' | 'success' | 'warning' | 'error';
  title: string | React.ReactNode;
  icon?: IIconProperties['icon'];
  onCloseClick?: MouseEventHandler<HTMLElement>;
  children?: string | React.ReactNode;
  className?: string;
}

const Toast: FC<IToastProperties> & {
  Link: typeof Link;
} = ({ title, className, icon, state = 'info', children, onCloseClick }) => {
  return (
    <div
      className={`transition-fast position-relative border-radius-xxs overflow-hidden background-white box-shadow-xs border-width-4 border-style-solid border-right-none border-top-none border-bottom-none display-flex align-items-center padding-m padding-right-xl ${states.parent[state]} ${className}`}>
      <i
        role="presentation"
        onClick={onCloseClick}
        className={
          'icon-system-close-line font-size-m position-absolute position-top-right color-grey-5 hover:color-grey-8 cursor-pointer margin-right-xxs margin-top-xxs'
        }
      />
      <i className={`${states.icon[state]} icon-system-${icon} font-size-xxl margin-right-xs`} />
      <div>
        <div className="font-size-s font-weight-500 color-grey-10 text-align-left">{title}</div>
        {children && <div className="font-size-xs color-grey-5 margin-top-xs">{children}</div>}
      </div>
    </div>
  );
};

export interface IToastLinkProperties {
  children?: any;
  href: string;
  target?: string;
}

const Link: FC<IToastLinkProperties> = ({ href, target, children }) => {
  return (
    <a
      href={href}
      target={target}
      className="color-primary-8 hover:color-primary-10 display-inline-flex align-items-center cursor-pointer">
      {children}
    </a>
  );
};

Toast.Link = Link;
export { Toast };
