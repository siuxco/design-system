import React from 'react';
import { Tooltip } from './Tooltip';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Tooltip',
};
