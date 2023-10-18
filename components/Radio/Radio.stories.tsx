import React from 'react';
import { Radio } from './Radio';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    state: { control: { type: 'select' } },
    disabled: { control: { type: 'boolean' } },
    checked: { control: { type: 'boolean' } },
    defaultChecked: { control: { type: 'boolean' } },
  },
} as Meta<typeof Radio>;

const Template2: StoryFn<typeof Radio> = (arguments_) => (
  <>
    <Radio name={arguments_.name || 'radio'} {...arguments_} label="option 1" className="margin-bottom-m" />
    <Radio name={arguments_.name || 'radio'} {...arguments_} label="option 2" className="margin-bottom-m" />
    <Radio name={arguments_.name || 'radio'} {...arguments_} label="option 3" className="margin-bottom-m" />
  </>
);

export const Default = {
  args: {
    id: 'alpha',
    // state: 'default',
    label: 'Label',
  },
};

export const Checked = {
  args: {
    id: 'alpha',
    // state: 'checked',
    label: 'Label',
    checked: true,
  },
};

export const Error = {
  args: {
    id: 'alpha',
    state: 'error',
    label: 'Label',
  },
};

export const Disabled = {
  args: {
    id: 'alpha',
    label: 'Label',
    disabled: true,
  },
};

export const ThreeRadios = {
  render: Template2,

  args: {
    label: 'Label',
    name: 'radio',
  },
};
