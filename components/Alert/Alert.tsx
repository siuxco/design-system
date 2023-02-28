import React, { FC, ComponentProps } from 'react';
import { classNames } from '../../utils/utils';

const states = {
  parent: {
    info: 'border-info-2 background-info-1',
    success: 'border-success-2 background-success-1',
    warning: 'border-warning-2 background-warning-1',
    error: 'border-error-2 background-error-1',
  },
  icon: {
    info: 'color-info-7 icon-system-question-fill',
    success: 'color-success-7 icon-system-checkbox-circle-fill',
    warning: 'color-warning-7 icon-system-error-warning-fill',
    error: 'color-error-7 icon-system-close-circle-fill',
  },
};

export interface IAlertProperties extends ComponentProps<'div'> {
  children: any;
  className: string;
  closeIcon: boolean;
  icon: string;
  onCloseClick: () => void;
  state: 'info' | 'success' | 'warning' | 'error';
}

const Alert: FC<IAlertProperties> & { Link: typeof Link } = ({
  className,
  icon,
  state,
  children,
  onCloseClick,
  closeIcon,
  style,
}) => {
  return (
    <div
      className={classNames(
        'transition-fast position-relative border-radius-xs overflow-hidden border-width-1 border-style-solid display-flex align-items-center justify-content-space-between padding-xs',
        states.parent[state],
        className,
      )}
      style={style}>
      <div className="display-flex align-items-center">
        <i className={`${states.icon[state]} ${icon} font-size-l margin-right-xs`} />
        <div className="color-neutral-9 line-height-s width-full margin-right-xxs">{children}</div>
      </div>
      {closeIcon && (
        <i
          role="presentation"
          className={'icon-system-close-line font-size-s color-neutral-7 hover:color-grey-8 cursor-pointer'}
          onClick={onCloseClick}
        />
      )}
    </div>
  );
};

const Link: FC<ILinkProperties> = ({ children, href, target, className }) => {
  return (
    <a
      className={`color-info-7 hover:color-info-9 display-inline-flex align-items-center cursor-pointer ${className}`}
      href={href}
      target={target}>
      {children}
    </a>
  );
};

export interface ILinkProperties {
  children: any;
  href: string;
  target: string;
  className: string;
}

Link.defaultProps = {
  target: '',
  className: '',
  children: (
    <>
      Learn more
      <i className="icon-system-arrow-right-line margin-left-xxs" />
    </>
  ),
};

Alert.Link = Link;

export { Alert };
