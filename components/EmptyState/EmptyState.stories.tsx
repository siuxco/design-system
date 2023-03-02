import React from 'react';
import { EmptyState } from './EmptyState';
import { Button } from '../Button/Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Feedback/Empty State',
  component: EmptyState,
  argTypes: {
    state: { control: { type: 'select' } },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '380px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof EmptyState>;

const Template: ComponentStory<typeof EmptyState> = (arguments_) => <EmptyState {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  state: 'default',
  children: [
    'Get started by creating a new project.',
    <div className="width-full">
      <Button variant="primary" size="medium" iconLeft="icon-system-add-line" className="margin-top-l">
        New Project
      </Button>
    </div>,
  ],
};

export const Border = Template.bind({});
Border.args = {
  state: 'border',
  icon: 'icon-system-database-2-line',
  title: 'Create a new database',
};
