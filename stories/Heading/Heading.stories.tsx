import React from 'react';
import { Heading } from './Heading';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/Heading',
  component: Heading,
  argTypes: {
    state: { control: { type: 'select' } },
    size: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (arguments_) => <Heading {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  size: 'h3',
  children: 'Heading title',
};
