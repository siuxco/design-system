import React from 'react';
import { Loader } from './Loader';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {
    variant: { control: { type: 'select' } },
    velocity: { control: { type: 'select' } },
    shape: { control: { type: 'select' } },
    loader: { control: { type: 'select' } },
    size: { control: { type: 'select' } },
  },
} as Meta<typeof Loader>;

export const Default = {
  args: {
    loader: 1,
    velocity: 'default',
    variant: 'neutral',
    size: 'md',
    shape: 'square',
  },
};

export const Variant = {
  args: {
    loader: 1,
    velocity: 'default',
    variant: 'primary',
    size: 'md',
    shape: 'square',
  },
};

export const Size = {
  args: {
    loader: 1,
    velocity: 'default',
    variant: 'neutral',
    size: 'lg',
    shape: 'square',
  },
};

export const ShapeCircle = {
  args: {
    loader: 1,
    velocity: 'default',
    variant: 'neutral',
    size: 'md',
    shape: 'circle',
  },
};

export const Simple = {
  args: {
    loader: 1,
    velocity: 'default',
    variant: 'neutral',
    size: 'md',
  },
};
