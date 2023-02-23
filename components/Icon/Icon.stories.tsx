import React from 'react';
import { Icon } from './Icon';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (arguments_) => <Icon {...arguments_} />;

export const Default = Template.bind({});