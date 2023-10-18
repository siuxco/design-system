import React from 'react';
import { Message } from './Message';
import { Button } from '../Button/Button';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/Message',
  component: Message,
  argTypes: {
    state: { control: { type: 'select' } },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '380px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Message>;

export const Info = {
  args: {
    state: 'info',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
};

export const Success = {
  args: {
    state: 'success',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
};

export const Warning = {
  args: {
    state: 'warning',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
};

export const Error = {
  args: {
    state: 'error',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
};

export const WithCloseIcon = {
  args: {
    state: 'error',
    close: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
};

export const CustomList = {
  args: {
    state: 'error',
    children: [
      [
        <ul key="alpha" className="width-full">
          <li>● Your password must be at least 8 characters</li>
          <li>● Your password must include at least one number</li>
        </ul>,
      ],
    ],
  },
};

export const CustomButton = {
  args: {
    state: 'error',
    children: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      [
        <div key="alpha" className="width-full">
          <Button variant="cancel-light" size="sm" className="margin-top-s margin-right-s">
            Discard
          </Button>
        </div>,
      ],
    ],
  },
};
