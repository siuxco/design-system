import React from 'react';
import { Icon } from './Icon';
import { StoryFn, Meta } from '@storybook/react';

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (arguments_) => (
  <div className="font-size-h3">
    <Icon {...arguments_} />
  </div>
);

export const iconViewer = Template.bind({});
iconViewer.args = {
  icon: 'icon-system-home-line',
};
