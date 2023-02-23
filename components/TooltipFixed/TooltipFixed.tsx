import React, { FC } from 'react';

const types = {
  parent: {
    dark: 'background-opacity-black-9 color-white',
    light: 'background-white',
  },
};

const sizes = {
  parent: {
    sm: '200px',
    md: '300px',
    lg: '400px',
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
export const TooltipFixed: FC<ITooltipFixedProperties> = ({
  type = 'light',
  size = 'md',
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
        className={`${types.parent[type]} ${positions.parent[position]} position-absolute padding-xs border-radius-xxs margin-bottom-xs box-shadow-s`}
        style={{
          ...style,
          transform: `translateY(${position === 'topLeft' || position === 'topRight' ? '-' : ''}100%)`,
          width: sizes[size],
        }}>
        {title && <div className="font-size-s font-weight-600 margin-bottom-xs">{title}</div>}
        <div className="font-size-xs">{children}</div>
      </div>
      <span className="cursor-pointer">{trigger}</span>
    </div>
  );
};

export interface ITooltipFixedProperties {
  size: 'sm' | 'md' | 'lg';
  position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  title?: string;
  type?: 'dark' | 'light';
  trigger?: React.ReactNode;
  style: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}
