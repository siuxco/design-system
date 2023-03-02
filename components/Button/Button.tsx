import React, { MouseEventHandler, forwardRef, ComponentProps } from 'react';
import { IIconProperties } from '../Icon/Icon';
import { classNames } from '../../utils/utils';

const variants = {
  parent: {
    // Primary buttons
    primary: 'background-primary-7 hover:background-primary-5 active:background-primary-8 color-white',
    'primary-light':
      'background-primary-1 color-primary-7 hover:background-opacity-primary-4 active:background-opacity-primary-5',
    'primary-link': 'background-transparent color-primary-7 hover:background-primary-1 active:background-primary-2',

    // Secondary buttons
    secondary: 'background-secondary-7 hover:background-secondary-6 active:background-secondary-8 color-white',
    'secondary-light':
      'background-secondary-1 color-secondary-7 hover:color-secondary-8 hover:background-opacity-secondary-4 active:background-opacity-secondary-5',
    'secondary-link':
      'background-transparent color-secondary-7 hover:background-secondary-1 active:background-secondary-2',

    // Tertiary buttons
    tertiary: 'background-tertiary-7 hover:background-tertiary-6 active:background-tertiary-8 color-white',
    'tertiary-light':
      'background-tertiary-1 color-tertiary-7 hover:color-tertiary-8 hover:background-opacity-tertiary-4 active:background-opacity-tertiary-5',
    'tertiary-link': 'background-transparent color-tertiary-7 hover:background-tertiary-1 active:background-tertiary-2',

    // Cancel buttons
    cancel: 'background-neutral-7 hover:background-neutral-6 color-white active:background-neutral-8',
    'cancel-light':
      'background-neutral-1 color-neutral-7 hover:color-neutral-8 hover:background-opacity-neutral-4 active:background-opacity-neutral-6',
    'cancel-link': 'background-transparent color-neutral-7 hover:background-neutral-2 active:background-neutral-4',

    // Delete buttons
    delete: 'background-error-7 hover:background-error-6 color-white',
    'delete-light':
      'background-error-1 color-error-7 hover:color-error-8 hover:background-opacity-error-4 active:background-opacity-error-6',

    // Black and white
    black: 'background-black hover:background-opacity-black-8 color-white active:background-opacity-black-6',
    white: 'background-white hover:background-opacity-neutral-2 color-black active:background-neutral-2',

    // Disabled
    disabled: 'background-neutral-1 color-neutral-5 cursor-not-allowed',
  },
};

const sizes = {
  parent: {
    small: 'font-size-xs padding-xs',
    medium: 'padding-s',
    large: 'font-size-s padding-m',
  },
  icon: {
    small: 'font-size-s',
    medium: 'font-size-s',
    large: 'font-size-m',
  },
  child: {
    small: 'padding-xs',
    medium: 'padding-xs',
    large: 'padding-xs',
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
      disabled = false,
      loading = false,
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
        className={classNames(
          'border-radius-xs text-align-center transition-all',
          sizes.parent[size],
          variants.parent[finalVariant],
          {
            'cursor-pointer': !loading && !disabled,
            'cursor-progress': loading,
          },
          className,
        )}
        style={{ ...style }}
        {...rest}>
        <div
          className={classNames(
            'display-flex align-items-center font-weight-500 padding-top-none padding-bottom-none pointer-events-none',
            sizes.child[size],
            {
              'padding-right-none': Boolean(iconRight),
              'padding-left-xxs': Boolean(iconLeft),
            },
          )}>
          {loading ? (
            <i
              className={classNames(
                'icon-system-loader-4-line opacity-7 button-loading margin-right-xxs animation-animated animation-rotate-right animation-infinite',
                sizes.icon[size],
              )}
            />
          ) : (
            iconLeft && (
              <i
                className={classNames('line-height-xxs', iconLeft, sizes.icon[size], {
                  'margin-right-xs': children || iconRight,
                })}
              />
            )
          )}
          {children}
          {!loading && iconRight && (
            <i
              className={classNames('line-height-xxs', iconRight, sizes.icon[size], {
                'margin-left-xs': children || iconLeft,
              })}
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
  size?: 'small' | 'medium' | 'large';
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
