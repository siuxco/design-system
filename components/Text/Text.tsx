import React, { FC, ReactNode } from 'react';
import { classNames } from '../../utils/utils';

const variants = {
  'display-1': 'font-size-h5 tablet:font-size-h3 desktop:font-size-h1 font-weight-900 line-height-s',
  'display-2': 'font-size-xxl tablet:font-size-h5 desktop:font-size-h2 font-weight-800 line-height-s',
  'display-3': 'font-size-l tablet:font-size-xxl desktop:font-size-h4 font-weight-700 line-height-s',
  'featured-1': 'font-size-l tablet:font-size-xl desktop:font-size-xxl',
  'featured-2': 'font-size-m tablet:font-size-l desktop:font-size-xl',
  'featured-3': 'font-size-s tablet:font-size-m desktop:font-size-l',
  'title-1': 'font-size-l tablet:font-size-xl desktop:font-size-xxl font-weight-900',
  'title-2': 'font-size-m tablet:font-size-l desktop:font-size-xl font-weight-800',
  'title-3': 'font-size-s tablet:font-size-m desktop:font-size-l font-weight-700',
  'body-strong-1': 'font-size-s font-weight-700',
  'body-strong-2': 'font-weight-700',
  'body-medium-1': 'font-size-s font-weight-500',
  'body-medium-2': 'font-weight-500',
  'body-1': 'font-size-s',
  'body-2': '',
  'caption-1': 'font-size-xs',
  'caption-2': 'font-size-xxs font-weight-600',
};

export interface ITextProperties {
  className?: string;
  children?: string;
  variant?:
    | 'display-1'
    | 'display-2'
    | 'display-3'
    | 'featured-1'
    | 'featured-2'
    | 'featured-3'
    | 'title-1'
    | 'title-2'
    | 'title-3'
    | 'body-strong-1'
    | 'body-strong-2'
    | 'body-medium-1'
    | 'body-medium-2'
    | 'body-1'
    | 'body-2'
    | 'caption-1'
    | 'caption-2'
    | string;
}

export const Text: FC<ITextProperties> = ({ variant, children, className }) => {
  return <div className={classNames(variants[variant], className)}>{children}</div>;
};
