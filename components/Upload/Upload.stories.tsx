import React from 'react';
import { Upload } from './Upload';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/Upload',
  component: Upload,
} as Meta<typeof Upload>;

export const Default = {
  args: {
    children: 'Upload a file',
  },
};

export const Error = {
  args: {
    children: 'Upload a file',
    state: 'error',
  },
};

export const Disabled = {
  args: {
    children: 'Upload a file',
    disabled: true,
  },
};
