import React from 'react';
import { Shadow } from './Shadow';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Utilities/Shadow',
  component: Shadow,
  argTypes: {
    size: { control: { type: 'select' } },
    hover: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof Shadow>;

const Template: ComponentStory<typeof Shadow> = (arguments_) => <Shadow {...arguments_} />;

// Stories
export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: 'xs',
  className: 'padding-xl border-radius-m',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  className: 'padding-xl border-radius-m',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  className: 'padding-xl border-radius-m',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  className: 'padding-xl border-radius-m',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: 'xl',
  className: 'padding-xl border-radius-m',
};

export const Hover = Template.bind({});
Hover.args = {
  size: 'md',
  hover: 'xl',
  className: 'padding-xl border-radius-m',
};
