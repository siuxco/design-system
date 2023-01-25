import React, { forwardRef, ReactNode, FC } from 'react';
import { IIconProperties } from '../Icon/Icon';

const statuses = {
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

export interface ISelectProperties {
  children?: Array<ReactNode>;
  className?: string;
  disabled?: boolean;
  icon?: IIconProperties['icon'];
  id?: string;
  label?: string;
  placeholder?: string;
  state: 'default' | 'error' | 'disable';
}

const Select: FC<ISelectProperties> & {
  Option: typeof Option;
} = forwardRef<HTMLSelectElement, ISelectProperties>(
  ({ placeholder, className, state, icon, label, children, disabled, id, ...rest }, ref) => {
    const getStatusClasses = (object) => {
      if (disabled) {
        return object.disable;
      }
      return object[status] || object.default;
    };
    return (
      <label
        className={`transition-fast position-relative ${className} ${
          disabled ? 'cursor-not-allowed' : 'cursor-pointer'
        }`}>
        {label && <div className="color-neutral-7 font-weight-500 margin-bottom-xs">{label}</div>}
        <div className="display-flex align-items-center position-relative">
          {icon && (
            <i
              className={`position-absolute padding-left-s font-size-s pointer-events-none ${icon} ${getStatusClasses(
                statuses.icon,
              )}`}
            />
          )}
          <select
            className={`transition-fast padding-xs font-size-s padding-right-xl border-radius-xs border-width-1 border-style-solid 
            ${getStatusClasses(statuses.parent)} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
            ${icon ? 'padding-left-xl' : 'padding-left-s padding-right-s'}
          `}
            disabled={disabled}
            placeholder={placeholder}
            id={id}
            ref={ref}
            {...rest}>
            {children}
          </select>
          <i
            className={`${getStatusClasses(
              statuses.icon,
            )} pointer-events-none icon-system-arrow-down-s-line font-size-m position-absolute position-right display-flex align-items-center margin-right-xs`}
          />
        </div>
      </label>
    );
  },
);

export interface ISelectOptionProperties {
  children?: any;
  disabled?: boolean;
  selected?: boolean;
  value: string;
}

const Option: FC<ISelectOptionProperties> = ({ children, value = children, disabled, selected, ...rest }) => {
  return (
    <option value={value} disabled={disabled} selected={selected} {...rest}>
      {children}
    </option>
  );
};

Select.displayName = 'Select';
Select.Option = Option;
export { Select };
