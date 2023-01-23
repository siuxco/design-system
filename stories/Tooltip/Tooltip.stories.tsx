import React from 'react';
import { Tooltip } from './Tooltip';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Tooltip',
};
