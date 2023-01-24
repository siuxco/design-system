import React from 'react';
import { Pagination } from './Pagination';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Molecules/Pagination',
  component: Pagination,
  argTypes: {
    type: { control: { type: 'select' } },
    size: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (arguments_) => <Pagination {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  size: 'default',
  next: true,
  previous: true,
  children: [
    <Pagination.Item key="a">1</Pagination.Item>,
    <Pagination.Item key="b">2</Pagination.Item>,
    <Pagination.Item key="c" active>3</Pagination.Item>,
    <Pagination.Item key="d">4</Pagination.Item>,
    <Pagination.Item key="e">5</Pagination.Item>,
  ],
};
