import React from 'react';
import { Switch } from './Switch';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    state: { control: { type: 'select' } },
    disabled: { control: { type: 'boolean' } },
    checked: { control: { type: 'boolean' } },
    defaultChecked: { control: { type: 'boolean' } },
  },
} as ComponentMeta<typeof Switch>;

const css = `
     .sibling:checked ~ .parent .sibling-checked\\:transitionX140 {
      transform: translateX(140%)
    }
`;

const Template: ComponentStory<typeof Switch> = (arguments_) => (
  <>
    <style>{css}</style>
    <Switch {...arguments_} />
  </>
);

// Stories
export const Default = Template.bind({});
Default.args = {
  id: 'alpha',
  state: 'default',
  label: 'Label',
};

export const Checked = Template.bind({});
Checked.args = {
  id: 'alpha',
  label: 'Label',
};

export const Error = Template.bind({});
Error.args = {
  id: 'alpha',
  state: 'error',
  label: 'Label',
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'alpha',
  disabled: true,
  label: 'Label',
};
