import React, { FC, ComponentProps } from 'react';
import { classNames } from '../../utils/utils';

const states = {
  parent: {
    default: 'background-white border-neutral-2 hover:border-neutral-6 focus:border-primary-7 box-shadow-xs',
    error: 'border-error-6 background-white color-error-6 hover:border-error-4 hover:color-error-4',
    disabled: 'border-neutral-2 cursor-not-allowed color-neutral-3 background-neutral-1',
  },
  label: {
    default: '',
    disabled: 'color-neutral-3',
  },
};

export interface ICheckboxProperties extends Omit<ComponentProps<'input'>, 'size'> {
  label?: string;
  state: 'default' | 'checked' | 'error';
}

export const Checkbox: FC<ICheckboxProperties> = ({ className, state = 'default', label, ...rest }) => {
  const getStateClasses = (object) => {
    if (rest.disabled) {
      return object.disabled;
    }
    return object[state] || object.default;
  };

  return (
    <div className={classNames('position-relative', className)}>
      <label htmlFor={rest.id} className="display-flex align-items-center cursor-pointer">
        <input className="display-none sibling" type="checkbox" {...rest} />
        <i
          className={classNames(
            'width-l height-l font-size-s transition-fast border-radius-xs border-width-1 border-style-solid display-flex align-items-center justify-content-center',
            getStateClasses(states.parent),
            'sibling-checked:background-primary transition-all color-transparent sibling-checked:color-white icon-system-check-line',
          )}
        />
        <span
          className={classNames(
            'margin-left-xs color-neutral-7 font-weight-500 user-select-none',
            getStateClasses(states.label),
          )}
        >
          {label}
        </span>
      </label>
    </div>
  );
};
