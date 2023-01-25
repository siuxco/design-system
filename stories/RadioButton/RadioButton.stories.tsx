import React from 'react';
import { RadioButton } from './RadioButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton,
  argTypes: {
    state: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (arguments_) => <RadioButton {...arguments_} />;

// Stories
export const Default = Template.bind({});
Default.args = {
  state: 'default',
};

// Stories
export const Checked = Template.bind({});
Checked.args = {
  state: 'checked',
};
