import React from 'react';
import { Badge } from './Badge';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    type: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (arguments_) => <Badge {...arguments_} />;

// Stories
export const Default = Template.bind({});
Default.args = {
  type: 'default',
  children: 'Badge',
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  type: 'primary',
  children: 'Badge',
  iconLeft: 'true',
};

export const IconRight = Template.bind({});
IconRight.args = {
  type: 'secondary',
  children: 'Badge',
  iconRight: true,
};

export const remove = Template.bind({});
remove.args = {
  type: 'tertiary',
  children: 'Badge',
  remove: true,
};
