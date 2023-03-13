import React from 'react';
import { Switch } from './Switch';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    state: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (arguments_) => <Switch {...arguments_} />;

// Stories
export const Default = Template.bind({});
Default.args = {
  id: 'alpha',
  state: 'default',
  defaultValue: false,
  label: 'Label',
};

export const Checked = Template.bind({});
Checked.args = {
  id: 'alpha',
  state: 'checked',
  label: 'Label',
  defaultValue: true,
};

export const Error = Template.bind({});
Error.args = {
  id: 'alpha',
  state: 'error',
  label: 'Label',
  defaultValue: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'alpha',
  state: 'disable',
  disabled: true,
  label: 'Label',
  defaultValue: false,
};
