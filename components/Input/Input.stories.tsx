import React from 'react';
import { Input } from './Input';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    status: { control: { type: 'select' } },
    // id: {
    //   table: {
    //     disable: true,
    //   },
    // },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (arguments_) => <Input {...arguments_} />;

// Stories
export const Default = Template.bind({});
Default.args = {
  status: 'default',
  placeholder: 'Placeholder',
};

export const Error = Template.bind({});
Error.args = {
  status: 'error',
  placeholder: 'Input with an error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  status: 'disabled',
  placeholder: 'Input disabled',
  disabled: true,
};

export const Prefix = Template.bind({});
Prefix.args = {
  prefix: 'https://',
  placeholder: 'app.siux.studio',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'icon-system-home-line',
  placeholder: 'I am an input with an icon',
};

export const WithCopy = Template.bind({});
WithCopy.args = {
  copy: 'copy',
  placeholder: 'Text',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label text',
  placeholder: 'input placeholder',
};