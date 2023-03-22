import React, { ComponentProps, forwardRef, FC } from 'react';
import { IIconProperties } from '../Icon/Icon';
import { classNames } from '../../utils/utils';

const states = {
  parent: {
    default: 'border-neutral-2 hover:border-neutral-6 focus:border-primary-7 box-shadow-xs',
    error: 'border-error-6 hover:border-error-6 focus:border-error-6 box-shadow-xs',
    disable: 'border-neutral-1 color-neutral-6',
  },
  icon: {
    default: 'color-neutral-6',
    error: 'color-error-6',
    disable: 'color-neutral-4',
  },
};

export interface ISelectProperties extends ComponentProps<'select'> {
  label?: string;
  state?: 'default' | 'error' | 'disable';
  icon?: IIconProperties['icon'];
  children?: React.ReactElement<IOptionProperties> | React.ReactElement<IOptionProperties>[];
}

export interface Subcomponents {
  Option: typeof Option;
}

const Select: React.ForwardRefExoticComponent<React.PropsWithoutRef<ISelectProperties>> & Partial<Subcomponents> =
  forwardRef<HTMLSelectElement, ISelectProperties>(
    ({ className = '', state = 'default', icon, label, children, disabled, id, ...rest }, ref) => {
      const getStatusClasses = (object) => {
        if (disabled) {
          return object.disable;
        }
        return object[state] || object.default;
      };
      return (
        <label
          className={classNames('transition-fast position-relative', className, {
            'cursor-not-allowed': disabled,
            'cursor-pointer': !disabled,
          })}>
          {label && <div className="color-neutral-7 font-weight-500 margin-bottom-xs">{label}</div>}
          <div className="display-flex align-items-center position-relative">
            {icon && (
              <i
                className={`position-absolute padding-left-s font-size-s pointer-events-none ${icon} ${getStatusClasses(
                  states.icon,
                )}`}
              />
            )}
            <select
              className={`transition-fast padding-xs font-size-s padding-right-xl background-white border-radius-xs border-width-1 border-style-solid
            ${getStatusClasses(states.parent)} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
            ${icon ? 'padding-left-xl' : 'padding-left-s padding-right-s'}
          `}
              disabled={disabled}
              id={id}
              ref={ref}
              {...rest}>
              {children}
            </select>
            <i
              className={`${getStatusClasses(
                states.icon,
              )} pointer-events-none icon-system-arrow-down-s-line font-size-m position-absolute position-right display-flex align-items-center margin-right-xs`}
            />
          </div>
        </label>
      );
    },
  );

export interface IOptionProperties extends ComponentProps<'option'> {
  value: string;
  selected?: boolean;
  disabled?: boolean;
  children?: any;
}

const Option: FC<IOptionProperties> = ({ children, value = children, disabled, selected, ...rest }) => {
  return (
    <option value={value} disabled={disabled} selected={selected} {...rest}>
      {children}
    </option>
  );
};

Select.displayName = 'Select';
Select.Option = Option;
export { Select };
