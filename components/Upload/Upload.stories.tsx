import React from 'react';
import { Upload } from './Upload';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Forms/Upload',
  component: Upload,
} as ComponentMeta<typeof Upload>;

const Template: ComponentStory<typeof Upload> = (arguments_) => <Upload {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Upload a file or drag and drop',
};

export const Error = Template.bind({});
Error.args = {
  children: 'Upload a file or drag and drop',
  state: 'error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Upload a file or drag and drop',
  disabled: true,
};
