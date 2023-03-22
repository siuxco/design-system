import React from 'react';
import { Navigation } from './Navigation';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge } from '../Badge/Badge';

export default {
  title: 'Components/Navigation',
  component: Navigation,
  argTypes: {
    orientation: { control: { type: 'select', options: ['horizontal', 'vertical'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    variant: {
      control: {
        type: 'select',
        options: [
          'primary',
          'primary-light',
          'primary-link',
          'secondary',
          'secondary-light',
          'secondary-link',
          'tertiary',
          'tertiary-light',
          'tertiary-link',
          'cancel',
          'cancel-light',
          'cancel-link',
          'delete',
          'delete-light',
          'black',
          'white',
        ],
      },
    },
    activeVariant: {
      control: {
        type: 'select',
        options: [
          'primary',
          'primary-light',
          'primary-link',
          'secondary',
          'secondary-light',
          'secondary-link',
          'tertiary',
          'tertiary-light',
          'tertiary-link',
          'cancel',
          'cancel-light',
          'cancel-link',
          'delete',
          'delete-light',
          'black',
          'white',
        ],
      },
    },
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
  size: 'medium',
  children: [
    <Navigation.Item key="a">Dashboard</Navigation.Item>,
    <Navigation.Item key="b">Team</Navigation.Item>,
    <Navigation.Item key="c">Projects</Navigation.Item>,
    <Navigation.Item key="d">Calendar</Navigation.Item>,
    <Navigation.Item key="e">Documents</Navigation.Item>,
  ],
};

export const HorizontalWithIcon = Template.bind({});
HorizontalWithIcon.args = {
  orientation: 'horizontal',
  size: 'medium',
  children: [
    <Navigation.Item key="a" iconLeft="icon-system-dashboard-line">
      Dashboard
    </Navigation.Item>,
    <Navigation.Item key="b" iconLeft="icon-system-group-line">
      Team
    </Navigation.Item>,
    <Navigation.Item key="c" iconLeft="icon-system-folder-line">
      Projects
    </Navigation.Item>,
    <Navigation.Item key="d" iconLeft="icon-system-calendar-line">
      Calendar
    </Navigation.Item>,
    <Navigation.Item key="e" iconLeft="icon-system-hard-drive-2-line">
      Documents
    </Navigation.Item>,
  ],
};

export const HorizontalWithLabel = Template.bind({});
HorizontalWithLabel.args = {
  orientation: 'horizontal',
  size: 'medium',
  children: [
    <Navigation.Item key="a" iconLeft="icon-system-dashboard-line">
      Dashboard
      <Badge border={false} className="margin-left-xs">
        360
      </Badge>
    </Navigation.Item>,
    <Navigation.Item key="b" iconLeft="icon-system-group-line">
      Team
    </Navigation.Item>,
    <Navigation.Item key="c" iconLeft="icon-system-folder-line">
      Projects
      <Badge border={false}>12</Badge>
    </Navigation.Item>,
    <Navigation.Item key="d" iconLeft="icon-system-calendar-line">
      Calendar
    </Navigation.Item>,
    <Navigation.Item key="e" iconLeft="icon-system-hard-drive-2-line">
      Documents
    </Navigation.Item>,
  ],
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'vertical',
  size: 'medium',
  children: [
    <Navigation.Item key="a">Dashboard</Navigation.Item>,
    <Navigation.Item key="b">Team</Navigation.Item>,
    <Navigation.Item key="c">Projects</Navigation.Item>,
    <Navigation.Item key="d">Calendar</Navigation.Item>,
    <Navigation.Item key="e">Documents</Navigation.Item>,
  ],
};

export const VerticalCustomActive = Template.bind({});
VerticalCustomActive.args = {
  orientation: 'vertical',
  size: 'medium',
  active: -1,
  children: [
    <Navigation.Item key="a">Dashboard</Navigation.Item>,
    <Navigation.Item key="b">Team</Navigation.Item>,
    <Navigation.Item key="c" active>
      Projects
    </Navigation.Item>,
    <Navigation.Item key="d">Calendar</Navigation.Item>,
    <Navigation.Item key="e">Documents</Navigation.Item>,
  ],
};

export const VerticalWithIcon = Template.bind({});
VerticalWithIcon.args = {
  orientation: 'vertical',
  size: 'medium',
  children: [
    <Navigation.Item key="a" iconLeft="icon-system-dashboard-line">
      Dashboard
    </Navigation.Item>,
    <Navigation.Item key="b" iconLeft="icon-system-group-line">
      Team
    </Navigation.Item>,
    <Navigation.Item key="c" iconLeft="icon-system-folder-line">
      Projects
    </Navigation.Item>,
    <Navigation.Item key="d" iconLeft="icon-system-calendar-line">
      Calendar
    </Navigation.Item>,
    <Navigation.Item key="e" iconLeft="icon-system-hard-drive-2-line">
      Documents
    </Navigation.Item>,
  ],
};

export const VerticalWithLabel = Template.bind({});
VerticalWithLabel.args = {
  orientation: 'vertical',
  size: 'medium',
  children: [
    <Navigation.Item key="a" iconLeft="icon-system-dashboard-line">
      Dashboard
      <Badge border={false} className="margin-left-xs">
        360
      </Badge>
    </Navigation.Item>,
    <Navigation.Item key="b" iconLeft="icon-system-group-line">
      Team
    </Navigation.Item>,
    <Navigation.Item key="c" iconLeft="icon-system-folder-line">
      Projects
      <Badge border={false} className="margin-left-xs">
        12
      </Badge>
    </Navigation.Item>,
    <Navigation.Item key="d" iconLeft="icon-system-calendar-line">
      Calendar
    </Navigation.Item>,
    <Navigation.Item key="e" iconLeft="icon-system-hard-drive-2-line">
      Documents
    </Navigation.Item>,
  ],
};

export const CustomVariantActive = Template.bind({});
CustomVariantActive.args = {
  orientation: 'vertical',
  size: 'medium',
  children: [
    <Navigation.Item key="a" iconLeft="icon-system-dashboard-line">
      Dashboard
      <Badge border={false} className="margin-left-xs">
        360
      </Badge>
    </Navigation.Item>,
    <Navigation.Item key="b" iconLeft="icon-system-group-line">
      Team
    </Navigation.Item>,
    <Navigation.Item key="c" iconLeft="icon-system-folder-line">
      Projects
      <Badge border={false} className="margin-left-xs">
        12
      </Badge>
    </Navigation.Item>,
    <Navigation.Item key="d" iconLeft="icon-system-calendar-line">
      Calendar
    </Navigation.Item>,
    <Navigation.Item key="e" iconLeft="icon-system-hard-drive-2-line">
      Documents
    </Navigation.Item>,
  ],
};
