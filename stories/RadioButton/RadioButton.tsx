import React, { FC } from 'react';

const states = {
  parent: {
    default: 'border-neutral-2 hover:border-primary-6 focus:border-primary-7 color-neutral-2 background-white',
    checked: 'border-primary-8 background-secondary-8 color-primary-8',
    disable: 'border-neutral-2 cursor-not-allowed color-neutral-3 background-neutral-1',
  },
  label: {
    default: '',
    checked: '',
    disable: 'color-neutral-3',
  },
};

export interface IRadioButtonProperties {
  checked: boolean;
  className?: string;
  defaultChecked: boolean;
  disabled: boolean;
  id: string;
  label: string;
  name: string;
  state: 'default' | 'checked';
}

export const RadioButton: FC<IRadioButtonProperties> = ({
  className,
  state = 'default',
  checked,
  id,
  disabled,
  label,
  ...rest
}) => {
  const getStateClasses = (object) => {
    if (disabled) {
      return object.disable;
    }
    if (rest.checked) {
      return object.checked;
    }
    return object[state] || object.default;
  };

  return (
    <div className={`radio cursor-pointer ${className}`}>
      <label htmlFor={id} className={'display-flex cursor-pointer position-relative'}>
        <input
          className="radio-input position-absolute position-left"
          id={id}
          type="radio"
          disabled={disabled}
          {...rest}
        />
        <i
          className={`${getStateClasses(states.parent)} ${
            checked ? 'icon-system-checkbox-blank-circle-fill' : ''
          } width-l height-l font-size-xs  transition-fast radio-icon border-radius-full border-width-2 border-style-solid display-flex align-items-center justify-content-center`}
        />
        <span className={`${getStateClasses(states.label)} font-size-xs radio-label margin-left-xxs`}>{label}</span>
      </label>
    </div>
  );
};
