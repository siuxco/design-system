import React from 'react';
import { Alert } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
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
};

const Template = (_arguments) => <Alert {..._arguments} />;

export const Info = Template.bind({});
Info.args = {
  state: 'info',
  children: 'Alert',
};

export const Success = Template.bind({});
Success.args = {
  state: 'success',
  children: 'Alert',
};

export const Warning = Template.bind({});
Warning.args = {
  state: 'warning',
  children: 'Alert',
};

export const Error = Template.bind({});
Error.args = {
  state: 'error',
  children: 'Alert',
};
