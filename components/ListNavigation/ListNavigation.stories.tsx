import React from 'react';
import { ListNavigation } from './ListNavigation';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Navigation/List Navigation',
  component: ListNavigation,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: '200px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListNavigation>;

const Template: ComponentStory<typeof ListNavigation> = (arguments_) => <ListNavigation {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <ListNavigation.Item key="b" active>
      Dashboard
    </ListNavigation.Item>,
    <ListNavigation.Item key="c">Team</ListNavigation.Item>,
    <ListNavigation.Item key="d">Projects</ListNavigation.Item>,
    <ListNavigation.Item key="e">Calendar</ListNavigation.Item>,
    <ListNavigation.Item key="e">Documents</ListNavigation.Item>,
  ],
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: [
    <ListNavigation.Item key="b" icon="icon-system-dashboard-line" active>
      Dashboard
    </ListNavigation.Item>,
    <ListNavigation.Item key="c" icon="icon-system-group-line">
      Team
    </ListNavigation.Item>,
    <ListNavigation.Item key="d" icon="icon-system-folder-line">
      Projects
    </ListNavigation.Item>,
    <ListNavigation.Item key="e" icon="icon-system-calendar-line">
      Calendar
    </ListNavigation.Item>,
    <ListNavigation.Item key="e" icon="icon-system-hard-drive-2-line">
      Documents
    </ListNavigation.Item>,
  ],
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  children: [
    <ListNavigation.Item key="b" icon="icon-system-dashboard-line" label="360" active>
      Dashboard
    </ListNavigation.Item>,
    <ListNavigation.Item key="c" icon="icon-system-group-line">
      Team
    </ListNavigation.Item>,
    <ListNavigation.Item key="d" icon="icon-system-folder-line" label="12">
      Projects
    </ListNavigation.Item>,
    <ListNavigation.Item key="e" icon="icon-system-calendar-line">
      Calendar
    </ListNavigation.Item>,
    <ListNavigation.Item key="e" icon="icon-system-hard-drive-2-line">
      Documents
    </ListNavigation.Item>,
  ],
};
