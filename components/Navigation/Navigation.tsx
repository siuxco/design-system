import React, { FC, forwardRef, ComponentProps } from 'react';
import { classNames } from '../../utils/utils';
import { IButtonProperties, Button } from '../Button/Button';

export interface INavigationProperties extends Pick<ComponentProps<'div'>, 'className' | 'children'> {
  activeVariant?: IButtonProperties['variant'];
  variant?: IButtonProperties['variant'];
  orientation?: 'horizontal' | 'vertical';
  size?: IButtonProperties['size'];
  children?: React.ReactElement<IItemProperties> | React.ReactElement<IItemProperties>[];
  active: number;
}

const orientationVariants = {
  horizontal: {
    child: 'margin-right-xxs',
  },
  vertical: {
    child: 'margin-bottom-xxs',
  },
};

const Navigation: FC<INavigationProperties> & { Item: typeof Item } = ({
  activeVariant = 'primary-light',
  variant = 'cancel-link',
  size = 'medium',
  orientation = 'horizontal',
  active = 0,
  className,
  children,
}) => {
  return (
    <ul
      className={classNames(
        'display-flex',
        {
          'flex-direction-column': orientation === 'vertical',
        },
        className,
      )}
    >
      {React.Children.toArray(children).map((child: React.ReactElement, index) => {
        return React.cloneElement(child, {
          className: child.props.className + ' ' + orientationVariants[orientation].child,
          variant: child.props.variant || (active === index || child.props.active ? activeVariant : variant),
          size: size,
        });
      })}
    </ul>
  );
};

export interface IItemProperties extends IButtonProperties, ComponentProps<'button'> {
  active?: boolean;
}

const Item: FC<IItemProperties> = forwardRef<HTMLButtonElement, IItemProperties>(({ ref, active, ...rest }) => {
  return <Button {...rest} />;
});

Item.displayName = 'Item';
Navigation.Item = Item;

export { Navigation };
