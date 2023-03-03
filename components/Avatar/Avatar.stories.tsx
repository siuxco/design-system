import React from 'react';
import { Avatar } from './Avatar';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserAvatar from '../assets/avatar-marcos-sanchez.jpg';

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  argTypes: {
    size: { control: { type: 'select' } },
    shape: { control: { type: 'select' } },
    variant: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (arguments_) => <Avatar {...arguments_} />;

// Stories
export const Text = Template.bind({});
Text.args = {
  variant: 'primary',
  size: 'sm',
  text: 'MS',
  title: 'Marcos Sanchez',
};

export const Image = Template.bind({});
Image.args = {
  variant: 'neutral',
  size: 'sm',
  image: UserAvatar,
  title: 'Marcos Sanchez',
};
