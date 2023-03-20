import React, { FC, ComponentProps, useState } from 'react';
import { classNames } from '../../utils/utils';

const states = {
  parent: {
    default: 'background-white border-neutral-2 hover:border-neutral-6 focus:border-primary-7 box-shadow-xs',
    checked:
      'border-primary-7 background-primary-7 color-white hover:border-primary-6 hover:color-primary-1 box-shadow-xs',
    error: 'border-error-6 background-white color-error-6 hover:border-error-4 hover:color-error-4',
    disable: 'border-neutral-2 cursor-not-allowed color-neutral-3 background-neutral-1',
  },
  label: {
    default: '',
    checked: '',
    disable: 'color-neutral-3',
  },
};

export interface IRadioProperties extends Omit<ComponentProps<'input'>, 'defaultValue'> {
  label?: string;
  name: string;
  id: string;
  defaultValue: boolean;
  state: 'default' | 'checked' | 'error' | 'disabled';
}

export const Radio: FC<IRadioProperties> = ({
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
          type="radio"
          disabled={disabled}
          onChange={() => setIsChecked((previous) => !previous)}
          checked={Boolean(isChecked)}
          {...rest}
        />
        <i
          className={classNames(
            'width-l height-l font-size-xs transition-fast border-radius-full border-width-1 border-style-solid display-flex align-items-center justify-content-center',
            getStateClasses(states.parent),
            {
              'icon-system-checkbox-blank-circle-fill': Boolean(isChecked),
            },
          )}
        />
        <span className={classNames('margin-left-xs color-neutral-7 font-weight-500', getStateClasses(states.label))}>
          {label}
        </span>
      </label>
    </div>
  );
};
