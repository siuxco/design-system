import React from 'react';
import { Checkbox } from './Checkbox';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    state: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (arguments_) => <Checkbox {...arguments_} />;

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
