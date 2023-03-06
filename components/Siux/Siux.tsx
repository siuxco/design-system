import React, { FC, ReactNode } from 'react';
import { classNames } from '../../utils/utils';

export interface ISiuxProperties {
  className?: string;
  children?: Array<ReactNode>;
}

export const Siux: FC<ISiuxProperties> = ({ children, className }) => {
  return <div className={classNames(className)}>{children}</div>;
};
