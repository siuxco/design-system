import React from 'react';
import { Switch } from './Switch';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    state: { control: { type: 'select' } },
    disabled: { control: { type: 'boolean' } },
    checked: { control: { type: 'boolean' } },
    defaultChecked: { control: { type: 'boolean' } },
  },
} as Meta<typeof Switch>;

const css = `
     .sibling:checked ~ .parent .sibling-checked\\:transitionX140 {
      transform: translateX(140%)
    }
`;

const Template: StoryFn<typeof Switch> = (arguments_) => (
  <>
    <style>{css}</style>
    <Switch {...arguments_} />
  </>
);

export const Default = {
  render: Template,

  args: {
    id: 'alpha',
    state: 'default',
    label: 'Label',
  },
};

export const Checked = {
  render: Template,

  args: {
    id: 'alpha',
    label: 'Label',
  },
};

export const Error = {
  render: Template,

  args: {
    id: 'alpha',
    state: 'error',
    label: 'Label',
  },
};

export const Disabled = {
  render: Template,

  args: {
    id: 'alpha',
    disabled: true,
    label: 'Label',
  },
};
