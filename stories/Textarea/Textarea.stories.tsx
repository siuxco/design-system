import React from 'react';
import { Textarea } from './Textarea';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

// Stories
export const Default = Template.bind({});
Default.args = {
  id: '1',
  label: 'Tell me a story',
  placeholder: 'once upon a time...',
};
