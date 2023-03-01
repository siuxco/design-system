import React from 'react';
import { Tooltip } from './Tooltip';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'DataDisplay/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (arguments_) => <Tooltip {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Tooltip',
};
