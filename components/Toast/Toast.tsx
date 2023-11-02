import React, { FC, MouseEventHandler, ComponentProps } from 'react';
import { IIconProperties } from '../Icon/Icon';
import { classNames } from '../../utils/utils';

const states = {
  parent: {
    info: 'border-info-8 ',
    success: 'border-success-5',
    warning: 'border-warning-5',
    error: 'border-error-5',
  },
  icon: {
    info: 'color-info-8 icon-system-question-line',
    success: 'color-success-5 icon-system-checkbox-circle-line',
    warning: 'color-warning-5 icon-system-error-warning-line',
    error: 'color-error-5 icon-system-close-circle-line',
  },
};

export interface IToastProperties extends Pick<ComponentProps<'div'>, 'className' | 'children'> {
  state?: 'info' | 'success' | 'warning' | 'error';
  title?: string | React.ReactNode;
  icon?: IIconProperties['icon'];
  onClose?: MouseEventHandler<HTMLElement>;
}

const Toast: FC<IToastProperties> & {
  Link: typeof Link;
} = ({ title, className, icon, state = 'info', children, onClose }) => {
  return (
    <div
      className={classNames(
        'transition-fast position-relative border-radius-xs overflow-hidden background-white box-shadow-s border-style-solid border-width-1 border-neutral-2 display-flex align-items-center padding-m padding-left-s padding-right-xl',
        className,
      )}
    >
      <div
        className={classNames(
          'border-width-5 border-style-solid border-right-none border-top-none border-bottom-none height-full position-absolute position-left',
          states.parent[state],
        )}
      ></div>
      <i
        role="presentation"
        onClick={onClose}
        className={
          'icon-system-close-line font-size-m position-absolute position-top-right color-grey-5 hover:color-grey-8 cursor-pointer margin-right-xs margin-top-xs'
        }
      />
      <i className={classNames('font-size-l margin-right-xs', states.icon[state], icon)} />
      <div>
        <div className="font-size-s font-weight-500 color-grey-10 text-align-left">{title}</div>
        {children && <div className="color-grey-5 margin-top-xxs">{children}</div>}
      </div>
    </div>
  );
};

export interface IToastLinkProperties extends ComponentProps<'a'> {}

const Link: FC<IToastLinkProperties> = ({ className, children, ...rest }) => {
  return (
    <a
      className={classNames(
        'color-primary-8 hover:color-primary-10 display-inline-flex align-items-center cursor-pointer',
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
};

Toast.Link = Link;
export { Toast };
