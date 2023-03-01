import React from 'react';
import { Badge } from './Badge';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Badge',
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

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'Badge',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  children: 'Badge',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'tertiary',
  children: 'Badge',
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  type: 'primary',
  children: 'Badge',
  iconLeft: 'icon-system-shield-user-fill',
};

export const IconRight = Template.bind({});
IconRight.args = {
  type: 'primary',
  children: 'Badge',
  iconRight: 'icon-system-medal-line',
};

export const closedIcon = Template.bind({});
closedIcon.args = {
  type: 'tertiary',
  children: 'Badge',
  closedIcon: true,
};
