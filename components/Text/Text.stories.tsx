import React from 'react';
import { Text } from './Text';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'General/Text',
  component: Text,
  argTypes: {
    size: { control: { type: 'select' } },
    className: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (arguments_) => <Text {...arguments_} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  size: 'h1',
  children: 'Text example',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  size: 'h2',
  children: 'Text example',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  size: 'h3',
  children: 'Text example',
};

export const Heading4 = Template.bind({});
Heading4.args = {
  size: 'h4',
  children: 'Text example',
};

export const Heading5 = Template.bind({});
Heading5.args = {
  size: 'h5',
  children: 'Text example',
};

export const SizeXXL = Template.bind({});
SizeXXL.args = {
  size: 'xxl',
  children: 'Text example',
};

export const SizeXL = Template.bind({});
SizeXL.args = {
  size: 'xl',
  children: 'Text example',
};

export const SizeL = Template.bind({});
SizeL.args = {
  size: 'l',
  children: 'Text example',
};

export const SizeM = Template.bind({});
SizeM.args = {
  size: 'm',
  children: 'Text example',
};

export const SizeS = Template.bind({});
SizeS.args = {
  size: 's',
  children: 'Text example',
};

export const SizeXS = Template.bind({});
SizeXS.args = {
  size: 'xs',
  children: 'Text example',
};

export const SizeXXS = Template.bind({});
SizeXXS.args = {
  size: 'xxs',
  children: 'Text example',
};
