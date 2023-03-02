import React from 'react';
import { Checkbox } from './Checkbox';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  argTypes: {
    state: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (arguments_) => <Checkbox {...arguments_} />;

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
