import React from 'react';
import { Select } from './Select';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/Select',
  component: Select,
  // argTypes: {
  //   state: { control: { type: 'select' } },
  // },
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
  status: 'default',
  children: [
    <Select.Option>Uno</Select.Option>
    <Select.Option>Dos</Select.Option>
    <Select.Option>Tres</Select.Option>
  ]
};
