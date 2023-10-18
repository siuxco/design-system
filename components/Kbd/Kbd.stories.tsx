import React from 'react';
import { Kbd } from './Kbd';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/Kbd',
  component: Kbd,
  argTypes: {
    size: { control: { type: 'select' } },
  },
} as Meta<typeof Kbd>;

export const Small = {
  args: {
    size: 'sm',
    value: '⌘',
  },
};

export const Medium = {
  args: {
    size: 'md',
    value: '⌘',
  },
};

export const Large = {
  args: {
    size: 'lg',
    value: '⌘',
  },
};
