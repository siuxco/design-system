import React from 'react';
import { Breadcrumb } from './Breadcrumb';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    separator: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (arguments_) => <Breadcrumb {...arguments_} />;

export const Arrow = Template.bind({});
Arrow.args = {
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
};

export const Slash = Template.bind({});
Slash.args = {
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
};

export const Dash = Template.bind({});
Dash.args = {
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
};
