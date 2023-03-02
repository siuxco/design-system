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
  state: 'default',
  checked: false,
  label: 'Label',
};

export const Checked = Template.bind({});
Checked.args = {
  state: 'checked',
  checked: true,
  label: 'Label',
};

export const Error = Template.bind({});
Error.args = {
  state: 'error',
  label: 'Label',
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: 'disable',
  disabled: true,
  label: 'Label',
};
