import React from 'react';
import { Upload } from './Upload';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/Upload',
  component: Upload,
} as Meta<typeof Upload>;

const Template: StoryFn<typeof Upload> = (arguments_) => <Upload {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Upload a file',
};

export const Error = Template.bind({});
Error.args = {
  children: 'Upload a file',
  state: 'error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Upload a file',
  disabled: true,
};
