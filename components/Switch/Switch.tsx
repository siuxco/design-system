import React, { FC, ComponentProps, useState } from 'react';
import { classNames } from '../../utils/utils';

const states = {
  parent: {
    default: 'background-neutral-2 border-neutral-3 hover:border-neutral-6 focus:border-primary-7 box-shadow-xs',
    checked: 'border-primary-7 background-primary-7 box-shadow-xs',
    error: 'background-error-2 border-error-6',
    disable: 'border-neutral-2 cursor-not-allowed background-neutral-1',
  },
  label: {
    default: '',
    checked: '',
    disable: 'color-neutral-3',
  },
};

export interface ISwitchProperties extends Omit<ComponentProps<'input'>, 'size'> {
  label?: string;
  name: string;
  id: string;
  state: 'default' | 'checked' | 'error' | 'disabled';
}

export const Switch: FC<ISwitchProperties> = ({
  className,
  state = 'default',
  defaultValue,
  id,
  disabled,
  label,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState(defaultValue);
  const getStateClasses = (object) => {
    if (disabled) {
      return object.disable;
    }
    if (isChecked) {
      return object.checked;
    }
    return object[state] || object.default;
  };

  return (
    <div className={classNames('position-relative', className)}>
      <label htmlFor={id} className="display-flex align-items-center cursor-pointer">
        <input
          className="display-none"
          id={id}
          type="checkbox"
          disabled={disabled}
          onChange={() => setIsChecked((previous) => !previous)}
          checked={Boolean(isChecked)}
          {...rest}
        />
        <div
          className={classNames(
            'transition-all transition-duration-400 width-xxl height-l font-size-s transition-fast border-radius-m border-width-1 border-style-solid display-flex align-items-center',
            getStateClasses(states.parent),
          )}>
          <div
            className={classNames(
              'transition-transform transition-duration-400 width-m height-m background-white border-radius-full margin-xxs',
            )}
            style={{
              transform: `${isChecked ? 'translateX(1.4em)' : ''}`,
            }}></div>
        </div>
        <span
          className={classNames(
            'margin-left-xs color-neutral-7 font-weight-500 user-select-none',
            {
              'cursor-not-allowed': Boolean(disabled),
            },
            getStateClasses(states.label),
          )}>
          {label}
        </span>
      </label>
    </div>
  );
};
