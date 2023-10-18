import React from 'react';
import { Textarea } from './Textarea';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/Textarea',
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
} as Meta<typeof Textarea>;

export const Default = {
  args: {
    label: 'Label',
    state: 'default',
    placeholder: 'Placeholder...',
  },
};

export const Error = {
  args: {
    label: 'Label',
    state: 'error',
    placeholder: 'Placeholder...',
  },
};

export const Disabled = {
  args: {
    label: 'Label',
    state: 'disabled',
    disabled: true,
    placeholder: 'Placeholder...',
  },
};
