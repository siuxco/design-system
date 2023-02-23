import React from 'react';
import { Heading } from './Heading';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    size: { control: { type: 'select' } },
    className: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (arguments_) => <Heading {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  size: 'h3',
  children: 'Heading title',
};
