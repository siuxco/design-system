import React from 'react';
import { Badge } from './Badge';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: { control: { type: 'select' } },
  },
} as Meta<typeof Badge>;

export const Default = {
  args: {
    variant: 'default',
    children: 'Badge',
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Badge',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Badge',
  },
};

export const Tertiary = {
  args: {
    variant: 'tertiary',
    children: 'Badge',
  },
};

export const Info = {
  args: {
    variant: 'info',
    children: 'Badge',
  },
};

export const Success = {
  args: {
    variant: 'success',
    children: 'Badge',
  },
};

export const Error = {
  args: {
    variant: 'error',
    children: 'Badge',
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    children: 'Badge',
  },
};

export const IconLeft = {
  args: {
    variant: 'primary',
    children: 'Badge',
    iconLeft: 'icon-system-shield-user-fill',
  },
};

export const IconRight = {
  args: {
    variant: 'primary',
    children: 'Badge',
    iconRight: 'icon-system-medal-line',
  },
};

export const Number = {
  args: {
    variant: 'error',
    children: '1',
    border: true,
  },
};

export const closeIcon = {
  args: {
    variant: 'tertiary',
    children: 'Badge',
    closeIcon: true,
  },
};

export const WithoutBorder = {
  args: {
    variant: 'tertiary',
    children: 'Badge',
    border: false,
    closeIcon: true,
  },
};

export const WithShadow = {
  args: {
    variant: 'warning',
    children: '33°',
    className: 'box-shadow-s',
    iconLeft: 'icon-system-sun-line',
  },
};
