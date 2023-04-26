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

const Template: StoryFn<typeof Kbd> = (arguments_) => <Kbd {...arguments_} />;

// Stories
export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  value: '⌘',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  value: '⌘',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  value: '⌘',
};
