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
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  children: 'Button',
};

export const Loading = Template.bind({});
Loading.args = {
  variant: 'primary',
  loading: true,
  children: 'Button',
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  variant: 'primary',
  iconLeft: 'icon-system-download-line',
  children: 'Button',
};

export const IconRight = Template.bind({});
IconRight.args = {
  variant: 'primary',
  iconRight: 'icon-system-arrow-right-line',
  children: 'Button',
};

export const Cancel = Template.bind({});
Cancel.args = {
  variant: 'cancel-link',
  children: 'Cancel',
};

export const Delete = Template.bind({});
Delete.args = {
  variant: 'delete-light',
  children: 'Delete',
};

export const Black = Template.bind({});
Black.args = {
  variant: 'black',
  children: 'Button',
};

export const White = Template.bind({});
White.args = {
  variant: 'white',
  children: 'Button',
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'white',
  children: 'Button',
  className: 'border-style-solid border-width-1 border-neutral-2 hover:border-neutral-3',
};

export const Shadow = Template.bind({});
Shadow.args = {
  variant: 'white',
  children: 'Login with Google',
  iconLeft: 'icon-system-google-fill',
  className: 'border-style-solid border-width-1 border-neutral-2 hover:border-neutral-3 box-shadow-s hover:box-shadow-m',
};
