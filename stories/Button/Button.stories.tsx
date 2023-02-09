import React from 'react';
import { Button } from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (arguments_) => <Button {...arguments_} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Button primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Button secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  children: 'Button tertiary',
};

export const Cancel = Template.bind({});
Cancel.args = {
  variant: 'cancel',
  children: 'Button cancel',
};

export const Delete = Template.bind({});
Delete.args = {
  variant: 'delete',
  children: 'Button delete',
};
export const Black = Template.bind({});
Black.args = {
  variant: 'black',
  children: 'Button black',
};
export const White = Template.bind({});
White.args = {
  variant: 'white',
  children: 'Button white',
};
