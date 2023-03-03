import React from 'react';
import { Badge } from './Badge';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Data Display/Badge',
  component: Badge,
  argTypes: {
    variant: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (arguments_) => <Badge {...arguments_} />;

// Stories
export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  children: 'Badge',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Badge',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Badge',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  children: 'Badge',
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  variant: 'primary',
  children: 'Badge',
  iconLeft: 'icon-system-shield-user-fill',
};

export const Number = Template.bind({});
Number.args = {
  variant: 'error',
  children: '1',
  border: true,
};

export const IconRight = Template.bind({});
IconRight.args = {
  variant: 'primary',
  children: 'Badge',
  iconRight: 'icon-system-medal-line',
};

export const closedIcon = Template.bind({});
closedIcon.args = {
  variant: 'tertiary',
  children: 'Badge',
  closedIcon: true,
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  variant: 'tertiary',
  children: 'Badge',
  border: true,
  closedIcon: true,
};
