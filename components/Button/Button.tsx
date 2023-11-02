import React, { forwardRef, ComponentProps } from 'react';
import { IIconProperties } from '../Icon/Icon';
import { classNames } from '../../utils/utils';

const variants = {
  parent: {
    // Primary buttons
    primary: 'background-primary-7 hover:background-primary-5 active:background-primary-8 color-white',
    'primary-light':
      'background-primary-1 color-primary-7 hover:color-primary-8 hover:background-primary-2 active:background-primary-3',
    'primary-link': 'color-primary-7 hover:color-primary-5 active:color-primary-7',

    // Secondary buttons
    secondary: 'background-secondary-7 hover:background-secondary-6 active:background-secondary-8 color-white',
    'secondary-light':
      'background-secondary-1 color-secondary-7 hover:color-secondary-8 hover:background-secondary-2 active:background-secondary-3',
    'secondary-link': 'color-secondary-7 hover:color-secondary-5 active:color-secondary-7',

    // Tertiary buttons
    tertiary: 'background-tertiary-7 hover:background-tertiary-6 active:background-tertiary-8 color-white',
    'tertiary-light':
      'background-tertiary-1 color-tertiary-7 hover:color-tertiary-8 hover:background-tertiary-2 active:background-tertiary-3',
    'tertiary-link': 'color-tertiary-7 hover:color-tertiary-5 active:background-tertiary-7',

    // Cancel buttons
    cancel: 'background-neutral-7 hover:background-neutral-6 color-white active:background-neutral-8',
    'cancel-light':
      'background-neutral-1 color-neutral-7 hover:color-neutral-8 hover:background-neutral-2 active:background-neutral-3',
    'cancel-link': 'color-neutral-7 hover:color-neutral-5 active:color-neutral-7',

    // Delete buttons
    delete: 'background-error-7 hover:background-error-6 color-white',
    'delete-light':
      'background-error-1 color-error-7 hover:color-error-8 hover:background-error-2 active:background-error-3',

    // Black and white
    black: 'background-black hover:background-neutral-9 color-white active:background-neutral-10',
    'black-link': 'color-black hover:color-neutral-7 active:color-black',
    white: 'background-white hover:background-neutral-1 color-black active:background-neutral-2',
    'white-link': 'color-white hover:color-neutral-2 active:color-white',

    // Disabled
    disabled: 'background-neutral-1 color-neutral-5 cursor-not-allowed',
  },
};

const sizes = {
  parent: {
    sm: 'font-size-xs padding-xs',
    md: 'padding-s',
    lg: 'font-size-s padding-m',
  },
  icon: {
    sm: 'font-size-s',
    md: 'font-size-s',
    lg: 'font-size-m',
  },
  child: {
    sm: 'padding-xs',
    md: 'padding-xs',
    lg: 'padding-xs',
  },
};

export interface IButtonProperties extends ComponentProps<'button'> {
  iconLeft?: IIconProperties['icon'];
  iconRight?: IIconProperties['icon'];
  loading?: boolean;
  size?: 'sm' | 'md' | 'lg';
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
    | 'black-link'
    | 'white'
    | 'white-link';
}

const Button = forwardRef<HTMLButtonElement, IButtonProperties>(
  (
    {
      size = 'md',
      variant = 'primary',
      className,
      iconLeft,
      iconRight,
      children,
      disabled = false,
      loading = false,
      ...rest
    },
    ref,
  ) => {
    const finalVariant = disabled ? 'disabled' : variant;
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
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
        {...rest}
      >
        <div
          className={classNames(
            'display-flex align-items-center line-height-s font-weight-500 padding-top-none padding-bottom-none pointer-events-none',
            sizes.child[size],
            {
              'padding-right-none': Boolean(iconRight),
              'padding-left-xxs': Boolean(iconLeft),
            },
          )}
        >
          {loading ? (
            <i
              className={classNames(
                'icon-system-loader-4-line opacity-7 button-loading margin-right-xxs animation-animated animation-rotate-right animation-infinite',
                sizes.icon[size],
              )}
            />
          ) : (
            iconLeft && <i className={classNames('margin-right-xs', iconLeft, sizes.icon[size])} />
          )}
          <span>{children}</span>
          {!loading && iconRight && <i className={classNames('margin-left-xs', iconRight, sizes.icon[size])} />}
        </div>
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
