import React, { FC, ComponentProps } from 'react';
import { IIconProperties } from '../Icon/Icon';

const states = {
  parent: {
    default: 'border-grey-2 hover:border-primary-8 focus:border-primary-8 background-white',
    checked: 'border-primary-8 background-primary-8 color-white',
    disable: 'border-grey-2 cursor-not-allowed color-grey-3 background-grey-1',
  },
  label: {
    default: '',
    checked: '',
    disable: 'color-grey-3',
  },
};

const sizes = {
  parent: {
    md: 'width-m height-m font-size-xs',
    lg: 'width-l height-l font-size-s',
  },
  label: {
    md: 'font-size-xs',
    lg: 'font-size-s',
  },
};

export interface ICheckboxProperties extends Omit<ComponentProps<'input'>, 'size'> {
  icon?: IIconProperties['icon'];
  label?: string;
  size?: 'md' | 'lg';
  state?: 'default' | 'checked' | 'disable';
}

export const Checkbox: FC<ICheckboxProperties> = ({
  className,
  icon = 'icon-system-check-line',
  state = 'default',
  label,
  disabled,
  size = 'md',
  id,
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
    <div className={`checkbox cursor-pointer ${className}`}>
      <label htmlFor={id} className={'display-flex cursor-pointer position-relative'}>
        <input
          className="checkbox-input position-absolute position-left"
          id={id}
          type="checkbox"
          disabled={disabled}
          {...rest}
        />
        <i
          className={`${sizes.parent[size]} ${getStateClasses(
            states.parent,
          )} ${icon} transition-fast checkbox-icon border-radius-xxs border-width-1 border-style-solid display-flex align-items-center justify-content-center`}
        />
        <span className={`${sizes.label[size]} ${getStateClasses(states.label)} checkbox-label margin-left-xxs`}>
          {label}
        </span>
      </label>
    </div>
  );
};
