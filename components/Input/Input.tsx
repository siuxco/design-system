import React, { forwardRef } from 'react';
import { IIconProperties } from '../Icon/Icon';
import { classNames } from '../../utils/utils';

const statuses = {
  parent: {
    default: 'border-neutral-2 hover:border-neutral-6 focus:border-primary-7 box-shadow-xs',
    error: 'border-error-6 hover:border-error-6 focus:border-error-6 background-opacity-error-2 box-shadow-xs',
    disable: 'border-neutral-1 color-neutral-6 background-neutral-1',
  },
  icon: {
    default: 'color-neutral-6',
    error: 'color-error-6',
    disable: 'color-neutral-4',
  },
};

export interface IInputProperties {
  className?: string;
  disabled?: boolean;
  icon?: IIconProperties['icon'];
  state?: string;
  id?: string;
  placeholder?: string;
  status: 'default' | 'error' | 'disable';
  prefix?: any;
  copy?: any;
  label?: any;
}

const Input = forwardRef<HTMLInputElement, IInputProperties>(
  ({ placeholder, prefix = '', copy = '', label = '', className, state, icon, status, id, disabled, ...rest }, ref) => {
    const getStatusClasses = (object: { [x: string]: any; default: any; error?: string; disable: any }) => {
      if (disabled) {
        return object.disable;
      }
      return object[status] || object.default;
    };
    return (
      <label className={classNames({ 'cursor-not-allowed': disabled }, className)}>
        {label && <div className="color-neutral-7 font-weight-500 margin-bottom-xs">{label}</div>}
        <div className="display-flex align-items-center position-relative">
          {icon && (
            <i
              className={classNames(
                'transition-fast position-absolute padding-left-s font-size-s pointer-events-none',
                icon,
                getStatusClasses(statuses.icon),
              )}
            />
          )}
          {prefix && (
            <div
              className={classNames(
                'transition-fast line-height-s padding-xs padding-left-s padding-right-s font-size-s border-radius-xs border-radius-right-none border-right-none border-width-1 border-style-solid pointer-events-none',
                getStatusClasses(statuses.icon),
                getStatusClasses(statuses.parent),
              )}>
              {prefix}
            </div>
          )}
          <input
            name={id}
            placeholder={placeholder}
            ref={ref}
            id={id}
            disabled={disabled}
            type={state}
            className={classNames(
              'transition-fast padding-xs font-size-s color-black background-white border-radius-xs border-width-1 border-style-solid',
              getStatusClasses(statuses.parent),
              {
                'border-radius-left-none': prefix,
                'cursor-not-allowed': disabled,
                'border-radius-right-none': copy,
                'padding-left-xl': !!icon,
                'padding-left-s padding-right-s': !icon,
              },
            )}
            {...rest}
          />
          {copy && (
            <div
              className={classNames(
                'transition-fast position-relative padding-left-m cursor-pointer line-height-s padding-xs padding-left-xl padding-right-s font-size-s border-radius-xs border-radius-left-none border-left-none border-width-1 border-style-solid',
                getStatusClasses(statuses.icon),
                getStatusClasses(statuses.parent),
              )}>
              <i className="icon-system-file-copy-line position-absolute" style={{ marginLeft: '-22px' }} />
              {copy}
            </div>
          )}
        </div>
      </label>
    );
  },
);

Input.displayName = 'Input';
export { Input };
