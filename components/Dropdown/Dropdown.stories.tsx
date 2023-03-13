import React from 'react';
import { Dropdown } from './Dropdown';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../Button/Button';
import { Navigation } from '../Navigation/Navigation';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    trigger: { control: { type: 'select' } },
  },
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
      Custom content
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
      Custom content
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
    <div key="content" className="padding-xs">
      <Navigation orientation="vertical">
        <Button
          key="a"
          variant="cancel-light"
          size="medium"
          iconLeft="icon-system-dashboard-line"
          className="margin-bottom-xxs">
          Dashboard
        </Button>
        <Button
          key="b"
          variant="cancel-link"
          size="medium"
          iconLeft="icon-system-group-line"
          className="margin-bottom-xxs">
          Team
        </Button>
        <Button key="c" variant="cancel-link" size="medium" iconLeft="icon-system-folder-line">
          Projects
        </Button>
      </Navigation>
    </div>,
  ],
};
