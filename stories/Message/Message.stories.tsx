import React from 'react';
import { Message } from './Message';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/Message',
  component: Message,
  argTypes: {
    type: { control: { type: 'select' } },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '350px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (arguments_) => <Message {...arguments_} />;

// Stories
export const Default = Template.bind({});
Default.args = {
  type: 'info',
};

export const WithText = Template.bind({});
WithText.args = {
  type: 'error',
  children: 'This message has an error text',
};
