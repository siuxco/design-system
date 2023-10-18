import React from 'react';
import { Breadcrumb } from './Breadcrumb';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    separator: { control: { type: 'select' } },
  },
} as Meta<typeof Breadcrumb>;

export const Arrow = {
  args: {
    separator: 'arrow',
    children: [
      <Breadcrumb.Item key="a" icon="icon-system-home-2-fill">
        Lorem
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="b">Ipsum</Breadcrumb.Item>,
      <Breadcrumb.Item key="c">Dolor</Breadcrumb.Item>,
      <Breadcrumb.Item key="d">Sit</Breadcrumb.Item>,
      <Breadcrumb.Item key="e">Amet</Breadcrumb.Item>,
    ],
  },
};

export const Slash = {
  args: {
    separator: 'slash',
    children: [
      <Breadcrumb.Item key="a" icon="icon-system-home-2-fill">
        Lorem
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="b">Ipsum</Breadcrumb.Item>,
      <Breadcrumb.Item key="c">Dolor</Breadcrumb.Item>,
      <Breadcrumb.Item key="d">Sit</Breadcrumb.Item>,
      <Breadcrumb.Item key="e">Amet</Breadcrumb.Item>,
    ],
  },
};

export const Dash = {
  args: {
    separator: 'dash',
    children: [
      <Breadcrumb.Item key="a" icon="icon-system-home-2-fill">
        Lorem
      </Breadcrumb.Item>,
      <Breadcrumb.Item key="b">Ipsum</Breadcrumb.Item>,
      <Breadcrumb.Item key="c">Dolor</Breadcrumb.Item>,
      <Breadcrumb.Item key="d">Sit</Breadcrumb.Item>,
      <Breadcrumb.Item key="e">Amet</Breadcrumb.Item>,
    ],
  },
};
