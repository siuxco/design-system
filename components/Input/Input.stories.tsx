import React from 'react';
import { Input } from './Input';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    state: { control: { type: 'select' } },
    // id: {
    //   table: {
    //     disable: true,
    //   },
    // },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '250px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Input>;

export const Default = {
  args: {
    state: 'default',
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

export const Error = {
  args: {
    state: 'error',
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

export const Disabled = {
  args: {
    state: 'disabled',
    label: 'Label',
    placeholder: 'Placeholder',
    disabled: true,
  },
};

export const Prefix = {
  args: {
    label: 'Label',
    prefix: 'https://',
    placeholder: 'app.siux.studio',
  },
};

export const CustomIcon = {
  args: {
    label: 'Label',
    icon: 'icon-system-link',
    placeholder: 'Placeholder',
  },
};

export const WithCopy = {
  args: {
    label: 'Label',
    copy: 'copy',
    placeholder: 'Placeholder',
  },
};
