import React from 'react';
import { Toast } from './Toast';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/Toast',
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
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

// Stories
export const Info = Template.bind({});
Info.args = {
  title: 'Info alert',
  state: 'info',
};

export const Success = Template.bind({});
Success.args = {
  title: 'Success alert',
  state: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'Warning alert',
  state: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Error alert',
  state: 'error',
};

export const WithLink = Template.bind({});
WithLink.args = {
  children: [
    <Toast.Link href="#" target="_blank">
      Don't click me
    </Toast.Link>,
  ],
  title: 'With link alert',
};

export const WithOtherState = Template.bind({});
WithOtherState.args = {
  state: 'default',
  title: 'With other state',
};
