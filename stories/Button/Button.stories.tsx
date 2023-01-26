import React from 'react';
import { Button } from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    size: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (arguments_) => <Button {...arguments_} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  children: 'Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'tertiary',
  children: 'Button',
};
