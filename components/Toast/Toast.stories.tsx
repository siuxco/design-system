import React from 'react';
import { Toast } from './Toast';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    title: {
      type: { name: 'string' },
      defaultValue: "I'm an alert",
      control: {
        type: 'text',
      },
    },
    state: { control: { type: 'select' } },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '250px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Toast>;

export const Info = {
  args: {
    title: 'Info alert',
    state: 'info',
  },
};

export const Success = {
  args: {
    title: 'Success alert',
    state: 'success',
  },
};

export const Warning = {
  args: {
    title: 'Warning alert',
    state: 'warning',
  },
};

export const Error = {
  args: {
    title: 'Error alert',
    state: 'error',
  },
};

export const CustomDescription = {
  args: {
    children: [<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>],
    title: 'With link alert',
  },
};

export const CustomLink = {
  args: {
    children: [
      <Toast.Link href="#" target="_self">
        Custom link
      </Toast.Link>,
    ],
    title: 'With link alert',
  },
};
