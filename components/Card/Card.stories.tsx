import React from 'react';
import { Card } from './Card';
import { StoryFn, Meta } from '@storybook/react';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    variant: { control: { type: 'select' } },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '420px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Card>;

export const Basic = {
  args: {
    children: [
      <div key="alpha">
        <div
          className="background-size-cover background-position-center-center width-full margin-bottom-m"
          style={{ backgroundImage: 'url(https://siux.studio/images/prints/management-01.png)', height: '200px' }}
        />
        <Badge variant="primary" border={false}>
          Teams
        </Badge>
        <div className="font-size-m margin-top-xs margin-bottom-xs line-height-m">Organizing is a journey.</div>
        <div className="color-neutral-7 line-height-m margin-bottom-m">
          Organizations are the interface between your team, products and brands. Manage access and roles according to
          each brand to ensure proper privacy.
        </div>
        <Button variant="primary" iconRight="icon-system-arrow-right-line">
          Learn more
        </Button>
      </div>,
    ],
  },
};

export const Default = {
  args: {
    children: 'Card',
  },
};
