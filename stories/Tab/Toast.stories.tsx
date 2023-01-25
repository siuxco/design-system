import React from 'react';
import { Tab } from './Tab';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/Tab',
  component: Tab,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

// Stories
export const Default = Template.bind({});
Default.args = { children: [<Tab.Item>Tab 1</Tab.Item>, <Tab.Item active>Tab 2</Tab.Item>] };
