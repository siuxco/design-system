import { Button } from './Button';
import { Meta } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: { control: { type: 'select' } },
  },
} as Meta<typeof Button>;

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const Tertiary = {
  args: {
    variant: 'tertiary',
    children: 'Button',
  },
};

export const Loading = {
  args: {
    variant: 'primary',
    loading: true,
    children: 'Button',
  },
};

export const IconLeft = {
  args: {
    variant: 'primary',
    iconLeft: 'icon-system-download-line',
    children: 'Button',
  },
};

export const IconRight = {
  args: {
    variant: 'primary',
    iconRight: 'icon-system-arrow-right-line',
    children: 'Button',
  },
};

export const Cancel = {
  args: {
    variant: 'cancel-link',
    children: 'Cancel',
  },
};

export const Delete = {
  args: {
    variant: 'delete-light',
    children: 'Delete',
  },
};

export const Black = {
  args: {
    variant: 'black',
    children: 'Button',
  },
};

export const White = {
  args: {
    variant: 'white',
    children: 'Button',
  },
};

export const Ghost = {
  args: {
    variant: 'white',
    children: 'Button',
    className: 'border-style-solid border-width-1 border-neutral-2 hover:border-neutral-3',
  },
};

export const Shadow = {
  args: {
    variant: 'white',
    children: 'Login with Google',
    iconLeft: 'icon-system-google-fill',
    className:
      'border-style-solid border-width-1 border-neutral-2 hover:border-neutral-3 box-shadow-s hover:box-shadow-m',
  },
};
