import React from 'react';
import { EmptyState } from './EmptyState';
import { Button } from '../Button/Button';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/Empty State',
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
} as Meta<typeof EmptyState>;

const Template: StoryFn<typeof EmptyState> = (arguments_) => <EmptyState {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  state: 'default',
  children: [
    'Get started by creating a new project.',
    <div key="alpha" className="width-full">
      <Button variant="primary" size="md" iconLeft="icon-system-add-line" className="margin-top-l">
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
