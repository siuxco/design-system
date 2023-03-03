import React from 'react';
import { Navigation } from './Navigation';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Navigation/Navigation',
  component: Navigation,
  argTypes: {
    orientation: { control: { type: 'select' } },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (arguments_) => <Navigation {...arguments_} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: 'horizontal',
  children: [
    <Navigation.Item key="b" active>
      Dashboard
    </Navigation.Item>,
    <Navigation.Item key="c">Team</Navigation.Item>,
    <Navigation.Item key="d">Projects</Navigation.Item>,
    <Navigation.Item key="e">Calendar</Navigation.Item>,
    <Navigation.Item key="e">Documents</Navigation.Item>,
  ],
};

export const HorizontalWithIcon = Template.bind({});
HorizontalWithIcon.args = {
  orientation: 'horizontal',
  children: [
    <Navigation.Item key="b" icon="icon-system-dashboard-line" active>
      Dashboard
    </Navigation.Item>,
    <Navigation.Item key="c" icon="icon-system-group-line">
      Team
    </Navigation.Item>,
    <Navigation.Item key="d" icon="icon-system-folder-line">
      Projects
    </Navigation.Item>,
    <Navigation.Item key="e" icon="icon-system-calendar-line">
      Calendar
    </Navigation.Item>,
    <Navigation.Item key="e" icon="icon-system-hard-drive-2-line">
      Documents
    </Navigation.Item>,
  ],
};

export const HorizontalWithLabel = Template.bind({});
HorizontalWithLabel.args = {
  orientation: 'horizontal',
  children: [
    <Navigation.Item key="b" icon="icon-system-dashboard-line" label="360" active>
      Dashboard
    </Navigation.Item>,
    <Navigation.Item key="c" icon="icon-system-group-line">
      Team
    </Navigation.Item>,
    <Navigation.Item key="d" icon="icon-system-folder-line" label="12">
      Projects
    </Navigation.Item>,
    <Navigation.Item key="e" icon="icon-system-calendar-line">
      Calendar
    </Navigation.Item>,
    <Navigation.Item key="e" icon="icon-system-hard-drive-2-line">
      Documents
    </Navigation.Item>,
  ],
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'vertical',
  children: [
    <Navigation.Item key="b" active>
      Dashboard
    </Navigation.Item>,
    <Navigation.Item key="c">Team</Navigation.Item>,
    <Navigation.Item key="d">Projects</Navigation.Item>,
    <Navigation.Item key="e">Calendar</Navigation.Item>,
    <Navigation.Item key="e">Documents</Navigation.Item>,
  ],
};

export const VerticalWithIcon = Template.bind({});
VerticalWithIcon.args = {
  orientation: 'vertical',
  children: [
    <Navigation.Item key="b" icon="icon-system-dashboard-line" active>
      Dashboard
    </Navigation.Item>,
    <Navigation.Item key="c" icon="icon-system-group-line">
      Team
    </Navigation.Item>,
    <Navigation.Item key="d" icon="icon-system-folder-line">
      Projects
    </Navigation.Item>,
    <Navigation.Item key="e" icon="icon-system-calendar-line">
      Calendar
    </Navigation.Item>,
    <Navigation.Item key="e" icon="icon-system-hard-drive-2-line">
      Documents
    </Navigation.Item>,
  ],
};

export const VerticalWithLabel = Template.bind({});
VerticalWithLabel.args = {
  orientation: 'vertical',
  children: [
    <Navigation.Item key="b" icon="icon-system-dashboard-line" label="360" active>
      Dashboard
    </Navigation.Item>,
    <Navigation.Item key="c" icon="icon-system-group-line">
      Team
    </Navigation.Item>,
    <Navigation.Item key="d" icon="icon-system-folder-line" label="12">
      Projects
    </Navigation.Item>,
    <Navigation.Item key="e" icon="icon-system-calendar-line">
      Calendar
    </Navigation.Item>,
    <Navigation.Item key="e" icon="icon-system-hard-drive-2-line">
      Documents
    </Navigation.Item>,
  ],
};
