import React from 'react';
import { Radio } from './Radio';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    state: { control: { type: 'select' } },
    disabled: { control: { type: 'boolean' } },
    checked: { control: { type: 'boolean' } },
    defaultChecked: { control: { type: 'boolean' } },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (arguments_) => <Radio {...arguments_} />;
const Template2: ComponentStory<typeof Radio> = (arguments_) => (
  <>
    <Radio name={arguments_.name || 'radio'} {...arguments_} label="option 1" className="margin-bottom-m" />
    <Radio name={arguments_.name || 'radio'} {...arguments_} label="option 2" className="margin-bottom-m" />
    <Radio name={arguments_.name || 'radio'} {...arguments_} label="option 3" className="margin-bottom-m" />
  </>
);

// Stories
export const Default = Template.bind({});
Default.args = {
  id: 'alpha',
  // state: 'default',
  label: 'Label',
};

export const Checked = Template.bind({});
Checked.args = {
  id: 'alpha',
  // state: 'checked',
  label: 'Label',
  checked: true,
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
  label: 'Label',
  disabled: true,
};

export const ThreeRadios = Template2.bind({});
ThreeRadios.args = {
  label: 'Label',
  name: 'radio',
  disabled: true,
};
