import React from 'react';
import { Navigation } from './Navigation';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Navigation',
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
    <Button key="a" variant="cancel-light" size="medium" className="margin-right-xxs">
      Dashboard
    </Button>,
    <Button key="b" variant="cancel-link" size="medium" className="margin-right-xxs">
      Team
    </Button>,
    <Button key="c" variant="cancel-link" size="medium" className="margin-right-xxs">
      Projects
    </Button>,
    <Button key="d" variant="cancel-link" size="medium" className="margin-right-xxs">
      Calendar
    </Button>,
    <Button key="e" variant="cancel-link" size="medium" className="margin-right-xxs">
      Documents
    </Button>,
  ],
};

export const HorizontalWithIcon = Template.bind({});
HorizontalWithIcon.args = {
  orientation: 'horizontal',
  children: [
    <Button
      key="a"
      variant="cancel-light"
      size="medium"
      iconLeft="icon-system-dashboard-line"
      className="margin-right-xxs">
      Dashboard
    </Button>,
    <Button key="b" variant="cancel-link" size="medium" iconLeft="icon-system-group-line" className="margin-right-xxs">
      Team
    </Button>,
    <Button key="c" variant="cancel-link" size="medium" iconLeft="icon-system-folder-line" className="margin-right-xxs">
      Projects
    </Button>,
    <Button
      key="d"
      variant="cancel-link"
      size="medium"
      iconLeft="icon-system-calendar-line"
      className="margin-right-xxs">
      Calendar
    </Button>,
    <Button
      key="e"
      variant="cancel-link"
      size="medium"
      iconLeft="icon-system-hard-drive-2-line"
      className="margin-right-xxs">
      Documents
    </Button>,
  ],
};

export const HorizontalWithLabel = Template.bind({});
HorizontalWithLabel.args = {
  orientation: 'horizontal',
  children: [
    <Button
      key="a"
      variant="cancel-light"
      size="medium"
      iconLeft="icon-system-dashboard-line"
      className="margin-right-xxs">
      Dashboard
      <Badge variant="primary" border={false} className="font-size-xs margin-left-xs">
        360
      </Badge>
    </Button>,
    <Button key="b" variant="cancel-link" size="medium" iconLeft="icon-system-group-line" className="margin-right-xxs">
      Team
    </Button>,
    <Button key="c" variant="cancel-link" size="medium" iconLeft="icon-system-folder-line" className="margin-right-xxs">
      Projects
      <Badge variant="primary" border={false} className="font-size-xs margin-left-xs">
        12
      </Badge>
    </Button>,
    <Button
      key="d"
      variant="cancel-link"
      size="medium"
      iconLeft="icon-system-calendar-line"
      className="margin-right-xxs">
      Calendar
    </Button>,
    <Button
      key="e"
      variant="cancel-link"
      size="medium"
      iconLeft="icon-system-hard-drive-2-line"
      className="margin-right-xxs">
      Documents
    </Button>,
  ],
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'vertical',
  children: [
    <Button key="a" variant="cancel-light" size="medium" className="margin-bottom-xxs">
      Dashboard
    </Button>,
    <Button key="b" variant="cancel-link" size="medium" className="margin-bottom-xxs">
      Team
    </Button>,
    <Button key="c" variant="cancel-link" size="medium" className="margin-bottom-xxs">
      Projects
    </Button>,
    <Button key="d" variant="cancel-link" size="medium" className="margin-bottom-xxs">
      Calendar
    </Button>,
    <Button key="e" variant="cancel-link" size="medium" className="margin-bottom-xxs">
      Documents
    </Button>,
  ],
};

export const VerticalWithIcon = Template.bind({});
VerticalWithIcon.args = {
  orientation: 'vertical',
  children: [
    <Button
      key="a"
      variant="cancel-light"
      size="medium"
      iconLeft="icon-system-dashboard-line"
      className="margin-bottom-xxs">
      Dashboard
    </Button>,
    <Button key="b" variant="cancel-link" size="medium" iconLeft="icon-system-group-line" className="margin-bottom-xxs">
      Team
    </Button>,
    <Button
      key="c"
      variant="cancel-link"
      size="medium"
      iconLeft="icon-system-folder-line"
      className="margin-bottom-xxs">
      Projects
    </Button>,
    <Button
      key="d"
      variant="cancel-link"
      size="medium"
      iconLeft="icon-system-calendar-line"
      className="margin-bottom-xxs">
      Calendar
    </Button>,
    <Button
      key="e"
      variant="cancel-link"
      size="medium"
      iconLeft="icon-system-hard-drive-2-line"
      className="margin-bottom-xxs">
      Documents
    </Button>,
  ],
};

export const VerticalWithLabel = Template.bind({});
VerticalWithLabel.args = {
  orientation: 'vertical',
  children: [
    <Button
      key="a"
      variant="cancel-light"
      size="medium"
      iconLeft="icon-system-dashboard-line"
      className="margin-bottom-xxs">
      Dashboard
      <Badge variant="primary" border={false} className="font-size-xs margin-left-xs">
        360
      </Badge>
    </Button>,
    <Button key="b" variant="cancel-link" size="medium" iconLeft="icon-system-group-line" className="margin-bottom-xxs">
      Team
    </Button>,
    <Button
      key="c"
      variant="cancel-link"
      size="medium"
      iconLeft="icon-system-folder-line"
      className="margin-bottom-xxs">
      Projects
      <Badge variant="primary" border={false} className="font-size-xs margin-left-xs">
        12
      </Badge>
    </Button>,
    <Button
      key="d"
      variant="cancel-link"
      size="medium"
      iconLeft="icon-system-calendar-line"
      className="margin-bottom-xxs">
      Calendar
    </Button>,
    <Button
      key="e"
      variant="cancel-link"
      size="medium"
      iconLeft="icon-system-hard-drive-2-line"
      className="margin-bottom-xxs">
      Documents
    </Button>,
  ],
};

export const CustomVariantActive = Template.bind({});
CustomVariantActive.args = {
  orientation: 'vertical',
  children: [
    <Button
      key="a"
      variant="primary-light"
      size="medium"
      iconLeft="icon-system-dashboard-line"
      className="margin-bottom-xxs">
      Dashboard
      <Badge variant="primary" border={false} className="font-size-xs margin-left-xs">
        360
      </Badge>
    </Button>,
    <Button key="b" variant="cancel-link" size="medium" iconLeft="icon-system-group-line" className="margin-bottom-xxs">
      Team
    </Button>,
    <Button
      key="c"
      variant="cancel-link"
      size="medium"
      iconLeft="icon-system-folder-line"
      className="margin-bottom-xxs">
      Projects
      <Badge variant="primary" border={false} className="font-size-xs margin-left-xs">
        12
      </Badge>
    </Button>,
    <Button
      key="d"
      variant="cancel-link"
      size="medium"
      iconLeft="icon-system-calendar-line"
      className="margin-bottom-xxs">
      Calendar
    </Button>,
    <Button
      key="e"
      variant="cancel-link"
      size="medium"
      iconLeft="icon-system-hard-drive-2-line"
      className="margin-bottom-xxs">
      Documents
    </Button>,
  ],
};
