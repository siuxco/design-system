import React from 'react';
import { Message } from './Message';
import { Button } from '../Button/Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

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
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (arguments_) => <Message {...arguments_} />;

export const Info = Template.bind({});
Info.args = {
  state: 'info',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
};

export const Success = Template.bind({});
Success.args = {
  state: 'success',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
};

export const Warning = Template.bind({});
Warning.args = {
  state: 'warning',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
};

export const Error = Template.bind({});
Error.args = {
  state: 'error',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
};

export const WithCloseIcon = Template.bind({});
WithCloseIcon.args = {
  state: 'error',
  close: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
};

export const CustomList = Template.bind({});
CustomList.args = {
  state: 'error',
  children: [
    [
      <ul key="alpha" className="width-full">
        <li>● Your password must be at least 8 characters</li>
        <li>● Your password must include at least one number</li>
      </ul>,
    ],
  ],
};

export const CustomButton = Template.bind({});
CustomButton.args = {
  state: 'error',
  children: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    [
      <div key="alpha" className="width-full">
        <Button variant="cancel-light" size="small" className="margin-top-s margin-right-s">
          Discard
        </Button>
      </div>,
    ],
  ],
};
