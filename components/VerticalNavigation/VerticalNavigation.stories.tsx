import React from 'react';
import { VerticalNavigation } from './VerticalNavigation';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Navigation/Vertical Navigation',
  component: VerticalNavigation,
  argTypes: {
    separator: { control: { type: 'select' } },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '200px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof VerticalNavigation>;

const Template: ComponentStory<typeof VerticalNavigation> = (arguments_) => <VerticalNavigation {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  separator: 'arrow',
  children: [
    <VerticalNavigation.Item key="b" active>
      Dashboard
    </VerticalNavigation.Item>,
    <VerticalNavigation.Item key="c">Team</VerticalNavigation.Item>,
    <VerticalNavigation.Item key="d">Projects</VerticalNavigation.Item>,
    <VerticalNavigation.Item key="e">Calendar</VerticalNavigation.Item>,
    <VerticalNavigation.Item key="e">Documents</VerticalNavigation.Item>,
  ],
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  separator: 'arrow',
  children: [
    <VerticalNavigation.Item key="b" icon="icon-system-dashboard-line" active>
      Dashboard
    </VerticalNavigation.Item>,
    <VerticalNavigation.Item key="c" icon="icon-system-group-line">
      Team
    </VerticalNavigation.Item>,
    <VerticalNavigation.Item key="d" icon="icon-system-folder-line">
      Projects
    </VerticalNavigation.Item>,
    <VerticalNavigation.Item key="e" icon="icon-system-calendar-line">
      Calendar
    </VerticalNavigation.Item>,
    <VerticalNavigation.Item key="e" icon="icon-system-hard-drive-2-line">
      Documents
    </VerticalNavigation.Item>,
  ],
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  separator: 'arrow',
  children: [
    <VerticalNavigation.Item key="b" icon="icon-system-dashboard-line" label="360" active>
      Dashboard
    </VerticalNavigation.Item>,
    <VerticalNavigation.Item key="c" icon="icon-system-group-line">
      Team
    </VerticalNavigation.Item>,
    <VerticalNavigation.Item key="d" icon="icon-system-folder-line" label="12">
      Projects
    </VerticalNavigation.Item>,
    <VerticalNavigation.Item key="e" icon="icon-system-calendar-line">
      Calendar
    </VerticalNavigation.Item>,
    <VerticalNavigation.Item key="e" icon="icon-system-hard-drive-2-line">
      Documents
    </VerticalNavigation.Item>,
  ],
};
