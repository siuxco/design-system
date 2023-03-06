import React from 'react';
import { Kbd } from './Kbd';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Feedback/Kbd',
  component: Kbd,
  argTypes: {
    size: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof Kbd>;

const Template: ComponentStory<typeof Kbd> = (arguments_) => <Kbd {...arguments_} />;

// Stories
export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  children: ['⌘'],
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  children: ['⌘'],
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  children: ['⌘'],
};
