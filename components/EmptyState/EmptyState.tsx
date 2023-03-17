import React, { FC, ComponentProps } from 'react';
import { Icon, IIconProperties } from '../Icon/Icon';
import { classNames } from '../../utils/utils';

const states = {
  default: {
    className: 'padding-s',
  },
  border: {
    className:
      'border-style-dashed padding-xl border-neutral-2 border-width-2 border-radius-s cursor-pointer hover:background-neutral-1 active:background-neutral-2',
  },
};

export interface IEmptyStateProperties extends Pick<ComponentProps<'div'>, 'children' | 'className'> {
  icon: IIconProperties['icon'];
  title: string;
  state?: 'default' | 'border';
}

export const EmptyState: FC<IEmptyStateProperties> = ({
  title = 'No projects',
  icon = 'icon-system-folder-add-line',
  state = 'default',
  children,
  className,
}) => {
  return (
    <div className={classNames('text-align-center', states[state].className, className)}>
      <Icon icon={icon} className={classNames('font-size-h4 font-weight-100 color-neutral-5')} />
      <div className="font-primary font-size-s font-weight-600 margin-top-s">{title}</div>
      {children && <div className="color-neutral-7 line-height-m margin-top-xxs">{children}</div>}
    </div>
  );
};
