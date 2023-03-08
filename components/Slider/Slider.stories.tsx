import React from 'react';
import { Slider } from './Slider';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Forms/Slider',
  component: Slider,
  argTypes: {
    state: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (arguments_) => <Slider {...arguments_} />;

// Stories
export const Default = Template.bind({});
Default.args = {
  id: 'alpha',
  state: 'default',
  defaultValue: 1,
  label: 'Label',
};
