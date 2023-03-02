import React from 'react';
import { Textarea } from './Textarea';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Forms/Textarea',
  component: Textarea,
  argTypes: {
    state: { control: { type: 'select' } },
    className: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '250px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (arguments_) => <Textarea {...arguments_} />;

// Stories
export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  state: 'default',
  placeholder: 'Placeholder...',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Label',
  state: 'error',
  placeholder: 'Placeholder...',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label',
  state: 'disabled',
  disabled: true,
  placeholder: 'Placeholder...',
};
