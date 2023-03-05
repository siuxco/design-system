import React from 'react';
import { Loader } from './Loader';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Feedback/Loader',
  component: Loader,
  argTypes: {
    variant: { control: { type: 'select' } },
    velocity: { control: { type: 'select' } },
    shape: { control: { type: 'select' } },
    loader: { control: { type: 'select' } },
    size: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (arguments_) => <Loader {...arguments_} />;

// Stories
export const Default = Template.bind({});
Default.args = {
  loader: 4,
  velocity: 'fast',
  size: 'md',
};

export const Variant = Template.bind({});
Variant.args = {
  loader: 4,
  velocity: 'fast',
  variant: 'primary',
  size: 'md',
};

export const Size = Template.bind({});
Size.args = {
  loader: 4,
  velocity: 'fast',
  variant: 'primary',
  size: 'lg',
};

export const ShapeRound = Template.bind({});
ShapeRound.args = {
  loader: 1,
  velocity: 'default',
  variant: 'neutral',
  size: 'md',
  shape: 'round',
};

export const ShapeSquare = Template.bind({});
ShapeSquare.args = {
  loader: 1,
  velocity: 'default',
  variant: 'neutral',
  size: 'md',
  shape: 'square',
};
