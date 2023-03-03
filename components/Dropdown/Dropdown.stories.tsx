import React from 'react';
import { Dropdown } from './Dropdown';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../Button/Button';
import { Navigation } from '../Navigation/Navigation';

export default {
  title: 'Navigation/Dropdown',
  component: Dropdown,
  argTypes: {
    trigger: { control: { type: 'select' } },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (arguments_) => <Dropdown {...arguments_} />;

export const TriggerOnHover = Template.bind({});
TriggerOnHover.args = {
  trigger: 'hover',
  space: [
    <Button key="button" variant="cancel-light" iconRight="icon-system-arrow-down-s-line">
      Hover me
    </Button>,
  ],
  children: [
    <div key="content" className="padding-m">
      <div>Custom content</div>
    </div>,
  ],
};

export const TriggerOnClick = Template.bind({});
TriggerOnClick.args = {
  trigger: 'click',
  space: [
    <Button key="button" variant="cancel-light" iconRight="icon-system-arrow-down-s-line">
      Click me
    </Button>,
  ],
  children: [
    <div key="content" className="padding-m">
      <div>Custom content</div>
    </div>,
  ],
};

export const WithNavigation = Template.bind({});
WithNavigation.args = {
  trigger: 'hover',
  space: [
    <Button key="button" variant="cancel-light" iconRight="icon-system-arrow-down-s-line">
      Menu
    </Button>,
  ],
  children: [
    <div key="content" className="padding-xxs">
      <Navigation orientation="vertical">
        <Navigation.Item key="a" icon="icon-system-dashboard-line">
          Dashboard
        </Navigation.Item>
        <Navigation.Item key="b" icon="icon-system-group-line">
          Team
        </Navigation.Item>
        <Navigation.Item key="c" icon="icon-system-folder-line">
          Projects
        </Navigation.Item>
      </Navigation>
    </div>,
  ],
};
