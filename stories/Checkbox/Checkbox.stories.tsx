import React from 'react';
import { Checkbox } from './Checkbox';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    state: { control: { type: 'select' } },
    size: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (arguments_) => <Checkbox {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  state: 'default',
  label: 'label',
};
