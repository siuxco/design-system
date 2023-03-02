import React from 'react';
import { Radio } from './Radio';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Forms/Radio',
  component: Radio,
  argTypes: {
    state: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (arguments_) => <Radio {...arguments_} />;

// Stories
export const Default = Template.bind({});
Default.args = {
  id: 'alpha',
  state: 'default',
  label: 'Label',
  defaultValue: false,
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
  label: 'Label',
  disabled: true,
  defaultValue: false,
};
