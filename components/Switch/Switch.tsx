import React, { FC, ComponentProps, useState } from 'react';
import { classNames } from '../../utils/utils';

const states = {
  parent: {
    default: 'background-neutral-2 border-neutral-3 hover:border-neutral-6 focus:border-primary-7 box-shadow-xs',
    error: 'background-error-2 border-error-6',
    disable: 'border-neutral-2 cursor-not-allowed background-neutral-1',
  },
  label: {
    default: '',
    disable: 'color-neutral-3',
  },
};

export interface ISwitchProperties extends Omit<ComponentProps<'input'>, 'size'> {
  label?: string;
  state: 'default' | 'error';
}

export const Switch: FC<ISwitchProperties> = ({ className, state = 'default', label, ...rest }) => {
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
        <div
          className={classNames(
            'transition-all parent position-relative transition-duration-400 width-xxl height-l font-size-s transition-fast border-radius-m border-width-1 border-style-solid display-flex align-items-center',
            getStateClasses(states.parent),
            'sibling-checked:background-primary transition-all color-transparent sibling-checked:color-white',
          )}
        >
          <div
            className={classNames(
              'transition-all sibling-checked:transitionX140 transition-duration-400 width-m height-m background-white border-radius-full margin-xxs',
            )}
          ></div>
        </div>
        <span
          className={classNames(
            'margin-left-xs color-neutral-7 font-weight-500 user-select-none',
            {
              'cursor-not-allowed': Boolean(rest.disabled),
            },
            getStateClasses(states.label),
          )}
        >
          {label}
        </span>
      </label>
    </div>
  );
};
