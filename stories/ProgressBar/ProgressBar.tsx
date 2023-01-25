import React, { FC } from 'react';

const types = {
  parent: {
    default: 'background-opacity-grey-3',
    ghost: 'border-style-solid border-width-1 border-primary-5',
  },
  child: {
    default: 'background-primary-5',
    ghost: 'background-primary-5',
  },
};

export interface IProgressBarProperties {
  className?: string;
  type: 'default' | 'ghost';
  progress: number;
  style?: React.CSSProperties;
}

export const ProgressBar: FC<IProgressBarProperties> = ({ progress, className, style, type = 'default' }) => {
  return (
    <div
      className={`${types.parent[type]} position-relative width-full height-xs border-radius-s overflow-hidden ${className}`}>
      <span
        className={`${types.child[type]} position-absolute position-left border-radius-s transition-fast`}
        style={{ ...style, width: `${progress}%` }}
      />
    </div>
  );
};
