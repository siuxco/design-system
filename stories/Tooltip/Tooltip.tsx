import PropTypes from 'prop-types';
import React, { FC, HTMLProps } from 'react';

export interface ITooltipProperties extends HTMLProps<HTMLElement> {
  className?: string;
  event?: HTMLElement;
  noOffset?: boolean;
  visible?: boolean;
}

export const Tooltip: FC<ITooltipProperties> = ({
  children,
  event,
  noOffset = false,
  visible = true,
  className = '',
}) => {
  return (
    <div className={`position-relative ${className}`}>
      <div
        className={visible ? 'position-absolute position-top z-index-9' : 'display-none'}
        style={{
          width: '200px',
          transition: 'transform 300ms ease-in-out',
          transform: `translate(${event?.offsetLeft}px, ${event?.offsetTop + (noOffset ? -30 : 45)}px)`,
        }}>
        <div className="background-opacity-black-9 color-white padding-xs border-radius-xxs margin-bottom-xs box-shadow-s">
          {children}
        </div>
      </div>
    </div>
  );
};
