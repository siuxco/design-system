import React, { MouseEventHandler, forwardRef, ComponentProps } from 'react';
import { IIconProperties } from '../Icon/Icon';

const variants = {
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
      variant = 'primary',
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
    const finalVariant = disabled ? 'disabled' : variant;
    return (
      <button
        disabled={disabled || loading}
        ref={ref}
        type="button"
        onClick={onClick}
        className={`border-radius-xs text-align-center transition-fast ${sizes.parent[size]} ${
          variants.parent[finalVariant]
        } ${!loading && !disabled && 'cursor-pointer'} ${loading && 'cursor-progress'} ${className}`}
        style={{ ...style }}
        {...rest}>
        <div
          className={`display-flex align-items-center font-weight-500 padding-top-none padding-bottom-none pointer-events-none ${sizes.child[size]}`}>
          {loading ? (
            <i
              className={`icon-system-loader-4-line opacity-7 button-loading margin-right-xxs animation-rotate ${sizes.icon[size]}`}
            />
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

export interface IButtonProperties extends ComponentProps<'button'> {
  /**
   * Add inline styles to the component
   */
  style?: React.CSSProperties;
  /**
   * Icon placed before button text
   */
  iconLeft?: IIconProperties['icon'];
  /**
   * Icon placed after button text
   */
  iconRight?: IIconProperties['icon'];
  /**
   * If 'true' loading icon will appear before button text
   */
  loading?: boolean;
  /**
   * The size of the component
   */
  size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  /**
   * The content of the component
   */
  children?: any;
  /**
   * The variant of the component
   */
  variant?:
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
    | 'white';
  /**
   * If 'true' the component is disabled
   */
  disabled?: boolean;
  /**
   * Callback fired when the button is clicked.
   * You can pull out the new value by accessing event.target.value (string).
   */
  onClick?: MouseEventHandler;
  /**
   * Add classes to the component
   */
  className?: string;
}

export { Button };
