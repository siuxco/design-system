import React from 'react';
import { Select } from './Select';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Forms/Select',
  component: Select,
  argTypes: {
    state: { control: { type: 'select' } },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '350px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (arguments_) => <Select {...arguments_} />;

// Stories
export const Default = Template.bind({});
Default.args = {
  state: 'default',
  label: 'Select an option',
  children: (
    <>
      <Select.Option value="1">One</Select.Option>
      <Select.Option value="2">Two</Select.Option>
      <Select.Option value="3">Three</Select.Option>
    </>
  ),
};

export const Error = Template.bind({});
Error.args = {
  state: 'error',
  label: 'Select an option',
  children: (
    <>
      <Select.Option value="1">One</Select.Option>
      <Select.Option value="2">Two</Select.Option>
      <Select.Option value="3">Three</Select.Option>
    </>
  ),
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: 'disabled',
  disabled: true,
  label: 'Select an option',
  children: (
    <>
      <Select.Option value="1">One</Select.Option>
      <Select.Option value="2">Two</Select.Option>
      <Select.Option value="3">Three</Select.Option>
    </>
  ),
};
