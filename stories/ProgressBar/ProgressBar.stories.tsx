import React from 'react';
import { ProgressBar } from './ProgressBar';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  argTypes: {
    type: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (arguments_) => <ProgressBar {...arguments_} />;

// Stories
export const Default = Template.bind({});
Default.args = {
  type: 'default',
  progress: 50,
};
