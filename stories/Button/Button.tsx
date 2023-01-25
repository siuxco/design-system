import React, { MouseEventHandler, forwardRef } from 'react';
import { IIconProperties } from '../Icon/Icon';

const types = {
  parent: {
    // Primary buttons
    primary: 'background-primary-7 hover:background-primary-6 color-white',
    'primary-light': 'background-primary-1 color-primary-7 hover:color-primary-8 hover:background-opacity-primary-4',
    'primary-link': 'background-transparent color-primary-7 hover:background-primary-1',

    // Secondary buttons
    secondary: 'background-secondary-7 hover:background-secondary-6 color-white',
    'secondary-light':
      'background-secondary-1 color-secondary-7 hover:color-secondary-8 hover:background-opacity-secondary-4',
    'secondary-link': 'background-transparent color-secondary-7 hover:background-secondary-1',

    // Tertiary buttons
    tertiary: 'background-tertiary-7 hover:background-tertiary-6 color-white',
    'tertiary-light':
      'background-tertiary-1 color-tertiary-7 hover:color-tertiary-8 hover:background-opacity-tertiary-4',
    'tertiary-link': 'background-transparent color-tertiary-7 hover:background-tertiary-1',

    // Cancel buttons
    cancel: 'background-neutral-7 hover:background-neutral-6 color-white',
    'cancel-light': 'background-neutral-1 color-neutral-7 hover:color-neutral-8 hover:background-opacity-neutral-4',
    'cancel-link': 'background-transparent color-neutral-7 hover:background-neutral-1',

    // Delete buttons
    delete: 'background-error-7 hover:background-error-6 color-white',
    'delete-light': 'background-error-1 color-error-7 hover:color-error-8 hover:background-opacity-error-4',

    // Black and white
    black: 'background-black hover:background-opacity-black-8 color-white',
    white: 'background-white hover:background-opacity-neutral-2 color-black',

    // Disabled
    disabled: 'background-neutral-1 color-neutral-5 cursor-not-allowed',
  },
};

const sizes = {
  parent: {
    'extra-small': 'font-size-xs padding-xxs',
    small: 'font-size-xs padding-xs',
    medium: 'padding-s',
    large: 'font-size-s padding-m',
    'extra-large': 'font-size-m padding-m',
  },
  icon: {
    'extra-small': 'font-size-xs',
    small: 'font-size-s',
    medium: 'font-size-s',
    large: 'font-size-m',
    'extra-large': 'font-size-l',
  },
  child: {
    'extra-small': 'padding-xs',
    small: 'padding-xs',
    medium: 'padding-xs',
    large: 'padding-m',
    'extra-large': 'padding-l',
  },
};

const Button = forwardRef<HTMLInputElement, IButtonProperties>(
  (
    {
      size = 'medium',
      type = 'primary',
      className = '',
      iconLeft,
      iconRight,
      children,
      style,
      onClick,
      disabled,
      loading,
      ...rest
    },
    ref,
  ) => {
    const finalType = disabled ? 'disabled' : type;
    return (
      <button
        disabled={disabled || loading}
        ref={ref}
        type="submit"
        onClick={onClick}
        className={`border-radius-xs text-align-center transition-fast ${sizes.parent[size]} ${
          types.parent[finalType]
        } ${!loading && !disabled && 'cursor-pointer'} ${loading && 'cursor-progress'} ${className}`}
        style={{ ...style }}
        {...rest}>
        <div
          className={`display-flex align-items-center font-weight-500 padding-top-none padding-bottom-none pointer-events-none ${sizes.child[size]}`}>
          {loading ? (
            <i className={`icon-system-loader-4-line opacity-7 button-loading margin-right-xxs ${sizes.icon[size]}`} />
          ) : (
            iconLeft && (
              <i
                className={`line-height-xxs ${iconLeft} ${sizes.icon[size]} ${
                  (children || iconRight) && 'margin-right-xxs'
                }`}
              />
            )
          )}
          {children}
          {!loading && iconRight && (
            <i
              className={`line-height-xxs ${iconRight} ${sizes.icon[size]} ${
                (children || iconLeft) && 'margin-left-xxs'
              }`}
            />
          )}
        </div>
      </button>
    );
  },
);

Button.displayName = 'Button';

export interface IButtonProperties {
  style?: React.CSSProperties;
  iconLeft?: IIconProperties['icon'];
  iconRight?: IIconProperties['icon'];
  loading?: boolean;
  children?: any;
  size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  type?:
    | 'primary'
    | 'primary-light'
    | 'primary-link'
    | 'secondary'
    | 'secondary-light'
    | 'secondary-link'
    | 'tertiary'
    | 'tertiary-light'
    | 'tertiary-link'
    | 'cancel'
    | 'cancel-light'
    | 'cancel-link'
    | 'delete'
    | 'delete-light'
    | 'black'
    | 'white'
    | 'disabled';
  disabled?: boolean;
  onClick?: MouseEventHandler;
  className?: string;
}

Button.defaultProps = {
  style: {},
  iconLeft: null,
  iconRight: null,
  loading: false,
  size: 'medium',
  type: 'primary',
  disabled: false,
  onClick: () => {},
  className: '',
};

export { Button };
