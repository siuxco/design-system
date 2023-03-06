import React from 'react';
import { TextEditor } from './TextEditor';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Editor/Text Editor',
  component: TextEditor,
  argTypes: {
    variant: { control: { type: 'select' } },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '420px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof TextEditor>;

const Template: ComponentStory<typeof TextEditor> = (arguments_) => <TextEditor {...arguments_} />;

export const Basic = Template.bind({});

export const Default = Template.bind({});
Default.args = {
  children: 'TextEditor',
};
