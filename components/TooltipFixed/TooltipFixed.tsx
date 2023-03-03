import React, { FC } from 'react';

const types = {
  parent: {
    dark: 'background-opacity-black-9 color-white',
    light: 'background-white color-black',
  },
};

const positions = {
  parent: {
    topLeft: 'position-top-left',
    topRight: 'position-top-right',
    bottomLeft: 'position-bottom-left',
    bottomRight: 'position-bottom-right',
  },
};

export interface ITooltipFixedProperties {
  position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  title?: string;
  type?: 'dark' | 'light';
  trigger?: React.ReactNode;
  style: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

export const TooltipFixed: FC<ITooltipFixedProperties> = ({
  type = 'light',
  position = 'topLeft',
  title,
  trigger,
  style,
  className = '',
  children,
}) => {
  return (
    <div className={`position-relative ${className}`}>
      <div
        className={`${types.parent[type]} ${positions.parent[position]} position-absolute padding-xs border-radius-xs box-shadow-m`}
        style={{
          ...style,
          transform: `translateY(${position === 'topLeft' || position === 'topRight' ? '-' : ''}100%)`,
        }}>
        {title && <div className="font-size-s font-weight-600 margin-bottom-xs">{title}</div>}
        <div className="color-neutral-7">{children}</div>
      </div>
      <span className="cursor-pointer">{trigger}</span>
    </div>
  );
};
