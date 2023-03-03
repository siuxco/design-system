import React from 'react';
import { ListNav } from './ListNav';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Navigation/List Navigation',
  component: ListNav,
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
} as ComponentMeta<typeof ListNav>;

const Template: ComponentStory<typeof ListNav> = (arguments_) => <ListNav {...arguments_} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: 'horizontal',
  children: [
    <ListNav.Item key="b" active>
      Dashboard
    </ListNav.Item>,
    <ListNav.Item key="c">Team</ListNav.Item>,
    <ListNav.Item key="d">Projects</ListNav.Item>,
    <ListNav.Item key="e">Calendar</ListNav.Item>,
    <ListNav.Item key="e">Documents</ListNav.Item>,
  ],
};

export const HorizontalWithIcon = Template.bind({});
HorizontalWithIcon.args = {
  orientation: 'horizontal',
  children: [
    <ListNav.Item key="b" icon="icon-system-dashboard-line" active>
      Dashboard
    </ListNav.Item>,
    <ListNav.Item key="c" icon="icon-system-group-line">
      Team
    </ListNav.Item>,
    <ListNav.Item key="d" icon="icon-system-folder-line">
      Projects
    </ListNav.Item>,
    <ListNav.Item key="e" icon="icon-system-calendar-line">
      Calendar
    </ListNav.Item>,
    <ListNav.Item key="e" icon="icon-system-hard-drive-2-line">
      Documents
    </ListNav.Item>,
  ],
};

export const HorizontalWithLabel = Template.bind({});
HorizontalWithLabel.args = {
  orientation: 'horizontal',
  children: [
    <ListNav.Item key="b" icon="icon-system-dashboard-line" label="360" active>
      Dashboard
    </ListNav.Item>,
    <ListNav.Item key="c" icon="icon-system-group-line">
      Team
    </ListNav.Item>,
    <ListNav.Item key="d" icon="icon-system-folder-line" label="12">
      Projects
    </ListNav.Item>,
    <ListNav.Item key="e" icon="icon-system-calendar-line">
      Calendar
    </ListNav.Item>,
    <ListNav.Item key="e" icon="icon-system-hard-drive-2-line">
      Documents
    </ListNav.Item>,
  ],
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'vertical',
  children: [
    <ListNav.Item key="b" active>
      Dashboard
    </ListNav.Item>,
    <ListNav.Item key="c">Team</ListNav.Item>,
    <ListNav.Item key="d">Projects</ListNav.Item>,
    <ListNav.Item key="e">Calendar</ListNav.Item>,
    <ListNav.Item key="e">Documents</ListNav.Item>,
  ],
};

export const VerticalWithIcon = Template.bind({});
VerticalWithIcon.args = {
  orientation: 'vertical',
  children: [
    <ListNav.Item key="b" icon="icon-system-dashboard-line" active>
      Dashboard
    </ListNav.Item>,
    <ListNav.Item key="c" icon="icon-system-group-line">
      Team
    </ListNav.Item>,
    <ListNav.Item key="d" icon="icon-system-folder-line">
      Projects
    </ListNav.Item>,
    <ListNav.Item key="e" icon="icon-system-calendar-line">
      Calendar
    </ListNav.Item>,
    <ListNav.Item key="e" icon="icon-system-hard-drive-2-line">
      Documents
    </ListNav.Item>,
  ],
};

export const VerticalWithLabel = Template.bind({});
VerticalWithLabel.args = {
  orientation: 'vertical',
  children: [
    <ListNav.Item key="b" icon="icon-system-dashboard-line" label="360" active>
      Dashboard
    </ListNav.Item>,
    <ListNav.Item key="c" icon="icon-system-group-line">
      Team
    </ListNav.Item>,
    <ListNav.Item key="d" icon="icon-system-folder-line" label="12">
      Projects
    </ListNav.Item>,
    <ListNav.Item key="e" icon="icon-system-calendar-line">
      Calendar
    </ListNav.Item>,
    <ListNav.Item key="e" icon="icon-system-hard-drive-2-line">
      Documents
    </ListNav.Item>,
  ],
};
