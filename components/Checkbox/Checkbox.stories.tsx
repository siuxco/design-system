import React from 'react';
import { Checkbox } from './Checkbox';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    state: { control: { type: 'select' } },
    disabled: { control: { type: 'boolean' } },
    checked: { control: { type: 'boolean' } },
    defaultChecked: { control: { type: 'boolean' } },
  },
} as Meta<typeof Checkbox>;

export const Default = {
  args: {
    id: 'alpha',
    state: 'default',
    label: 'Label',
  },
};

export const Checked = {
  args: {
    id: 'alpha',
    label: 'Label',
    checked: true,
  },
};

export const Error = {
  args: {
    id: 'alpha',
    state: 'error',
    label: 'Label',
  },
};

export const Disabled = {
  args: {
    id: 'alpha',
    disabled: true,
    label: 'Label',
  },
};
