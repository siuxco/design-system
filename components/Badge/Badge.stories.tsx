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

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  children: 'Badge',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'Badge',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  children: 'Badge',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  children: 'Badge',
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  variant: 'primary',
  children: 'Badge',
  iconLeft: 'icon-system-shield-user-fill',
};

export const IconRight = Template.bind({});
IconRight.args = {
  variant: 'primary',
  children: 'Badge',
  iconRight: 'icon-system-medal-line',
};

export const Number = Template.bind({});
Number.args = {
  variant: 'error',
  children: '1',
  border: true,
};

export const closeIcon = Template.bind({});
closeIcon.args = {
  variant: 'tertiary',
  children: 'Badge',
  closeIcon: true,
};

export const WithoutBorder = Template.bind({});
WithoutBorder.args = {
  variant: 'tertiary',
  children: 'Badge',
  border: false,
  closeIcon: true,
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  variant: 'tertiary',
  children: 'Badge',
  className: 'box-shadow-s',
  closeIcon: true,
};
